const PORTFOLIO_BASE_URL = "https://ik.imagekit.io/tiadesigns/PORTFOLIO/";

// Funzione di utilità per formattare i titoli delle cartelle
// "RINNOVO_SALATOIO_CASEIFICIO_F&B_PARMA" -> "Rinnovo Salatoio Caseificio F&B, Parma"
function formatTitle(rawTitle) {
    if (!rawTitle) return "";
    let formatted = rawTitle.replace(/_/g, ' ');
    // Metti la maiuscola a ogni parola
    formatted = formatted.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
    // Qualche aggiustamento manuale per articoli e preposizioni
    const smallWords = ['Di', 'A', 'Da', 'In', 'Con', 'Su', 'Per', 'Tra', 'Fra', 'Il', 'Lo', 'La', 'I', 'Gli', 'Le', 'E', 'Ed'];
    formatted = formatted.split(' ').map((word, index) => {
        if (index > 0 && smallWords.includes(word)) return word.toLowerCase();
        return word;
    }).join(' ');
    // Ripristina acronimi e sigle comuni
    formatted = formatted.replace(/F&b/i, 'F&B');
    formatted = formatted.replace(/\(pr\)/i, '(PR)');
    formatted = formatted.replace(/\(mn\)/i, '(MN)');
    formatted = formatted.replace(/\(re\)/i, '(RE)');
    return formatted;
}

const portfolioData = {
    "ANALISI_DELLA_VULNERABILITA_SISMICA": {
        title: "Analisi della Vulnerabilità Sismica",
        cover: "ANALISI_DELLA_VULNERABILITA_SISMICA/ASILO_NIDO_COMUNE_DI_PEGOGNAGA/1.webp",
        projects: [
            {
                id: "ASILO_NIDO_COMUNE_DI_PEGOGNAGA",
                title: formatTitle("ASILO_NIDO_COMUNE_DI_PEGOGNAGA"),
                description: "Valutazione della sicurezza sismica e progettazione degli interventi di miglioramento strutturale per garantire l'incolumità in un edificio scolastico strategico.",
                images: ["0.webp", "1.webp", "2.webp", "3.webp", "4.webp"]
            }
        ]
    },
    "PRODUTTIVO": {
        title: "Produttivo",
        cover: "PRODUTTIVO/RINNOVO_SALATOIO_CASEIFICIO_F&B_PARMA/1.webp",
        projects: [
            {
                id: "RINNOVO_SALATOIO_CASEIFICIO_F&B_PARMA",
                title: formatTitle("RINNOVO_SALATOIO_CASEIFICIO_F&B_PARMA"),
                description: "Progettazione strutturale e direzione lavori per il completo rinnovamento del salatoio di un importante caseificio, ottimizzando gli spazi produttivi e garantendo i massimi standard igienici e normativi.",
                images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp"]
            }
        ]
    },
    "RESIDENZIALE-RECUPERO": {
        title: "Residenziale - Recupero",
        cover: "RESIDENZIALE-RECUPERO/SOPRAELEVAZIONE_IN_LEGNO_A_MONTECHIARUGOLO_(PR)/1.webp",
        projects: [
            {
                id: "SOPRAELEVAZIONE_IN_LEGNO_A_MONTECHIARUGOLO_(PR)",
                title: formatTitle("SOPRAELEVAZIONE_IN_LEGNO_A_MONTECHIARUGOLO_(PR)"),
                description: "Ampliamento volumetrico in elevazione realizzato con strutture in legno (X-Lam/Telaio). Una scelta ecosostenibile e leggera che ha permesso di contenere i pesi sulle strutture esistenti migliorandone il comportamento sismico.",
                images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp", "9.webp", "10.webp", "11.webp", "12.webp", "13.webp", "14.webp", "15.webp", "16.webp", "17.webp", "18.webp", "19.webp", "20.webp", "21.webp"]
            },
            {
                id: "RECUPERO_SOTTOTETTO_VILLA_VNC_A_ROLO_(RE)",
                title: formatTitle("RECUPERO_SOTTOTETTO_VILLA_VNC_A_ROLO_(RE)"),
                description: "Riqualificazione architettonica e strutturale di un ambiente sottotetto in disuso, trasformato in spazio abitabile luminoso e ad alta efficienza termica.",
                images: ["1.webp", "2.webp", "3.webp"]
            },
            {
                id: "RISTRUTTURAZIONE_UV_A_MOGLIA_(MN)",
                title: formatTitle("RISTRUTTURAZIONE_UV_A_MOGLIA_(MN)"),
                description: "Intervento globale di recupero edilizio volto all'adeguamento impiantistico, sismico e al restyling architettonico per donare nuova vita all'immobile storico.",
                images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp", "8.webp"]
            },
            {
                id: "RISTRUTTURAZIONE_IC_A_SAN_MARTINO_IN_RIO_(RE)",
                title: formatTitle("RISTRUTTURAZIONE_IC_A_SAN_MARTINO_IN_RIO_(RE)"),
                description: "Ristrutturazione residenziale con rinforzi strutturali localizzati e riorganizzazione degli spazi interni per rispondere alle moderne esigenze abitative.",
                images: ["1.webp", "2.webp", "3.webp"]
            },
            {
                id: "RISTRUTTURAZIONE_RN_A_SAN_BENEDETTO_PO_(MN)",
                title: formatTitle("RISTRUTTURAZIONE_RN_A_SAN_BENEDETTO_PO_(MN)"),
                description: "Recupero edilizio di un fabbricato con interventi mirati alla conservazione dei tratti originari e al contempo al raggiungimento del comfort termico ed acustico.",
                images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"]
            },
            {
                id: "RISTRUTTURAZIONE_CONDOMINIO_GB_A_REGGIO_EMILIA",
                title: formatTitle("RISTRUTTURAZIONE_CONDOMINIO_GB_A_REGGIO_EMILIA"),
                description: "Intervento su scala condominiale per il miglioramento strutturale, rifacimento coperture e aggiornamento impiantistico in ambito riqualificazione energetica.",
                images: ["1.webp", "2.webp", "3.webp", "4.webp"]
            },
            {
                id: "RISTRUTTURAZIONE_ES_A_MOGLIA_(MN)",
                title: formatTitle("RISTRUTTURAZIONE_ES_A_MOGLIA_(MN)"),
                description: "Progettazione architettonica e strutturale per il recupero funzionale di una porzione immobiliare, con finiture di pregio e dettagli curati.",
                images: ["0.webp", "1.webp", "2.webp", "3.webp", "4.webp"]
            },
            {
                id: "RISTRUTTURAZIONE_B&B_A_SUZZARA_(MN)",
                title: formatTitle("RISTRUTTURAZIONE_B&B_A_SUZZARA_(MN)"),
                description: "Conversione e ristrutturazione di un edificio ad uso residenziale per la realizzazione di una struttura ricettiva moderna e accogliente.",
                images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp"]
            },
            {
                id: "CERCHIATURE_PER_APERTURE_SU_MURI_PORTANTI",
                title: formatTitle("CERCHIATURE_PER_APERTURE_SU_MURI_PORTANTI"),
                description: "Calcoli e verifiche per la realizzazione di nuove aperture su maschi murari esistenti, mediate l'inserimento di telai e cerchiature metalliche di rinforzo.",
                images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp"]
            },
            {
                id: "RISTRUTTURAZIONE_GM_A_MOGLIA_(MN)",
                title: formatTitle("RISTRUTTURAZIONE_GM_A_MOGLIA_(MN)"),
                description: "Intervento di riqualificazione globale per adeguare la struttura a nuovi standard energetici ed architettonici.",
                images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"]
            },
            {
                id: "ADEGUAMENTO_SISMICO_CASA_COLONICA_A_GONZAGA_(MN)",
                title: formatTitle("ADEGUAMENTO_SISMICO_CASA_COLONICA_A_GONZAGA_(MN)"),
                description: "Importante lavoro di consolidamento su una tipica casa colonica mantovana per proteggerne il valore storico e garantirne la stabilità agli eventi sismici.",
                images: ["0.webp", "1.webp", "2.webp", "3.webp", "4.webp", "5.webp"]
            },
            {
                id: "RISTRUTTURAZIONE_BL_A_GONZAGA_(MN)",
                title: formatTitle("RISTRUTTURAZIONE_BL_A_GONZAGA_(MN)"),
                description: "Recupero edilizio ed architettonico di pregio, con restauro di dettagli originali e inserimento di impiantistica moderna.",
                images: ["0.webp", "1.webp"]
            }
        ]
    },
    "COMMERCIALE": {
        title: "Commerciale",
        cover: "COMMERCIALE/NUOVO_SHOWROOM_RAMA_GONZAGA_(MN)/1.webp",
        projects: [
            {
                id: "NUOVO_SHOWROOM_RAMA_GONZAGA_(MN)",
                title: formatTitle("NUOVO_SHOWROOM_RAMA_GONZAGA_(MN)"),
                description: "Progettazione di un nuovo ambiente espositivo dal design accattivante e contemporaneo, concepito per esaltare i prodotti e ottimizzare i flussi di clientela.",
                images: ["1.webp", "2.webp"]
            }
        ]
    },
    "CONSULENZA_SPECIALISTICA": {
        title: "Consulenza Specialistica",
        cover: "CONSULENZA_SPECIALISTICA/INDAGINI_SUI_MATERIALI/1.webp",
        projects: [
            {
                id: "INDAGINI_SUI_MATERIALI",
                title: formatTitle("INDAGINI_SUI_MATERIALI"),
                description: "Campagne diagnostiche approfondite in sito per la valutazione delle caratteristiche meccaniche dei materiali da costruzione storici e contemporanei.",
                images: ["1.webp", "2.webp", "3.webp", "4.webp"]
            },
            {
                id: "PENSILINA_IN_ACCIAIO_A_SAN_MARTINO_IN_RIO_(RE)",
                title: formatTitle("PENSILINA_IN_ACCIAIO_A_SAN_MARTINO_IN_RIO_(RE)"),
                description: "Studio strutturale e progettazione di dettaglio per una pensilina metallica leggera, con forte valenza architettonica e perfetta integrazione nel contesto.",
                images: ["1.webp", "2.webp", "3.webp"]
            },
            {
                id: "RESISTENZA_AL_FUOCO",
                title: formatTitle("RESISTENZA_AL_FUOCO"),
                description: "Verifiche termo-strutturali analitiche avanzate (metodo tabellare, analitico e sperimentale) per certificare la resistenza al fuoco degli elementi portanti (Travi e Tegoli).",
                images: ["TEGOLO.webp", "TRAVE.webp"]
            }
        ]
    },
    "RESIDENZIALE-NUOVO": {
        title: "Residenziale - Nuovo",
        cover: "RESIDENZIALE-NUOVO/VILLETTA_BB_A_GONZAGA_(MN)/1.webp",
        projects: [
            {
                id: "VILLETTA_AA_A_LUZZARA_(RE)",
                title: formatTitle("VILLETTA_AA_A_LUZZARA_(RE)"),
                description: "Nuova edificazione di una villetta unifamiliare con concezione 'NZEB' (Nearly Zero Energy Building), integrando comfort, efficienza energetica e linee pulite.",
                images: ["1.webp", "2.webp"]
            },
            {
                id: "RESIDENCE_LE_CORTI_A_SUZZARA_(MN)",
                title: formatTitle("RESIDENCE_LE_CORTI_A_SUZZARA_(MN)"),
                description: "Progetto strutturale per un nuovo complesso residenziale multipiano, con attenzione all'isolamento acustico tra unità e all'ottimizzazione degli spazi interrati.",
                images: ["1.webp", "2.webp"]
            },
            {
                id: "VILLETTA_LP_A_GONZAGA_(MN)",
                title: formatTitle("VILLETTA_LP_A_GONZAGA_(MN)"),
                description: "Progettazione architettonica e strutturale di una residenza su misura per il committente, bilanciando ampie vetrate, privacy e sicurezza antisismica.",
                images: ["1.webp"]
            },
            {
                id: "RESIDENZA_LYS_A_SAN_MARTINO_IN_RIO_(RE)",
                title: formatTitle("RESIDENZA_LYS_A_SAN_MARTINO_IN_RIO_(RE)"),
                description: "Sviluppo strutturale per edifici di prestigio in zona sismica, caratterizzati da geometrie articolate e sbalzi architettonici.",
                images: ["1.webp", "2.webp"]
            },
            {
                id: "VILLETTA_BB_A_GONZAGA_(MN)",
                title: formatTitle("VILLETTA_BB_A_GONZAGA_(MN)"),
                description: "Villa unifamiliare dal concept moderno: calcoli strutturali su fondazioni a platea e pareti portanti performanti, inserite in un design minimale.",
                images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp", "7.webp"]
            },
            {
                id: "AMPLIAMENTO_IN_LEGNO_A_REGGIO_EMILIA_(RE)",
                title: formatTitle("AMPLIAMENTO_IN_LEGNO_A_REGGIO_EMILIA_(RE)"),
                description: "Progettazione di un ampliamento in aderenza realizzato interamente con tecnologia a secco in legno massiccio, riducendo drasticamente i tempi di cantiere.",
                images: ["1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp"]
            }
        ]
    },
    "SPERIMENTAZIONE-BREVETTI": {
        title: "Sperimentazione Brevetti",
        cover: "SPERIMENTAZIONE-BREVETTI/PIATTAFORMA_GALLEGGIANTE_A_GONZAGA_(MN)/1.webp",
        projects: [
            {
                id: "PIATTAFORMA_GALLEGGIANTE_A_GONZAGA_(MN)",
                title: formatTitle("PIATTAFORMA_GALLEGGIANTE_A_GONZAGA_(MN)"),
                description: "Studio sperimentale, calcoli di spinta e prototipazione per una piattaforma galleggiante innovativa per eventi e installazioni.",
                images: ["1.webp"]
            },
            {
                id: "CARPORT_FOTOVOLTAICO",
                title: formatTitle("CARPORT_FOTOVOLTAICO"),
                description: "Progetto strutturale parametrico per carport destinato all'installazione di impianti solari fotovoltaici, ottimizzato per resistenza al vento e alla neve.",
                images: ["1.webp"]
            }
        ]
    }
};

// ============================================
// State
// ============================================
let portfolioSwiper = null;

// Lightbox state
let lightboxImages = [];
let lightboxCurrentIndex = 0;
let lightboxCurrentCatKey = '';
let lightboxCurrentProjId = '';

// ============================================
// Initialization
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    initPortfolioSwiper();
});

// ============================================
// Category Slider (Landing Page)
// ============================================
function renderCategories() {
    const container = document.getElementById("portfolio-categories-container");
    if (!container) return;

    // Sort categories alphabetically by title
    const sortedKeys = Object.keys(portfolioData).sort((a, b) => {
        return portfolioData[a].title.localeCompare(portfolioData[b].title, 'it');
    });

    let html = "";
    sortedKeys.forEach((catKey) => {
        const cat = portfolioData[catKey];
        const coverUrl = PORTFOLIO_BASE_URL + cat.cover;
        
        html += `
        <div class="swiper-slide project-card cursor-pointer group" onclick="openCategoryModal('${catKey}')">
            <div class="px-0 md:px-4">
                <div class="relative w-full aspect-square md:aspect-[4/3] overflow-hidden mb-4 bg-surface hover-glow rounded-3xl md:rounded-none">
                    <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100 ease-out"
                        alt="${cat.title}" src="${coverUrl}" loading="lazy" />
                    <div class="absolute bottom-5 right-5 w-10 h-10 bg-[#001f3f] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
                        <span class="material-symbols-outlined text-xl">arrow_forward</span>
                    </div>
                    <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
                    <div class="absolute inset-0 border border-black/10 pointer-events-none"></div>
                </div>
                <div class="flex justify-between items-start">
                    <div class="flex-1 min-w-0 pr-3">
                        <span class="text-[10px] uppercase font-bold tracking-widest text-[#86868b] mb-1 block">CATEGORIA PORTFOLIO</span>
                        <h3 class="font-headline font-semibold text-xl md:text-2xl text-on-surface truncate">${cat.title}</h3>
                    </div>
                    <span class="material-symbols-outlined text-on-surface-variant group-hover:text-[#60a5fa] transition-colors relative z-20 mt-1 shrink-0">folder_open</span>
                </div>
            </div>
        </div>
        `;
    });

    container.innerHTML = html;
}

function initPortfolioSwiper() {
    const gradientLeft = document.getElementById('portfolio-gradient-left');
    const gradientRight = document.getElementById('portfolio-gradient-right');

    portfolioSwiper = new Swiper('.portfolio-swiper', {
        slidesPerView: 1.3,
        spaceBetween: 16,
        centeredSlides: true,
        grabCursor: true,
        freeMode: {
            enabled: true,
            sticky: true,
        },
        touchStartPreventDefault: false,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        pagination: {
            el: '.portfolio-pagination',
            clickable: true,
            bulletClass: 'portfolio-bullet',
            bulletActiveClass: 'portfolio-bullet-active',
        },
        breakpoints: {
            640:  { slidesPerView: 1.5, spaceBetween: 24, centeredSlides: true },
            768:  { slidesPerView: 1.8, spaceBetween: 30, centeredSlides: true },
            1024: { slidesPerView: 2,   spaceBetween: 50, centeredSlides: false, freeMode: { enabled: false } },
            1440: { slidesPerView: 2.5, spaceBetween: 60, centeredSlides: false, freeMode: { enabled: false } }
        },
        on: {
            init: function () {
                updateGradients(this, gradientLeft, gradientRight);
            },
            slideChange: function () {
                updateGradients(this, gradientLeft, gradientRight);
            },
            reachBeginning: function () {
                updateGradients(this, gradientLeft, gradientRight);
            },
            reachEnd: function () {
                updateGradients(this, gradientLeft, gradientRight);
            }
        }
    });
}

function updateGradients(swiper, leftEl, rightEl) {
    if (!leftEl || !rightEl) return;
    // Show left gradient when NOT at the beginning
    leftEl.style.opacity = swiper.isBeginning ? '0' : '1';
    // Show right gradient when NOT at the end
    rightEl.style.opacity = swiper.isEnd ? '0' : '1';
}

// ============================================
// Category Modal (Grid on Desktop)
// ============================================
function openCategoryModal(catKey) {
    const cat = portfolioData[catKey];
    if (!cat) return;

    const modal = document.getElementById('portfolio-modal');
    const titleEl = document.getElementById('portfolio-modal-title');
    const container = document.getElementById('portfolio-modal-wrapper');
    const scrollContainer = document.getElementById('portfolio-modal-scroll');

    titleEl.textContent = cat.title;

    // Desktop: CSS Grid (min 3, max 4 cols), Mobile: vertical stack
    let html = '';
    
    // Mobile: single column vertical scroll
    html += '<div class="block md:hidden">';
    html += '<div class="flex flex-col gap-6">';
    cat.projects.forEach((proj) => {
        const coverUrl = PORTFOLIO_BASE_URL + catKey + "/" + proj.id + "/" + proj.images[0];
        html += `
        <div class="cursor-pointer" onclick="openProjectLightbox('${catKey}', '${proj.id}')">
            <div class="relative w-full aspect-[4/3] overflow-hidden mb-3 bg-black/5">
                <img src="${coverUrl}" alt="${proj.title}" 
                     class="w-full h-full object-cover" loading="lazy" />
            </div>
            <h4 class="font-headline font-semibold text-base text-[#001f3f] leading-snug mb-1">${proj.title}</h4>
            <p class="text-[#86868b] text-xs leading-relaxed">${proj.description}</p>
        </div>
        `;
    });
    html += '</div></div>';

    // Desktop: CSS Grid - explicit columns (max 4, min 3 on large screens)
    html += '<div class="hidden md:block">';
    html += '<div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10">';
    cat.projects.forEach((proj) => {
        const coverUrl = PORTFOLIO_BASE_URL + catKey + "/" + proj.id + "/" + proj.images[0];
        html += `
        <div class="group cursor-pointer" onclick="openProjectLightbox('${catKey}', '${proj.id}')">
            <div class="relative w-full aspect-[4/3] overflow-hidden mb-4 bg-black/5">
                <img src="${coverUrl}" alt="${proj.title}" 
                     class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" 
                     loading="lazy" />
                <div class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
                <div class="absolute bottom-3 right-3 w-8 h-8 bg-black/50 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span class="material-symbols-outlined text-base">open_in_full</span>
                </div>
            </div>
            <h4 class="font-headline font-semibold text-sm text-[#001f3f] leading-snug group-hover:text-[#60a5fa] transition-colors mb-1">${proj.title}</h4>
            <p class="text-[#86868b] text-xs leading-relaxed">${proj.description}</p>
        </div>
        `;
    });
    html += '</div></div>';

    container.innerHTML = html;

    // Reset scroll position
    if (scrollContainer) scrollContainer.scrollTop = 0;

    // Show modal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    requestAnimationFrame(() => {
        modal.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
        modal.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
        document.body.style.overflow = 'hidden';
    });
}

function closeCategoryModal() {
    const modal = document.getElementById('portfolio-modal');
    modal.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
    modal.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
    document.body.style.overflow = '';
    
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }, 500);
}

// ============================================
// Project Detail Lightbox
// ============================================
function openProjectLightbox(catKey, projId) {
    const cat = portfolioData[catKey];
    if (!cat) return;
    
    const proj = cat.projects.find(p => p.id === projId);
    if (!proj) return;

    lightboxCurrentCatKey = catKey;
    lightboxCurrentProjId = projId;
    lightboxCurrentIndex = 0;
    lightboxImages = proj.images.map(img => PORTFOLIO_BASE_URL + catKey + "/" + projId + "/" + img);

    // Set info
    document.getElementById('lightbox-title').textContent = proj.title;
    document.getElementById('lightbox-desc').textContent = proj.description;

    // Set first image
    updateLightboxImage();

    // Show lightbox
    const lightbox = document.getElementById('project-lightbox');
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    requestAnimationFrame(() => {
        lightbox.classList.remove('opacity-0', 'pointer-events-none');
        lightbox.classList.add('opacity-100', 'pointer-events-auto');
    });
}

function closeProjectLightbox() {
    const lightbox = document.getElementById('project-lightbox');
    lightbox.classList.remove('opacity-100', 'pointer-events-auto');
    lightbox.classList.add('opacity-0', 'pointer-events-none');
    
    setTimeout(() => {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
    }, 300);
}

function updateLightboxImage() {
    const img = document.getElementById('lightbox-img');
    const counter = document.getElementById('lightbox-counter');
    
    if (lightboxImages.length > 0) {
        img.src = lightboxImages[lightboxCurrentIndex];
        counter.textContent = `${lightboxCurrentIndex + 1} / ${lightboxImages.length}`;
    }
}

function lightboxNext() {
    if (lightboxImages.length === 0) return;
    lightboxCurrentIndex = (lightboxCurrentIndex + 1) % lightboxImages.length;
    updateLightboxImage();
}

function lightboxPrev() {
    if (lightboxImages.length === 0) return;
    lightboxCurrentIndex = (lightboxCurrentIndex - 1 + lightboxImages.length) % lightboxImages.length;
    updateLightboxImage();
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('project-lightbox');
    if (lightbox && !lightbox.classList.contains('hidden')) {
        if (e.key === 'ArrowRight') lightboxNext();
        if (e.key === 'ArrowLeft') lightboxPrev();
        if (e.key === 'Escape') closeProjectLightbox();
    }
    
    const modal = document.getElementById('portfolio-modal');
    if (modal && !modal.classList.contains('hidden') && (lightbox && lightbox.classList.contains('hidden'))) {
        if (e.key === 'Escape') closeCategoryModal();
    }
});
