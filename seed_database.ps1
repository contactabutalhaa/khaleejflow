$utf8 = [System.Text.Encoding]::UTF8

# Read articlesData from app.js if possible or construct rich seed data
$appJs = [System.IO.File]::ReadAllText("c:\Users\abut5\Desktop\Magazine-blog-website\app.js", $utf8)

# Categories
$categories = @(
    @{ id = "finance"; name = "Finance"; slug = "finance"; description = "WPS salary cards, payroll systems, banking, and remittances across the UAE and GCC"; count = 4; seoTitle = "UAE Finance, WPS Salary Cards & Banking Guides | Khaleej Flow"; seoDesc = "Verified step-by-step guides on UAE Wages Protection System, MyPay cards, Ratibi FAB balance enquiry, and LuLu Money." },
    @{ id = "transportation"; name = "Transportation"; slug = "transportation"; description = "Comprehensive public transit guides, RTA metro lines, intercity buses, and parking"; count = 4; seoTitle = "UAE Public Transportation, Dubai Metro & Bus Station Guides"; seoDesc = "Routes, operating hours, ticket fares, and NOL card balance checks across Dubai, Sharjah, and Abu Dhabi." },
    @{ id = "metro-stations"; name = "Metro Stations"; slug = "metro-stations"; parentId = "transportation"; description = "Dubai Metro Red and Green line station directories, transfer points, and train timetables"; count = 3; seoTitle = "Dubai Metro Stations Directory & Timetables | Khaleej Flow"; seoDesc = "Complete directory of Dubai Metro Red & Green line stations with facilities, interchange guides, and fares." },
    @{ id = "bus-stations"; name = "Bus Stations"; slug = "bus-stations"; parentId = "transportation"; description = "Intercity and municipal bus terminals across Dubai, Abu Dhabi, Sharjah, and Al Ain"; count = 3; seoTitle = "UAE Bus Stations & Intercity Transit Routes | Khaleej Flow"; seoDesc = "Terminal amenities, departure schedules, inter-emirate bus routes, and Nol payment rules." },
    @{ id = "automotive"; name = "Automotive"; slug = "automotive"; description = "Traffic fine checks, driver licence renewals, vehicle testing, and road safety regulations"; count = 3; seoTitle = "UAE Automotive Guides, Traffic Fines & Licence Renewal"; seoDesc = "Check Dubai, Sharjah & Abu Dhabi traffic fines by plate number, renew driver licences via TAMM, and vehicle testing tips." },
    @{ id = "real-estate"; name = "Real Estate"; slug = "real-estate"; description = "Commercial developments, residential communities, and property investments in the Gulf"; count = 3; seoTitle = "UAE Real Estate & Commercial Property Guides | Khaleej Flow"; seoDesc = "In-depth building profiles, freehold areas, rental regulations, and commercial office towers across Dubai and Abu Dhabi." },
    @{ id = "dubai"; name = "Dubai"; slug = "dubai"; description = "Neighborhood guides, community living, parks, postal codes, and municipal services in Dubai"; count = 5; seoTitle = "Dubai City & Community Living Guides | Khaleej Flow"; seoDesc = "Area guides for Al Mankhool, Business Bay, JLT, Zabeel Park, postal codes, and Dubai living essentials." },
    @{ id = "abu-dhabi"; name = "Abu Dhabi"; slug = "abu-dhabi"; description = "Capital emirate public parks, TAMM services, municipal centers, and residential hubs"; count = 4; seoTitle = "Abu Dhabi Living, Parks & Municipal Services | Khaleej Flow"; seoDesc = "Guides to Al Wathba Park, Delma Park, TAMM government portal, driving licenses, and Abu Dhabi airport transit." },
    @{ id = "sharjah"; name = "Sharjah"; slug = "sharjah"; description = "Industrial districts, prayer times, postal codes, and municipal transit in Sharjah"; count = 3; seoTitle = "Sharjah Emirates Guides & Industrial Zones | Khaleej Flow"; seoDesc = "Industrial Area 2, Al Sajaa logistics hub, Sharjah postal codes, prayer times, and municipal services." },
    @{ id = "ajman"; name = "Ajman"; slug = "ajman"; description = "Parking SMS 5188, NOC letters, driving schools, and community services in Ajman"; count = 2; seoTitle = "Ajman Municipal Guides & Parking Services | Khaleej Flow"; seoDesc = "How to pay Ajman parking via SMS 5188, obtain driving license NOC letters, and local services." },
    @{ id = "technology"; name = "Technology"; slug = "technology"; description = "Telecom packages, 5G networks, IT certifications, and digital apps in the UAE"; count = 2; seoTitle = "Gulf Tech, Telecom Offers & Digital Services | Khaleej Flow"; seoDesc = "Etisalat and du mobile packages, 53GB national day data activations, and digital governance tools." },
    @{ id = "lifestyle"; name = "Lifestyle"; slug = "lifestyle"; description = "Health, skincare, event emcees, dining, and family entertainment in the Emirates"; count = 3; seoTitle = "Khaleej Lifestyle, Health & Living Insights | Khaleej Flow"; seoDesc = "Healthcare clinics, cardiovascular wellness, skincare routines in UAE climate, and family entertainment." }
)

# Tags
$tags = @(
    @{ id = "mypay"; name = "MyPay Card"; slug = "mypay-card"; count = 4 },
    @{ id = "lulu-money"; name = "LuLu Money"; slug = "lulu-money"; count = 3 },
    @{ id = "wps"; name = "Wages Protection System"; slug = "wages-protection-system"; count = 5 },
    @{ id = "nol-card"; name = "NOL Card"; slug = "nol-card"; count = 4 },
    @{ id = "dubai-metro"; name = "Dubai Metro"; slug = "dubai-metro"; count = 5 },
    @{ id = "traffic-fines"; name = "Traffic Fines"; slug = "traffic-fines"; count = 4 },
    @{ id = "tamm"; name = "TAMM Abu Dhabi"; slug = "tamm-abu-dhabi"; count = 3 },
    @{ id = "ratibi"; name = "Ratibi FAB"; slug = "ratibi-fab"; count = 3 },
    @{ id = "parks"; name = "Public Parks"; slug = "public-parks"; count = 4 },
    @{ id = "postal-codes"; name = "Postal Codes"; slug = "postal-codes"; count = 3 },
    @{ id = "prayer-times"; name = "Prayer Times"; slug = "prayer-times"; count = 2 },
    @{ id = "business-bay"; name = "Business Bay"; slug = "business-bay"; count = 2 }
)

# Authors
$authors = @(
    @{
        id = "tariq-al-mansoor"
        name = "Tariq Al-Mansoor"
        title = "Senior Property & Urban Infrastructure Writer"
        bureau = "Dubai Bureau"
        email = "tariq.mansoor@khaleejflow.ae"
        avatar = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
        bio = "12+ years documenting UAE master communities, residential tower handovers, and public transit connectivity across Dubai and Abu Dhabi."
        articlesCount = 48
        role = "Senior Writer"
        social = @{ twitter = "@tariq_dxb"; linkedin = "tariq-al-mansoor" }
        specialties = @("Dubai Real Estate", "Metro Stations", "Area Guides", "Business Bay")
    },
    @{
        id = "reem-al-ghamdi"
        name = "Reem Al-Ghamdi"
        title = "Gulf Economy & Financial Services Reporter"
        bureau = "Riyadh & Abu Dhabi Bureaus"
        email = "reem.ghamdi@khaleejflow.ae"
        avatar = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80"
        bio = "Specializes in UAE banking systems, digital payroll platforms, salary cards (Ratibi, FAB, MyPay), and regional financial regulations."
        articlesCount = 62
        role = "Lead Financial Reporter"
        social = @{ twitter = "@reem_finance"; linkedin = "reem-al-ghamdi" }
        specialties = @("Salary Cards", "Finance", "Banking", "Saudi Arabia", "Corporate Tax")
    },
    @{
        id = "faisal-al-hashimi"
        name = "Faisal Al-Hashimi"
        title = "Public Transit & City Parks Correspondent"
        bureau = "Abu Dhabi & Sharjah Bureaus"
        email = "faisal.hashimi@khaleejflow.ae"
        avatar = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80"
        bio = "Focuses on municipal transit networks, RTA bus lines, SMS parking schemes, and community green spaces across the Northern Emirates."
        articlesCount = 37
        role = "Urban Correspondent"
        social = @{ twitter = "@faisal_transit"; linkedin = "faisal-al-hashimi" }
        specialties = @("Bus Stations", "Parking Guides", "Sharjah", "Abu Dhabi Parks", "Ajman")
    },
    @{
        id = "layla-al-nuaimi"
        name = "Dr. Layla Al-Nuaimi"
        title = "Health Policy & Consumer Affairs Analyst"
        bureau = "Dubai Media City Bureau"
        email = "layla.nuaimi@khaleejflow.ae"
        avatar = "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80"
        bio = "Clinical researcher providing medically verified reports on GCC healthcare options, medical exams, licensing, and consumer welfare."
        articlesCount = 29
        role = "Senior Analyst"
        social = @{ twitter = "@drlayla_uae"; linkedin = "dr-layla-al-nuaimi" }
        specialties = @("Healthcare", "Medical Licensing", "Automotive", "Consumer Advice")
    }
)

# Users & Roles (RBAC)
$users = @(
    @{
        id = "usr-1"
        name = "Mustafa Al-Khalidi"
        email = "admin@khaleejflow.ae"
        role = "super_admin"
        status = "active"
        avatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
        registeredDate = "2025-01-10"
        lastLogin = "2026-11-17 14:15 GST"
        postsCount = 14
    },
    @{
        id = "usr-2"
        name = "Fatima Al-Zahra"
        email = "fatima@khaleejflow.ae"
        role = "administrator"
        status = "active"
        avatar = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80"
        registeredDate = "2025-03-12"
        lastLogin = "2026-11-17 11:30 GST"
        postsCount = 8
    },
    @{
        id = "usr-3"
        name = "Tariq Al-Mansoor"
        email = "tariq@khaleejflow.ae"
        role = "editor"
        status = "active"
        avatar = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
        registeredDate = "2025-02-15"
        lastLogin = "2026-11-16 18:20 GST"
        postsCount = 48
    },
    @{
        id = "usr-4"
        name = "Reem Al-Ghamdi"
        email = "reem@khaleejflow.ae"
        role = "author"
        status = "active"
        avatar = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
        registeredDate = "2025-04-01"
        lastLogin = "2026-11-17 09:45 GST"
        postsCount = 62
    },
    @{
        id = "usr-5"
        name = "Zaid Al-Bader"
        email = "zaid@khaleejflow.ae"
        role = "contributor"
        status = "active"
        avatar = "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80"
        registeredDate = "2025-06-20"
        lastLogin = "2026-11-15 16:10 GST"
        postsCount = 3
    }
)

# Website Settings
$settings = @{
    siteName = "Khaleej Flow"
    tagline = "The Gulf's Leading News, Utilities, Transit & Lifestyle Journal"
    siteUrl = "https://khaleejflow.com"
    adminEmail = "editorial@khaleejflow.ae"
    logoUrl = "/logo.svg"
    faviconUrl = "/favicon.ico"
    defaultSeoTitle = "Khaleej Flow — Gulf News, UAE Utilities, Transit Hubs & Living Insights"
    defaultMetaDescription = "Khaleej Flow is the premier digital utility portal providing verified guides on UAE salary cards, Dubai Metro, traffic fines, driving license renewal, and real estate."
    defaultOgImage = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&auto=format&fit=crop&q=80"
    twitterHandle = "@KhaleejFlow"
    organizationName = "Khaleej Flow Digital Media Network FZ-LLC"
    organizationAddress = "Boutique Villa 04, Dubai Media City, PO Box 502840, Dubai, UAE"
    contactPhone = "+971 4 429 8800"
    timezone = "Asia/Dubai (GST, UTC+4)"
    headerCode = "<!-- Khaleej Flow Analytics & Meta -->"
    footerCode = "<!-- Footer tracking scripts -->"
    perPage = 10
    enableComments = $true
    moderateComments = $true
    enableUserRegistration = $false
}

# Redirects
$redirects = @(
    @{ id = "red-1"; source = "/mypay"; target = "/how-to-send-money-home-using-mypay-card-and-lulu-money/"; type = 301; hits = 1420; status = "active"; createdAt = "2026-10-01" },
    @{ id = "red-2"; source = "/nol-balance"; target = "/online-balance-enquiry-uae/"; type = 301; hits = 980; status = "active"; createdAt = "2026-10-05" },
    @{ id = "red-3"; source = "/dubai-fines"; target = "/dubai-traffic-fine-check-by-plate-number/"; type = 301; hits = 2150; status = "active"; createdAt = "2026-10-12" },
    @{ id = "red-4"; source = "/parks/al-wathba"; target = "/al-wathba-park-abu-dhabi/"; type = 302; hits = 310; status = "active"; createdAt = "2026-11-01" }
)

# Media items
$media = @(
    @{
        id = "med-1"
        filename = "mypay-lulu-money-transfer.jpg"
        url = "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80"
        title = "MyPay Card and LuLu Money Mobile Remittance"
        alt = "UAE worker sending funds home using MyPay card and LuLu Money app"
        caption = "Mobile remittance corridors via WPS-compliant salary cards in the UAE"
        description = "High resolution illustration of mobile banking and LuLu Money transfer interface."
        fileSize = "248 KB"
        dimensions = "1200 x 800"
        mimeType = "image/jpeg"
        uploadedAt = "2026-11-12"
        webpConverted = $true
        webpSavings = "38%"
    },
    @{
        id = "med-2"
        filename = "al-ain-oasis-weather.jpg"
        url = "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80"
        title = "Al Ain Oasis and Jebel Hafeet Climate"
        alt = "Al Ain Oasis greenery with clear blue skies and desert background"
        caption = "Al Ain microclimate and seasonal temperatures"
        description = "Scenic landscape of Al Ain garden city."
        fileSize = "312 KB"
        dimensions = "1200 x 800"
        mimeType = "image/jpeg"
        uploadedAt = "2026-11-12"
        webpConverted = $true
        webpSavings = "41%"
    },
    @{
        id = "med-3"
        filename = "dubai-metro-station-terminal.jpg"
        url = "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80"
        title = "Dubai Metro Red Line Interchange"
        alt = "Modern Dubai Metro elevated train moving past Sheikh Zayed Road skyline"
        caption = "Dubai RTA public transit network connecting major commercial hubs"
        description = "Iconic view of Dubai public transit infrastructure."
        fileSize = "420 KB"
        dimensions = "1920 x 1080"
        mimeType = "image/jpeg"
        uploadedAt = "2026-11-10"
        webpConverted = $true
        webpSavings = "36%"
    },
    @{
        id = "med-4"
        filename = "traffic-fine-check-police-car.jpg"
        url = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80"
        title = "UAE Highway Traffic Safety and Patrol"
        alt = "Luxury sports vehicle driving on UAE highway under evening city lights"
        caption = "Electronic radar and traffic fine verification in Dubai and Abu Dhabi"
        description = "Automotive safety and motorist regulations in the Emirates."
        fileSize = "290 KB"
        dimensions = "1200 x 800"
        mimeType = "image/jpeg"
        uploadedAt = "2026-11-04"
        webpConverted = $true
        webpSavings = "45%"
    }
)

# Comments
$comments = @(
    @{
        id = "com-1"
        postId = 1
        postTitle = "How to Send Money Home Using MyPay Card and LuLu Money"
        authorName = "Mohammed Imran"
        authorEmail = "m.imran@gmail.com"
        authorIp = "94.200.12.84"
        content = "Very helpful guide! I linked my MyPay card yesterday and received the money in Pakistan within 20 minutes."
        status = "approved"
        createdAt = "2026-11-13 10:24 GST"
        reply = "Glad this guide helped you Mohammed! Let us know if you need assistance with exchange rate alerts."
    },
    @{
        id = "com-2"
        postId = 3
        postTitle = "UAE Online Salary & Balance Enquiry: Complete WPS Guide"
        authorName = "Arthur Santos"
        authorEmail = "arthur.s@outlook.com"
        authorIp = "86.96.241.11"
        content = "Can I check my Ratibi FAB balance through the FAB mobile app without entering my card number every time?"
        status = "approved"
        createdAt = "2026-11-14 15:18 GST"
        reply = "Yes Arthur! You can link your Ratibi card into Payit or FAB Mobile by biometric fingerprint for instant balance checks."
    },
    @{
        id = "com-3"
        postId = 2
        postTitle = "Al Ain Weather & Climate Guide"
        authorName = "Spam Bot 3000"
        authorEmail = "promo@crypto-invest-fast.biz"
        authorIp = "185.220.101.5"
        content = "Buy cheap crypto tokens today and get 500% bonus guaranteed click here!"
        status = "spam"
        createdAt = "2026-11-15 02:40 GST"
        reply = ""
    },
    @{
        id = "com-4"
        postId = 4
        postTitle = "dnata Careers UAE: Recruitment Process & Salary Expectations"
        authorName = "Sara Kabbani"
        authorEmail = "sara.kabbani@yahoo.com"
        authorIp = "94.200.55.90"
        content = "Does dnata offer airport transit ground handling internships for UAE fresh graduates?"
        status = "pending"
        createdAt = "2026-11-16 08:35 GST"
        reply = ""
    }
)

# Activity Logs
$activityLogs = @(
    @{ id = "log-1"; user = "Mustafa Al-Khalidi"; action = "UPDATE_SETTINGS"; object = "Website General Settings"; timestamp = "2026-11-17 13:45 GST"; ip = "192.168.1.1" },
    @{ id = "log-2"; user = "Reem Al-Ghamdi"; action = "PUBLISH_POST"; object = "How to Send Money Home Using MyPay Card"; timestamp = "2026-11-16 11:20 GST"; ip = "94.200.12.84" },
    @{ id = "log-3"; user = "Tariq Al-Mansoor"; action = "UPDATE_SEO"; object = "Dubai Metro Stations Hub Page"; timestamp = "2026-11-15 16:50 GST"; ip = "86.96.241.11" },
    @{ id = "log-4"; user = "Fatima Al-Zahra"; action = "APPROVE_COMMENT"; object = "Comment by Mohammed Imran"; timestamp = "2026-11-14 10:30 GST"; ip = "192.168.1.5" },
    @{ id = "log-5"; user = "Mustafa Al-Khalidi"; action = "GENERATE_SITEMAP"; object = "XML Sitemap Index"; timestamp = "2026-11-13 09:15 GST"; ip = "192.168.1.1" }
)

# Technical SEO data
$technicalSEO = @{
    robotsTxt = "User-agent: *`nAllow: /`nDisallow: /admin/`nDisallow: /api/`nDisallow: /*?search=`n`nSitemap: https://khaleejflow.com/sitemap.xml`nSitemap: https://khaleejflow.com/sitemap-posts.xml`nSitemap: https://khaleejflow.com/sitemap-images.xml"
    sitemaps = @(
        @{ name = "sitemap.xml"; type = "Index"; url = "https://khaleejflow.com/sitemap.xml"; lastModified = "2026-11-17"; status = "200 OK"; entries = 5 },
        @{ name = "sitemap-posts.xml"; type = "Posts"; url = "https://khaleejflow.com/sitemap-posts.xml"; lastModified = "2026-11-17"; status = "200 OK"; entries = 20 },
        @{ name = "sitemap-categories.xml"; type = "Categories"; url = "https://khaleejflow.com/sitemap-categories.xml"; lastModified = "2026-11-17"; status = "200 OK"; entries = 12 },
        @{ name = "sitemap-pages.xml"; type = "Pages"; url = "https://khaleejflow.com/sitemap-pages.xml"; lastModified = "2026-11-17"; status = "200 OK"; entries = 11 },
        @{ name = "sitemap-images.xml"; type = "Images"; url = "https://khaleejflow.com/sitemap-images.xml"; lastModified = "2026-11-17"; status = "200 OK"; entries = 24 }
    )
    crawlErrors404 = @(
        @{ url = "/old-salary-check"; hits = 42; referrer = "google.ae"; firstDetected = "2026-11-02"; resolved = $false },
        @{ url = "/dxb-metro-fares-2024"; hits = 28; referrer = "bing.com"; firstDetected = "2026-11-05"; resolved = $false },
        @{ url = "/ajman-parking-sms-code"; hits = 19; referrer = "direct"; firstDetected = "2026-11-10"; resolved = $false }
    )
    coreWebVitals = @{
        lcp = @{ value = "1.8s"; status = "Good"; target = "< 2.5s" }
        fid = @{ value = "38ms"; status = "Good"; target = "< 100ms" }
        cls = @{ value = "0.02"; status = "Good"; target = "< 0.1" }
        inp = @{ value = "62ms"; status = "Good"; target = "< 200ms" }
        ttfb = @{ value = "180ms"; status = "Good"; target = "< 800ms" }
    }
}

# Write out temporary JSON
$db = @{
    settings = $settings
    categories = $categories
    tags = $tags
    authors = $authors
    users = $users
    redirects = $redirects
    media = $media
    comments = $comments
    activityLogs = $activityLogs
    technicalSEO = $technicalSEO
    posts = @()
}

$dbJson = $db | ConvertTo-Json -Depth 10
[System.IO.File]::WriteAllText("c:\Users\abut5\Desktop\Magazine-blog-website\data\cms_database.json", $dbJson, $utf8)
Write-Host "Base database generated."
