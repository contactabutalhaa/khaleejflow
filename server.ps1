# Khaleej Flow CMS & Magazine Server using System.Net.Sockets.TcpListener
# Fully functional, crash-proof HTTP Server with REST API & Static File Delivery
$port = 8080
$root = "c:\Users\abut5\Desktop\Magazine-blog-website"
$dataPath = Join-Path $root "data\cms_database.json"
$uploadsDir = Join-Path $root "uploads"
$utf8 = [System.Text.Encoding]::UTF8

if (!(Test-Path $uploadsDir)) { New-Item -ItemType Directory -Path $uploadsDir -Force | Out-Null }

function Get-Database {
    try {
        if (Test-Path $dataPath) {
            $content = [System.IO.File]::ReadAllText($dataPath, [System.Text.Encoding]::UTF8)
            return ($content | ConvertFrom-Json)
        }
    } catch {}
    return $null
}

function Save-Database ($db) {
    try {
        $json = $db | ConvertTo-Json -Depth 10
        [System.IO.File]::WriteAllText($dataPath, $json, [System.Text.Encoding]::UTF8)
    } catch {}
}

$ip = [System.Net.IPAddress]::Any
$listener = New-Object System.Net.Sockets.TcpListener($ip, $port)

try {
    $listener.Start()
    Write-Host "Khaleej Flow Server running at http://localhost:$port/"
    Write-Host "Admin Dashboard: http://localhost:$port/admin.html"

    while ($true) {
        $client = $null
        try {
            $client = $listener.AcceptTcpClient()
            $client.ReceiveTimeout = 6000
            $client.SendTimeout = 6000
            $stream = $client.GetStream()

            $buffer = New-Object byte[] 65536
            $bytesRead = $stream.Read($buffer, 0, $buffer.Length)
            if ($bytesRead -le 0) {
                continue
            }

            $rawRequest = [System.Text.Encoding]::UTF8.GetString($buffer, 0, $bytesRead)

            # Handle Expect: 100-continue from clients (e.g. PowerShell/cURL)
            if ($rawRequest -match "(?i)Expect:\s*100-continue") {
                $c100 = [System.Text.Encoding]::UTF8.GetBytes("HTTP/1.1 100 Continue`r`n`r`n")
                $stream.Write($c100, 0, $c100.Length)
                $stream.Flush()
                if ($stream.DataAvailable) {
                    $bodyBuf = New-Object byte[] 65536
                    $bRead = $stream.Read($bodyBuf, 0, $bodyBuf.Length)
                    if ($bRead -gt 0) {
                        $rawRequest += [System.Text.Encoding]::UTF8.GetString($bodyBuf, 0, $bRead)
                    }
                }
            }

            $lines = $rawRequest -split "`r`n"
            if ($lines.Length -eq 0) {
                continue
            }

            $firstLine = $lines[0]
            $parts = $firstLine -split " "
            if ($parts.Length -lt 2) {
                continue
            }

            $method = $parts[0].ToUpper()
            $rawUrl = $parts[1]
            $path = $rawUrl.Split("?")[0].ToLower()

            # Handle CORS OPTIONS
            if ($method -eq "OPTIONS") {
                $header = "HTTP/1.1 204 No Content`r`nAccess-Control-Allow-Origin: *`r`nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`r`nAccess-Control-Allow-Headers: Content-Type, X-Auth-Token`r`nContent-Length: 0`r`nConnection: close`r`n`r`n"
                $hdrBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                $stream.Write($hdrBytes, 0, $hdrBytes.Length)
                $stream.Flush()
                continue
            }

            # Check Active Redirects
            $db = Get-Database
            $redirectHandled = $false
            if ($db -and $db.redirects) {
                $matchedRedir = $db.redirects | Where-Object { $_.status -eq "active" -and $_.source.ToLower() -eq $path }
                if ($matchedRedir) {
                    $matchedRedir.hits += 1
                    Save-Database $db
                    $code = [int]$matchedRedir.type
                    $tgt = $matchedRedir.target
                    $redirHeader = "HTTP/1.1 $code Found`r`nLocation: $tgt`r`nAccess-Control-Allow-Origin: *`r`nContent-Length: 0`r`n`r`n"
                    $rBytes = [System.Text.Encoding]::UTF8.GetBytes($redirHeader)
                    $stream.Write($rBytes, 0, $rBytes.Length)
                    continue
                }
            }

            # --- REST API ROUTES (/api/...) ---
            if ($path.StartsWith("/api/")) {
                $subPath = $path.Substring(5).TrimEnd('/')
                
                # Extract request body
                $body = ""
                $idx = $rawRequest.IndexOf("`r`n`r`n")
                if ($idx -ne -1) {
                    $body = $rawRequest.Substring($idx + 4)
                }
                $reqObj = $null
                if (![string]::IsNullOrEmpty($body)) {
                    try { $reqObj = $body | ConvertFrom-Json } catch {}
                }

                $db = Get-Database
                $apiData = $null
                $statusCode = 200

                if ($subPath -eq "database" -and $method -eq "GET") {
                    $apiData = $db
                }
                elseif ($subPath -eq "posts" -and $method -eq "GET") {
                    $apiData = $db.posts
                }
                elseif ($subPath -match "^posts/(\d+)$" -and $method -eq "GET") {
                    $pId = [int]$matches[1]
                    $apiData = ($db.posts | Where-Object { $_.id -eq $pId })
                    if (!$apiData) { $apiData = @{ error = "Not found" }; $statusCode = 404 }
                }
                elseif ($subPath -eq "categories" -and $method -eq "GET") {
                    $apiData = $db.categories
                }
                elseif ($subPath -eq "tags" -and $method -eq "GET") {
                    $apiData = $db.tags
                }
                elseif ($subPath -eq "authors" -and $method -eq "GET") {
                    $apiData = $db.authors
                }
                elseif ($subPath -eq "media" -and $method -eq "GET") {
                    $apiData = $db.media
                }
                elseif ($subPath -eq "comments" -and $method -eq "GET") {
                    $apiData = $db.comments
                }
                elseif ($subPath -eq "redirects" -and $method -eq "GET") {
                    $apiData = $db.redirects
                }
                elseif ($subPath -eq "users" -and $method -eq "GET") {
                    $apiData = $db.users
                }
                elseif ($subPath -eq "settings" -and $method -eq "GET") {
                    $apiData = $db.settings
                }
                elseif ($subPath -eq "activity" -and $method -eq "GET") {
                    $apiData = $db.activityLogs
                }
                elseif ($subPath -eq "technical-seo" -and $method -eq "GET") {
                    $apiData = $db.technicalSEO
                }
                elseif ($subPath -eq "settings" -and $method -eq "POST") {
                    $db.settings = $reqObj
                    Save-Database $db
                    $apiData = @{ success = $true }
                }
                elseif ($subPath -eq "auth/login" -and $method -eq "POST") {
                    $loginUser = ""
                    if ($reqObj -and $reqObj.username) { $loginUser = [string]$reqObj.username }
                    elseif ($reqObj -and $reqObj.email) { $loginUser = [string]$reqObj.email }
                    $loginPass = ""
                    if ($reqObj -and $reqObj.password) { $loginPass = [string]$reqObj.password }

                    $matched = $null
                    if ($db -and $db.users -and ![string]::IsNullOrEmpty($loginUser)) {
                        $uLow = $loginUser.Trim().ToLower()
                        $matched = $db.users | Where-Object { 
                            ($_.email -and $_.email.ToLower() -eq $uLow) -or 
                            ($uLow -eq "admin" -and $_.role -eq "super_admin") -or
                            ($_.username -and $_.username.ToLower() -eq $uLow)
                        } | Where-Object { $_.password -eq $loginPass } | Select-Object -First 1
                    }

                    if ($matched) {
                        $token = "kf_token_" + [System.Guid]::NewGuid().ToString("N")
                        $safeUser = @{
                            id = $matched.id
                            name = $matched.name
                            email = $matched.email
                            role = $matched.role
                            avatar = $matched.avatar
                        }
                        $apiData = @{ success = $true; token = $token; user = $safeUser }
                        $statusCode = 200
                    } else {
                        $apiData = @{ success = $false; message = "Invalid email/username or password." }
                        $statusCode = 200
                    }
                }
                elseif ($subPath -eq "auth/change-password" -and $method -eq "POST") {
                    $userId = if ($reqObj -and $reqObj.userId) { [string]$reqObj.userId } else { "" }
                    $curPass = if ($reqObj -and $reqObj.currentPassword) { [string]$reqObj.currentPassword } else { "" }
                    $newPass = if ($reqObj -and $reqObj.newPassword) { [string]$reqObj.newPassword } else { "" }
                    $reqEmail = if ($reqObj -and $reqObj.email) { [string]$reqObj.email.Trim().ToLower() } else { "" }

                    $matched = $null
                    if ($db -and $db.users) {
                        $matched = $db.users | Where-Object { 
                            (![string]::IsNullOrEmpty($userId) -and $_.id -eq $userId) -or 
                            (![string]::IsNullOrEmpty($reqEmail) -and $_.email -and $_.email.ToLower() -eq $reqEmail) 
                        } | Select-Object -First 1
                    }

                    if (!$matched) {
                        $apiData = @{ success = $false; message = "User not found." }
                        $statusCode = 200
                    } elseif ($matched.password -ne $curPass) {
                        $apiData = @{ success = $false; message = "Current password is incorrect." }
                        $statusCode = 200
                    } elseif ([string]::IsNullOrEmpty($newPass) -or $newPass.Length -lt 4) {
                        $apiData = @{ success = $false; message = "New password must be at least 4 characters long." }
                        $statusCode = 200
                    } else {
                        $matched.password = $newPass
                        # Log activity
                        $log = @{
                            id = "log-" + (Get-Date).Ticks
                            user = $matched.name
                            action = "PASSWORD_CHANGE"
                            object = "User password updated"
                            timestamp = ((Get-Date).ToString("yyyy-MM-dd HH:mm GST"))
                            ip = "127.0.0.1"
                        }
                        $logList = [System.Collections.ArrayList]@($db.activityLogs)
                        $logList.Insert(0, $log)
                        $db.activityLogs = $logList

                        Save-Database $db
                        $apiData = @{ success = $true; message = "Password changed successfully." }
                        $statusCode = 200
                    }
                }
                else {
                    $apiData = @{ status = "ok" }
                }

                $statusText = switch ($statusCode) {
                    200 { "OK" }
                    201 { "Created" }
                    204 { "No Content" }
                    400 { "Bad Request" }
                    401 { "Unauthorized" }
                    403 { "Forbidden" }
                    404 { "Not Found" }
                    500 { "Internal Server Error" }
                    default { "OK" }
                }
                $jsonStr = $apiData | ConvertTo-Json -Depth 10
                $contentBytes = [System.Text.Encoding]::UTF8.GetBytes($jsonStr)
                $responseHeader = "HTTP/1.1 $statusCode $statusText`r`nContent-Type: application/json; charset=utf-8`r`nAccess-Control-Allow-Origin: *`r`nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`r`nAccess-Control-Allow-Headers: Content-Type, X-Auth-Token`r`nContent-Length: $($contentBytes.Length)`r`nConnection: close`r`n`r`n"
                $hdrBytes = [System.Text.Encoding]::UTF8.GetBytes($responseHeader)
                $stream.Write($hdrBytes, 0, $hdrBytes.Length)
                $stream.Write($contentBytes, 0, $contentBytes.Length)
                $stream.Flush()
                continue
            }

            # --- STATIC FILE SERVING ---
            $localPath = $path.TrimStart('/')
            if ([string]::IsNullOrEmpty($localPath)) { $localPath = "index.html" }
            if ($localPath -eq "admin" -or $localPath -eq "admin/") { $localPath = "admin.html" }

            # Dynamic XML Sitemaps & Robots.txt
            if ($localPath -eq "sitemap.xml") {
                $xml = "<?xml version=""1.0"" encoding=""UTF-8""?>`n<sitemapindex xmlns=""http://www.sitemaps.org/schemas/sitemap/0.9"">`n  <sitemap><loc>http://localhost:$port/sitemap-posts.xml</loc><lastmod>$((Get-Date).ToString("yyyy-MM-dd"))</lastmod></sitemap>`n  <sitemap><loc>http://localhost:$port/sitemap-categories.xml</loc><lastmod>$((Get-Date).ToString("yyyy-MM-dd"))</lastmod></sitemap>`n</sitemapindex>"
                $cBytes = [System.Text.Encoding]::UTF8.GetBytes($xml)
                $hdr = "HTTP/1.1 200 OK`r`nContent-Type: application/xml; charset=utf-8`r`nAccess-Control-Allow-Origin: *`r`nContent-Length: $($cBytes.Length)`r`n`r`n"
                $hBytes = [System.Text.Encoding]::UTF8.GetBytes($hdr)
                $stream.Write($hBytes, 0, $hBytes.Length)
                $stream.Write($cBytes, 0, $cBytes.Length)
                continue
            }

            if ($localPath -eq "robots.txt") {
                $txt = "User-agent: *`nAllow: /`nDisallow: /admin/`nDisallow: /api/`n`nSitemap: http://localhost:$port/sitemap.xml"
                $cBytes = [System.Text.Encoding]::UTF8.GetBytes($txt)
                $hdr = "HTTP/1.1 200 OK`r`nContent-Type: text/plain; charset=utf-8`r`nAccess-Control-Allow-Origin: *`r`nContent-Length: $($cBytes.Length)`r`n`r`n"
                $hBytes = [System.Text.Encoding]::UTF8.GetBytes($hdr)
                $stream.Write($hBytes, 0, $hBytes.Length)
                $stream.Write($cBytes, 0, $cBytes.Length)
                continue
            }

            $filePath = Join-Path $root $localPath
            
            # Resolve extensionless clean URLs (e.g. /cities -> cities.html, /how-to-... -> article.html)
            if (!(Test-Path $filePath -PathType Leaf)) {
                if (Test-Path "$filePath.html" -PathType Leaf) {
                    $filePath = "$filePath.html"
                } elseif (Test-Path (Join-Path $filePath "index.html") -PathType Leaf) {
                    $filePath = Join-Path $filePath "index.html"
                } else {
                    $matchedArticle = $false
                    if ($db -and $db.posts) {
                        $foundPost = $db.posts | Where-Object { $_.slug -and $_.slug.ToLower() -eq $localPath.ToLower() }
                        if ($foundPost) { $matchedArticle = $true }
                    }
                    if ($matchedArticle -or (Test-Path (Join-Path $root "$localPath\index.html"))) {
                        $filePath = Join-Path $root "article.html"
                    }
                }
            }

            $fullPath = [System.IO.Path]::GetFullPath($filePath)
            if (!$fullPath.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
                $err = [System.Text.Encoding]::UTF8.GetBytes("403 Forbidden")
                $hdr = "HTTP/1.1 403 Forbidden`r`nContent-Length: $($err.Length)`r`n`r`n"
                $hBytes = [System.Text.Encoding]::UTF8.GetBytes($hdr)
                $stream.Write($hBytes, 0, $hBytes.Length)
                $stream.Write($err, 0, $err.Length)
                continue
            }

            if (Test-Path $filePath -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".webp" { "image/webp" }
                    ".svg"  { "image/svg+xml" }
                    ".xml"  { "application/xml; charset=utf-8" }
                    ".txt"  { "text/plain; charset=utf-8" }
                    ".ico"  { "image/x-icon" }
                    default { "application/octet-stream" }
                }
                $hdr = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nAccess-Control-Allow-Origin: *`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`n`r`n"
                $hBytes = [System.Text.Encoding]::UTF8.GetBytes($hdr)
                $stream.Write($hBytes, 0, $hBytes.Length)
                $stream.Write($bytes, 0, $bytes.Length)
                $stream.Flush()
            } else {
                $msg = [System.Text.Encoding]::UTF8.GetBytes("<!DOCTYPE html><html><head><title>404 Not Found</title></head><body style='font-family:sans-serif;text-align:center;padding:50px;'><h1>404 - Page Not Found</h1><p>The requested URL was not found.</p><a href='/'>Home</a> | <a href='/admin.html'>Admin Dashboard</a></body></html>")
                $hdr = "HTTP/1.1 404 Not Found`r`nContent-Type: text/html; charset=utf-8`r`nAccess-Control-Allow-Origin: *`r`nContent-Length: $($msg.Length)`r`nConnection: close`r`n`r`n"
                $hBytes = [System.Text.Encoding]::UTF8.GetBytes($hdr)
                $stream.Write($hBytes, 0, $hBytes.Length)
                $stream.Write($msg, 0, $msg.Length)
                $stream.Flush()
            }
        } catch {
            # Catch single request error so server never crashes
        } finally {
            if ($client) {
                try { $client.Close() } catch {}
            }
        }
    }
} finally {
    try { $listener.Stop() } catch {}
}
