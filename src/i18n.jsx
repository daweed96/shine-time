import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const englishTranslations = {
  'Početna': 'Home',
  'Usluge': 'Services',
  'Galerija': 'Gallery',
  'Kontakt': 'Contact',
  'Shine Time početna': 'Shine Time home',
  'Glavna navigacija': 'Main navigation',
  'Otvori meni': 'Open menu',
  'Zatvori meni': 'Close menu',
  'Izaberi jezik': 'Choose language',
  'Engleski': 'English',
  'Srpski': 'Serbian',
  'Luksuzni sportski automobil sa sjajnim lakom': 'Luxury sports car with glossy paintwork',
  'Luksuzni auto detailing, prefinjeno izveden.': 'Luxury car detailing, refined to perfection.',
  'Diskretan studio za negu vozila po dogovoru, namenjen modelima Mercedes, BMW, Audi, Porsche i svakom automobilu koji zaslužuje besprekoran dolazak.':
    'A discreet, appointment-only studio for Mercedes, BMW, Audi, Porsche, and every car that deserves an immaculate arrival.',
  'Kontaktirajte nas': 'Contact us',
  'Pogledajte usluge': 'Explore services',
  'Ocena klijenata': 'Client rating',
  'Uređenih vozila': 'Detailed vehicles',
  'Nega premaza': 'Coating care',
  'Usluge studija': 'Studio services',
  'Precizni tretmani za svaku površinu.': 'Precision treatments for every surface.',
  'Svaka usluga zasniva se na metodama bezbednim za lak, pažljivoj završnoj obradi i kontrolisanoj hemiji.':
    'Every service is built around paint-safe methods, careful finishing, and controlled chemistry.',
  'Sve usluge': 'All services',
  'Pre / Posle': 'Before / After',
  'Dubina, jasnoća i sjaj koji menjaju siluetu vozila.': 'Depth, clarity, and gloss that transform the car\'s silhouette.',
  'Naš proces korekcije uklanja vizuelne nepravilnosti sa laka, a zatim zaključava visok sjaj premijum zaštitom.':
    'Our correction process removes visible paint defects, then locks in a high-gloss finish with premium protection.',
  'Smanjenje swirl tragova': 'Reduced swirl marks',
  'Hidrofobna zaštita': 'Hydrophobic protection',
  'Obnova kabine na dodir': 'A cabin renewed to the touch',
  'Detaljna završna inspekcija': 'Detailed final inspection',
  'Pre': 'Before',
  'Posle': 'After',
  'Premijum studio za auto detailing': 'Premium car detailing studio',
  'Nega u privatnom boksu': 'Care in a private bay',
  'Osmišljeno oko kontrolisanog osvetljenja, čistog alata i preciznog ručnog rada.':
    'Designed around controlled lighting, clean tools, and precise handwork.',
  'Zašto izabrati nas': 'Why choose us',
  'Mirniji i precizniji pristup nezi automobila.': 'A calmer, more precise approach to car care.',
  'Spajamo premijum automobilsku estetiku sa disciplinovanim procesom koji štiti vašu investiciju.':
    'We combine premium automotive aesthetics with a disciplined process that protects your investment.',
  'Metode pranja bezbedne za lak i premijum hemija': 'Paint-safe washing methods and premium chemicals',
  'Rezervisani termini bez žurbe i površne predaje vozila': 'Reserved appointments without rushed or superficial handovers',
  'Specijalizovana nega za mat, sjajne, zaštićene i performans završnice':
    'Specialized care for matte, gloss, protected, and performance finishes',
  'Diskretna, jasna komunikacija pre, tokom i nakon usluge':
    'Discreet, clear communication before, during, and after the service',
  'Viši standard dolaska.': 'A higher standard of arrival.',
  'Sjaj, lajsne, kabina, felne i refleksije pripremljeni studijskom pažnjom.':
    'Gloss, trim, cabin, wheels, and reflections prepared with studio-level attention.',
  'Otvorite galeriju': 'View gallery',
  'Posetite naš studio': 'Visit our studio',
  'Doživite završnu obradu uživo.': 'Experience the finish in person.',
  'Posetite naš privatni detailing boks za premijum negu, savetovanje o zaštiti laka i bliži uvid u naš studijski proces.':
    'Visit our private detailing bay for premium care, paint-protection advice, and a closer look at our studio process.',
  'Posetite nas': 'Visit us',
  'Poseta premijum detailing studiju': 'Visit to the premium detailing studio',
  'Privatni boks 3': 'Private bay 3',
  'Kompletan detailing meni za luksuzna vozila.': 'A complete detailing menu for luxury vehicles.',
  'Svaki tretman se izvodi čistim materijalima, pažljivim ručnim radom i završnim standardom dostojnim premijum automobila.':
    'Every treatment uses clean materials, careful handwork, and a finishing standard worthy of premium vehicles.',
  'Individualna nega': 'Tailored care',
  'Potreban vam je prilagođen plan korekcije?': 'Need a tailored correction plan?',
  'Preporuku za keramiku, poliranje ili intervale održavanja dajemo tek nakon pregleda debljine laka, tipa završnice, stanja lajsni i materijala u kabini.':
    'We recommend ceramic coating, polishing, or maintenance intervals only after inspecting paint depth, finish type, trim condition, and cabin materials.',
  'Zatražite konsultaciju': 'Request a consultation',
  'Uključena nega': 'Included care',
  'Sjaj, refleksija i ručno završeni detalji.': 'Gloss, reflection, and hand-finished details.',
  'Privremene fotografije prikazuju željeni ton sajta dok ne budu spremne autentične fotografije vašeg studija.':
    'Temporary photography sets the intended tone until authentic images of your studio are ready.',
  'Vaš automobil je sledeći': 'Your car is next',
  'Neka sledeća refleksija bude vaša.': 'Let the next reflection be yours.',
  'Kontakt / Posetite nas': 'Contact / Visit us',
  'Posetite naš premijum detailing studio.': 'Visit our premium detailing studio.',
  'Pozovite nas, pošaljite email, zapratite nas ili pronađite put do našeg privatnog boksa. Rado primamo luksuzna vozila za posete studiju i detailing konsultacije.':
    'Call, email, follow us, or find your way to our private bay. We welcome luxury vehicles for studio visits and detailing consultations.',
  'Adresa': 'Address',
  'Telefon': 'Phone',
  'Radno vreme': 'Opening hours',
  'Povežite se': 'Connect with us',
  'Pratite završnu obradu iz studija.': 'Follow the finishing work from the studio.',
  'Pogledajte korekcije laka, sjaj keramičke zaštite, detalje iz wash baya i trenutke isporuke na našim društvenim mrežama.':
    'See paint corrections, ceramic-coating gloss, wash-bay details, and delivery moments across our social channels.',
  'Pozovite sada': 'Call now',
  'Otvori': 'Open',
  'Lokacija studija Shine Time': 'Shine Time studio location',
  'Mapa studija': 'Studio map',
  'Niška Ulica 8, Leskovac': '8 Niška Street, Leskovac',
  'Pon - Sub, 8:00 - 18:00': 'Mon - Sat, 8:00 AM - 6:00 PM',
  'Koristite navigaciju do ulaza u privatni boks. Parking za klijente nalazi se neposredno pored studija.':
    'Use directions to reach the private-bay entrance. Client parking is located directly beside the studio.',
  'Navigacija': 'Directions',
  'Luksuzno pranje, korekcija laka, zaštitni premazi i nega enterijera za vozila koja zaslužuju viši, mirniji standard.':
    'Luxury washing, paint correction, protective coatings, and interior care for vehicles that deserve a higher, calmer standard.',
  'Sadržaj': 'Explore',
  'Ručno pranje eksterijera': 'Hand exterior wash',
  'pH-neutralna pena, mekane rukavice, metoda sa dve kante, felne, stakla i završno sušenje peškirom.':
    'pH-neutral foam, soft mitts, the two-bucket method, wheels, glass, and a final towel dry.',
  'Dubinsko čišćenje enterijera': 'Deep interior cleaning',
  'Bezbedno čišćenje kože, parna ekstrakcija, tepisi, ventilacija, konzole, patosnice i diskretan završni tretman kabine.':
    'Safe leather cleaning, steam extraction, carpets, vents, consoles, mats, and a discreet cabin finish.',
  'Keramička zaštita': 'Ceramic protection',
  'Dugotrajna zaštita laka sa pojačanim sjajem, hidrofobnim efektom i UV otpornošću.':
    'Long-lasting paint protection with enhanced gloss, hydrophobic performance, and UV resistance.',
  'Poliranje laka': 'Paint polishing',
  'Jednostepena ili višestepena korekcija za manje swirl tragova, veću dubinu, jasnoću i ogledalsku refleksiju.':
    'Single- or multi-stage correction for fewer swirl marks, greater depth, clarity, and mirror-like reflection.',
  'Kompletan detailing': 'Complete detailing',
  'Potpuna obnova enterijera i eksterijera za premijum vozila, vikend automobile i posebne isporuke.':
    'Complete interior and exterior restoration for premium vehicles, weekend cars, and special deliveries.',
  'Čišćenje motornog prostora': 'Engine bay cleaning',
  'Kontrolisano odmašćivanje, nežna obrada, pažljivo ispiranje i završna nega plastičnih površina.':
    'Controlled degreasing, gentle treatment, careful rinsing, and final care for plastic surfaces.',
  'Premium održavajuće pranje': 'Premium maintenance wash',
  'Planirano luksuzno održavanje za zaštićena i kolekcionarska vozila koja uvek moraju izgledati besprekorno.':
    'Scheduled luxury maintenance for protected and collectible vehicles that must always look immaculate.',
  'Finalna obrada Porsche laka': 'Final Porsche paint finish',
  'Završna obrada u studiju': 'Studio finishing work',
  'Refleksija crnog laka': 'Black paint reflection',
  'Dubinsko čišćenje kabine': 'Deep cabin cleaning',
  'Isporuka nakon detailinga': 'Post-detail delivery',
  'Obnova felni i donjih detalja': 'Wheel and lower-detail restoration',
  'Shine Time završna obrada': 'Shine Time finishing',
  'Rezultat detailinga': 'Detailing result',
};

const metadata = {
  en: {
    lang: 'en',
    title: 'Shine Time | Premium Detailing Studio',
    description:
      'Shine Time is a premium car detailing studio in Leskovac for luxury washing, paint correction, ceramic protection, and professional interior care.',
  },
  sr: {
    lang: 'sr-Latn',
    title: 'Shine Time | Premijum studio za detailing',
    description:
      'Shine Time je premijum studio za auto detailing u Leskovcu, za luksuzno pranje, korekciju laka, keramičku zaštitu i profesionalnu negu enterijera.',
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('shine-time-language') || 'en');

  useEffect(() => {
    const pageMetadata = metadata[language];
    localStorage.setItem('shine-time-language', language);
    document.documentElement.lang = pageMetadata.lang;
    document.title = pageMetadata.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', pageMetadata.description);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (source) => (language === 'en' ? englishTranslations[source] || source : source),
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return context;
}
