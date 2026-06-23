const images1=[
"inno1.png",
"inno2.png",
"inno3.png",
"inno4.png"
];

let currentIndex1 = 0;

const sliderImage1 = document.getElementById("sliderImage1");
const stepCounter1 = document.getElementById("stepCounter1");
const prevBtn1 = document.getElementById("prevBtn1");
const nextBtn1 = document.getElementById("nextBtn1");

function updateSlider1() {
    
    sliderImage1.src = images1[currentIndex1];
    stepCounter1.textContent = `Step ${currentIndex1 + 1} / ${images1.length}`;

    prevBtn1.disabled = currentIndex1 === 0;
    nextBtn1.disabled = currentIndex1 === images1.length - 1;
}

prevBtn1.addEventListener("click", () => {
    if (currentIndex1 > 0) {
        currentIndex1--;
        updateSlider1();
    }
});

nextBtn1.addEventListener("click", () => {
    if (currentIndex1 < images1.length - 1) {
        currentIndex1++;
        updateSlider1();
    }
});

updateSlider1 ();

const images2=[
"inno5.png",
"inno6.png"
];

let currentIndex2 = 0;

const sliderImage2 = document.getElementById("sliderImage2");
const stepCounter2 = document.getElementById("stepCounter2");
const prevBtn2 = document.getElementById("prevBtn2");
const nextBtn2 = document.getElementById("nextBtn2");

function updateSlider2() {
    
    sliderImage2.src = images2[currentIndex2];
    stepCounter2.textContent = `Step ${currentIndex2 + 1} / ${images2.length}`;

    prevBtn2.disabled = currentIndex2 === 0;
    nextBtn2.disabled = currentIndex2 === images2.length - 1;
}

prevBtn2.addEventListener("click", () => {
    if (currentIndex2 > 0) {
        currentIndex2--;
        updateSlider2();
    }
});

nextBtn2.addEventListener("click", () => {
    if (currentIndex2 < images2.length - 1) {
        currentIndex2++;
        updateSlider2();
    }
});

updateSlider2 ();


const images3=[
"Visit 1.png",
"Visit 2.png",
"Visit 3.png",
"Visit 4.png"
];

let currentIndex3 = 0;

const sliderImage3 = document.getElementById("sliderImage3");
const stepCounter3 = document.getElementById("stepCounter3");
const prevBtn3 = document.getElementById("prevBtn3");
const nextBtn3 = document.getElementById("nextBtn3");

function updateSlider3() {
    
    sliderImage3.src = images3[currentIndex3];
    stepCounter3.textContent = `Step ${currentIndex3 + 1} / ${images3.length}`;

        if (images3[currentIndex3] === "Visit 4.png") {
        sliderImage3.style.width = "400px";
        sliderImage3.style.height = "700px";
    } else {
        sliderImage3.style.width = "1700px";
        sliderImage3.style.height = "700px";
    }

    prevBtn3.disabled = currentIndex3 === 0;
    nextBtn3.disabled = currentIndex3 === images3.length - 1;
}

prevBtn3.addEventListener("click", () => {
    if (currentIndex3 > 0) {
        currentIndex3--;
        updateSlider3();
    }
});

nextBtn3.addEventListener("click", () => {
    if (currentIndex3 < images3.length - 1) {
        currentIndex3++;
        updateSlider3();
    }
});

updateSlider3 ();


const images4=[
"inno1.png",
"Manual 1.png",
"manual 2.png",
"manual 3.png",
"manual 4.png"
];

let currentIndex4 = 0;

const sliderImage4 = document.getElementById("sliderImage4");
const stepCounter4 = document.getElementById("stepCounter4");
const prevBtn4 = document.getElementById("prevBtn4");
const nextBtn4 = document.getElementById("nextBtn4");

function updateSlider4() {
    
    sliderImage4.src = images4[currentIndex4];
    stepCounter4.textContent = `Step ${currentIndex4 + 1} / ${images4.length}`;

    prevBtn4.disabled = currentIndex4 === 0;
    nextBtn4.disabled = currentIndex4 === images4.length - 1;
}

prevBtn4.addEventListener("click", () => {
    if (currentIndex4 > 0) {
        currentIndex4--;
        updateSlider4();
    }
});

nextBtn4.addEventListener("click", () => {
    if (currentIndex4 < images4.length - 1) {
        currentIndex4++;
        updateSlider4();
    }
});

updateSlider4 ();



const images5=[
"inno1.png",
"Manual 1.png",
"manual 2.png"

];

let currentIndex5 = 0;

const sliderImage5 = document.getElementById("sliderImage5");
const stepCounter5 = document.getElementById("stepCounter5");
const prevBtn5 = document.getElementById("prevBtn5");
const nextBtn5 = document.getElementById("nextBtn5");

function updateSlider5() {
    
    sliderImage5.src = images5[currentIndex5];
    stepCounter5.textContent = `Step ${currentIndex5 + 1} / ${images5.length}`;

    prevBtn5.disabled = currentIndex5 === 0;
    nextBtn5.disabled = currentIndex5 === images5.length - 1;
}

prevBtn5.addEventListener("click", () => {
    if (currentIndex5 > 0) {
        currentIndex5--;
        updateSlider5();
    }
});

nextBtn5.addEventListener("click", () => {
    if (currentIndex5 < images5.length - 1) {
        currentIndex5++;
        updateSlider5();
    }
});

updateSlider5 ();

const images6=[
"inno1.png",
"Manual 1.png",
"manual 2.png"

];

let currentIndex6 = 0;

const sliderImage6 = document.getElementById("sliderImage6");
const stepCounter6 = document.getElementById("stepCounter6");
const prevBtn6 = document.getElementById("prevBtn6");
const nextBtn6 = document.getElementById("nextBtn6");

function updateSlider6() {
    
    sliderImage6.src = images6[currentIndex6];
    stepCounter6.textContent = `Step ${currentIndex6 + 1} / ${images6.length}`;

    prevBtn6.disabled = currentIndex6 === 0;
    nextBtn6.disabled = currentIndex6 === images6.length - 1;
}

prevBtn6.addEventListener("click", () => {
    if (currentIndex6 > 0) {
        currentIndex6--;
        updateSlider6();
    }
});

nextBtn6.addEventListener("click", () => {
    if (currentIndex6 < images6.length - 1) {
        currentIndex6++;
        updateSlider6();
    }
});

updateSlider6 ();


const images7=[
"inno1.png",
"Manual 1.png",
"manual 2.png",
"manual 7.png"

];

let currentIndex7 = 0;

const sliderImage7 = document.getElementById("sliderImage7");
const stepCounter7 = document.getElementById("stepCounter7");
const prevBtn7 = document.getElementById("prevBtn7");
const nextBtn7 = document.getElementById("nextBtn7");

function updateSlider7() {
    
    sliderImage7.src = images7[currentIndex7];
    stepCounter7.textContent = `Step ${currentIndex7 + 1} / ${images7.length}`;

      if (images7[currentIndex7] === "manual 7.png") {
        sliderImage7.style.width = "1500px";
        sliderImage7.style.height = "400px";
    } else {
        sliderImage7.style.width = "1700px";
        sliderImage7.style.height = "700px";
    }


    prevBtn7.disabled = currentIndex7 === 0;
    nextBtn7.disabled = currentIndex7 === images7.length - 1;
}

prevBtn7.addEventListener("click", () => {
    if (currentIndex7 > 0) {
        currentIndex7--;
        updateSlider7();
    }
});

nextBtn7.addEventListener("click", () => {
    if (currentIndex7 < images7.length - 1) {
        currentIndex7++;
        updateSlider7();
    }
});

updateSlider7 ();



const images8=[
"inno1.png",
"inno2.png",
"inno3.png",
"inno5.png",
"inno6.png",
"Manual-contractor.png"

];

let currentIndex8 = 0;

const sliderImage8 = document.getElementById("sliderImage8");
const stepCounter8 = document.getElementById("stepCounter8");
const prevBtn8 = document.getElementById("prevBtn8");
const nextBtn8 = document.getElementById("nextBtn8");

function updateSlider8() {
    
    sliderImage8.src = images8[currentIndex8];
    stepCounter8.textContent = `Step ${currentIndex8 + 1} / ${images8.length}`;

    prevBtn8.disabled = currentIndex8 === 0;
    nextBtn8.disabled = currentIndex8 === images8.length - 1;
}

prevBtn8.addEventListener("click", () => {
    if (currentIndex8 > 0) {
        currentIndex8--;
        updateSlider8();
    }
});

nextBtn8.addEventListener("click", () => {
    if (currentIndex8 < images8.length - 1) {
        currentIndex8++;
        updateSlider8();
    }
});

updateSlider8 ();

const images9=[
"inno1.png",
"Manual 1.png",
"manual 2.png",
"Manual 8.png"

];

let currentIndex9 = 0;

const sliderImage9 = document.getElementById("sliderImage9");
const stepCounter9 = document.getElementById("stepCounter9");
const prevBtn9 = document.getElementById("prevBtn9");
const nextBtn9 = document.getElementById("nextBtn9");

function updateSlider9() {
    
    sliderImage9.src = images9[currentIndex9];
    stepCounter9.textContent = `Step ${currentIndex9 + 1} / ${images9.length}`;

    prevBtn9.disabled = currentIndex9 === 0;
    nextBtn9.disabled = currentIndex9 === images9.length - 1;
}

prevBtn9.addEventListener("click", () => {
    if (currentIndex9 > 0) {
        currentIndex9--;
        updateSlider9();
    }
});

nextBtn9.addEventListener("click", () => {
    if (currentIndex9 < images9.length - 1) {
        currentIndex9++;
        updateSlider9();
    }
});

updateSlider9 ();


const images10=[
"inno1.png",
"inno2.png",
"inno3.png",
"inno7.png",
"inno8.png"

];

let currentIndex10 = 0;

const sliderImage10 = document.getElementById("sliderImage10");
const stepCounter10 = document.getElementById("stepCounter10");
const prevBtn10 = document.getElementById("prevBtn10");
const nextBtn10 = document.getElementById("nextBtn10");

function updateSlider10() {
    
    sliderImage10.src = images10[currentIndex10];
    stepCounter10.textContent = `Step ${currentIndex10 + 1} / ${images10.length}`;

    prevBtn10.disabled = currentIndex10 === 0;
    nextBtn10.disabled = currentIndex10 === images10.length - 1;
}

prevBtn10.addEventListener("click", () => {
    if (currentIndex10 > 0) {
        currentIndex10--;
        updateSlider10();
    }
});

nextBtn10.addEventListener("click", () => {
    if (currentIndex10 < images10.length - 1) {
        currentIndex10++;
        updateSlider10();
    }
});

updateSlider10 ();

const images11=[
"inno1.png",    
"inno2.png",
"inno3.png",
"inno5.png",
"Ex-Ba-Reg.png"

];

let currentIndex11 = 0;

const sliderImage11 = document.getElementById("sliderImage11");
const stepCounter11 = document.getElementById("stepCounter11");
const prevBtn11 = document.getElementById("prevBtn11");
const nextBtn11 = document.getElementById("nextBtn11");

function updateSlider11() {
    
    sliderImage11.src = images11[currentIndex11];
    stepCounter11.textContent = `Step ${currentIndex11 + 1} / ${images11.length}`;

    prevBtn11.disabled = currentIndex11 === 0;
    nextBtn11.disabled = currentIndex11 === images11.length - 1;
}

prevBtn11.addEventListener("click", () => {
    if (currentIndex11 > 0) {
        currentIndex11--;
        updateSlider11();
    }
});

nextBtn11.addEventListener("click", () => {
    if (currentIndex11 < images11.length - 1) {
        currentIndex11++;
        updateSlider11();
    }
});

updateSlider11 ();




const images12=[
"inno1.png",  
"inno2.png",    
"inno3.png",
"Opp-Exh.png",
"Opp-Exh2.png",
"Opp-Exh3.png"

];

let currentIndex12 = 0;

const sliderImage12 = document.getElementById("sliderImage12");
const stepCounter12 = document.getElementById("stepCounter12");
const prevBtn12 = document.getElementById("prevBtn12");
const nextBtn12 = document.getElementById("nextBtn12");

function updateSlider12() {
    
    sliderImage12.src = images12[currentIndex12];
    stepCounter12.textContent = `Step ${currentIndex12 + 1} / ${images12.length}`;

    prevBtn12.disabled = currentIndex12 === 0;
    nextBtn12.disabled = currentIndex12 === images12.length - 1;
}

prevBtn12.addEventListener("click", () => {
    if (currentIndex12 > 0) {
        currentIndex12--;
        updateSlider12();
    }
});

nextBtn12.addEventListener("click", () => {
    if (currentIndex12 < images12.length - 1) {
        currentIndex12++;
        updateSlider12();
    }
});

updateSlider12 ();



const images13=[
"Opp-Exh4.png",
"Opp-Exh2.png",
"Opp-Exh3.png"

];

let currentIndex13 = 0;

const sliderImage13 = document.getElementById("sliderImage13");
const stepCounter13 = document.getElementById("stepCounter13");
const prevBtn13 = document.getElementById("prevBtn13");
const nextBtn13 = document.getElementById("nextBtn13");

function updateSlider13() {
    
    sliderImage13.src = images13[currentIndex13];
    stepCounter13.textContent = `Step ${currentIndex13 + 1} / ${images13.length}`;

    prevBtn13.disabled = currentIndex13 === 0;
    nextBtn13.disabled = currentIndex13 === images13.length - 1;
}

prevBtn13.addEventListener("click", () => {
    if (currentIndex13 > 0) {
        currentIndex13--;
        updateSlider13();
    }
});

nextBtn13.addEventListener("click", () => {
    if (currentIndex13 < images13.length - 1) {
        currentIndex13++;
        updateSlider13();
    }
});

updateSlider13 ();


const images14=[
"inno1.png",
"inno2.png",
"inno3.png",
"inno9.png"
];

let currentIndex14 = 0;

const sliderImage14 = document.getElementById("sliderImage14");
const stepCounter14 = document.getElementById("stepCounter14");
const prevBtn14 = document.getElementById("prevBtn14");
const nextBtn14 = document.getElementById("nextBtn14");

function updateSlider14() {
    
    sliderImage14.src = images14[currentIndex14];
    stepCounter14.textContent = `Step ${currentIndex14 + 1} / ${images14.length}`;

    prevBtn14.disabled = currentIndex14 === 0;
    nextBtn14.disabled = currentIndex14 === images14.length - 1;
}

prevBtn14.addEventListener("click", () => {
    if (currentIndex14 > 0) {
        currentIndex14--;
        updateSlider14();
    }
});

nextBtn14.addEventListener("click", () => {
    if (currentIndex14 < images14.length - 1) {
        currentIndex14++;
        updateSlider14();
    }
});

updateSlider14 ();



const images15=[
"inno1.png",
"Manual 1.png",
"manual 2.png",
"manual 3.png",
"Forklift order.png",
];

let currentIndex15 = 0;

const sliderImage15 = document.getElementById("sliderImage15");
const stepCounter15 = document.getElementById("stepCounter15");
const prevBtn15 = document.getElementById("prevBtn15");
const nextBtn15 = document.getElementById("nextBtn15");

function updateSlider15() {
    
    sliderImage15.src = images15[currentIndex15];
    stepCounter15.textContent = `Step ${currentIndex15 + 1} / ${images15.length}`;

    prevBtn15.disabled = currentIndex15 === 0;
    nextBtn15.disabled = currentIndex15 === images15.length - 1;
}

prevBtn15.addEventListener("click", () => {
    if (currentIndex15 > 0) {
        currentIndex15--;
        updateSlider15();
    }
});

nextBtn15.addEventListener("click", () => {
    if (currentIndex15 < images15.length - 1) {
        currentIndex15++;
        updateSlider15();
    }
});

updateSlider15 ();


const images16=[
"inno1.png",
"inno11.png"
];

let currentIndex16 = 0;

const sliderImage16 = document.getElementById("sliderImage16");
const stepCounter16 = document.getElementById("stepCounter16");
const prevBtn16 = document.getElementById("prevBtn16");
const nextBtn16 = document.getElementById("nextBtn16");

function updateSlider16() {
    
    sliderImage16.src = images16[currentIndex16];
    stepCounter16.textContent = `Step ${currentIndex16 + 1} / ${images16.length}`;

    prevBtn16.disabled = currentIndex16 === 0;
    nextBtn16.disabled = currentIndex16 === images16.length - 1;
}

prevBtn16.addEventListener("click", () => {
    if (currentIndex16 > 0) {
        currentIndex16--;
        updateSlider16();
    }
});

nextBtn16.addEventListener("click", () => {
    if (currentIndex16 < images16.length - 1) {
        currentIndex16++;
        updateSlider16();
    }
});

updateSlider16 ();

const images17=[
"inno1.png",
"contractor1.png",
"contractor2.png",
"contractor3.png",
"contractor4.png",
"contractor5.png",
"contractor6.png",
"contractor7.png"
];

let currentIndex17 = 0;

const sliderImage17 = document.getElementById("sliderImage17");
const stepCounter17 = document.getElementById("stepCounter17");
const prevBtn17 = document.getElementById("prevBtn17");
const nextBtn17 = document.getElementById("nextBtn17");

function updateSlider17() {
    
    sliderImage17.src = images17[currentIndex17];
    stepCounter17.textContent = `Step ${currentIndex17 + 1} / ${images17.length}`;

    prevBtn17.disabled = currentIndex17 === 0;
    nextBtn17.disabled = currentIndex17 === images17.length - 1;
}

prevBtn17.addEventListener("click", () => {
    if (currentIndex17 > 0) {
        currentIndex17--;
        updateSlider17();
    }
});

nextBtn17.addEventListener("click", () => {
    if (currentIndex17 < images17.length - 1) {
        currentIndex17++;
        updateSlider17();
    }
});

updateSlider17 ();

// Search functionality for knowledge base - Enhanced with keyword search
function searchContent() {
    const input = document.getElementById('searchInput');
    const searchTerm = input.value.toLowerCase().trim();
    const resultsDiv = document.getElementById('searchResults');
    
    if (searchTerm.length < 2) {
        resultsDiv.style.display = 'none';
        return;
    }
    
    // Get all content sections (h1 elements with their content)
    const contentSections = document.querySelectorAll('h1');
    const results = [];
    
    // Pre-defined keywords for each category to improve search relevance
    const keywordMap = {
        'visit participation': ['register', 'ticket', 'registration', 'visitor', 'attend', 'sign up', 'book', 'category', 'categories'],
        'exhibitor participation': ['exhibit', 'stand', 'booth', 'booking', 'startup', 'register', 'participation'],
        'Visitor resource': ['location', 'venue', 'shuttle', 'bus', 'transport', 'parking', 'accommodation', 'hotel', 'flight', 'show time', 'plan', 'visit', 'resources'],
        'floorplan request': ['floor plan', 'floorplan', 'layout', 'map', 'dimension', 'technical', 'venue'],
        'List': ['exhibitor list', 'company list', 'booth number', 'exhibitors'],
        'media section': ['press', 'media', 'partner', 'badge', 'coverage', 'journalist', 'news', 'article'],
        'Additional Operation contact': ['operation contact', 'add contact', 'update contact', 'change contact', 'secondary contact'],
        'speaker': ['speak', 'presentation', 'session', 'conference', 'speaker form'],
        'CME': ['cme', 'credit', 'certificate', 'attendance', 'hours', 'competition'],
        'QR': ['badge', 'qr', 'barcode', 'confirmation', 'email', 'visit platform', 'app'],
        'Update-list': ['update list', 'correct list', 'exhibitor list', 'edit profile', 'amend information'],
        'Catering': ['catering', 'food', 'order', 'supplier', 'manual', 'cater'],
        'Visa': ['visa', 'invitation', 'travel', 'immigration', 'letter'],
        'EXCatering': ['external catering', 'outside catering', 'tech team', 'on-stand activity'],
        'Display': ['display name', 'company name', 'change name', 'rename', 'exhibitor list name'],
        'sponsorship': ['sponsor', 'sponsorship', 'partnership', 'brochure', 'form'],
        'Agenda': ['agenda', 'schedule', 'timeline', 'program', 'session'],
        'Rigging': ['rigging', 'hang', 'banner', 'board', 'suspension', 'overhead'],
        'Stand-design': ['stand design', 'design submission', 'space only', 'approval', 'esm', 'tech team'],
        'audio-video': ['audio', 'video', 'av', 'equipment', 'tv', 'screen', 'sound', 'speaker'],
        'Electricity': ['electricity', 'power', 'socket', 'lighting', 'electrical', 'supply'],
        'Graphic': ['graphic', 'poster', 'sticker', 'print', 'signage', 'shell scheme'],
        'Invoice': ['invoice', 'bill', 'payment', 'receipt', 'visitor'],
        'Meeting room': ['meeting room', 'agreement room', 'book room', 'conference room', 'sales team'],
        'nominate contractor': ['contractor', 'nominate', 'appoint', 'construction', 'build'],
        'Time table': ['timetable', 'schedule', 'build up', 'break down', 'setup', 'teardown', 'hours'],
        'Extra badges': ['extra badges', 'additional badges', 'more badges', 'extend allotment'],
        'Extra Contact': ['additional contact', 'second contact', 'extra contact person'],
        'confirmation': ['confirmation', 'acknowledge', 'confirm', 'received'],
        'Confrence-content': ['conference content', 'session content', 'agenda content', 'presentation'],
        'Contractor-badge': ['contractor badge', 'wrist band', 'access', 'contractor registration'],
        'Exhibitor-badge': ['exhibitor badge', 'register staff', 'badge registration', 'multiple registration'],
        'Exhibitor-Cancellation': ['cancel', 'cancellation', 'withdraw', 'account manager'],
        'Exhibitor-Invoice': ['exhibitor invoice', 'booth invoice', 'payment', 'account manager'],
        'On-stand': ['on-stand', 'activity', 'camera', 'entertainment', 'special activity'],
        'Registration Tech Issue': ['tech issue', 'registration problem', 'badge error', 'technical support', 'reg team'],
        'Visa-Exhibitor': ['exhibitor visa', 'participation letter', 'travel letter'],
        'Job-request': ['job', 'career', 'employment', 'vacancy', 'recruitment', 'tahaluf careers'],
        'Partnership': ['partnership', 'supplier', 'vendor', 'proposal', 'collaboration'],
        'Exhbitor Manual': ['customer centre', 'portal', 'manual', 'credentials', 'password', 'username', 'login'],
        'On-site order': ['on-site', 'forklift', 'logistics', 'delivery', 'order onsite'],
        'Photographer': ['photographer', 'photo', 'camera', 'picture', 'filming'],
        'Company-profile': ['company profile', 'logo', 'update profile', 'edit company', 'app profile'],
        'Lead-Capture': ['lead capture', 'lead retrieval', 'scan badge', 'qr code', 'lead rating'],
        'Stand sharing': ['stand sharing', 'share booth', 'subletting', 'co-exhibitor']
    };
    
    contentSections.forEach(section => {
        const heading = section;
        const headingText = heading.textContent || heading.innerText;
        const content = heading.nextElementSibling;
        const id = heading.getAttribute('id');
        
        // Get the full content text
        let fullText = headingText;
        if (content && content.classList && content.classList.contains('content')) {
            const contentText = content.textContent || content.innerText;
            fullText += ' ' + contentText;
        }
        
        // Calculate relevance score
        let relevanceScore = 0;
        let matchedKeywords = [];
        
        // Check for exact phrase match (highest relevance)
        if (fullText.toLowerCase().includes(searchTerm)) {
            relevanceScore += 10;
        }
        
        // Check for word matches
        const searchWords = searchTerm.split(/\s+/);
        searchWords.forEach(word => {
            if (word.length > 1) {
                if (fullText.toLowerCase().includes(word)) {
                    relevanceScore += 3;
                }
            }
        });
        
        // Check keyword map for this section
        if (id && keywordMap[id]) {
            keywordMap[id].forEach(keyword => {
                if (searchTerm.includes(keyword) || keyword.includes(searchTerm)) {
                    relevanceScore += 5;
                    matchedKeywords.push(keyword);
                }
                // Check each search word against keywords
                searchWords.forEach(word => {
                    if (keyword.includes(word) && word.length > 2) {
                        relevanceScore += 4;
                        matchedKeywords.push(keyword);
                    }
                });
            });
        }
        
        // Check HTML content (images, links, etc.)
        if (content) {
            const htmlContent = content.innerHTML.toLowerCase();
            if (htmlContent.includes(searchTerm)) {
                relevanceScore += 2;
            }
        }
        
        // If relevance score is above threshold, add to results
        if (relevanceScore > 2) {
            // Extract a snippet of relevant text
            let snippet = '';
            const fullTextLower = fullText.toLowerCase();
            const termIndex = fullTextLower.indexOf(searchTerm);
            
            if (termIndex >= 0) {
                const start = Math.max(0, termIndex - 60);
                const end = Math.min(fullText.length, termIndex + searchTerm.length + 60);
                snippet = '...' + fullText.substring(start, end) + '...';
            } else if (matchedKeywords.length > 0) {
                // Show matched keywords if no exact match
                snippet = `🔍 Matched keywords: ${matchedKeywords.slice(0, 3).join(', ')}...`;
            } else {
                snippet = fullText.substring(0, 150) + '...';
            }
            
            results.push({
                title: headingText,
                snippet: snippet,
                id: id,
                element: heading,
                relevance: relevanceScore,
                matchedKeywords: matchedKeywords
            });
        }
    });
    
    // Also search through agenda links
    const agendaLinks = document.querySelectorAll('.agenda-links-v, .agenda-links-E, .agenda-links-E-visa');
    agendaLinks.forEach(link => {
        const linkText = link.textContent || link.innerText;
        const href = link.getAttribute('href');
        const targetId = href ? href.substring(1) : null;
        
        let relevanceScore = 0;
        
        if (linkText.toLowerCase().includes(searchTerm)) {
            relevanceScore += 8;
        } else {
            const searchWords = searchTerm.split(/\s+/);
            searchWords.forEach(word => {
                if (word.length > 1 && linkText.toLowerCase().includes(word)) {
                    relevanceScore += 2;
                }
            });
        }
        
        if (relevanceScore > 0) {
            results.push({
                title: linkText,
                snippet: 'Quick link - Click to navigate',
                id: targetId,
                element: link,
                isLink: true,
                relevance: relevanceScore
            });
        }
    });
    
    // Sort results by relevance score (highest first)
    results.sort((a, b) => b.relevance - a.relevance);
    
    // Display results
    if (results.length > 0) {
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `
            <div class="search-summary">Found ${results.length} result${results.length !== 1 ? 's' : ''}</div>
            ${results.map(result => `
                <div class="search-result-item" onclick="goToSection('${result.id}')">
                    <h4>${highlightText(result.title, searchTerm)}</h4>
                    <p>${highlightText(result.snippet, searchTerm)}</p>
                    ${result.matchedKeywords && result.matchedKeywords.length > 0 ? 
                        `<div class="search-keywords">🏷️ ${result.matchedKeywords.slice(0, 3).map(k => highlightText(k, searchTerm)).join(', ')}</div>` : ''}
                </div>
            `).join('')}
        `;
    } else {
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `
            <div class="no-results">
                <span>🔍 No results found for "${escapeHtml(searchTerm)}"</span><br>
                <small>Try using different keywords or check for typos</small>
                <div class="suggestions">
                    <strong>Suggestions:</strong><br>
                    • Use more general terms<br>
                    • Check spelling<br>
                    • Try related keywords (e.g., "badge" instead of "QR code")
                </div>
            </div>
        `;
    }
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Helper function to highlight matching text
function highlightText(text, searchTerm) {
    if (!searchTerm || searchTerm.length < 2) return text;
    
    // Escape special regex characters in search term
    const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// Navigate to section when a result is clicked
function goToSection(id) {
    if (!id) return;
    
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        
        // Clear search and hide results
        document.getElementById('searchInput').value = '';
        document.getElementById('searchResults').style.display = 'none';
    }
}

// Close search results when clicking outside
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer && !searchContainer.contains(event.target)) {
        const resultsDiv = document.getElementById('searchResults');
        if (resultsDiv) {
            resultsDiv.style.display = 'none';
        }
    }
});

// Optional: Add keyboard shortcut (Ctrl+K or Cmd+K) to focus search
document.addEventListener('keydown', function(event) {
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape key to clear search
    if (event.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        const resultsDiv = document.getElementById('searchResults');
        if (searchInput) {
            searchInput.value = '';
        }
        if (resultsDiv) {
            resultsDiv.style.display = 'none';
        }
    }
});

// Optional: Add debounce for better performance
let searchTimeout;
function debouncedSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(searchContent, 300);
}

// Update the onkeyup event to use debounced search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.setAttribute('onkeyup', 'debouncedSearch()');
    }
});




// Email Templates Database — Deduplicated Version
// Alternatives kept ONLY when content genuinely differs from the main template.

const emailTemplates = {

  /* ─────────────────────────────────────────────────────────────
     VISITOR REGISTRATION
     All 3 originals were structurally identical → no alternatives
  ───────────────────────────────────────────────────────────── */
  'visit participation': {
    title: 'Visitor Registration',
    template: `Dear [Customer Name],

Thank you for your interest in registering for [EVENT NAME].

Please use the following link to register for your visitor ticket:
[REGISTRATION_LINK]

Should you need any assistance with the registration process, please don't hesitate to reach out.`
  },

  /* ─────────────────────────────────────────────────────────────
     EXHIBITOR STAND BOOKING
     Alt kept: startup-exhibitor version (adds a second link)
  ───────────────────────────────────────────────────────────── */
  'exhibitor participation': {
    title: 'Exhibitor Stand Booking',
    template: `Dear [Customer Name],

Thank you for your interest in exhibiting at [EVENT NAME].

Please use the following link to book your stand:
[EXHIBITOR_BOOKING_LINK]

A member of our sales team will be in touch with you shortly to discuss available options and pricing.`,
    alternatives: [
      {
        title: 'With Startup Exhibitor Link',
        template: `Dear [Customer Name],

Thank you for your interest in exhibiting at [EVENT NAME].

Please use the following link to submit your details:
[EXHIBITOR_BOOKING_LINK]

For startup exhibitors, please use this link instead:
[STARTUP_EXHIBITOR_LINK]

A member of our sales team will be in touch with you shortly to discuss available options and pricing.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     VISITOR RESOURCES
     All 3 originals have genuinely different content → all kept
     (different links, different sections highlighted per event)
  ───────────────────────────────────────────────────────────── */
  'Visitor resource': {
    title: 'Visitor Resources',
    template: `Dear [Customer Name],

Thank you for your inquiry about visitor resources for [EVENT NAME].

Please visit our "Plan Your Visit" page for information about:
- Location and venue details
- Shuttle bus schedules
- Parking information
- Accommodation options
- Event show times

Link: [VISITOR_RESOURCES_LINK]

Should you need any further assistance, please let us know.`,
    alternatives: [
      {
        title: 'Generic — Info Not Yet Live',
        template: `Dear [Customer Name],

Thank you for your inquiry about visitor resources for [EVENT NAME].

Please note that visitor resource information (location, shuttle bus, floor plan, accommodation, event show times, parking) is usually updated closer to the event date. We recommend checking the official website's "Plan Your Visit" page periodically for updates.

Should you need any further assistance, please let us know.`
      },
      {
        title: 'Extended — With FAQ, Accommodation & Shuttle Links',
        template: `Dear [Customer Name],

Thank you for your inquiry about visitor resources for [EVENT NAME].

Please visit our "Plan Your Visit" page:
[VISITOR_RESOURCES_LINK]

Additional useful links:
- Event show times / FAQ: [FAQ_LINK]
- Accommodation: [ACCOMMODATION_LINK]
- Shuttle bus: [SHUTTLE_BUS_LINK]

Should you need any further assistance, please let us know.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     FLOORPLAN REQUEST
     Alt kept: "link not live yet" version
  ───────────────────────────────────────────────────────────── */
  'floorplan request': {
    title: 'Floorplan Request',
    template: `Dear [Customer Name],

Thank you for your floorplan inquiry.

The venue floorplan can be viewed on our official website and mobile app:
[FLOORPLAN_LINK]

For exhibitors requiring the technical floorplan, please access your customer centre portal where these documents are available.

If you need assistance accessing your customer centre, please provide your company name and we will assist you.`,
    alternatives: [
      {
        title: 'Floorplan Not Live Yet',
        template: `Dear [Customer Name],

Thank you for your floorplan inquiry.

Please note that the floorplan link has not been published yet. We recommend keeping an eye on the official website, as it will be updated closer to the event date.

For exhibitors requiring the technical floorplan, please access your customer centre portal where these documents are available.

If you need assistance accessing your customer centre, please provide your company name and we will assist you.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     EXHIBITORS LIST
     Alt kept: "list not live yet" version — genuinely different
  ───────────────────────────────────────────────────────────── */
  'List': {
    title: 'Exhibitors List',
    template: `Dear [Customer Name],

Thank you for your interest in our exhibitors list.

You can view the complete exhibitors list at:
[EXHIBITORS_LIST_LINK]

The list includes company names, booth numbers, and categories.`,
    alternatives: [
      {
        title: 'List Not Live Yet',
        template: `Dear [Customer Name],

Thank you for your interest in our exhibitors list.

Please note that the exhibitors list is not yet available. We recommend keeping an eye on the official website and the event app, as all updates will be published there closer to the event date.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     PRESS & MEDIA
     All 3 originals are structurally identical → no alternatives
  ───────────────────────────────────────────────────────────── */
  'media section': {
    title: 'Press & Media Inquiry',
    template: `Dear [Customer Name],

Thank you for your media inquiry regarding [EVENT NAME].

1. Media partnerships — please contact: [MEDIA_PARTNERSHIP_EMAIL]

2. Media/press badge (full event coverage) — please register through:
[MEDIA_BADGE_LINK]

3. On-stand media (camera for your booth only) — please complete this form:
[ON_STAND_ACTIVITY_FORM]
You may also check with the Registration Desk & Info Hub during show days.`
  },

  /* ─────────────────────────────────────────────────────────────
     OPERATION CONTACT UPDATE
     Alt removed — identical to main template
  ───────────────────────────────────────────────────────────── */
  'Additional Operation contact': {
    title: 'Operation Contact Update',
    template: `Dear [Customer Name],

Thank you for your request to update/add an operation contact.

Kindly provide us with the following information for the new operation contact:
- Full Name
- Email Address
- Phone Number

Once we receive this information, we will forward your request to the relevant team for processing. We will notify you once the update has been completed.`
  },

  /* ─────────────────────────────────────────────────────────────
     SPEAKING REQUEST
     Alt kept: "speaker form not live yet" version
  ───────────────────────────────────────────────────────────── */
  'speaker': {
    title: 'Speaking Request',
    template: `Dear [Customer Name],

Thank you for your interest in speaking at [EVENT NAME].

Please use the following link to access our Speaker Application Form:
[SPEAKER_APPLICATION_LINK]

Complete the form to connect with our content team and be considered for a speaking opportunity at the event.`,
    alternatives: [
      {
        title: 'Speaker Form Not Live Yet',
        template: `Dear [Customer Name],

Thank you for your interest in speaking at [EVENT NAME].

Please note that the speaker application form has not been published yet. We recommend keeping an eye on the official website, as it will be updated closer to the event date.

We look forward to potentially welcoming you as a speaker!`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     CME HOURS
     All 3 originals have genuinely different content → all kept
  ───────────────────────────────────────────────────────────── */
  'CME': {
    title: 'CME Hours Request',
    template: `Dear [Customer Name],

Thank you for your inquiry about CME credits for [EVENT NAME].

Please visit our CME information page for the latest details:
[CME_INFO_LINK]

Please note that CME credit information may be updated closer to the event date.`,
    alternatives: [
      {
        title: 'CME Info Not Yet Confirmed',
        template: `Dear [Customer Name],

Thank you for your inquiry about CME credits for [EVENT NAME].

Please note that CME credit information is typically updated closer to the event date. We recommend checking the official website periodically for the latest information.`
      },
      {
        title: 'Event Has No CME / Has Startup Competition Instead',
        template: `Dear [Customer Name],

Thank you for your inquiry about CME credits for [EVENT NAME].

Please note that this event does not offer CME hours. However, there is a startup competition — [COMPETITION_NAME] — which you may find of interest:
[COMPETITION_LINK]`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     EXHIBITOR / VISITOR BADGE (QR)
     Alt kept: version that includes the app link explicitly
     Other 2 originals were identical to main → removed
  ───────────────────────────────────────────────────────────── */
  'QR': {
    title: 'Exhibitor / Visitor Badge',
    template: `Dear [Customer Name],

Thank you for your badge inquiry.

Your badge can be accessed in two ways:
1. We can resend the confirmation email from the registration platform — please share your registered email address.
2. The badge is also available inside the event app under the "My Badge" tab.

If you need further assistance, please don't hesitate to reach out.`,
    alternatives: [
      {
        title: 'With App Link',
        template: `Dear [Customer Name],

Thank you for your badge inquiry.

Your badge can be accessed in two ways:
1. We can resend the confirmation email from the registration platform — please share your registered email address.
2. The badge is also available inside the event app under the "My Badge" tab: [EVENT_APP_LINK]

If you need further assistance, please don't hesitate to reach out.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     UPDATE EXHIBITOR LIST — no alternatives (all identical)
  ───────────────────────────────────────────────────────────── */
  'Update-list': {
    title: 'Update Exhibitor List',
    template: `Dear [Customer Name],

Thank you for your request to update the exhibitor list.

You can manage and correct your company information by amending your profile through the event app — changes are reflected instantly on the website.

If the app is not yet live, kindly note that I have forwarded your request to the relevant team to update [SPECIFIC_INFORMATION]. Upon receiving any updates, I will promptly share them with you.`
  },

  /* ─────────────────────────────────────────────────────────────
     CATERING ORDER — no alternatives (all identical)
  ───────────────────────────────────────────────────────────── */
  'Catering': {
    title: 'Catering Order',
    template: `Dear [Customer Name],

Thank you for your catering inquiry.

Please refer to the exhibitor manual in your customer centre portal for the official catering supplier's contact information and order forms.

If you need assistance accessing your customer centre portal, please let us know and we will guide you through the process.`
  },

  /* ─────────────────────────────────────────────────────────────
     VISA (VISITOR)
     Alt kept: shorter version without a template link
  ───────────────────────────────────────────────────────────── */
  'Visa': {
    title: 'Visa Invitation (Visitor)',
    template: `Dear [Customer Name],

Thank you for your visa invitation letter request.

Please use the following link to submit the required details:
[VISA_TEMPLATE_LINK]

We will process your request as soon as possible.`,
    alternatives: [
      {
        title: 'No Template Link Available',
        template: `Dear [Customer Name],

Thank you for your visa invitation letter request.

Please provide the required personal details and we will process your request as soon as possible.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     EXTERNAL CATERING — all 3 originals identical → no alternatives
  ───────────────────────────────────────────────────────────── */
  'EXCatering': {
    title: 'External Catering Order',
    template: `Dear [Customer Name],

Thank you for your external catering inquiry.

Please coordinate with our tech team at: [TECH_TEAM_EMAIL]

Additionally, please complete the On-Stand Activity Form:
[ON_STAND_ACTIVITY_FORM]

The catering supplier information can also be found in the exhibitor manual.`
  },

  /* ─────────────────────────────────────────────────────────────
     DISPLAY / COMPANY NAME CHANGE — no alternatives (all identical)
  ───────────────────────────────────────────────────────────── */
  'Display': {
    title: 'Change Company / Display Name',
    template: `Dear [Customer Name],

Thank you for your request to change your company display name.

You can update your company name by amending your profile through the event app — changes are reflected instantly.

If the app is not yet live, I have forwarded your request to the relevant team to update the display name. Upon receiving any updates, I will promptly share them with you.`
  },

  /* ─────────────────────────────────────────────────────────────
     SPONSORSHIP
     Alt kept: version that includes a direct sponsorship team email
  ───────────────────────────────────────────────────────────── */
  'sponsorship': {
    title: 'Sponsorship Request',
    template: `Dear [Customer Name],

Thank you for your interest in sponsoring [EVENT NAME].

Please complete our Sponsorship Form:
[SPONSORSHIP_FORM_LINK]

I have attached the sponsorship brochure for your review. A member of our sponsorship team will be in touch with you shortly.

We look forward to your participation in the event!`,
    alternatives: [
      {
        title: 'With Sponsorship Team Email',
        template: `Dear [Customer Name],

Thank you for your interest in sponsoring [EVENT NAME].

Please complete our Sponsorship Form:
[SPONSORSHIP_FORM_LINK]

For direct enquiries you may also contact our sponsorship team:
[SPONSORSHIP_TEAM_EMAIL]

I have attached the sponsorship brochure for your review.

We look forward to your participation in the event!`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     AGENDA REQUEST
     Alt kept: "agenda not live yet" version
     Original alt 3 was identical to alt 2 → removed
  ───────────────────────────────────────────────────────────── */
  'Agenda': {
    title: 'Agenda Request',
    template: `Dear [Customer Name],

Thank you for your interest in our event agenda.

Please find the agenda at the following link:
[AGENDA_LINK]

Please note that the agenda is subject to change. We recommend checking closer to the event date for the most up-to-date information.`,
    alternatives: [
      {
        title: 'Agenda Not Live Yet',
        template: `Dear [Customer Name],

Thank you for your interest in our event agenda.

Please note that the agenda has not been published yet. We recommend keeping an eye on the official website, as all updates will be published there closer to the event date.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     RIGGING — all 3 originals identical → no alternatives
  ───────────────────────────────────────────────────────────── */
  'Rigging': {
    title: 'Rigging Request',
    template: `Dear [Customer Name],

Thank you for your rigging inquiry.

Rigging regulations and order forms can be found in the exhibitor manual within your customer centre portal. Please navigate to the manuals section and search for "rigging" (Ctrl+F) to find the relevant information.

For technical questions, please contact: [TECH_TEAM_EMAIL]

If you need assistance accessing the portal, please let me know.

Note: Please verify exhibitor participation by locating them in the customer centre before sharing sensitive information.`
  },

  /* ─────────────────────────────────────────────────────────────
     STAND DESIGN
     Alt kept: version that includes a PDF reference
     Originals 1 and 3 were identical to each other → one removed
  ───────────────────────────────────────────────────────────── */
  'Stand-design': {
    title: 'Stand Design Submission',
    template: `Dear [Customer Name],

Thank you for your stand design inquiry.

Please submit your stand design using one of these methods:
1. Email your design to the tech team: [TECH_TEAM_EMAIL] and ESM team: [ESM_TEAM_EMAIL]
2. Submit through the contractor's portal (look for the stand design submission tab)

Please ensure all dimensions and safety requirements are met per the exhibitor manual guidelines.`,
    alternatives: [
      {
        title: 'With Stand Design PDF',
        template: `Dear [Customer Name],

Thank you for your stand design inquiry.

Please submit your stand design by emailing the tech team: [TECH_TEAM_EMAIL]

All stand construction requirements and regulations are detailed in this PDF:
[STAND_DESIGN_PDF_LINK]

You may also submit through the contractor's portal (look for the stand design submission tab).

Please ensure all dimensions and safety requirements are met.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     AUDIO-VISUAL — no alternatives (all identical)
  ───────────────────────────────────────────────────────────── */
  'audio-video': {
    title: 'Audio-Visual Equipment',
    template: `Dear [Customer Name],

Thank you for your audio-visual equipment inquiry.

The official AV supplier's contact information can be found in the A-Z manual within your customer centre portal. Please access your portal and navigate to the manuals section to find the supplier details.

If you need assistance locating this information, please let me know.`
  },

  /* ─────────────────────────────────────────────────────────────
     ELECTRICITY
     Alt kept: version that includes the order forms PDF link
  ───────────────────────────────────────────────────────────── */
  'Electricity': {
    title: 'Electricity Request',
    template: `Dear [Customer Name],

Thank you for your electricity request.

Please refer to the exhibitor manual in your customer centre portal for the official electrical supplier's contact information and order forms.

Note: Shell scheme and start-up exhibitors have electricity included. If you require additional power, please refer to the relevant PDF in the manual.`,
    alternatives: [
      {
        title: 'With Order Forms PDF Link',
        template: `Dear [Customer Name],

Thank you for your electricity request.

Please refer to the exhibitor manual in your customer centre portal for the official electrical supplier.

Order forms are also available here:
[ORDER_FORMS_PDF_LINK]

Note: Shell scheme and start-up exhibitors have electricity included. If you require additional power, please refer to the relevant PDF in the manual.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     GRAPHIC ORDER
     Alt kept: version that includes the order forms PDF link
  ───────────────────────────────────────────────────────────── */
  'Graphic': {
    title: 'Graphic Order (Posters)',
    template: `Dear [Customer Name],

Thank you for your graphic order inquiry.

For space-only stands: Please check the Contact Manual or A-Z Manual in your customer centre portal for the graphic supplier.

For shell scheme stands: Please refer to the Shell Scheme Manual for the graphic supplier information.`,
    alternatives: [
      {
        title: 'With Order Forms PDF Link',
        template: `Dear [Customer Name],

Thank you for your graphic order inquiry.

For space-only stands: Please check the Contact Manual or A-Z Manual in your customer centre portal for the graphic supplier.

For shell scheme stands: Please refer to the Shell Scheme Manual for the graphic supplier information.

Order forms are also available here:
[ORDER_FORMS_PDF_LINK]`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     INVOICE REQUEST (VISITOR)
     Alt kept: version with internal invoice team email note
  ───────────────────────────────────────────────────────────── */
  'Invoice': {
    title: 'Invoice Request (Visitor)',
    template: `Dear [Customer Name],

Thank you for your invoice request.

I have placed your case on hold and raised a ticket with our internal team. Once the invoice is available, we will provide it to you promptly.

We appreciate your patience.`,
    alternatives: [
      {
        title: 'With Internal Invoice Team Email',
        template: `Dear [Customer Name],

Thank you for your invoice request.

I have placed your case on hold and raised a ticket with our internal team at [INTERNAL_INVOICE_EMAIL]. Once the invoice is available, we will provide it to you promptly.

We appreciate your patience.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     MEETING ROOM BOOKING — no alternatives (all identical)
  ───────────────────────────────────────────────────────────── */
  'Meeting room': {
    title: 'Meeting Room Booking',
    template: `Dear [Customer Name],

Thank you for your meeting room booking inquiry.

Please contact our sales team for meeting room availability and booking. Their contact information can be found in the sales brochure available in the Quick Menu section of our knowledge base.`
  },

  /* ─────────────────────────────────────────────────────────────
     CONTRACTOR NOMINATION
     Alt kept: version without the smartsheet form (some events use email only)
     Originals 2 and 3 were identical → merged into one
  ───────────────────────────────────────────────────────────── */
  'nominate contractor': {
    title: 'Contractor Nomination',
    template: `Dear [Customer Name],

Thank you for your contractor nomination request.

Please use one of the following methods to nominate your contractor:
1. Submit through your exhibitor manual / customer centre portal
2. Complete this form: [CONTRACTOR_NOMINATION_FORM]
3. Send contractor details directly to: [TECH_TEAM_EMAIL]

Please ensure all contractor information is complete and accurate.`,
    alternatives: [
      {
        title: 'Email Only — No Smartsheet Form',
        template: `Dear [Customer Name],

Thank you for your contractor nomination request.

Please send your contractor's full details to our tech team:
[TECH_TEAM_EMAIL]

You may also submit through your exhibitor manual / customer centre portal.

Please ensure all contractor information is complete and accurate.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     TIMETABLE — no alternatives (all identical)
  ───────────────────────────────────────────────────────────── */
  'Time table': {
    title: 'Exhibitor-Contractor Timetable',
    template: `Dear [Customer Name],

Thank you for your timetable inquiry.

Build-up and breakdown times for exhibitors and contractors can be found in the exhibitor manual within your customer centre portal. Please navigate to the "Key Timetable" or "Show Schedule" section.

Please note that exhibitor and visitor show times differ.`
  },

  /* ─────────────────────────────────────────────────────────────
     EXTRA / ADDITIONAL BADGES — no alternatives (all identical)
  ───────────────────────────────────────────────────────────── */
  'Extra badges': {
    title: 'Additional Badges Request',
    template: `Dear [Customer Name],

Thank you for your additional badges request.

To extend your badge allotment, we first need approval from your account manager. Once confirmed, please provide:
- Number of additional badges needed
- Full name and email address for each badge

We will follow up once we have the account manager's confirmation.`
  },

  /* ─────────────────────────────────────────────────────────────
     ADDITIONAL CONTACT — no alternatives (all identical)
  ───────────────────────────────────────────────────────────── */
  'Extra Contact': {
    title: 'Additional Contact Request',
    template: `Dear [Customer Name],

Thank you for your request to add an additional contact.

Please provide the following information:
- Full Name
- Email Address
- Phone Number

Once received, we will forward your request to the relevant team and notify you once the additional contact has been added.`
  },

  /* ─────────────────────────────────────────────────────────────
     EXHIBITOR CANCELLATION — no alternatives (all identical)
  ───────────────────────────────────────────────────────────── */
  'Exhibitor-Cancellation': {
    title: 'Exhibitor Cancellation',
    template: `Dear [Customer Name],

Thank you for your cancellation inquiry.

To cancel your exhibition participation, please contact your account manager directly, as they are the only ones authorised to process cancellations.

If you need your account manager's contact information, please provide your company name and we will share their email address with you.`
  },

  /* ─────────────────────────────────────────────────────────────
     EXHIBITOR INVOICE — no alternatives (all identical)
  ───────────────────────────────────────────────────────────── */
  'Exhibitor-Invoice': {
    title: 'Exhibitor Invoice Request',
    template: `Dear [Customer Name],

Thank you for your invoice request.

Invoice requests must be directed to your account manager, as they are the only ones who can provide the relevant invoices.

If you need your account manager's contact information, please provide your company name and we will share their email address with you.`
  },

  /* ─────────────────────────────────────────────────────────────
     ON-STAND ACTIVITY — all 3 originals identical → no alternatives
  ───────────────────────────────────────────────────────────── */
  'On-stand': {
    title: 'On-Stand Activity Form',
    template: `Dear [Customer Name],

Thank you for your on-stand activity inquiry.

Please complete the On-Stand Activity Form to request permission for any activities or items beyond standard exhibits (cameras, external catering, entertainment, etc.):
[ON_STAND_ACTIVITY_FORM]`
  },

  /* ─────────────────────────────────────────────────────────────
     REGISTRATION TECH ISSUE — all 3 originals identical → no alternatives
  ───────────────────────────────────────────────────────────── */
  'Registration Tech Issue': {
    title: 'Registration Technical Issue',
    template: `Dear [Customer Name],

Thank you for reporting a registration technical issue.

I have forwarded your case to our Registration Support Team ([REGISTRATION_SUPPORT_EMAIL]) for investigation. Please provide:

- Registered email address
- Registration key (if available)
- Description of the issue

I will place your case on hold and notify you once the issue has been resolved.`
  },

  /* ─────────────────────────────────────────────────────────────
     VISA FOR EXHIBITOR — all 3 originals identical → no alternatives
  ───────────────────────────────────────────────────────────── */
  'Visa-Exhibitor': {
    title: 'Visa for Exhibitor',
    template: `Dear [Customer Name],

Thank you for your participation letter request.

Please note that we provide participation letters (not invitation letters) for exhibitors only. Please send the following details:

- Name:
- Passport Number:
- Expiry Date:
- Date of Arrival:
- Date of Departure:

Once we receive this information, we will prepare your participation letter as a password-protected PDF. The password will be sent in a separate email for security purposes.`
  },

  /* ─────────────────────────────────────────────────────────────
     JOB REQUEST — all 3 originals identical → no alternatives
  ───────────────────────────────────────────────────────────── */
  'Job-request': {
    title: 'Job Request',
    template: `Dear [Candidate Name],

Thank you for your interest in joining our team.

Please visit our careers page to view current vacancies and submit your application:
[CAREERS_PAGE_LINK]

We also recommend signing up on our recruiting platform to receive notifications about future opportunities that match your profile.`
  },

  /* ─────────────────────────────────────────────────────────────
     PARTNERSHIP — all 3 originals identical → no alternatives
  ───────────────────────────────────────────────────────────── */
  'Partnership': {
    title: 'Partnership Request',
    template: `Dear [Company Name],

Thank you for your partnership interest.

Please provide the following information so we can evaluate your proposal:

1. Nature of Service: Brief description of your services
2. Official Documents: Commercial Registration, VAT Certificate, National Address
3. Contact Information: Official Email, Contact Person's Full Name, Mobile Number, Job Title
4. Online Presence: LinkedIn Page or Website (if available)

Once we receive this information, we will forward it to the relevant team for review. If your proposal is suitable, you will be contacted by our team.`
  },

  /* ─────────────────────────────────────────────────────────────
     EXHIBITOR MANUAL — all 3 originals identical → no alternatives
  ───────────────────────────────────────────────────────────── */
  'Exhbitor Manual': {
    title: 'Exhibitor Manual / Portal Access',
    template: `Dear [Customer Name],

Thank you for your inquiry about the exhibitor manual / customer centre portal.

To access your portal:
1. Go to the portal link: [CUSTOMER_CENTRE_PORTAL_LINK]
2. Click "Forgot Password" and enter your username
3. A password reset link will be sent to your registered email
4. Create a new password and sign in

The portal contains exhibitor manuals, service order forms, deadlines, and marketing materials.

If you need us to resend your portal credentials, please provide your company name and registered email.`
  },

  /* ─────────────────────────────────────────────────────────────
     ON-SITE ORDER
     Alt kept: version with order forms PDF link
  ───────────────────────────────────────────────────────────── */
  'On-site order': {
    title: 'On-Site Order',
    template: `Dear [Customer Name],

Thank you for your on-site order inquiry.

Please refer to the A-Z manual in your customer centre portal for information about ordering services such as forklifts, additional furniture, or other on-site logistics.

If you need assistance locating this information, please let me know.`,
    alternatives: [
      {
        title: 'With Order Forms PDF Link',
        template: `Dear [Customer Name],

Thank you for your on-site order inquiry.

Please refer to the A-Z manual in your customer centre portal for information about ordering services such as forklifts, additional furniture, or other on-site logistics.

Order forms are also available here:
[ORDER_FORMS_PDF_LINK]

If you need assistance locating this information, please let me know.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     PHOTOGRAPHER
     All 3 originals have genuinely different content → all kept
  ───────────────────────────────────────────────────────────── */
  'Photographer': {
    title: 'Photographer Request',
    template: `Dear [Customer Name],

Thank you for your photographer inquiry.

Please check the event manual for the official photographer supplier. Additionally, please complete the On-Stand Activity Form:
[ON_STAND_ACTIVITY_FORM]

For visitors wishing to film/photograph, please review the press and filming protocols:
[PRESS_PROTOCOLS_LINK]`,
    alternatives: [
      {
        title: 'With Press Registration Link',
        template: `Dear [Customer Name],

Thank you for your photographer inquiry.

For exhibitor photographers, please complete the On-Stand Activity Form:
[ON_STAND_ACTIVITY_FORM]

For visitor photographers / press, please register through:
[VISITOR_PHOTOGRAPHER_LINK]`
      },
      {
        title: 'Exhibitor Photographer via "Exhibiting Media" Badge',
        template: `Dear [Customer Name],

Thank you for your photographer inquiry.

For exhibitor photographers, please complete the On-Stand Activity Form:
[ON_STAND_ACTIVITY_FORM]

Additionally, your photographer can be registered through the customer centre by selecting "Exhibiting Media" as the registration type instead of "Exhibitor". Please refer to the Exhibitor Badge Registration Guide:
[EXHIBITOR_BADGE_GUIDE_LINK]`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     COMPANY PROFILE / LOGO
     Alt kept: version with exhibitor setup guide link
  ───────────────────────────────────────────────────────────── */
  'Company-profile': {
    title: 'Update Company Profile / Logo',
    template: `Dear [Customer Name],

Thank you for your request to update your company profile or logo.

All company profile updates (logo, description, products) can be made through the event app. Once logged in, navigate to your company profile section to make updates.

Full guidance is available in the "Help Desk" section of the app.

If you need assistance, please let us know.`,
    alternatives: [
      {
        title: 'With Exhibitor Setup Guide Link',
        template: `Dear [Customer Name],

Thank you for your request to update your company profile or logo.

All company profile updates (logo, description, products) can be made through the event app. Once logged in, navigate to your company profile section to make updates.

Full guidance is available in the "Help Desk" section of the app, or in the Exhibitor Setup Guide:
[EXHIBITOR_SETUP_GUIDE_LINK]

If you need assistance, please let us know.`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     LEAD CAPTURE / RETRIEVAL
     Alt kept: version with lead retrieval guide PDF link
  ───────────────────────────────────────────────────────────── */
  'Lead-Capture': {
    title: 'Lead Capture & Retrieval',
    template: `Dear [Customer Name],

Thank you for your inquiry about lead capture.

The event app includes lead capture functionality that allows you to scan attendee badges and rate leads from 1–5. You can also create custom qualifying questions.

Full guidance is available in the app's help section or in the exhibitor manual.`,
    alternatives: [
      {
        title: 'With Lead Retrieval Guide PDF',
        template: `Dear [Customer Name],

Thank you for your inquiry about lead capture.

The event app includes lead capture functionality that allows you to scan attendee badges and rate leads from 1–5. You can also create custom qualifying questions.

For the complete Lead Retrieval Guide, please refer to:
[LEAD_RETRIEVAL_GUIDE_LINK]`
      }
    ]
  },

  /* ─────────────────────────────────────────────────────────────
     STAND SHARING — no alternatives (all identical)
  ───────────────────────────────────────────────────────────── */
  'Stand sharing': {
    title: 'Stand Sharing Request',
    template: `Dear [Customer Name],

Thank you for your stand sharing inquiry.

Stand sharing arrangements must be coordinated through your account manager, as they are the only ones authorised to approve such agreements.

If you need your account manager's contact information, please provide your company name and we will share their email address with you.`
  }

};

/* ═══════════════════════════════════════════════════════════
   HELPER FUNCTIONS  (unchanged from original script)
═══════════════════════════════════════════════════════════ */

function populateTemplate(templateId, replacements, alternativeIndex = null) {
  const template = emailTemplates[templateId];
  if (!template) return null;
  let templateText = template.template;
  if (alternativeIndex !== null && template.alternatives?.[alternativeIndex]) {
    templateText = template.alternatives[alternativeIndex].template;
  }
  for (const [placeholder, value] of Object.entries(replacements)) {
    const regex = new RegExp(`\\[${placeholder}\\]`, 'g');
    templateText = templateText.replace(regex, value);
  }
  return templateText;
}

function openEmailTemplates() {
  document.getElementById('emailModal').style.display = 'block';
  populateEmailTemplates();
}

function closeEmailTemplates() {
  document.getElementById('emailModal').style.display = 'none';
}

function populateEmailTemplates() {
  const container = document.getElementById('emailCaseList');
  container.innerHTML = '';
  document.querySelectorAll('h1').forEach(h1 => {
    const id = h1.getAttribute('id');
    if (!id || !emailTemplates[id]) return;
    const template = emailTemplates[id];
    const caseItem = document.createElement('div');
    caseItem.className = 'email-case-item';
    let altHtml = '';
    if (template.alternatives?.length) {
      altHtml = `
        <div class="alternative-section" style="margin-top:15px;border-top:1px dashed #ccc;padding-top:12px;">
          <div class="alternative-title" onclick="toggleAlternatives(this)"
               style="cursor:pointer;color:#2ecc71;font-size:.85rem;margin-bottom:8px;display:flex;align-items:center;gap:5px;">
            <span>🔄</span><span>Alternative Versions (${template.alternatives.length}) ▼</span>
          </div>
          <div class="alternatives-container" style="display:none;">
      `;
      template.alternatives.forEach((alt, idx) => {
        altHtml += `
          <div style="margin-bottom:15px;padding:10px;background:#e8f8f5;border-radius:8px;">
            <div style="font-size:.8rem;color:#2ecc71;margin-bottom:8px;font-weight:bold;">${alt.title}</div>
            <div class="email-template-text" style="background:white;border-left-color:#2ecc71;margin-bottom:8px;">
              ${alt.template.replace(/\n/g, '<br>')}
            </div>
            <button class="copy-email-btn" style="background:#2ecc71;"
                    onclick="copyEmailTemplate(this,'${id}',${idx})">🔄 Copy Alternative ${idx + 1}</button>
          </div>
        `;
      });
      altHtml += `</div></div>`;
    }
    caseItem.innerHTML = `
      <div class="email-case-title" onclick="toggleTemplate(this)">
        <span>📧 ${template.title}</span><span>▼</span>
      </div>
      <div class="email-template-content">
        <div class="email-template-text">${template.template.replace(/\n/g, '<br>')}</div>
        <button class="copy-email-btn" onclick="copyEmailTemplate(this,'${id}',null)">📋 Copy Template</button>
        ${altHtml}
      </div>
    `;
    container.appendChild(caseItem);
  });
  if (!container.children.length) {
    container.innerHTML = '<p style="text-align:center;padding:20px;">No email templates available for the current page.</p>';
  }
}

function toggleAlternatives(element) {
  const container = element.nextElementSibling;
  const isHidden = container.style.display === 'none' || !container.style.display;
  container.style.display = isHidden ? 'block' : 'none';
  element.querySelector('span:last-child').innerHTML = isHidden ? '▲' : '▼';
}

function toggleTemplate(element) {
  const content = element.nextElementSibling;
  const arrow = element.querySelector('span:last-child');
  const isHidden = content.style.display === 'none' || !content.style.display;
  content.style.display = isHidden ? 'block' : 'none';
  arrow.innerHTML = isHidden ? '▲' : '▼';
}

function copyEmailTemplate(button, id, alternativeIndex = null) {
  const template = emailTemplates[id];
  if (!template) return;
  let text = template.template;
  if (alternativeIndex !== null && template.alternatives?.[alternativeIndex]) {
    text = template.alternatives[alternativeIndex].template;
  }
  navigator.clipboard.writeText(text).then(() => {
    const orig = button.innerHTML;
    button.innerHTML = '✅ Copied!';
    button.classList.add('copied');
    showToast('Email template copied to clipboard!');
    setTimeout(() => { button.innerHTML = orig; button.classList.remove('copied'); }, 2000);
  }).catch(() => showToast('Failed to copy. Please try again.', 'error'));
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.style.backgroundColor = type === 'success' ? '#28a745' : '#dc3545';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

window.onclick = function (event) {
  const modal = document.getElementById('emailModal');
  if (event.target === modal) closeEmailTemplates();
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('h1').forEach(h1 => {
    const id = h1.getAttribute('id');
    if (!id || !emailTemplates[id]) return;
    const badge = document.createElement('span');
    badge.className = 'h1-email-badge';
    badge.innerHTML = '📧 Template';
    badge.onclick = e => {
      e.stopPropagation();
      openEmailTemplates();
      setTimeout(() => {
        const title = emailTemplates[id].title;
        document.querySelectorAll('.email-case-title').forEach(item => {
          if (item.innerText.includes(title)) {
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
            item.click();
          }
        });
      }, 300);
    };
    h1.appendChild(badge);
  });
});

(function(){

  function kbToggleAcc(id){
  var body = document.getElementById('kbBody' + cap(id));
  var arr  = document.getElementById('kbArr'  + cap(id));
  var btn  = body.previousElementSibling;
  var isOpen = body.classList.contains('open');
  
  body.classList.toggle('open', !isOpen);
  arr.classList.toggle('open', !isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
  
  // FORCE DISCLAIMER BOX TO REPOSITION WHEN ACCORDION TOGGLES
  setTimeout(function() {
    var disclaimer = document.querySelector('.disclaimer-box');
    if (disclaimer) {
      // Force browser reflow
      var temp = disclaimer.offsetHeight;
      // Trigger a tiny style change to force reposition
      disclaimer.style.transform = 'translateZ(0)';
      setTimeout(function() {
        disclaimer.style.transform = '';
      }, 50);
    }
  }, 10);
}

  function kbFilterTags(q){
    var v = q.trim().toLowerCase();

    ['Visitors','Exhibitors'].forEach(function(sec){
      var body   = document.getElementById('kbBody'  + sec);
      var arr    = document.getElementById('kbArr'   + sec);
      var btn    = body.previousElementSibling;
      var noRes  = document.getElementById('kbNo'    + sec);
      var groups = body.querySelectorAll('.kb-tag-group');
      var anyVisible = false;

      groups.forEach(function(g){
        var tags = g.querySelectorAll('.kb-tag, .kb-tag-visa');
        var groupVisible = false;
        tags.forEach(function(t){
          var match = v === '' || t.textContent.toLowerCase().indexOf(v) !== -1;
          t.style.display = match ? '' : 'none';
          if(match) groupVisible = true;
        });
        g.style.display = groupVisible ? '' : 'none';
        if(groupVisible) anyVisible = true;
      });

      noRes.style.display = (!anyVisible && v !== '') ? 'block' : 'none';

      /* auto-expand when searching */
      if(v !== ''){
        body.classList.add('open');
        arr.classList.add('open');
        btn.setAttribute('aria-expanded','true');
      }
    });
  }

  function cap(s){ return s.charAt(0).toUpperCase() + s.slice(1); }

  /* expose to inline handlers */
  window.kbToggleAcc   = kbToggleAcc;
  window.kbFilterTags  = kbFilterTags;

})();

const bar = document.querySelector('.dir3');

bar.addEventListener('click', (e) => {
  // Only toggle if clicking the handle area
  if (e.target === bar || e.target.matches('.dir3::after')) {
    bar.classList.toggle('active');
  }
});





