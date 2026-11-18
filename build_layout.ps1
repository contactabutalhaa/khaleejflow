$utf8 = [System.Text.Encoding]::UTF8

$header = [System.IO.File]::ReadAllText("c:\Users\abut5\Desktop\Magazine-blog-website\header_fragment.html", $utf8)
$footer = [System.IO.File]::ReadAllText("c:\Users\abut5\Desktop\Magazine-blog-website\footer_fragment.html", $utf8)

$hubFiles = @(
    "cities.html",
    "transportation.html",
    "business.html",
    "finance.html",
    "lifestyle.html",
    "essential-tools.html",
    "category.html",
    "contact.html",
    "disclaimer.html",
    "privacy-policy.html",
    "write-for-us.html"
)

foreach ($file in $hubFiles) {
    $path = "c:\Users\abut5\Desktop\Magazine-blog-website\$file"
    if (Test-Path $path) {
        $content = [System.IO.File]::ReadAllText($path, $utf8)
        $content = $content.Replace('<div id="header-placeholder"></div>', $header)
        $content = $content.Replace('<div id="footer-placeholder"></div>', $footer)
        [System.IO.File]::WriteAllText($path, $content, $utf8)
        Write-Host "Updated $file"
    }
}

# Update index.html
$indexPath = "c:\Users\abut5\Desktop\Magazine-blog-website\index.html"
$indexContent = [System.IO.File]::ReadAllText($indexPath, $utf8)
# Replace footer
$footerRegex = '(?s)<!-- FOOTER \(Identical on all pages\) -->\s*<footer.*?</footer>'
$indexContent = [System.Text.RegularExpressions.Regex]::Replace($indexContent, $footerRegex, $footer)

# Update Section Link Buttons in index.html to real hyperlinks
$indexContent = $indexContent.Replace(
    '<button onclick="handleNavCategory(''Finance'')" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-display">
        <span>View All Finance</span>
        <span>&rarr;</span>
      </button>',
    '<a href="finance.html" class="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 font-display">
        <span>View All Finance</span>
        <span>&rarr;</span>
      </a>'
)

$indexContent = $indexContent.Replace(
    '<button onclick="handleNavCategory(''Metro Stations'')" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-display">
        <span>Transit Hubs</span>
        <span>&rarr;</span>
      </button>',
    '<a href="transportation.html" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-display">
        <span>Transit Hubs</span>
        <span>&rarr;</span>
      </a>'
)

$indexContent = $indexContent.Replace(
    '<button onclick="handleNavCategory(''Automotive'')" class="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 font-display">
        <span>Motorist Guides</span>
        <span>&rarr;</span>
      </button>',
    '<a href="lifestyle.html" class="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1 font-display">
        <span>Motorist Guides</span>
        <span>&rarr;</span>
      </a>'
)

$indexContent = $indexContent.Replace(
    '<button onclick="handleNavCategory(''Real Estate'')" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-display">
        <span>Property Hub</span>
        <span>&rarr;</span>
      </button>',
    '<a href="business.html" class="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-display">
        <span>Property Hub</span>
        <span>&rarr;</span>
      </a>'
)

$indexContent = $indexContent.Replace(
    '<button onclick="handleNavCategory(''Dubai'')" class="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 font-display">
        <span>Explore Areas</span>
        <span>&rarr;</span>
      </button>',
    '<a href="cities.html" class="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 font-display">
        <span>Explore Areas</span>
        <span>&rarr;</span>
      </a>'
)

[System.IO.File]::WriteAllText($indexPath, $indexContent, $utf8)
Write-Host "Updated index.html"

# Update article.html
$articlePath = "c:\Users\abut5\Desktop\Magazine-blog-website\article.html"
$articleContent = [System.IO.File]::ReadAllText($articlePath, $utf8)
$articleContent = [System.Text.RegularExpressions.Regex]::Replace($articleContent, $footerRegex, $footer)
[System.IO.File]::WriteAllText($articlePath, $articleContent, $utf8)
Write-Host "Updated article.html"
