/**
 * KhaleejFlow - The Gulf's Modern News & Utility Guide
 * Covering Dubai, Abu Dhabi, Sharjah, Ajman, Saudi Arabia, Bahrain, Finance, Transport & Real Estate
 */

// Authors Database (Clean editorial team without any EEAT text)
const authorsData = [
  {
    id: "tariq-al-mansoor",
    name: "Tariq Al-Mansoor",
    title: "Senior Property & Urban Infrastructure Writer",
    bureau: "Dubai Bureau",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&auto=format&fit=crop&q=80",
    bio: "12+ years documenting UAE master communities, residential tower handovers, and public transit connectivity across Dubai and Abu Dhabi.",
    articlesCount: 48,
    specialties: ["Dubai Real Estate", "Metro Stations", "Area Guides", "Business Bay"]
  },
  {
    id: "reem-al-ghamdi",
    name: "Reem Al-Ghamdi",
    title: "Gulf Economy & Financial Services Reporter",
    bureau: "Riyadh & Abu Dhabi Bureaus",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&auto=format&fit=crop&q=80",
    bio: "Specializes in UAE banking systems, digital payroll platforms, salary cards (Ratibi, FAB, MyPay), and regional financial regulations.",
    articlesCount: 62,
    specialties: ["Salary Cards", "Finance", "Banking", "Saudi Arabia", "Corporate Tax"]
  },
  {
    id: "faisal-al-hashimi",
    name: "Faisal Al-Hashimi",
    title: "Public Transit & City Parks Correspondent",
    bureau: "Abu Dhabi & Sharjah Bureaus",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&auto=format&fit=crop&q=80",
    bio: "Guides residents and tourists through UAE municipal parks, RTA bus networks, intercity coaches, and family leisure attractions.",
    articlesCount: 39,
    specialties: ["Bus Stations", "City Parks", "Sharjah", "Ajman", "Public Transit"]
  },
  {
    id: "kareem-mansoor",
    name: "Kareem Mansoor",
    title: "Automotive & Licensing Specialist",
    bureau: "Dubai Bureau",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=160&auto=format&fit=crop&q=80",
    bio: "Covers RTA traffic fine procedures, driving license renewals, vehicle testing centers, and automotive regulations across the seven emirates.",
    articlesCount: 35,
    specialties: ["Traffic Fines", "Automotive", "Driving License", "Vehicle Testing"]
  }
];

// Comprehensive UAE & Khaleej Articles Database matching khaleejedge.com
const articlesData = [
  // --- 1. FINANCE & SALARY CARDS ---
  {
    id: 1,
    slug: "how-to-send-money-home-using-mypay-card-and-lulu-money",
    title: "How to Send Money Home Using MyPay Card and LuLu Money: Step-by-Step UAE Guide",
    category: "Finance",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "48.2k",
    readTime: "5 min read",
    date: "Nov 12, 2026",
    authorId: "reem-al-ghamdi",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&auto=format&fit=crop&q=80",
    excerpt: "Learn how UAE workers can seamlessly link their MyPay salary card with the LuLu Money app to transfer funds home quickly with low exchange fees.",
    toc: [
      { id: "overview", title: "1. Overview of MyPay Card & LuLu Money" },
      { id: "requirements", title: "2. Requirements to Transfer Funds" },
      { id: "step-by-step", title: "3. Step-by-Step Mobile Transfer Process" },
      { id: "fees-limits", title: "4. Exchange Rates, Transfer Fees & Limits" },
      { id: "customer-support", title: "5. Customer Support & Helpline Numbers" }
    ],
    content: `
      <p class="lead">
        For hundreds of thousands of expatriate workers across Dubai, Abu Dhabi, and Sharjah, the MyPay salary card issued under the UAE Wages Protection System (WPS) provides a secure, digital payroll method. By linking your MyPay card directly to the LuLu Money remittance app, sending money home to India, Pakistan, the Philippines, Bangladesh, or Egypt is straightforward and cost-effective.
      </p>

      <h2 id="overview">1. Overview of MyPay Card & LuLu Money</h2>
      <p>
        MyPay Card operates as a prepaid payroll card linked to local banking networks. LuLu Exchange and the LuLu Money app enable cardholders to execute international remittances directly from their smartphone without waiting in long branch queues on payday.
      </p>

      <h2 id="requirements">2. Requirements to Transfer Funds</h2>
      <ul>
        <li>Active MyPay Card with valid 16-digit card number and PIN</li>
        <li>Registered UAE mobile number linked to your card for OTP verification</li>
        <li>Valid Emirates ID registered on the LuLu Money app</li>
        <li>Beneficiary bank account details or cash pickup recipient information</li>
      </ul>

      <h2 id="step-by-step">3. Step-by-Step Mobile Transfer Process</h2>
      <ol>
        <li>Download the LuLu Money App from Google Play or Apple App Store.</li>
        <li>Log in using your registered mobile number and Emirates ID biometric verification.</li>
        <li>Select 'Send Money' and enter the amount you wish to transfer.</li>
        <li>Choose payment method as 'Debit / WPS Payroll Card'.</li>
        <li>Enter your MyPay card number, expiry date, and CVV.</li>
        <li>Authenticate the transaction with the one-time password (OTP) sent via SMS.</li>
        <li>Save and download your transaction receipt with the tracking number (MTCN).</li>
      </ol>

      <h2 id="fees-limits">4. Exchange Rates, Transfer Fees & Limits</h2>
      <p>
        LuLu Money provides real-time competitive exchange rates updated every 60 seconds. Standard transfer charges range from AED 10 to AED 20 depending on the corridor. The daily transfer limit for standard WPS payroll accounts is capped at AED 10,000.
      </p>

      <h2 id="customer-support">5. Customer Support & Helpline Numbers</h2>
      <p>
        If your transaction fails or the OTP is delayed, contact LuLu Exchange customer care toll-free at 600 522 224, or visit any LuLu Exchange branch across the UAE.
      </p>
    `,
    tags: ["MyPayCard", "LuLuMoney", "Remittance", "Finance", "UAEBanking", "WPS"]
  },
  {
    id: 2,
    slug: "online-balance-enquiry-uae",
    title: "Online Balance Enquiry in UAE: Complete Guide for All Major Bank & Salary Cards",
    category: "Finance",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "52.4k",
    readTime: "4 min read",
    date: "Nov 12, 2026",
    authorId: "reem-al-ghamdi",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    excerpt: "How to check your salary and account balance online in the UAE across FAB Ratibi, Emirates NBD, LuLu, Al Ansari, and CBD cards.",
    toc: [
      { id: "salary-card-check", title: "1. Checking WPS Salary Card Balance" },
      { id: "fab-ratibi", title: "2. FAB Ratibi Online Balance Portal" },
      { id: "atm-inquiry", title: "3. Free ATM Balance Enquiry Guidelines" }
    ],
    content: `
      <p class="lead">
        Managing your finances and verifying payroll deposits in the UAE has never been simpler. Most financial institutions and exchange houses provide free online balance checking portals requiring only your card number and date of birth.
      </p>
      <h2 id="salary-card-check">1. Checking WPS Salary Card Balance</h2>
      <p>
        WPS payroll cards including Ratibi, C3 Pay, and Al Ansari PayPlus do not require a full bank login. Users can check available balances via official web portals using the last 2 digits of the card and national ID.
      </p>
      <h2 id="fab-ratibi">2. FAB Ratibi Online Balance Portal</h2>
      <p>
        Cardholders can visit the First Abu Dhabi Bank prepaid portal, enter their 16-digit Ratibi card number, and immediately review recent salary credits and debits without fees.
      </p>
      <h2 id="atm-inquiry">3. Free ATM Balance Enquiry Guidelines</h2>
      <p>
        Under UAE Central Bank regulations, customers can perform balance enquiries on their issuing bank's ATM network free of charge. Cross-network ATM enquiries carry a nominal AED 1 fee.
      </p>
    `,
    tags: ["OnlineBalance", "UAEBanking", "Finance", "Ratibi", "SalaryCheck"]
  },
  {
    id: 3,
    slug: "ratibi-salary-check-uae",
    title: "Ratibi Salary Check in UAE: How to Check FAB Ratibi Card Balance Online",
    category: "Finance",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "64.1k",
    readTime: "4 min read",
    date: "Oct 28, 2026",
    authorId: "reem-al-ghamdi",
    imageUrl: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&auto=format&fit=crop&q=80",
    excerpt: "Quick and simple steps to check your First Abu Dhabi Bank (FAB) Ratibi prepaid card balance online without visiting an ATM or bank branch.",
    toc: [
      { id: "ratibi-intro", title: "1. What is the FAB Ratibi Card?" },
      { id: "online-steps", title: "2. How to Check Balance Online (Step-by-Step)" },
      { id: "payit-app", title: "3. Checking Balance via Payit Mobile App" }
    ],
    content: `
      <p class="lead">
        The Ratibi prepaid card issued by First Abu Dhabi Bank (FAB) is the most widely held salary card for employees earning up to AED 5,000 in the UAE. Checking your available salary online takes less than a minute.
      </p>
      <h2 id="ratibi-intro">1. What is the FAB Ratibi Card?</h2>
      <p>
        Designed under the UAE Ministry of Human Resources and Emiratisation (MOHRE) guidelines, Ratibi provides workers with direct salary access without minimum balance requirements.
      </p>
      <h2 id="online-steps">2. How to Check Balance Online (Step-by-Step)</h2>
      <ol>
        <li>Visit the official FAB Prepaid Card Services portal online.</li>
        <li>Enter the last 2 digits of your Ratibi card number.</li>
        <li>Enter your 16-digit card number.</li>
        <li>Click 'Go' to view your current available balance and latest transactions.</li>
      </ol>
      <h2 id="payit-app">3. Checking Balance via Payit Mobile App</h2>
      <p>
        Link your Ratibi card directly into the Payit digital wallet app to check balance in real-time, pay utility bills, and send mobile money home instantly.
      </p>
    `,
    tags: ["Ratibi", "FAB", "SalaryCheck", "Finance", "Payit"]
  },
  {
    id: 4,
    slug: "how-to-check-nol-card-balance-online-in-dubai",
    title: "How to Check NOL Card Balance Online in Dubai: RTA App, SMS & Metro Kiosks",
    category: "Finance",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "58.9k",
    readTime: "4 min read",
    date: "Oct 31, 2026",
    authorId: "tariq-al-mansoor",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
    excerpt: "Everything you need to know about checking your Dubai RTA NOL card balance online, through the nol Pay app, SMS, or at any metro ticket machine.",
    toc: [
      { id: "nol-overview", title: "1. Understanding NOL Card Balance Requirements" },
      { id: "rta-website", title: "2. Check NOL Balance on RTA Official Website" },
      { id: "nol-pay-app", title: "3. Instant NFC Balance Check on nol Pay App" },
      { id: "minimum-balance", title: "4. Minimum Balance Required for Metro & Bus" }
    ],
    content: `
      <p class="lead">
        Whether you use a Silver, Gold, Blue, or Red NOL card to commute on the Dubai Metro, RTA public buses, or Dubai Water Taxis, maintaining adequate balance prevents gate rejections and unexpected transit fines.
      </p>
      <h2 id="nol-overview">1. Understanding NOL Card Balance Requirements</h2>
      <p>
        Your 10-digit NOL Tag ID is printed on the reverse side of your card. You will need this number for all online enquiries.
      </p>
      <h2 id="rta-website">2. Check NOL Balance on RTA Official Website</h2>
      <p>
        Navigate to rta.ae, select 'Check nol Balance', enter your 10-digit Tag ID, and complete the security captcha. Your active balance will display immediately.
      </p>
      <h2 id="nol-pay-app">3. Instant NFC Balance Check on nol Pay App</h2>
      <p>
        On NFC-enabled smartphones, open the official nol Pay app and hold your card against the back of your phone to view your balance and recharge with zero transaction delay.
      </p>
      <h2 id="minimum-balance">4. Minimum Balance Required for Metro & Bus</h2>
      <p>
        Remember that a minimum balance of AED 7.50 is mandatory to enter any Dubai Metro station or board an RTA public bus.
      </p>
    `,
    tags: ["NOLCard", "RTA", "DubaiMetro", "Transport", "Finance"]
  },

  // --- 2. METRO & BUS STATIONS ---
  {
    id: 5,
    slug: "union-metro-station-dubai-guide-routes-and-travel-tips",
    title: "Union Metro Station Dubai Guide: Red & Green Line Transfer, Timings & Exits",
    category: "Metro Stations",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "43.1k",
    readTime: "5 min read",
    date: "Jun 04, 2026",
    authorId: "tariq-al-mansoor",
    imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop&q=80",
    excerpt: "Complete guide to Dubai's busiest underground interchange station: Red and Green line transfers, operating hours, ticket offices, and Deira attractions.",
    toc: [
      { id: "station-layout", title: "1. Station Layout & Line Interchange" },
      { id: "train-timings", title: "2. First and Last Train Operating Hours" },
      { id: "station-exits", title: "3. Surrounding Landmarks & Station Exits" }
    ],
    content: `
      <p class="lead">
        Union Metro Station in Deira is one of the two major transfer hubs where passengers can switch between the Red Line and Green Line without leaving the paid area.
      </p>
      <h2 id="station-layout">1. Station Layout & Line Interchange</h2>
      <p>
        Spread across multiple subterranean levels, Union features wide pedestrian concourses connecting the Red Line (serving Airport, Downtown, and Marina) with the Green Line (serving Creek, Healthcare City, and Dubai Souqs).
      </p>
      <h2 id="train-timings">2. First and Last Train Operating Hours</h2>
      <p>
        Trains run Monday to Thursday from 05:00 AM to midnight, Friday from 05:00 AM to 01:00 AM the following morning, and Sunday from 08:00 AM to midnight.
      </p>
      <h2 id="station-exits">3. Surrounding Landmarks & Station Exits</h2>
      <p>
        Direct pedestrian exits lead to Al Ghurair Centre, Union Park, Deira Creek waterside, and multiple governmental administrative offices.
      </p>
    `,
    tags: ["UnionMetro", "MetroStations", "DubaiTransit", "RTA", "Deira"]
  },
  {
    id: 6,
    slug: "burjuman-metro-station-dubai",
    title: "BurJuman Metro Station Dubai: Interchange Guide, First & Last Train Timings",
    category: "Metro Stations",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "39.6k",
    readTime: "4 min read",
    date: "Jul 01, 2026",
    authorId: "tariq-al-mansoor",
    imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80",
    excerpt: "Everything you need to navigate BurJuman Metro Station, including line switching, shopping mall connections, and feeder bus lines.",
    toc: [
      { id: "burjuman-hub", title: "1. The Bur Dubai Interchange" },
      { id: "mall-access", title: "2. Direct BurJuman Mall Access" }
    ],
    content: `
      <p class="lead">
        Situated in the historic heart of Bur Dubai, BurJuman Metro Station serves as the second vital interchange connecting the Red and Green lines under Khalid Bin Al Waleed Road.
      </p>
      <h2 id="burjuman-hub">1. The Bur Dubai Interchange</h2>
      <p>
        Renowned for its distinctive marine-themed jellyfish chandelier architecture, BurJuman handles tens of thousands of daily commuters between Old Dubai and the southern financial corridors.
      </p>
      <h2 id="mall-access">2. Direct BurJuman Mall Access</h2>
      <p>
        Exit 3 links directly to BurJuman Centre shopping mall, providing air-conditioned access to retail outlets, dining establishments, and government typing centers.
      </p>
    `,
    tags: ["BurJuman", "MetroStations", "Dubai", "RTA", "Transit"]
  },
  {
    id: 7,
    slug: "al-ain-bus-station",
    title: "Al Ain Bus Station: Intercity Routes to Dubai & Abu Dhabi, Timings & Fares",
    category: "Bus Stations",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "37.2k",
    readTime: "5 min read",
    date: "Nov 09, 2026",
    authorId: "faisal-al-hashimi",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
    excerpt: "Full schedule, fares, and route guide for Al Ain Central Bus Station, connecting the Garden City with Abu Dhabi and Dubai Al Ghubaiba.",
    toc: [
      { id: "station-location", title: "1. Location & Terminal Amenities" },
      { id: "dubai-route", title: "2. Route E201 to Dubai Al Ghubaiba" },
      { id: "abu-dhabi-route", title: "3. Route X90 to Abu Dhabi Central" }
    ],
    content: `
      <p class="lead">
        Al Ain Central Bus Station, situated on Al Ain Street in the downtown district, is the main public transportation terminal connecting the Eastern Region with the UAE's major metropolises.
      </p>
      <h2 id="station-location">1. Location & Terminal Amenities</h2>
      <p>
        The terminal offers air-conditioned waiting lounges, prayer rooms, Nol and Hafilat card recharge kiosks, and 24-hour taxi ranks.
      </p>
      <h2 id="dubai-route">2. Route E201 to Dubai Al Ghubaiba</h2>
      <p>
        Operated jointly by RTA and ITC, Route E201 departs every 30 minutes. Journey time is approximately 1 hour 45 minutes, with a single fare of AED 25 payable via Silver Nol card.
      </p>
      <h2 id="abu-dhabi-route">3. Route X90 to Abu Dhabi Central</h2>
      <p>
        Express Route X90 links Al Ain directly with Abu Dhabi Central Bus Station via the E22 highway. The fare is AED 25 payable using the Abu Dhabi Hafilat card.
      </p>
    `,
    tags: ["AlAin", "BusStations", "Transport", "RTA", "Intercity"]
  },
  {
    id: 8,
    slug: "al-satwa-bus-station-dubai",
    title: "Al Satwa Bus Station Dubai: Routes, Feeder Buses to Downtown & NOL Fares",
    category: "Bus Stations",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "29.4k",
    readTime: "4 min read",
    date: "Nov 09, 2026",
    authorId: "faisal-al-hashimi",
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&auto=format&fit=crop&q=80",
    excerpt: "Guide to Al Satwa Bus Station routes connecting Jumeirah, Downtown Dubai, Dubai Mall, and intercity departures to Sharjah.",
    toc: [
      { id: "satwa-hub", title: "1. Strategic Location in Al Satwa" },
      { id: "popular-routes", title: "2. Key Routes (Dubai Mall, Jumeirah, Deira)" }
    ],
    content: `
      <p class="lead">
        Al Satwa Bus Station is an essential transit node serving the residential neighborhoods between Sheikh Zayed Road, Jumeirah Beach, and Karama.
      </p>
      <h2 id="satwa-hub">1. Strategic Location in Al Satwa</h2>
      <p>
        Located adjacent to Satwa Roundabout, the terminal provides quick feeder connections to Financial Centre and Business Bay metro stations.
      </p>
      <h2 id="popular-routes">2. Key Routes (Dubai Mall, Jumeirah, Deira)</h2>
      <p>
        Popular routes include Bus 32C to Dubai Airport Terminal 1, Bus 81 to Mall of the Emirates along Jumeirah Beach Road, and Bus F11 to Financial Centre Metro Station.
      </p>
    `,
    tags: ["Satwa", "BusStations", "RTA", "Dubai", "PublicTransport"]
  },

  // --- 3. AUTOMOTIVE & LICENSING ---
  {
    id: 9,
    slug: "dubai-traffic-fine-check-by-plate-number",
    title: "Dubai Traffic Fine Check by Plate Number: RTA, Dubai Police & EVG Guide",
    category: "Automotive",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "68.2k",
    readTime: "5 min read",
    date: "Nov 02, 2026",
    authorId: "kareem-mansoor",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",
    excerpt: "How to check and pay traffic fines in Dubai using your vehicle plate number, traffic file number, or driving license via official police portals.",
    toc: [
      { id: "check-methods", title: "1. Three Ways to Check Dubai Traffic Fines" },
      { id: "dubai-police-app", title: "2. Checking via Dubai Police App" },
      { id: "fine-discounts", title: "3. Black Points, Impoundment & Installment Plans" }
    ],
    content: `
      <p class="lead">
        Checking whether your vehicle has accumulated radar or parking fines in Dubai is fast and transparent through official digital channels operated by Dubai Police and the RTA.
      </p>
      <h2 id="check-methods">1. Three Ways to Check Dubai Traffic Fines</h2>
      <p>
        Motorists can verify violations online using three credentials: Vehicle Plate Details (Plate Code + Number), Traffic Code (T.C.) Number, or UAE Driving License Number.
      </p>
      <h2 id="dubai-police-app">2. Checking via Dubai Police App</h2>
      <p>
        Open the Dubai Police application, select 'Traffic Services', tap 'Fine Payment', enter your plate details, and view photo evidence with violation timestamps.
      </p>
      <h2 id="fine-discounts">3. Black Points, Impoundment & Installment Plans</h2>
      <p>
        If your fine carries black points or vehicle impoundment days, these must be settled in person at a Dubai Police customer happiness center or converted to fees through the smart app.
      </p>
    `,
    tags: ["TrafficFines", "DubaiPolice", "Automotive", "RTA", "DrivingInUAE"]
  },
  {
    id: 10,
    slug: "driving-licence-renewal-abu-dhabi",
    title: "Driving Licence Renewal in Abu Dhabi: TAMM Portal, Eye Test & Fees",
    category: "Automotive",
    country: "Abu Dhabi",
    countryFlag: "🇦🇪",
    views: "34.8k",
    readTime: "4 min read",
    date: "Nov 04, 2026",
    authorId: "kareem-mansoor",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop&q=80",
    excerpt: "Complete walkthrough for renewing your Abu Dhabi driving licence online through the TAMM digital portal, accredited eye test centers, and delivery.",
    toc: [
      { id: "renewal-eligibility", title: "1. Renewal Validity & Grace Period" },
      { id: "eye-test-centers", title: "2. Approved Optical Eye Test Centers" },
      { id: "tamm-procedure", title: "3. Step-by-Step TAMM Application & Fees" }
    ],
    content: `
      <p class="lead">
        Abu Dhabi Police and the TAMM government services ecosystem allow drivers to renew expired licenses in under five minutes from home.
      </p>
      <h2 id="renewal-eligibility">1. Renewal Validity & Grace Period</h2>
      <p>
        Expatriate licenses are renewed for 5 years, while UAE nationals receive 10-year renewals. A 30-day grace period applies after expiry before monthly late fines of AED 10 accrue.
      </p>
      <h2 id="eye-test-centers">2. Approved Optical Eye Test Centers</h2>
      <p>
        Before applying online, complete a driving eye test at an accredited optical center (such as Yateem Optician, Al Jaber Optical, or Rivoli EyeZone). Results are automatically uploaded to the Police database.
      </p>
      <h2 id="tamm-procedure">3. Step-by-Step TAMM Application & Fees</h2>
      <p>
        Log into TAMM using UAE Pass, clear any outstanding traffic fines, submit renewal request, pay the AED 100 renewal fee plus AED 15 courier fee, and receive your digital license immediately.
      </p>
    `,
    tags: ["AbuDhabi", "DrivingLicense", "TAMM", "Automotive", "UAE"]
  },
  {
    id: 11,
    slug: "chassis-number-check-uae",
    title: "Chassis Number (VIN) Check in UAE: Accident History & Vehicle Inspection",
    category: "Automotive",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "31.7k",
    readTime: "4 min read",
    date: "Nov 02, 2026",
    authorId: "kareem-mansoor",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?w=800&auto=format&fit=crop&q=80",
    excerpt: "How to check used car accident history in the UAE using the 17-digit chassis number on Emirates Vehicle Gate (EVG) and Ministry of Interior portals.",
    toc: [
      { id: "vin-importance", title: "1. Why Chassis Verification is Essential" },
      { id: "evg-portal", title: "2. Checking Accidents on EVG Portal" }
    ],
    content: `
      <p class="lead">
        Before buying any pre-owned vehicle in Dubai or Abu Dhabi, verifying the vehicle's 17-digit Chassis Number (VIN) prevents purchasing previously flooded or severely accident-damaged cars.
      </p>
      <h2 id="vin-importance">1. Why Chassis Verification is Essential</h2>
      <p>
        All road accidents attended by police across the seven emirates are logged against the permanent vehicle chassis code on the federal database.
      </p>
      <h2 id="evg-portal">2. Checking Accidents on EVG Portal</h2>
      <p>
        Visit the Emirates Vehicle Gate (evg.ae), enter the chassis number, and view past accident dates, damage severity, and issuing police departments free of charge.
      </p>
    `,
    tags: ["ChassisCheck", "Automotive", "UsedCarsUAE", "EVG", "VehicleInspection"]
  },

  // --- 4. REAL ESTATE & TOWERS ---
  {
    id: 12,
    slug: "saadiyat-beach-residences-abu-dhabi",
    title: "Saadiyat Beach Residences Abu Dhabi: Community Review, Amenities & Rental Prices",
    category: "Real Estate",
    country: "Abu Dhabi",
    countryFlag: "🇦🇪",
    views: "41.5k",
    readTime: "5 min read",
    date: "Oct 14, 2026",
    authorId: "tariq-al-mansoor",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    excerpt: "In-depth review of luxury beachfront living in Saadiyat Island: apartment floor plans, white sand beach access, golf course views, and annual rents.",
    toc: [
      { id: "community-overview", title: "1. Community Overview & Location" },
      { id: "apartment-types", title: "2. Apartment Layouts & Finish Quality" },
      { id: "rental-market", title: "3. Current Rental Rates & Service Charges" }
    ],
    content: `
      <p class="lead">
        Saadiyat Beach Residences, developed by Aldar Properties, stands as one of Abu Dhabi’s most prestigious residential enclaves, situated directly alongside the protected dunes of the Arabian Gulf.
      </p>
      <h2 id="community-overview">1. Community Overview & Location</h2>
      <p>
        Consisting of six low-rise Mediterranean-style buildings, the development offers 24-hour gated security, tennis courts, and private access to pristine natural white sand beaches where hawksbill turtles nest.
      </p>
      <h2 id="apartment-types">2. Apartment Layouts & Finish Quality</h2>
      <p>
        Units range from spacious 1-bedroom apartments (950 sq.ft) to expansive 4-bedroom penthouses with wraparound balconies overlooking Saadiyat Beach Golf Club.
      </p>
      <h2 id="rental-market">3. Current Rental Rates & Service Charges</h2>
      <p>
        One-bedroom units average AED 85,000 annually, while prime three-bedroom sea-facing units command between AED 180,000 and AED 230,000.
      </p>
    `,
    tags: ["Saadiyat", "AbuDhabi", "RealEstate", "Beachfront", "Aldar"]
  },
  {
    id: 13,
    slug: "red-diamond-building-jlt-dubai",
    title: "Red Diamond Building JLT Dubai: Cluster C Offices, Facilities & Floor Plans",
    category: "Real Estate",
    country: "Dubai",
    countryFlag: "🇦🇪",
    views: "27.3k",
    readTime: "4 min read",
    date: "Oct 26, 2026",
    authorId: "tariq-al-mansoor",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80",
    excerpt: "Everything you need to know about Red Diamond Building in Jumeirah Lake Towers Cluster C: DMCC free zone commercial offices and dining amenities.",
    toc: [
      { id: "jlt-cluster-c", title: "1. Prime Position in JLT Cluster C" },
      { id: "dmcc-licensing", title: "2. DMCC Free Zone Business Licensing" }
    ],
    content: `
      <p class="lead">
        Red Diamond Building is a premier mid-rise commercial tower situated in Cluster C of Jumeirah Lake Towers (JLT), directly accessible from Sheikh Zayed Road.
      </p>
      <h2 id="jlt-cluster-c">1. Prime Position in JLT Cluster C</h2>
      <p>
        Housing a mix of corporate offices, legal consultancies, and diamond trading firms, the building is a 7-minute walk from DMCC Metro Station.
      </p>
      <h2 id="dmcc-licensing">2. DMCC Free Zone Business Licensing</h2>
      <p>
        Businesses operating in Red Diamond benefit from 100% foreign ownership, 0% personal tax, and direct access to Dubai Multi Commodities Centre services.
      </p>
    `,
    tags: ["JLT", "DubaiRealEstate", "DMCC", "CommercialProperty", "Offices"]
  },
  {
    id: 14,
    slug: "bayswater-tower-business-bay-dubai",
    title: "Bayswater Tower Business Bay by Omniyat: Commercial Offices & Canal Views",
    category: "Real Estate",
    country: "Dubai",
    countryFlag: "🇦🇪",
    views: "36.4k",
    readTime: "4 min read",
    date: "Sep 20, 2026",
    authorId: "tariq-al-mansoor",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=80",
    excerpt: "Commercial tower profile of Omniyat's Bayswater in Business Bay: prime office spaces, waterfront promenades, and floor layout options.",
    toc: [
      { id: "bayswater-design", title: "1. Architecture & Design by Omniyat" },
      { id: "canal-connectivity", title: "2. Dubai Water Canal Connectivity" }
    ],
    content: `
      <p class="lead">
        Rising 24 floors above the Dubai Water Canal, Bayswater Tower by Omniyat represents high-tech office design in Business Bay.
      </p>
      <h2 id="bayswater-design">1. Architecture & Design by Omniyat</h2>
      <p>
        Featuring a dramatic geometric facade, intelligent elevator systems, and high-speed fiber infrastructure, Bayswater accommodates regional financial and tech firms.
      </p>
      <h2 id="canal-connectivity">2. Dubai Water Canal Connectivity</h2>
      <p>
        Positioned moments from Al A'amal Street, the tower connects effortlessly to Downtown Dubai, Burj Khalifa, and the Dubai Water Canal marine transit stations.
      </p>
    `,
    tags: ["BusinessBay", "Omniyat", "DubaiRealEstate", "Offices", "CanalViews"]
  },

  // --- 5. DUBAI & ABU DHABI AREA & PARK GUIDES ---
  {
    id: 15,
    slug: "al-mankhool-dubai",
    title: "Al Mankhool Dubai Area Guide: Residential Living, Schools, Metro & Rent Prices",
    category: "Dubai",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "38.9k",
    readTime: "5 min read",
    date: "Nov 12, 2026",
    authorId: "tariq-al-mansoor",
    imageUrl: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=80",
    excerpt: "Comprehensive neighborhood guide to Al Mankhool in Bur Dubai: apartment rents, family parks, healthcare facilities, and ADCB metro access.",
    toc: [
      { id: "neighborhood-vibe", title: "1. Neighborhood Character & Lifestyle" },
      { id: "schools-healthcare", title: "2. Schools, Hospitals & Community Amenities" },
      { id: "rental-trends", title: "3. Apartment Rents in Al Mankhool" }
    ],
    content: `
      <p class="lead">
        Al Mankhool is one of Bur Dubai's most desirable family-friendly residential neighborhoods, blending central city convenience with quiet, tree-lined streets.
      </p>
      <h2 id="neighborhood-vibe">1. Neighborhood Character & Lifestyle</h2>
      <p>
        Home to a diverse expatriate community, Mankhool provides walking access to supermarkets, local restaurants, and the green open lawns of Mankhool Park.
      </p>
      <h2 id="schools-healthcare">2. Schools, Hospitals & Community Amenities</h2>
      <p>
        The district houses Aster Hospital Mankhool, multiple international medical clinics, and several prominent nursery schools.
      </p>
      <h2 id="rental-trends">3. Apartment Rents in Al Mankhool</h2>
      <p>
        Average annual rents for 1-bedroom apartments range between AED 52,000 and AED 65,000, while spacious 2-bedroom units average AED 75,000 to AED 90,000.
      </p>
    `,
    tags: ["AlMankhool", "Dubai", "AreaGuide", "BurDubai", "Residential"]
  },
  {
    id: 16,
    slug: "zabeel-park-dubai",
    title: "Zabeel Park Dubai: Dubai Frame, Gate 2 Parking, Timings & Ticket Prices",
    category: "Dubai",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "53.2k",
    readTime: "5 min read",
    date: "Oct 28, 2026",
    authorId: "faisal-al-hashimi",
    imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop&q=80",
    excerpt: "Everything you need to visit Zabeel Park: Gate 2 entry, boating lake, Dubai Frame access, children playgrounds, and Nol card ticket entry.",
    toc: [
      { id: "park-overview", title: "1. One of Dubai's Largest Urban Parks" },
      { id: "dubai-frame", title: "2. The Dubai Frame (Gate 4)" },
      { id: "tickets-parking", title: "3. Ticket Fares, NOL Entry & Parking" }
    ],
    content: `
      <p class="lead">
        Spanning an area equivalent to 45 football pitches between Al Karama and the World Trade Centre, Zabeel Park is one of Dubai's favorite family leisure destinations.
      </p>
      <h2 id="park-overview">1. One of Dubai's Largest Urban Parks</h2>
      <p>
        Divided into sectors linked by pedestrian bridges, Zabeel Park features lush botanical gardens, a cricket pitch, barbecue gazebos, and a peaceful boating lake.
      </p>
      <h2 id="dubai-frame">2. The Dubai Frame (Gate 4)</h2>
      <p>
        Rising 150 meters from the park's grounds, the architectural landmark offers 360-degree views contrasting historic Old Dubai to the north with futuristic Downtown to the south.
      </p>
      <h2 id="tickets-parking">3. Ticket Fares, NOL Entry & Parking</h2>
      <p>
        Park entry is AED 5 per person paid using an RTA Nol card (children under two and people of determination enter free). Free parking is available at Gates 1, 2, and 3.
      </p>
    `,
    tags: ["ZabeelPark", "DubaiFrame", "Parks", "Dubai", "FamilyGuides"]
  },
  {
    id: 17,
    slug: "al-wathba-park-abu-dhabi",
    title: "Al Wathba Park & Fossil Dunes Abu Dhabi: Visitor Guide, Timings & Barbecue Areas",
    category: "Abu Dhabi",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "29.7k",
    readTime: "4 min read",
    date: "Nov 11, 2026",
    authorId: "faisal-al-hashimi",
    imageUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80",
    excerpt: "Discover Al Wathba's natural wonders: shaded park gazebos, desert barbecue spots, the protected Wetland Reserve flamingo sanctuary, and Fossil Dunes.",
    toc: [
      { id: "wathba-wonders", title: "1. Al Wathba Natural Heritage" },
      { id: "fossil-dunes", title: "2. The Ancient Fossil Dunes Protected Area" }
    ],
    content: `
      <p class="lead">
        Located 45 kilometers south-east of Abu Dhabi island, Al Wathba provides an extraordinary desert escape celebrated for wildlife conservation and wind-sculpted fossil dunes.
      </p>
      <h2 id="wathba-wonders">1. Al Wathba Natural Heritage</h2>
      <p>
        Families flock to Al Wathba Park for weekend barbecues under palm canopies, while the nearby Wetland Reserve hosts thousands of wintering Greater Flamingos.
      </p>
      <h2 id="fossil-dunes">2. The Ancient Fossil Dunes Protected Area</h2>
      <p>
        Light-sculpted pathways allow visitors to wander among surreal geometric wind-swept calcium dunes dating back thousands of years.
      </p>
    `,
    tags: ["AlWathba", "AbuDhabi", "FossilDunes", "Parks", "Nature"]
  },

  // --- 6. SHARJAH & AJMAN GUIDES ---
  {
    id: 18,
    slug: "industrial-area-2-sharjah",
    title: "Industrial Area 2 Sharjah: Workshops, Spare Parts Market & Accessibility Guide",
    category: "Sharjah",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "32.1k",
    readTime: "4 min read",
    date: "Nov 12, 2026",
    authorId: "faisal-al-hashimi",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
    excerpt: "The ultimate guide to navigating Sharjah Industrial Area 2: automotive repair workshops, electrical supplies, hardware wholesalers, and parking.",
    toc: [
      { id: "commercial-hub", title: "1. Sharjah's Automotive & Trading Core" },
      { id: "finding-workshops", title: "2. Locating Mechanics & Spare Parts" }
    ],
    content: `
      <p class="lead">
        Sharjah Industrial Area 2 is a vibrant commercial and mechanical hub renowned across the Northern Emirates for car spare parts, wholesale construction hardware, and metal fabrications.
      </p>
      <h2 id="commercial-hub">1. Sharjah's Automotive & Trading Core</h2>
      <p>
        Bordered by Maliha Road and Industrial Area Road, Area 2 provides convenient access from Dubai via Al Ittihad Road and Beirut Street.
      </p>
      <h2 id="finding-workshops">2. Locating Mechanics & Spare Parts</h2>
      <p>
        Whether you are seeking OEM German auto parts, Japanese engine diagnostics, or industrial welding machinery, Area 2 offers competitive wholesale pricing.
      </p>
    `,
    tags: ["Sharjah", "IndustrialArea2", "Automotive", "Workshops", "Hardware"]
  },
  {
    id: 19,
    slug: "ajman-parking-sms",
    title: "Ajman Parking SMS: How to Pay for Paid Parking in Ajman via Mobile 5188",
    category: "Ajman",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "36.8k",
    readTime: "4 min read",
    date: "Oct 30, 2026",
    authorId: "kareem-mansoor",
    imageUrl: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&auto=format&fit=crop&q=80",
    excerpt: "Learn how to pay for public parking in Ajman using SMS 5188: correct SMS format, parking zones, hourly rates, and free parking periods.",
    toc: [
      { id: "sms-format", title: "1. The 5188 SMS Parking Format" },
      { id: "timing-rates", title: "2. Ajman Parking Hours & Tariff" }
    ],
    content: `
      <p class="lead">
        Motorists in the Emirate of Ajman can settle municipal parking fees in seconds by dispatching a text message to short code 5188 from any etisalat or du mobile number.
      </p>
      <h2 id="sms-format">1. The 5188 SMS Parking Format</h2>
      <p>
        Send an SMS in this format: <code>AJM [Plate Code] [Plate Number]</code> to <strong>5188</strong> (e.g., <code>AJM B 12345</code>). You will receive an instant confirmation SMS with ticket expiry time.
      </p>
      <h2 id="timing-rates">2. Ajman Parking Hours & Tariff</h2>
      <p>
        Paid parking operates Saturday to Thursday from 08:00 AM to 01:00 PM and 05:00 PM to 10:00 PM. Parking is free on Fridays and official public holidays.
      </p>
    `,
    tags: ["Ajman", "AjmanParking", "SMSParking", "Automotive", "Transport"]
  },

  // --- 7. TECHNOLOGY & TELECOM ---
  {
    id: 20,
    slug: "how-to-get-53-gb-data-on-etisalat",
    title: "How to Get 53 GB Data on Etisalat (e&): National Day Promotion & Activation Code",
    category: "Technology",
    country: "UAE",
    countryFlag: "🇦🇪",
    views: "61.5k",
    readTime: "4 min read",
    date: "Sep 20, 2026",
    authorId: "reem-al-ghamdi",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    excerpt: "Activation guide for Etisalat (e&) prepaid and postpaid customers to claim complimentary bonus data packages via My Etisalat UAE app or USSD codes.",
    toc: [
      { id: "promotion-details", title: "1. National Celebration Data Offer" },
      { id: "activation-steps", title: "2. Activation via App & USSD Code" }
    ],
    content: `
      <p class="lead">
        Telecom operator e& (Etisalat UAE) frequently rolls out commemorative free data allowances for both prepaid Wasel and postpaid account holders.
      </p>
      <h2 id="promotion-details">1. National Celebration Data Offer</h2>
      <p>
        The 53 GB allowance provides high-speed 5G mobile data valid for local browsing, streaming, and social media apps across the UAE.
      </p>
      <h2 id="activation-steps">2. Activation via App & USSD Code</h2>
      <p>
        Subscribers can dial <strong>*171#</strong> or open the 'My Etisalat UAE' mobile app, navigate to 'Special Offers', and tap 'Activate Bonus Data'.
      </p>
    `,
    tags: ["Etisalat", "Technology", "Telecom", "UAE", "MobileData"]
  }
];

// Application State
let currentCategory = "All";
let searchQuery = "";
let savedBookmarks = JSON.parse(localStorage.getItem("khaleejflow_bookmarks") || "[]");
let userTheme = localStorage.getItem("khaleejflow_theme") || "light";
let currentView = "grid";
let visibleArticleCount = 6;

// Utility functions
function getCategoryBadge(category) {
  const styles = {
    "Finance": "badge-business",
    "Metro Stations": "badge-realestate",
    "Bus Stations": "badge-travel",
    "Automotive": "badge-featured",
    "Real Estate": "badge-realestate",
    "Dubai": "badge-lifestyle",
    "Abu Dhabi": "badge-realestate",
    "Sharjah": "badge-travel",
    "Ajman": "badge-lifestyle",
    "Technology": "badge-business",
    "Khaleej News": "badge-featured",
    "Lifestyle": "badge-lifestyle"
  };
  return styles[category] || "badge-business";
}

function getAuthor(authorId) {
  return authorsData.find(a => a.id === authorId) || authorsData[0];
}

function goToArticle(id) {
  window.location.href = `article.html?id=${id}`;
}

// Theme
function initTheme() {
  const html = document.documentElement;
  if (userTheme === "dark") {
    html.classList.remove("light");
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
    html.classList.add("light");
  }
  updateThemeToggleUI(userTheme === "dark");
}

function toggleTheme() {
  const html = document.documentElement;
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    html.classList.add("light");
    userTheme = "light";
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    userTheme = "dark";
  }
  localStorage.setItem("khaleejflow_theme", userTheme);
  updateThemeToggleUI(userTheme === "dark");
}

function updateThemeToggleUI(isDark) {
  const icons = document.querySelectorAll(".theme-toggle-icon");
  icons.forEach(icon => {
    if (isDark) {
      icon.innerHTML = `<svg class="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`;
    } else {
      icon.innerHTML = `<svg class="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`;
    }
  });
}

// Bookmarking
function toggleBookmark(articleId) {
  const index = savedBookmarks.indexOf(articleId);
  if (index > -1) {
    savedBookmarks.splice(index, 1);
    showToast("Guide removed from saved library.", "info");
  } else {
    savedBookmarks.push(articleId);
    showToast("Guide saved to your reading list!", "success");
  }
  localStorage.setItem("khaleejflow_bookmarks", JSON.stringify(savedBookmarks));
  updateBookmarkCountUI();
}

function updateBookmarkCountUI() {
  const badge = document.getElementById("bookmark-count-badge");
  if (badge) {
    badge.textContent = savedBookmarks.length;
    badge.style.display = savedBookmarks.length > 0 ? "inline-flex" : "none";
  }
}

function toggleSavedFilter() {
  if (savedBookmarks.length === 0) {
    showToast("You haven't bookmarked any guides yet.", "info");
    return;
  }
  currentCategory = "All";
  const filterLabel = document.getElementById("active-filter-label");
  if (filterLabel) filterLabel.textContent = `Saved Reading List (${savedBookmarks.length})`;

  const container = document.getElementById("articles-feed-container");
  if (!container) return;

  const bookmarked = articlesData.filter(a => savedBookmarks.includes(a.id));
  container.innerHTML = bookmarked.map(article => `
    <article 
      class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md kf-card flex flex-col cursor-pointer transition-all"
      onclick="goToArticle(${article.id})"
    >
      <div class="relative h-48 w-full kf-img-wrap overflow-hidden">
        <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-full object-cover kf-img-zoom" />
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 text-xs font-bold uppercase rounded-full shadow-sm ${getCategoryBadge(article.category)}">
            ${article.category}
          </span>
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2">
          ${article.title}
        </h3>
        <p class="text-xs text-slate-500 line-clamp-2 mb-3">${article.excerpt}</p>
        <span class="text-xs font-bold text-emerald-600">Read Guide &rarr;</span>
      </div>
    </article>
  `).join("");

  const feedSection = document.getElementById("main-feed-section");
  if (feedSection) feedSection.scrollIntoView({ behavior: "smooth" });
}

// Render Authors Editorial Section (NO EEAT text)
function renderAuthorsSection() {
  const container = document.getElementById("authors-section-grid");
  if (!container) return;

  container.innerHTML = authorsData.map(author => `
    <div class="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md kf-card flex flex-col justify-between transition-all">
      <div>
        <div class="flex items-start space-x-4 mb-4">
          <img src="${author.avatar}" alt="${author.name}" class="w-16 h-16 rounded-full object-cover border-2 border-emerald-600 shadow-sm flex-shrink-0" />
          <div>
            <h4 class="font-display font-bold text-base text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
              ${author.name}
            </h4>
            <p class="text-xs text-emerald-700 dark:text-emerald-400 font-medium mt-0.5 leading-snug">
              ${author.title}
            </p>
            <span class="text-[11px] text-slate-400 font-mono block mt-1">
              📍 ${author.bureau}
            </span>
          </div>
        </div>

        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          ${author.bio}
        </p>

        <div class="flex flex-wrap gap-1.5 mb-4">
          ${author.specialties.map(spec => `
            <span class="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              ${spec}
            </span>
          `).join("")}
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
        <span class="font-mono font-bold text-slate-700 dark:text-slate-300">${author.articlesCount} Published Guides</span>
        <button onclick="filterByAuthor('${author.id}')" class="text-emerald-600 dark:text-emerald-400 font-bold hover:underline flex items-center gap-1 font-display">
          <span>View Guides</span>
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  `).join("");
}

function filterByAuthor(authorId) {
  const author = getAuthor(authorId);
  currentCategory = "All";
  
  const filterLabel = document.getElementById("active-filter-label");
  if (filterLabel) filterLabel.textContent = `Guides by ${author.name}`;

  const container = document.getElementById("articles-feed-container");
  if (!container) return;

  const authorArticles = articlesData.filter(a => a.authorId === authorId);
  container.innerHTML = authorArticles.map(article => `
    <article 
      class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md kf-card flex flex-col cursor-pointer transition-all"
      onclick="goToArticle(${article.id})"
    >
      <div class="relative h-48 w-full kf-img-wrap overflow-hidden">
        <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-full object-cover kf-img-zoom" />
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 text-xs font-bold uppercase rounded-full shadow-sm ${getCategoryBadge(article.category)}">
            ${article.category}
          </span>
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2">
          ${article.title}
        </h3>
        <p class="text-xs text-slate-500 line-clamp-2 mb-3">${article.excerpt}</p>
        <span class="text-xs font-bold text-emerald-600">Read Full Guide &rarr;</span>
      </div>
    </article>
  `).join("");

  const feedSection = document.getElementById("main-feed-section");
  if (feedSection) feedSection.scrollIntoView({ behavior: "smooth" });
}

// Hero Featured Section
function renderHero() {
  const heroMain = articlesData[0];
  const heroSub = [articlesData[1], articlesData[2]];
  const heroContainer = document.getElementById("hero-featured-grid");
  if (!heroContainer) return;

  const mainAuthor = getAuthor(heroMain.authorId);
  const isMainBookmarked = savedBookmarks.includes(heroMain.id);

  let html = `
    <!-- Major Spotlight Card (8 Cols) -->
    <div class="lg:col-span-8 group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-xl kf-card cursor-pointer" onclick="goToArticle(${heroMain.id})">
      <div class="relative h-[420px] sm:h-[480px] lg:h-[510px] w-full kf-img-wrap">
        <img 
          src="${heroMain.imageUrl}" 
          alt="${heroMain.title}" 
          class="w-full h-full object-cover kf-img-zoom filter brightness-90 group-hover:brightness-100" 
          loading="eager"
        />
        <div class="absolute inset-0 hero-gradient flex flex-col justify-end p-6 sm:p-8 lg:p-10">
          <div class="flex flex-wrap items-center gap-3 mb-3">
            <span class="px-3 py-1 text-xs font-bold uppercase rounded-full ${getCategoryBadge(heroMain.category)}">
              ${heroMain.category}
            </span>
            <span class="text-xs text-slate-300 font-mono">${heroMain.readTime}</span>
          </div>

          <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-3 group-hover:text-emerald-300 transition-colors">
            ${heroMain.title}
          </h1>

          <p class="text-sm sm:text-base text-slate-200 line-clamp-2 sm:line-clamp-3 mb-6 max-w-3xl leading-relaxed">
            ${heroMain.excerpt}
          </p>

          <div class="flex items-center justify-between pt-4 border-t border-white/20">
            <div class="flex items-center space-x-3">
              <img src="${mainAuthor.avatar}" alt="${mainAuthor.name}" class="w-10 h-10 rounded-full border-2 border-white object-cover" />
              <div>
                <p class="text-sm font-bold text-white">${mainAuthor.name}</p>
                <p class="text-xs text-slate-300">${heroMain.date} • ${heroMain.views} views</p>
              </div>
            </div>
            <button 
              onclick="event.stopPropagation(); toggleBookmark(${heroMain.id})" 
              class="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              title="Bookmark"
            >
              <svg class="w-5 h-5 ${isMainBookmarked ? 'text-amber-400 fill-current' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Secondary Featured Cards (4 Cols, Stacked) -->
    <div class="lg:col-span-4 flex flex-col gap-6">
      ${heroSub.map(sub => {
        const subAuthor = getAuthor(sub.authorId);
        const isSubBookmarked = savedBookmarks.includes(sub.id);
        return `
          <div class="flex-1 group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-lg kf-card cursor-pointer flex flex-col justify-end" onclick="goToArticle(${sub.id})">
            <div class="relative h-[240px] sm:h-[250px] lg:h-full w-full kf-img-wrap">
              <img 
                src="${sub.imageUrl}" 
                alt="${sub.title}" 
                class="w-full h-full object-cover kf-img-zoom filter brightness-90 group-hover:brightness-100" 
                loading="lazy"
              />
              <div class="absolute inset-0 hero-gradient flex flex-col justify-end p-5 sm:p-6">
                <div class="flex items-center gap-2 mb-2">
                  <span class="px-2.5 py-0.5 text-xs font-bold uppercase rounded-full ${getCategoryBadge(sub.category)}">
                    ${sub.category}
                  </span>
                  <span class="text-xs text-slate-300 font-mono">${sub.readTime}</span>
                </div>

                <h2 class="text-base sm:text-lg font-extrabold text-white leading-snug mb-2 group-hover:text-emerald-300 transition-colors line-clamp-2">
                  ${sub.title}
                </h2>

                <div class="flex items-center justify-between mt-2 pt-2 border-t border-white/20">
                  <span class="text-xs text-slate-300">${subAuthor.name} • ${sub.date}</span>
                  <button 
                    onclick="event.stopPropagation(); toggleBookmark(${sub.id})" 
                    class="p-1.5 rounded-lg text-slate-300 hover:text-white"
                  >
                    <svg class="w-4 h-4 ${isSubBookmarked ? 'text-amber-400 fill-current' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;

  heroContainer.innerHTML = html;
}

// Section: Finance & Services Guides (4 cards)
function renderFinanceSection() {
  const container = document.getElementById("finance-section-grid");
  if (!container) return;

  const financeItems = articlesData.filter(a => a.category === "Finance").slice(0, 4);

  container.innerHTML = financeItems.map(item => `
    <div 
      class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md kf-card cursor-pointer flex flex-col transition-all"
      onclick="goToArticle(${item.id})"
    >
      <div class="relative h-44 w-full kf-img-wrap overflow-hidden">
        <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover kf-img-zoom" loading="lazy" />
        <div class="absolute top-2.5 left-2.5">
          <span class="px-2 py-0.5 text-[11px] font-bold uppercase rounded-full shadow-sm bg-emerald-100 text-emerald-800 border border-emerald-300">
            ${item.category}
          </span>
        </div>
      </div>
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[11px] text-slate-400 font-mono block mb-1">${item.date} • ${item.readTime}</span>
          <h4 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
            ${item.title}
          </h4>
        </div>
        <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>${item.views} reads</span>
          <span class="font-bold text-emerald-600">Step-by-Step &rarr;</span>
        </div>
      </div>
    </div>
  `).join("");
}

// Section: Transport & Metro Guides (4 cards)
function renderTransportSection() {
  const container = document.getElementById("transport-section-grid");
  if (!container) return;

  const transportItems = articlesData.filter(a => a.category === "Metro Stations" || a.category === "Bus Stations").slice(0, 4);

  container.innerHTML = transportItems.map(item => `
    <div 
      class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md kf-card cursor-pointer flex flex-col transition-all"
      onclick="goToArticle(${item.id})"
    >
      <div class="relative h-44 w-full kf-img-wrap overflow-hidden">
        <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover kf-img-zoom" loading="lazy" />
        <div class="absolute top-2.5 left-2.5">
          <span class="px-2 py-0.5 text-[11px] font-bold uppercase rounded-full shadow-sm bg-blue-100 text-blue-800 border border-blue-300">
            ${item.category}
          </span>
        </div>
      </div>
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[11px] text-slate-400 font-mono block mb-1">${item.date} • ${item.readTime}</span>
          <h4 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
            ${item.title}
          </h4>
        </div>
        <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Dubai / Al Ain</span>
          <span class="font-bold text-blue-600">Routes & Times &rarr;</span>
        </div>
      </div>
    </div>
  `).join("");
}

// Section: Automotive & Fines (3 cards)
function renderAutomotiveSection() {
  const container = document.getElementById("automotive-section-grid");
  if (!container) return;

  const autoItems = articlesData.filter(a => a.category === "Automotive").slice(0, 3);

  container.innerHTML = autoItems.map(item => `
    <div 
      class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md kf-card cursor-pointer flex flex-col"
      onclick="goToArticle(${item.id})"
    >
      <div class="relative h-48 w-full kf-img-wrap overflow-hidden">
        <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover kf-img-zoom" loading="lazy" />
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 text-xs font-bold uppercase rounded-full shadow-sm bg-rose-100 text-rose-800 border border-rose-300">
            Automotive
          </span>
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-rose-600 transition-colors line-clamp-2 mb-2 leading-snug">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-3">
            ${item.excerpt}
          </p>
        </div>
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
          <span class="text-slate-500">Motorist Guide</span>
          <span class="text-rose-600 font-bold">Check Now &rarr;</span>
        </div>
      </div>
    </div>
  `).join("");
}

// Section: Real Estate Hub (3 cards)
function renderRealEstateSection() {
  const container = document.getElementById("realestate-section-grid");
  if (!container) return;

  const realestateItems = articlesData.filter(a => a.category === "Real Estate").slice(0, 3);

  container.innerHTML = realestateItems.map(item => `
    <div 
      class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md kf-card cursor-pointer flex flex-col"
      onclick="goToArticle(${item.id})"
    >
      <div class="relative h-48 w-full kf-img-wrap overflow-hidden">
        <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover kf-img-zoom" loading="lazy" />
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 text-xs font-bold uppercase rounded-full shadow-sm bg-amber-100 text-amber-800 border border-amber-300">
            Real Estate
          </span>
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors line-clamp-2 mb-2 leading-snug">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-3">
            ${item.excerpt}
          </p>
        </div>
        <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold">
          <span class="text-slate-500">Property Review</span>
          <span class="text-amber-600 font-bold">Explore Hub &rarr;</span>
        </div>
      </div>
    </div>
  `).join("");
}

// Section: Regional Area & Community Living Guides (4 cards)
function renderAreaGuidesSection() {
  const container = document.getElementById("areaguides-section-grid");
  if (!container) return;

  const areaItems = articlesData.filter(a => a.category === "Dubai" || a.category === "Abu Dhabi" || a.category === "Sharjah" || a.category === "Ajman").slice(0, 4);

  container.innerHTML = areaItems.map(item => `
    <div 
      class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md kf-card cursor-pointer flex flex-col transition-all"
      onclick="goToArticle(${item.id})"
    >
      <div class="relative h-44 w-full kf-img-wrap overflow-hidden">
        <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover kf-img-zoom" loading="lazy" />
        <div class="absolute top-2.5 left-2.5">
          <span class="px-2 py-0.5 text-[11px] font-bold uppercase rounded-full shadow-sm bg-teal-100 text-teal-800 border border-teal-300">
            ${item.category}
          </span>
        </div>
      </div>
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[11px] text-slate-400 font-mono block mb-1">${item.date} • ${item.readTime}</span>
          <h4 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-teal-600 transition-colors line-clamp-2 leading-snug">
            ${item.title}
          </h4>
        </div>
        <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>${item.views} reads</span>
          <span class="font-bold text-teal-600">Area Guide &rarr;</span>
        </div>
      </div>
    </div>
  `).join("");
}

// Section: Popular Topics (Sidebar Tags)
function renderPopularTopics() {
  const container = document.getElementById("featured-topics-container");
  if (!container) return;

  const topics = [
    { name: "MyPay Card", query: "MyPay" },
    { name: "FAB Ratibi", query: "Ratibi" },
    { name: "LuLu Money", query: "LuLu" },
    { name: "NOL Balance", query: "NOL" },
    { name: "Union Metro", query: "Metro" },
    { name: "Bus Stations", query: "Bus" },
    { name: "Traffic Fines", query: "Fine" },
    { name: "TAMM License", query: "Licence" },
    { name: "VIN Check", query: "Chassis" },
    { name: "Saadiyat Beach", query: "Saadiyat" },
    { name: "JLT Red Diamond", query: "Red Diamond" },
    { name: "Business Bay", query: "Bayswater" },
    { name: "Al Mankhool", query: "Mankhool" },
    { name: "Zabeel Park", query: "Zabeel" },
    { name: "Sharjah Area 2", query: "Industrial" },
    { name: "Ajman 5188", query: "Ajman" },
    { name: "Etisalat 53GB", query: "Etisalat" }
  ];

  container.innerHTML = topics.map(t => `
    <button 
      onclick="filterByTopic('${t.query}')" 
      class="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 hover:text-emerald-700 dark:text-slate-300 transition-colors"
    >
      #${t.name}
    </button>
  `).join("");
}

function filterByTopic(query) {
  if (window.location.pathname.includes("article.html") || !document.getElementById("hero-featured-grid")) {
    window.location.href = `index.html?search=${encodeURIComponent(query)}`;
    return;
  }
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = query;
  searchQuery = query;
  currentCategory = "All";
  visibleArticleCount = 6;
  renderFeedArticles();

  const feedSection = document.getElementById("main-feed-section");
  if (feedSection) feedSection.scrollIntoView({ behavior: "smooth" });
}

function handleNavCategory(category) {
  if (window.location.pathname.includes("article.html") || !document.getElementById("hero-featured-grid")) {
    window.location.href = `index.html?category=${encodeURIComponent(category)}`;
    return;
  }
  setCategory(category);
}

// Main Feed
function getFilteredArticles() {
  let list = articlesData;

  if (currentCategory && currentCategory !== "All") {
    const cat = currentCategory.toLowerCase();
    list = list.filter(a => 
      a.category.toLowerCase() === cat || 
      (a.country && a.country.toLowerCase() === cat) ||
      (a.tags && a.tags.some(t => t.toLowerCase() === cat))
    );
  }

  if (searchQuery.trim() !== "") {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(a => 
      a.title.toLowerCase().includes(q) || 
      a.excerpt.toLowerCase().includes(q) || 
      (a.tags && a.tags.some(t => t.toLowerCase().includes(q)))
    );
  }

  return list;
}

function renderFeedArticles() {
  const container = document.getElementById("articles-feed-container");
  const countLabel = document.getElementById("feed-articles-count");
  const loadMoreBtn = document.getElementById("load-more-btn");
  if (!container) return;

  const filtered = getFilteredArticles();
  
  if (countLabel) {
    countLabel.textContent = `Showing ${Math.min(visibleArticleCount, filtered.length)} of ${filtered.length} Guides`;
  }

  const articlesToDisplay = filtered.slice(0, visibleArticleCount);

  if (currentView === "grid") {
    container.className = "grid grid-cols-1 md:grid-cols-2 gap-6";
    container.innerHTML = articlesToDisplay.map(article => `
      <article 
        class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md kf-card flex flex-col cursor-pointer transition-all"
        onclick="goToArticle(${article.id})"
      >
        <div class="relative h-48 w-full kf-img-wrap overflow-hidden">
          <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-full object-cover kf-img-zoom" loading="lazy" />
          <div class="absolute top-3 left-3 flex items-center gap-1.5">
            <span class="px-2.5 py-1 text-xs font-bold uppercase rounded-full shadow-sm backdrop-blur-md ${getCategoryBadge(article.category)}">
              ${article.category}
            </span>
          </div>
        </div>
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
              <span>${article.date}</span>
              <span>•</span>
              <span>${article.readTime}</span>
            </div>
            <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2 leading-snug">
              ${article.title}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-4 leading-relaxed">
              ${article.excerpt}
            </p>
          </div>
          <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <span class="text-slate-500">${article.views} reads</span>
            <span class="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Read Guide &rarr;
            </span>
          </div>
        </div>
      </article>
    `).join("");
  } else {
    container.className = "flex flex-col gap-4";
    container.innerHTML = articlesToDisplay.map(article => `
      <article 
        class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-md kf-card flex flex-col sm:flex-row gap-5 cursor-pointer transition-all"
        onclick="goToArticle(${article.id})"
      >
        <div class="relative w-full sm:w-52 h-40 sm:h-auto rounded-xl overflow-hidden flex-shrink-0 kf-img-wrap">
          <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-full object-cover kf-img-zoom" loading="lazy" />
        </div>
        <div class="flex-1 flex flex-col justify-between py-1">
          <div>
            <span class="text-xs font-mono text-slate-400 block mb-1">${article.date} • ${article.readTime}</span>
            <h3 class="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2">
              ${article.title}
            </h3>
            <p class="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 mb-3">
              ${article.excerpt}
            </p>
          </div>
          <div class="flex items-center justify-between text-xs text-slate-500">
            <span class="font-bold text-emerald-600 uppercase text-[11px]">${article.category}</span>
            <span class="font-bold text-emerald-600">Full Guide &rarr;</span>
          </div>
        </div>
      </article>
    `).join("");
  }

  if (loadMoreBtn) {
    loadMoreBtn.style.display = visibleArticleCount >= filtered.length ? "none" : "inline-flex";
  }
}

// Sidebar Trending
function renderTrendingNow() {
  const container = document.getElementById("trending-articles-list");
  if (!container) return;

  const trending = articlesData.slice(0, 5);
  container.innerHTML = trending.map((article, idx) => {
    const rankStr = String(idx + 1).padStart(2, "0");
    return `
      <div 
        class="group flex items-start gap-4 p-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer border-b border-slate-100 dark:border-slate-800/60 last:border-b-0"
        onclick="goToArticle(${article.id})"
      >
        <span class="font-display text-2xl font-black text-emerald-600/40 group-hover:text-emerald-600 transition-colors">
          ${rankStr}
        </span>
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <span class="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              ${article.category}
            </span>
            <span class="text-[11px] text-slate-400">• ${article.views} reads</span>
          </div>
          <h4 class="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
            ${article.title}
          </h4>
        </div>
      </div>
    `;
  }).join("");
}

// Category filter
function setCategory(category) {
  currentCategory = category;
  visibleArticleCount = 6;

  const navLinks = document.querySelectorAll(".nav-category-btn");
  navLinks.forEach(link => {
    const cat = link.getAttribute("data-category");
    if (cat === category) {
      link.classList.add("text-emerald-700", "dark:text-emerald-400", "font-bold", "bg-emerald-50", "dark:bg-emerald-950/50");
      link.classList.remove("text-slate-600", "dark:text-slate-300");
    } else {
      link.classList.remove("text-emerald-700", "dark:text-emerald-400", "font-bold", "bg-emerald-50", "dark:bg-emerald-950/50");
      link.classList.add("text-slate-600", "dark:text-slate-300");
    }
  });

  const filterLabel = document.getElementById("active-filter-label");
  if (filterLabel) {
    filterLabel.textContent = category === "All" ? "Latest UAE & Khaleej Guides" : `${category} Guides`;
  }

  renderFeedArticles();

  const feedSection = document.getElementById("main-feed-section");
  if (feedSection && window.scrollY > 400) {
    feedSection.scrollIntoView({ behavior: "smooth" });
  }
}

function resetFilters() {
  currentCategory = "All";
  searchQuery = "";
  visibleArticleCount = 6;
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  setCategory("All");
  renderFeedArticles();
}

function handleNewsletterSubmit(e) {
  if (e) e.preventDefault();
  const emailInput = document.getElementById("newsletter-email");
  if (!emailInput) return;

  const email = emailInput.value.trim();
  if (!email.includes("@")) {
    showToast("Please enter a valid email address.", "error");
    return;
  }

  emailInput.value = "";
  showToast("Subscribed! You will receive daily UAE updates.", "success");
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const colors = {
    success: "border-emerald-600 bg-emerald-900 text-white",
    error: "border-rose-600 bg-rose-900 text-white",
    info: "border-blue-600 bg-slate-900 text-white"
  };

  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl border shadow-xl text-sm font-semibold backdrop-blur-lg animate-slide-up ${colors[type] || colors.info}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("opacity-0", "transition-opacity", "duration-300");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function initSearch() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (document.getElementById("articles-feed-container")) {
        visibleArticleCount = 6;
        renderFeedArticles();
      }
    });
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        if (!document.getElementById("articles-feed-container")) {
          window.location.href = `index.html?search=${encodeURIComponent(e.target.value)}`;
        } else {
          const feed = document.getElementById("main-feed-section");
          if (feed) feed.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  }
}

function setViewMode(mode) {
  currentView = mode;
  const gridBtn = document.getElementById("view-mode-grid");
  const listBtn = document.getElementById("view-mode-list");

  if (gridBtn && listBtn) {
    if (mode === "grid") {
      gridBtn.className = "p-1.5 rounded-lg bg-emerald-600 text-white";
      listBtn.className = "p-1.5 rounded-lg text-slate-500 hover:text-slate-800";
    } else {
      listBtn.className = "p-1.5 rounded-lg bg-emerald-600 text-white";
      gridBtn.className = "p-1.5 rounded-lg text-slate-500 hover:text-slate-800";
    }
  }

  renderFeedArticles();
}

function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-menu-drawer");
  const overlay = document.getElementById("mobile-menu-overlay");
  if (!drawer || !overlay) return;

  const isOpen = !drawer.classList.contains("-translate-x-full");
  if (isOpen) {
    drawer.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
    document.body.style.overflow = "auto";
  } else {
    drawer.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function loadMoreArticles() {
  visibleArticleCount += 4;
  renderFeedArticles();
}

// --- ARTICLE.HTML DEDICATED PAGE INITIALIZATION ---
function initArticlePage() {
  initTheme();
  updateBookmarkCountUI();

  const urlParams = new URLSearchParams(window.location.search);
  const articleId = parseInt(urlParams.get("id")) || 1;

  const article = articlesData.find(a => a.id === articleId) || articlesData[0];
  const author = getAuthor(article.authorId);
  const isBookmarked = savedBookmarks.includes(article.id);

  document.title = `${article.title} — KhaleejFlow`;

  // 1. FIRST: H1 Title & Header
  const titleContainer = document.getElementById("article-title-header");
  if (titleContainer) {
    titleContainer.innerHTML = `
      <!-- Breadcrumbs -->
      <nav class="flex items-center space-x-2 text-xs text-slate-500 font-medium mb-4">
        <a href="index.html" class="hover:text-emerald-600 transition-colors">Home</a>
        <span>/</span>
        <button onclick="window.location.href='index.html'" class="hover:text-emerald-600 transition-colors">${article.category}</button>
        <span>/</span>
        <span class="text-slate-400 truncate max-w-xs">${article.title}</span>
      </nav>

      <!-- Category Badges -->
      <div class="flex flex-wrap items-center gap-3 mb-4">
        <span class="px-3 py-1 text-xs font-bold uppercase rounded-full shadow-sm ${getCategoryBadge(article.category)}">
          ${article.category}
        </span>
        <span class="text-xs font-mono text-slate-500">${article.date}</span>
        <span class="text-xs font-mono text-slate-500">• ${article.readTime}</span>
        <span class="text-xs font-mono text-slate-500">• ${article.views} views</span>
      </div>

      <!-- H1 Main Title -->
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight font-display mb-6">
        ${article.title}
      </h1>

      <!-- Excerpt -->
      <p class="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-8 font-medium">
        ${article.excerpt}
      </p>

      <!-- Author Bar -->
      <div class="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
        <div class="flex items-center space-x-3.5">
          <img src="${author.avatar}" alt="${author.name}" class="w-12 h-12 rounded-full object-cover border-2 border-emerald-600" />
          <div>
            <h4 class="font-display font-bold text-sm text-slate-900 dark:text-white">
              By ${author.name}
            </h4>
            <p class="text-xs text-slate-500">${author.title}</p>
          </div>
        </div>

        <div class="flex items-center space-x-2">
          <button 
            onclick="toggleBookmark(${article.id})" 
            class="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors flex items-center gap-1.5 text-xs font-bold"
          >
            <svg class="w-4 h-4 ${isBookmarked ? 'text-amber-500 fill-current' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
            </svg>
            <span class="hidden sm:inline">${isBookmarked ? 'Saved' : 'Save'}</span>
          </button>
          <button 
            onclick="shareArticle('${article.title}')" 
            class="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
            Share
          </button>
        </div>
      </div>

      <!-- Hero Image -->
      <div class="my-8 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800">
        <img src="${article.imageUrl}" alt="${article.title}" class="w-full h-[360px] sm:h-[480px] object-cover" />
      </div>
    `;
  }

  // 2. SECOND: Table of Contents
  const tocContainer = document.getElementById("article-table-of-contents");
  if (tocContainer && article.toc && article.toc.length > 0) {
    tocContainer.innerHTML = `
      <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 my-8">
        <div class="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 font-display font-bold text-sm uppercase tracking-wider mb-3">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
          <span>Table of Contents</span>
        </div>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
          ${article.toc.map(item => `
            <li>
              <a href="#${item.id}" class="toc-link hover:text-emerald-600 block py-0.5">
                ${item.title}
              </a>
            </li>
          `).join("")}
        </ul>
      </div>
    `;
  }

  // 3. THIRD: Full Content
  const contentContainer = document.getElementById("article-full-content");
  if (contentContainer) {
    contentContainer.innerHTML = article.content;
  }

  // 4. FOURTH: Tags Section
  const tagsContainer = document.getElementById("article-tags-section");
  if (tagsContainer) {
    tagsContainer.innerHTML = `
      <div class="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
        <span class="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 font-display">Tags & Topics:</span>
        ${(article.tags || []).map(t => `
          <a href="index.html" class="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors">
            #${t}
          </a>
        `).join("")}
      </div>
    `;
  }

  // 5. FIFTH: Author Section
  const authorContainer = document.getElementById("article-author-section");
  if (authorContainer) {
    authorContainer.innerHTML = `
      <div class="my-10 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div class="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-5">
          <img src="${author.avatar}" alt="${author.name}" class="w-20 h-20 rounded-full object-cover border-2 border-emerald-600 shadow-sm flex-shrink-0" />
          <div class="flex-1">
            <h3 class="font-display font-bold text-lg text-slate-900 dark:text-white">
              ${author.name}
            </h3>
            <p class="text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-2">${author.title} • ${author.bureau}</p>
            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">${author.bio}</p>
            <span class="text-xs font-semibold text-slate-500">📚 ${author.articlesCount} Published Guides</span>
          </div>
        </div>
      </div>
    `;
  }

  // 6. SIXTH: Related Blogs Section
  const relatedContainer = document.getElementById("article-related-blogs");
  if (relatedContainer) {
    const related = articlesData.filter(a => a.id !== article.id && (a.category === article.category || a.country === article.country)).slice(0, 3);
    relatedContainer.innerHTML = `
      <div class="my-14 pt-10 border-t border-slate-200 dark:border-slate-800">
        <div class="flex items-center justify-between mb-6">
          <h3 class="font-display text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Related Guides & Articles
          </h3>
          <a href="index.html" class="text-xs font-bold text-emerald-600 hover:underline font-display">View All Stories &rarr;</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${related.map(rel => `
            <div 
              class="group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md kf-card cursor-pointer flex flex-col transition-all"
              onclick="goToArticle(${rel.id})"
            >
              <div class="relative h-44 w-full kf-img-wrap overflow-hidden">
                <img src="${rel.imageUrl}" alt="${rel.title}" class="w-full h-full object-cover kf-img-zoom" loading="lazy" />
                <div class="absolute top-2.5 left-2.5">
                  <span class="px-2 py-0.5 text-[11px] font-bold uppercase rounded-full shadow-sm ${getCategoryBadge(rel.category)}">
                    ${rel.category}
                  </span>
                </div>
              </div>
              <div class="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span class="text-[11px] text-slate-400 font-mono block mb-1">${rel.date} • ${rel.readTime}</span>
                  <h4 class="text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
                    ${rel.title}
                  </h4>
                </div>
                <div class="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
                  <span>${rel.readTime}</span>
                  <span class="font-bold text-emerald-600">Read &rarr;</span>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  // 7. Sidebar
  const sidebarContainer = document.getElementById("article-sidebar");
  if (sidebarContainer) {
    sidebarContainer.innerHTML = `
      <!-- Share Tools -->
      <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
        <h4 class="font-display text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Share This Guide</h4>
        <div class="grid grid-cols-2 gap-2 text-xs font-semibold">
          <button onclick="shareToWhatsApp('${article.title}')" class="p-2.5 rounded-xl bg-emerald-500 text-white flex items-center justify-center gap-1.5 hover:bg-emerald-600 transition-colors">
            <span>WhatsApp</span>
          </button>
          <button onclick="shareArticle('${article.title}')" class="p-2.5 rounded-xl bg-slate-900 text-white flex items-center justify-center gap-1.5 hover:bg-slate-800 transition-colors">
            <span>Copy Link</span>
          </button>
        </div>
      </div>

      <!-- Trending in the UAE -->
      <div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 dark:border-slate-800">
          <h3 class="font-display text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">
            Trending Guides
          </h3>
          <span class="text-[11px] font-mono text-slate-400">TOP 5</span>
        </div>
        <div id="trending-articles-list" class="space-y-1">
          <!-- Injected dynamically -->
        </div>
      </div>

      <!-- Newsletter -->
      <div class="rounded-2xl border border-emerald-300 dark:border-emerald-800/60 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white p-6 shadow-xl">
        <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-200 block mb-1">Daily Updates</span>
        <h3 class="font-display text-lg font-black mb-2">
          KhaleejFlow Daily
        </h3>
        <p class="text-xs text-emerald-100 mb-4 leading-relaxed">
          Daily UAE services, metro updates, and residency guidelines.
        </p>
        <form onsubmit="handleNewsletterSubmit(event)" class="space-y-2">
          <input type="email" id="newsletter-email" placeholder="name@company.ae" required class="w-full px-3 py-2 text-xs rounded-xl bg-white text-slate-900 placeholder-slate-400 focus:outline-none" />
          <button type="submit" class="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-display font-black text-xs uppercase tracking-wider transition-all">
            Subscribe Free
          </button>
        </form>
      </div>
    `;
    renderTrendingNow();
  }

  // Reading progress scroll
  window.onscroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const bar = document.getElementById("reading-progress");
    if (bar) bar.style.width = scrolled + "%";
  };
}

function shareArticle(title) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href);
    showToast(`Guide link copied to clipboard!`, "success");
  } else {
    showToast("Link ready to share!", "info");
  }
}

function shareToWhatsApp(title) {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`${title} — Read on KhaleejFlow: `);
  window.open(`https://api.whatsapp.com/send?text=${text}${url}`, '_blank');
}

// Global DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSearch();
  updateBookmarkCountUI();

  if (window.location.pathname.includes("article.html") || document.getElementById("article-title-header")) {
    initArticlePage();
    return;
  }

  // Homepage
  if (document.getElementById("hero-featured-grid")) {
    renderHero();
    renderFinanceSection();
    renderTransportSection();
    renderAutomotiveSection();
    renderRealEstateSection();
    renderAreaGuidesSection();
    renderAuthorsSection();
    renderPopularTopics();
    renderTrendingNow();

    // Check URL category or search query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get("category");
    const searchParam = urlParams.get("search");
    if (catParam) {
      setCategory(catParam);
    } else if (searchParam) {
      filterByTopic(searchParam);
    } else {
      renderFeedArticles();
    }
  }
});
