import type {
  HomeContent,
  ProcessItem,
  ReviewItem,
  SpecialService,
  WhyDetailItem,
} from "./home.types";

const specialServices: SpecialService[] = [
  {
    title: "Asistență în controale ANAF și Antifraudă",
    description:
      "Oferim sprijin în controale fiscale în curs de derulare, inclusiv în situații în care evidența contabilă a fost întocmită anterior de o terță parte.",
  },
  {
    title: "Refacere și reorganizare contabilitate",
    description:
      "Preluăm firme cu evidență contabilă neclară, nefinalizată sau greșit întocmită și reorganizăm documentele și fluxul contabil.",
  },
  {
    title: "Preluare firme cu evidență incompletă",
    description:
      "Analizăm situația existentă și stabilim pașii necesari pentru a readuce contabilitatea într-o formă corectă și predictibilă.",
  },
  {
    title: "Stabilire activ, pasiv și obligații fiscale",
    description:
      "Clarificăm activul, pasivul și obligațiile fiscale ale societății, pentru decizii mai sigure și o imagine financiară mai clară.",
  },
  {
    title: "Suport pentru e-Factura, e-Transport, ITM și REVISAL / REGES",
    description:
      "Te ajutăm să gestionezi obligațiile administrative și fiscale curente, cu organizare clară și pași ușor de urmărit.",
  },
  {
    title: "Soluții personalizate în funcție de activitate",
    description:
      "Adaptăm serviciile în funcție de specificul firmei tale, de etapa în care se află și de nivelul de complexitate al situației.",
  },
];

const processItems: ProcessItem[] = [
  {
    step: "01",
    title: "Înțelegem contextul",
    description:
      "Ne trimiți câteva detalii despre firmă și situația actuală, astfel încât să înțelegem clar de ce ai nevoie.",
  },
  {
    step: "02",
    title: "Propunem soluția",
    description:
      "Analizăm contextul și îți propunem o soluție clară, adaptată nevoilor și nivelului de complexitate al firmei tale.",
  },
  {
    step: "03",
    title: "Preluăm organizat",
    description:
      "Stabilim pașii de lucru și preluăm documentele, online sau fizic, într-un mod simplu și predictibil.",
  },
  {
    step: "04",
    title: "Lucrăm cu claritate",
    description:
      "Primești comunicare constantă, organizare și vizibilitate mai bună asupra obligațiilor și termenelor importante.",
  },
];

const whyDetails: WhyDetailItem[] = [
  {
    title: "Un singur partener pentru tot",
    description:
      "De la înființarea firmei până la contabilitate curentă, salarizare, HR, consultanță fiscală și reprezentare ANAF — totul printr-un singur punct de contact, cu echipă dedicată. Iar când activitatea clientului necesită servicii complementare — juridic, IT, traduceri etc — le coordonăm noi, prin parteneri de încredere. Un singur interlocutor pentru tot ce are nevoie firma ta.",
  },
  {
    title: "Experiență și asumare",
    description:
      "Peste 20 de ani în contabilitate și fiscalitate. Ne asumăm greșelile prin contract și le acoperim financiar — o garanție clară a serviciilor oferite.",
  },
  {
    title: "Optimizare fiscală proactivă",
    description:
      "Nu așteptăm să ne întrebi. Te sfătuim activ astfel încât să plătești doar ce datorezi statului — nici un leu în plus.",
  },
  {
    title: "Termene respectate, zero amenzi, zero controale.",
    description:
      "Niciun client nu a primit amendă din cauza unei declarații depuse târziu. Respectăm termenele ANAF și îți comunicăm din timp ce urmează.",
  },
  {
    title: "Reprezentare directă",
    description:
      "Interacționăm cu administrația fiscală în numele tău, te reprezentăm la controale ANAF și Antifraudă și gestionăm comunicarea oficială cu autoritățile locale.",
  },
  {
    title: "Comunicare în 3 limbi",
    description:
      "Lucrăm în română, engleză, franceză și italiană — util pentru antreprenorii internaționali stabiliți în Sibiu sau pentru firmele cu parteneri străini.",
  },
  {
    title: "Digitalizare completă",
    description:
      "Cunoaștem majoritatea softurilor de contabilitate și avem aptitudini digitale solide — documentele circulă rapid, organizat și în siguranță.",
  },
  {
    title: "Explicăm pe înțelesul tău",
    description:
      "Contabilitatea nu trebuie să fie complicată. Explicăm clar, fără termeni tehnici, astfel încât tu să înțelegi situația firmei tale și să poți lua decizii informate.",
  },
  {
    title: "Siguranța datelor garantată",
    description:
      "Documentele și datele tale sunt protejate prin backup automatizat de 2 ori pe zi, folosind metoda 3+2+1: 3 copii de rezervă, 2 tipuri de stocare și 1 copie externă offsite. Confidențialitatea și organizarea sunt standard, nu opțiuni.",
  },
];

const socialProofItems: ReviewItem[] = [
  {
    quote:
      "L-am întâlnit pe dl. contabil Bogdan într-o perioadă dificilă pentru firmă. A gestionat situația cu profesionalism și a soluționat eficient problema. Îl recomand cu încredere tuturor celor care caută un specialist serios și dedicat.",
    author: "A.M.",
    source: "Google Review",
  },
  {
    quote:
      "We are very satisfied with the professional knowledge of the team and their overall approach. Especially for foreigners having a business in Romania, this is the kind of firm you want to have on your side.",
    author: "Client internațional",
    source: "Google Review",
  },
  {
    quote:
      "Am început în 2019 ca administrator de SRL și am ales ALPHA CONT la recomandarea unui partener. Nu cred că puteam lua o decizie mai bună. Știe meserie! Recomand cu toată încrederea noilor antreprenori, dar și celor cu experiență.",
    author: "Administrator SRL, IT",
    source: "Google Review",
  },
  {
    quote:
      "În sfârșit am găsit un contabil care are viziune și este implicat în ceea ce face. Mă bucur că există în Sibiu oameni care chiar știu să-și facă treaba cu profesionalism și să te reprezinte în controale.",
    author: "Antreprenor Sibiu",
    source: "Google Review",
  },
  {
    quote:
      "È stato davvero molto professionale, mi ha spiegato il regime fiscale rumeno e consigliato nel modo migliore. Ogni anno prepara la mia dichiarazione con precisione e puntualità. Consiglio a chiunque.",
    author: "Client italian",
    source: "Google Review",
  },
];

export const homeContent: HomeContent = {
  heroTitle:
    "Contabilitate și fiscalitate pentru firme din Sibiu care vor claritate, control și sprijin real",
  heroText:
    "Știi ce ai de plată, ce urmează și unde te afli. Fără improvizații, fără surprize, fără blocaje administrative.",
  heroSubtext:
    "Preluăm contabilitatea, salarizarea și clarificările fiscale pentru SRL-uri, PFA-uri și firme în creștere, astfel încât tu să te poți ocupa de business, nu de birocrație.",
  heroButton: "Cere ofertă",
  heroSecondaryButton: "Discută pe WhatsApp",
  heroResponseLine: "Răspundem, de obicei, în aceeași zi lucrătoare.",
  heroBadge: "ALPHACONT",
  officeShowcaseTitle: "Birou local în Sibiu, organizare clară și comunicare directă",
  officeShowcaseText:
    "Lucrăm cu antreprenori și companii care își doresc ordine, predictibilitate și sprijin profesionist în contabilitate și fiscalitate.",
  officeShowcaseSubtext:
    "Comunicăm direct, explicăm clar și intervenim inclusiv în situații dificile, de la reorganizare contabilă până la controale fiscale în curs.",
  officeShowcaseMeta: "Sibiu · SRL, PFA, ONG · Răspuns rapid",

  servicesTitle: "Pentru cine lucrăm",
  services: [
    "SRL-uri din diverse domenii de activitate",
    "PFA-uri și profesii independente",
    "ONG-uri și asociații",
    "Firme nou înființate",
    "Firme în creștere",
    "Companii care au nevoie de reorganizare și clarificare contabilă",
  ],

  specialServicesTitle: "Servicii specializate",
  specialServices,
  supportLanguagesLine: "Comunicăm în română, engleză, franceză și italiană.",

  whyTitle: "De ce ne aleg clienții",
  whyIntro:
    "Lucrăm cu firme din Sibiu de peste 20 de ani. În tot acest timp, am gestionat situații simple și complexe, am reprezentat clienți în fața ANAF și Antifraudă și am menținut un standard clar: niciun client nu pleacă cu amendă din cauza noastră.",
  whyDetails,

  processTitle: "Cum lucrăm",
  processItems,

  socialProofTitle: "Ce spun recenziile publice",
  socialProofItems,

  aboutTitle: "Despre noi",
  aboutParagraphs: [
    "ALPHACONT înseamnă experiență, claritate și servicii financiar-contabile premium pentru antreprenori și companii care își doresc mai mult decât o evidență corectă.",
    "Credem că, deși lucrăm într-o eră digitală, relația umană rămâne esențială în acest domeniu. De aceea, explicăm clar și direct, astfel încât tu să poți lua decizii informate și să te ocupi de afacerea ta, nu de birocrație.",
    "Lucrăm cu SRL-uri, PFA-uri, ONG-uri, firme nou înființate și companii care au nevoie de reorganizare, control și predictibilitate.",
  ],
  aboutHighlights: [
    "Birou local în Sibiu",
    "Comunicare directă prin email, telefon și WhatsApp",
    "Lucrăm cu SRL-uri, PFA-uri, ONG-uri și firme nou înființate",
    "Comunicăm în română, engleză, franceză și italiană",
  ],
  latestArticlesTitle: "ANAF ne informează",
  anafLinkLabel: "Calendar obligații fiscale ANAF",
  anafLinkUrl:
    "https://www.anaf.ro/anaf/internet/ANAF/asistenta_contribuabili/info_obligatii_fiscale/calendar_obligatii_fiscale/!ut/p/a1/pZFLC4JAEMc_Swev7pgPpJt50Cxo7YG6l1jBF_hitfz6rdKhqFaiuc3w-w3DfxBBISI1vRUZ7YumpuXYE-PiKq7hLs2lB64P4OvrzUF3MABWORBxAL6UBULf0R6-AHjx93gLYGi2d9R3tgKgz_gn9T8fjB_9d2AmvwARITJeMAGiiIUbeAYeIlnZxNM_I6uOVTNDhCVpwhImXxkf533fdisJJBiGQaY1TWXWSPCJz5uuR-EThtrqzCuEAleB2VmLO2102nc!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/",
  anafLinkSecondaryLabel: "Întrebări și răspunsuri ANAF",
  anafLinkSecondaryUrl:
    "https://www.anaf.ro/anaf/internet/ANAF/asistenta_contribuabili/servicii_oferite_contribuabililor/intrebari_raspunsuri_facebook/!ut/p/a1/pZJdb4IwFIZ_ixfccl6pJbg7JJvITIa6ReyNqQkihoGpTP7-qMmSTV2J8dy1eZ6er5KghEQpT3km67wqZaHPwl2H_dANHc-JMGceZnz08jwaLoBg0AKrFsA_4ePCD2fQ_mTOxzEw_vENwB__LX4F3EEQLfg06AO8w39nj_lwjfXH7NK_TnCffw10zH9JwphCd3AGTCsyvqBnaO7C6QCGjCISWVFtzj9q5Zcb5mUkVLpNVarsL9Ve7-r6cHyyYKFpGluWcmurysItflcda0p-YXT4_NCRIJ_seXGa-n6v9w18-Lw-/dl5/d5/L2dBISEvZ0FBIS9nQSEh/",
  anafLinkThirdLabel: "Direcția Generală Antifraudă Fiscală",
  anafLinkThirdUrl:
    "https://www.antifrauda.ro/anaf/internet/Antifrauda/acasa_antifrauda/!ut/p/a1/hc6xDoIwEAbgZ2Hoyp1FG3QjRiHoLnQxYGrBlJaUSl9fNC4mirf9l-_PHXAogOtqbGXlWqMr9cycnbNFxjIa0zzd4xrZLjpQukXEdDmBcgL4YxL81z8BnyXI3mDmRA5cKlO_3i0TXUexBG7FVVhhw7ud1o1z_bAhSNB7H0pjpBLhxXQEv1UaMzgoPiX0XYG3lRqPSRA8ADGnF9M!/dl5/d5/L2dBISEvZ0FBIS9nQSEh/",
  anafLinkFourthLabel: "Înregistrare utilizatori ANAF online",
  anafLinkFourthUrl:
    "https://www.anaf.ro/anaf/internet/ANAF/servicii_online/inregistrare_utilizatori/!ut/p/a1/pZNfb4IwFMU_iw-80gMFBntDnCBbIuKM2BeDCSKJggE2vv6K2RKRWWK8T_3zOz3tvbeEkYiwPP7O0rjOijw-tnNmbD3FMzzVVH3XtgADCCeTKR9B4cCGA7gTNrp6eAtgoY9noe4GgKv96gVARz8P3rm_5vhL_cNRAH1A_0mf08O4uX9IzXZ7-ja2lsDq5VbfNxC9P6AD_gEV-jv9_HWBufaovutv0Qff3zd4Ss-Bgf5bEyZMcVvBCyBqUeEJbQ-Jq6gOAFb_hF6ZfMLSY7G7fLmNne-omRJWJvukTEr5q-TLh7o-V68SJDRNI8d5vJfLQsJ__KGoahJdYeR8Wv1FhGyWBae1Wdmj0Q8_cdcm/dl5/d5/L2dBISEvZ0FBIS9nQSEh/",

  faqTitle: "Întrebări frecvente",
  faqs: [
    {
      question: "Cu ce tipuri de clienți lucrați?",
      answer:
        "Lucrăm cu PFA-uri, SRL-uri, ONG-uri, firme nou înființate și companii care au nevoie de organizare, claritate și sprijin fiscal constant.",
    },
    {
      question: "Lucrați și cu firme nou înființate?",
      answer:
        "Da. Te ajutăm să pornești organizat, să înțelegi obligațiile fiscale de bază și să stabilești de la început un flux contabil corect.",
    },
    {
      question: "Preluați firme cu evidență contabilă incompletă sau greșit întocmită?",
      answer:
        "Da. Putem analiza situația existentă, reorganiza documentele și reface evidența contabilă astfel încât firma să poată merge mai departe corect și predictibil.",
    },
    {
      question: "Oferiți sprijin în timpul unui control ANAF deja început?",
      answer:
        "Da. Oferim asistență în controale fiscale în curs de derulare și sprijinim clarificarea documentelor și a situației contabile.",
    },
    {
      question: "Cum transmit documentele pentru contabilitate?",
      answer:
        "Documentele pot fi transmise organizat, periodic, în format fizic sau digital, astfel încât evidența și raportarea să rămână clare și la zi.",
    },
    {
      question: "Oferiți și servicii de salarizare?",
      answer:
        "Da. Gestionăm salarizarea, documentele de personal și obligațiile aferente, astfel încât procesul să fie corect și predictibil.",
    },
  ],

  contactTitle: "Contact",
  contactEmail: "contact@alphacont.ro",
  contactPhone: "0040721644296",
  contactPhoneSecondary: "00393347412487",
  contactCity: "Str. Octavian Goga 55, 550370 Sibiu, Jud. Sibiu",
  whatsappNumber: "40721644296",
  contactPromise: "Răspundem, de obicei, în aceeași zi lucrătoare.",
  contactFormButton: "Trimite solicitarea",
  pricingNote:
    "Prețurile pornesc de la 300 lei / lună. Costul final depinde de volumul firmei și de complexitatea serviciilor solicitate.",
  locationTitle: "Unde ne găsești",
  locationText:
    "Biroul nostru este în Sibiu, pe Str. Octavian Goga 55. Ne poți contacta online, telefonic sau ne poți vizita la birou, cu programare.",
  mapsUrl:
    "https://maps.app.goo.gl/rombVxLCvRkwJYtq9",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.5!2d24.1404678!3d45.7782333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c5d7b3eafca37%3A0xcfedcadf0ae233cc!2sStr.%20Octavian%20Goga%2055%2C%20Sibiu!5e0!3m2!1sro!2sro!4v1234567890",
  seoServiceLinksTitle: "Servicii căutate în Sibiu",

  internshipTitle: "Internship / stagiu de practică",
  internshipIntro:
    "Primim cu drag tineri care vor să învețe, sunt atenți la detalii și își doresc experiență practică într-un domeniu în care rigoarea, organizarea și claritatea contează.",
  internshipHighlights: [
    "Potrivit pentru studenți, absolvenți și tineri la început de drum",
    "Expunere la situații reale de contabilitate, organizare și administrare",
    "Mediu serios în care înveți claritate, disciplină și gândire practică",
  ],
  internshipButton: "Trimite CV-ul",
};
