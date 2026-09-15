import { useState } from "react";

const translations = {
  en: {
    back: "Back to Dashboard", save: "Save Record", download: "Download", view: "View Receipt", downloadReceipt: "Download Receipt",
    records: "Gram Panchayat Records Dashboard", addUpdate: "Add / Update Records", name: "Name", family: "Family Members", taxStatus: "Tax Status",
    receipts: "Receipts", notices: "Notices & Alerts", welfare: "Welfare Schemes", funding: "Funding Received Dashboard", tax: "Tax Collection Dashboard",
    houseId: "House ID", owner: "Owner", taxId: "Tax ID", type: "Type", amount: "Amount", status: "Status", village: "Village", purpose: "Purpose", date: "Date",
    propertyId: "Property ID", resident: "Resident", totalCollection: "Total Collection Today", totalPaid: "Total Paid", totalPending: "Total Pending",
    allocated: "Allocated Fund", received: "Received Fund", pending: "Pending Fund", scheme: "Scheme", beneficiary: "Beneficiary", action: "Action",
    panchayatOverview: "Panchayat Overview", healthStats: "Health & Vaccination Stats", development: "Development Indicators", fundingReceived: "Funding Received",
    totalResidents: "Total Residents", totalTax: "Total Tax Collected", checkups: "Health Checkups", perVillage: "Funding Received per Village", clickView: "Click to view details", clickManage: "Click to manage",
    home: "Home", schemes: "Schemes", news: "News", faq: "FAQ", about: "About", logout: "Logout", adminWelcome: "Welcome, Admin", paid: "Paid", pendingStatus: "Pending",
    viewDetails: "Click to view details", latest: "Latest example updates from Nirgudi Gram Panchayat.", exampleOverview: "Example overview for Tech Panchayat.",
    sampleSchemes: "Example schemes available in the selected panchayat.", sampleFaq: "Example answers for common resident questions.", sampleAbout: "A sample digital management portal for local government services.",
  },
  hi: {
    back: "डैशबोर्ड पर वापस", save: "रिकॉर्ड सहेजें", download: "डाउनलोड", view: "रसीद देखें", downloadReceipt: "रसीद डाउनलोड करें",
    records: "ग्राम पंचायत रिकॉर्ड डैशबोर्ड", addUpdate: "रिकॉर्ड जोड़ें / अपडेट करें", name: "नाम", family: "परिवार के सदस्य", taxStatus: "कर स्थिति",
    receipts: "रसीदें", notices: "सूचनाएं और अलर्ट", welfare: "कल्याण योजनाएं", funding: "प्राप्त धनराशि डैशबोर्ड", tax: "कर संग्रह डैशबोर्ड",
    houseId: "घर आईडी", owner: "मालिक", taxId: "कर आईडी", type: "प्रकार", amount: "राशि", status: "स्थिति", village: "गांव", purpose: "उद्देश्य", date: "दिनांक",
    propertyId: "संपत्ति आईडी", resident: "निवासी", totalCollection: "आज का कुल संग्रह", totalPaid: "कुल भुगतान", totalPending: "कुल बकाया",
    allocated: "आवंटित राशि", received: "प्राप्त राशि", pending: "बकाया राशि", scheme: "योजना", beneficiary: "लाभार्थी", action: "कार्य",
    panchayatOverview: "पंचायत अवलोकन", healthStats: "स्वास्थ्य और टीकाकरण आंकड़े", development: "विकास संकेतक", fundingReceived: "प्राप्त धनराशि",
    totalResidents: "कुल निवासी", totalTax: "कुल कर संग्रह", checkups: "स्वास्थ्य जांच", perVillage: "गांव के अनुसार प्राप्त धनराशि", clickView: "विवरण देखने के लिए क्लिक करें", clickManage: "प्रबंधित करने के लिए क्लिक करें",
    home: "होम", schemes: "योजनाएं", news: "समाचार", faq: "सामान्य प्रश्न", about: "हमारे बारे में", logout: "लॉग आउट", adminWelcome: "स्वागत है, एडमिन", paid: "भुगतान किया", pendingStatus: "बकाया",
    viewDetails: "विवरण देखें", latest: "निर्गुडी ग्राम पंचायत के नवीनतम अपडेट।", exampleOverview: "टेक पंचायत का उदाहरण अवलोकन।",
    sampleSchemes: "चयनित पंचायत में उपलब्ध उदाहरण योजनाएं।", sampleFaq: "निवासियों के सामान्य प्रश्नों के उदाहरण उत्तर।", sampleAbout: "स्थानीय सरकारी सेवाओं के लिए एक डिजिटल प्रबंधन पोर्टल।",
  },
  mr: {
    back: "डॅशबोर्डवर परत जा", save: "नोंद जतन करा", download: "डाउनलोड", view: "पावती पहा", downloadReceipt: "पावती डाउनलोड करा",
    records: "ग्रामपंचायत नोंद डॅशबोर्ड", addUpdate: "नोंदी जोडा / अपडेट करा", name: "नाव", family: "कुटुंबातील सदस्य", taxStatus: "कर स्थिती",
    receipts: "पावत्या", notices: "सूचना आणि इशारे", welfare: "कल्याण योजना", funding: "प्राप्त निधी डॅशबोर्ड", tax: "कर संकलन डॅशबोर्ड",
    houseId: "घर क्रमांक", owner: "मालक", taxId: "कर क्रमांक", type: "प्रकार", amount: "रक्कम", status: "स्थिती", village: "गाव", purpose: "उद्देश", date: "दिनांक",
    propertyId: "मालमत्ता क्रमांक", resident: "रहिवासी", totalCollection: "आजचे एकूण संकलन", totalPaid: "एकूण भरलेले", totalPending: "एकूण थकबाकी",
    allocated: "मंजूर निधी", received: "प्राप्त निधी", pending: "प्रलंबित निधी", scheme: "योजना", beneficiary: "लाभार्थी", action: "कृती",
    panchayatOverview: "पंचायत आढावा", healthStats: "आरोग्य आणि लसीकरण आकडे", development: "विकास निर्देशक", fundingReceived: "प्राप्त निधी",
    totalResidents: "एकूण रहिवासी", totalTax: "एकूण कर संकलन", checkups: "आरोग्य तपासण्या", perVillage: "गावानुसार प्राप्त निधी", clickView: "तपशील पाहण्यासाठी क्लिक करा", clickManage: "व्यवस्थापित करण्यासाठी क्लिक करा",
    home: "मुख्यपृष्ठ", schemes: "योजना", news: "बातम्या", faq: "सामान्य प्रश्न", about: "आमच्याबद्दल", logout: "बाहेर पडा", adminWelcome: "स्वागत आहे, अॅडमिन", paid: "भरले", pendingStatus: "प्रलंबित",
    viewDetails: "तपशील पहा", latest: "निर्गुडी ग्रामपंचायतीचे नवीन अपडेट.", exampleOverview: "टेक पंचायतचा उदाहरण आढावा.",
    sampleSchemes: "निवडलेल्या पंचायतमधील उपलब्ध उदाहरण योजना.", sampleFaq: "रहिवाशांच्या सामान्य प्रश्नांची उदाहरण उत्तरे.", sampleAbout: "स्थानिक सरकारी सेवांसाठी डिजिटल व्यवस्थापन पोर्टल.",
  },
};

export function useLanguage() {
  const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");
  return { language, t: translations[language] || translations.en, setLanguage };
}

export function getTranslations() {
  return translations[localStorage.getItem("language") || "en"] || translations.en;
}

const dataTranslations = {
  hi: {
    Paid: "भुगतान किया", Pending: "बकाया", Eligible: "पात्र", "Not Eligible": "पात्र नहीं",
    Approved: "स्वीकृत", Open: "खुला", Completed: "पूर्ण", Upcoming: "आगामी", Verification: "सत्यापन",
    House: "घर", Shop: "दुकान", Self: "स्वयं", Wife: "पत्नी", Daughter: "बेटी", Cow: "गाय", Goat: "बकरी",
    Vaccination: "टीकाकरण", "Health Checkup": "स्वास्थ्य जांच", "Covid Booster": "कोविड बूस्टर", "BP & Sugar": "ब्लड प्रेशर और शुगर",
    "Property Tax": "संपत्ति कर", "Water Tax": "जल कर", "Sewage Tax": "सीवेज कर", Yearly: "वार्षिक", Monthly: "मासिक",
    "Road Development": "सड़क विकास", "Water Supply": "जल आपूर्ति", "School Renovation": "स्कूल नवीनीकरण",
    "PM Awas Yojana": "पीएम आवास योजना", "Ayushman Bharat Health Scheme": "आयुष्मान भारत स्वास्थ्य योजना", "Ujjwala Yojana": "उज्ज्वला योजना", "Swachh Bharat Mission Subsidy": "स्वच्छ भारत मिशन सब्सिडी",
    "Gram Sabha Meeting at 10 AM": "सुबह 10 बजे ग्राम सभा बैठक", "Water Supply Maintenance Notice": "जल आपूर्ति रखरखाव सूचना",
    "Reminder: Tax due for Property P101 by 10th Oct": "संपत्ति P101 का कर 10 अक्टूबर तक जमा करें",
    "Health camp scheduled in Nirgudi on 15th Oct": "15 अक्टूबर को निर्गुडी में स्वास्थ्य शिविर",
    "WhatsApp alert: Animal vaccination camp next week": "अगले सप्ताह पशु टीकाकरण शिविर",
  },
  mr: {
    Paid: "भरले", Pending: "प्रलंबित", Eligible: "पात्र", "Not Eligible": "पात्र नाही",
    Approved: "मंजूर", Open: "खुले", Completed: "पूर्ण", Upcoming: "आगामी", Verification: "पडताळणी",
    House: "घर", Shop: "दुकान", Self: "स्वतः", Wife: "पत्नी", Daughter: "मुलगी", Cow: "गाय", Goat: "शेळी",
    Vaccination: "लसीकरण", "Health Checkup": "आरोग्य तपासणी", "Covid Booster": "कोविड बूस्टर", "BP & Sugar": "बीपी आणि साखर",
    "Property Tax": "मालमत्ता कर", "Water Tax": "पाणी कर", "Sewage Tax": "सांडपाणी कर", Yearly: "वार्षिक", Monthly: "मासिक",
    "Road Development": "रस्ता विकास", "Water Supply": "पाणीपुरवठा", "School Renovation": "शाळा नूतनीकरण",
    "PM Awas Yojana": "पीएम आवास योजना", "Ayushman Bharat Health Scheme": "आयुष्मान भारत आरोग्य योजना", "Ujjwala Yojana": "उज्ज्वला योजना", "Swachh Bharat Mission Subsidy": "स्वच्छ भारत मिशन अनुदान",
    "Gram Sabha Meeting at 10 AM": "सकाळी १० वाजता ग्रामसभा बैठक", "Water Supply Maintenance Notice": "पाणीपुरवठा देखभाल सूचना",
    "Reminder: Tax due for Property P101 by 10th Oct": "P101 मालमत्तेचा कर १० ऑक्टोबरपर्यंत भरा",
    "Health camp scheduled in Nirgudi on 15th Oct": "१५ ऑक्टोबरला निर्गुडी येथे आरोग्य शिबिर",
    "WhatsApp alert: Animal vaccination camp next week": "पुढील आठवड्यात पशु लसीकरण शिबिर",
  },
};

export function translateData(value, language = localStorage.getItem("language") || "en") {
  return dataTranslations[language]?.[value] || value;
}
