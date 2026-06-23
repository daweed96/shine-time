import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from './i18n.jsx';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Music2,
  Navigation,
  Phone,
  ShieldCheck,
} from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Početna' },
  { id: 'services', label: 'Usluge' },
  { id: 'gallery', label: 'Galerija' },
];

const mobileNavItems = [...navItems, { id: 'contact', label: 'Kontakt' }];

const pageIds = ['home', 'services', 'gallery', 'contact'];

const images = {
  hero:
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=88',
  bay:
    'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1800&q=88',
  polish:
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1800&q=88',
  interior:
    'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1800&q=88',
  detail:
    'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1800&q=88',
  wheel:
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1600&q=88',
  studio:
    'https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1800&q=88',
};

const services = [
  {
    title: 'Ručno pranje eksterijera',
    text: 'pH-neutralna pena, mekane rukavice, metoda sa dve kante, felne, stakla i završno sušenje peškirom.',
    image: images.bay,
  },
  {
    title: 'Dubinsko čišćenje enterijera',
    text: 'Bezbedno čišćenje kože, parna ekstrakcija, tepisi, ventilacija, konzole, patosnice i diskretan završni tretman kabine.',
    image: images.interior,
  },
  {
    title: 'Keramička zaštita',
    text: 'Dugotrajna zaštita laka sa pojačanim sjajem, hidrofobnim efektom i UV otpornošću.',
    image: images.polish,
  },
  {
    title: 'Poliranje laka',
    text: 'Jednostepena ili višestepena korekcija za manje swirl tragova, veću dubinu, jasnoću i ogledalsku refleksiju.',
    image: images.detail,
  },
  {
    title: 'Kompletan detailing',
    text: 'Potpuna obnova enterijera i eksterijera za premijum vozila, vikend automobile i posebne isporuke.',
    image: images.studio,
  },
  {
    title: 'Čišćenje motornog prostora',
    text: 'Kontrolisano odmašćivanje, nežna obrada, pažljivo ispiranje i završna nega plastičnih površina.',
    image: images.wheel,
  },
  {
    title: 'Premium održavajuće pranje',
    text: 'Planirano luksuzno održavanje za zaštićena i kolekcionarska vozila koja uvek moraju izgledati besprekorno.',
    image: images.hero,
  },
];

const gallery = [
  { title: 'Finalna obrada Porsche laka', image: images.hero },
  { title: 'Završna obrada u studiju', image: images.bay },
  { title: 'Refleksija crnog laka', image: images.polish },
  { title: 'Dubinsko čišćenje kabine', image: images.interior },
  { title: 'Isporuka nakon detailinga', image: images.detail },
  { title: 'Obnova felni i donjih detalja', image: images.wheel },
];

const why = [
  'Metode pranja bezbedne za lak i premijum hemija',
  'Rezervisani termini bez žurbe i površne predaje vozila',
  'Specijalizovana nega za mat, sjajne, zaštićene i performans završnice',
  'Diskretna, jasna komunikacija pre, tokom i nakon usluge',
];

const studioContact = {
  address: 'Niška Ulica 8, Leskovac',
  phone: '+381 69 5451006',
  email: 'urosiv00@gmail.com',
  hours: 'Pon - Sub, 8:00 - 18:00',
  mapsUrl: 'https://maps.app.goo.gl/oi4RoWhDo9A6Tr8e8',
};

const socials = [
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/_shine_time_detailing/' },
  { name: 'TikTok', icon: Music2, href: 'https://www.tiktok.com/@urosiv00' },
  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/urospfc.ivanovic' },
];

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
};

function getInitialPage() {
  const hash = window.location.hash.replace('#', '');
  return pageIds.includes(hash) ? hash : 'home';
}

function BrandLogo({ size = 'header' }) {
  const isFooter = size === 'footer';

  return (
    <div className={`flex items-center ${isFooter ? 'gap-5' : 'gap-3'}`} aria-label="Shine Time">
      <span
        className={`flex shrink-0 items-center justify-center overflow-hidden ${
          isFooter ? 'h-28 w-28 rounded-lg border border-white/12 bg-ink shadow-glass' : 'h-16 w-24'
        }`}
      >
        <img
          src="/images/shine_time_logo.jpg"
          alt=""
          className={`${isFooter ? 'h-full w-full object-cover' : 'h-16 w-16 rounded-lg border border-white/12 object-cover shadow-glass'}`}
        />
      </span>
      <span className={isFooter ? 'block' : 'hidden sm:block'}>
        <span className={`block font-display font-bold leading-none tracking-normal text-white ${isFooter ? 'text-4xl' : 'text-2xl'}`}>
          Shine Time
        </span>
        <span className={`mt-2 block font-semibold uppercase text-steel ${isFooter ? 'text-xs tracking-[0.24em]' : 'text-[0.62rem] tracking-[0.22em]'}`}>
          Detailing studio
        </span>
      </span>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState(getInitialPage);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onPopState = () => setPage(getInitialPage());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const currentPage = useMemo(() => {
    const pages = {
      home: <HomePage setPage={navigate} />,
      services: <ServicesPage setPage={navigate} />,
      gallery: <GalleryPage setPage={navigate} />,
      contact: <ContactPage />,
    };
    return pages[page] || pages.home;
  }, [page]);

  function navigate(id) {
    setPage(id);
    setMenuOpen(false);
    window.history.pushState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-chrome text-graphite">
      <Header page={page} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} />
      <motion.main key={page} variants={pageVariants} initial="initial" animate="animate" transition={{ duration: 0.45, ease: 'easeOut' }}>
        {currentPage}
      </motion.main>
      <Footer navigate={navigate} />
    </div>
  );
}

function Header({ page, menuOpen, setMenuOpen, navigate }) {
  const { t } = useLanguage();
  const [navTheme, setNavTheme] = useState('dark');
  const lightHeader = navTheme === 'light';
  const darkHeaderClass =
    navTheme === 'strong-dark'
      ? 'liquid-navbar-strong text-white'
      : 'liquid-navbar-dark text-white';

  useLayoutEffect(() => {
    setNavTheme('dark');

    const updateHeader = () => {
      if (page !== 'home' && window.scrollY < 360) {
        setNavTheme('dark');
        return;
      }

      const themeSections = Array.from(document.querySelectorAll('[data-nav-theme]'));
      const sampleY = 88;
      const activeSection = themeSections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= sampleY && rect.bottom > sampleY;
      });

      setNavTheme(activeSection?.dataset.navTheme || 'light');
    };

    const frame = window.requestAnimationFrame(updateHeader);
    window.addEventListener('scroll', updateHeader, { passive: true });
    window.addEventListener('resize', updateHeader);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateHeader);
      window.removeEventListener('resize', updateHeader);
    };
  }, [page]);

  return (
    <header
      className={`liquid-navbar fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        lightHeader
          ? 'liquid-navbar-light text-ink'
          : darkHeaderClass
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-10">
        <button onClick={() => navigate('home')} className="group text-left" aria-label={t('Shine Time početna')}>
          <span>
            <span className={`block font-display text-lg leading-none tracking-normal transition sm:text-xl ${lightHeader ? 'text-ink' : 'text-white'}`}>
              Shine Time
            </span>
            <span className={`mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.18em] transition sm:text-[0.65rem] sm:tracking-[0.22em] ${lightHeader ? 'text-ocean/70' : 'text-steel/75'}`}>
              Detailing studio
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex" aria-label={t('Glavna navigacija')}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`nav-link text-sm font-semibold transition ${
                lightHeader
                  ? page === item.id
                    ? 'active text-ocean'
                    : 'text-slate-700 hover:text-ink'
                  : page === item.id
                    ? 'active text-white'
                    : 'text-white/75 hover:text-white'
              }`}
            >
              {t(item.label)}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle lightHeader={lightHeader} />
          <button
            onClick={() => navigate('contact')}
            className={`shine rounded-lg px-5 py-3 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 ${
              lightHeader
                ? 'shine-bright bg-ink text-white shadow-slate-900/20 hover:bg-midnight'
                : 'shine-steel bg-white text-ink shadow-black/20'
            }`}
          >
            {t('Kontakt')}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle lightHeader={lightHeader} />
          <button
            onClick={() => setMenuOpen((value) => !value)}
            className={`flex h-12 w-12 items-center justify-end transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel ${
              lightHeader ? 'text-ink' : 'text-white'
            }`}
            aria-label={t(menuOpen ? 'Zatvori meni' : 'Otvori meni')}
            aria-expanded={menuOpen}
          >
            <BurgerMark open={menuOpen} />
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            key="mobile-navigation"
            initial={{ height: 0, opacity: 0, y: -12 }}
            animate={{ height: 'auto', opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -12 }}
            transition={{ height: { duration: 0.32, ease: [0.22, 1, 0.36, 1] }, opacity: { duration: 0.2 }, y: { duration: 0.28, ease: 'easeOut' } }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 px-5 pb-5 pt-2">
              {mobileNavItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => navigate(item.id)}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, delay: index * 0.035 }}
                  className={`rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${
                    lightHeader
                      ? page === item.id
                        ? 'bg-ink text-white'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-ink'
                      : page === item.id
                        ? 'bg-white text-ink'
                        : 'text-white/75 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {t(item.label)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function LanguageToggle({ lightHeader }) {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!menuRef.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsideClick);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  const options = [
    { id: 'en', code: 'EN', label: 'Engleski' },
    { id: 'sr', code: 'SR', label: 'Srpski' },
  ];

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex h-10 items-center justify-center gap-1.5 rounded-md border px-2.5 text-[0.65rem] font-bold uppercase transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel ${
          lightHeader
            ? 'border-slate-300/60 bg-white/35 text-ink hover:bg-white/65'
            : 'border-white/15 bg-white/5 text-white hover:bg-white/10'
        }`}
        aria-label={t('Izaberi jezik')}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>{language.toUpperCase()}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className={`absolute right-0 top-[calc(100%+0.55rem)] z-30 w-40 overflow-hidden rounded-lg border p-1.5 shadow-luxury backdrop-blur-2xl ${
            lightHeader
              ? 'border-white/80 bg-white/85 text-ink'
              : 'border-white/15 bg-ink/85 text-white'
          }`}
          role="menu"
          aria-label={t('Izaberi jezik')}
        >
          {options.map((option) => {
            const active = language === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => {
                  setLanguage(option.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold transition ${
                  active
                    ? lightHeader
                      ? 'bg-ink text-white'
                      : 'bg-white text-ink'
                    : lightHeader
                      ? 'text-slate-700 hover:bg-slate-100 hover:text-ink'
                      : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
                role="menuitemradio"
                aria-checked={active}
              >
                <span>{t(option.label)}</span>
                <span className="flex items-center gap-2">
                  <span className="text-[0.62rem] font-bold opacity-55">{option.code}</span>
                  {active && <Check className="h-4 w-4" aria-hidden="true" />}
                </span>
              </button>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}

function BurgerMark({ open }) {
  return (
    <span
      className={`relative block h-5 w-6 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
        open ? 'rotate-[135deg]' : 'rotate-0 delay-200'
      }`}
      aria-hidden="true"
    >
      <span
        className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-[top] duration-200 ease-out ${
          open ? 'top-[9px] delay-0' : 'top-[1px] delay-[700ms]'
        }`}
      />
      <span
        className="absolute left-0 top-[9px] h-0.5 w-6 rounded-full bg-current"
      />
      <span
        className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-[top,transform] ease-out ${
          open
            ? 'top-[9px] rotate-90 delay-[200ms] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]'
            : 'top-[17px] rotate-0 duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]'
        }`}
      />
    </span>
  );
}

function HomePage({ setPage }) {
  return (
    <>
      <Hero setPage={setPage} />
      <ServicesOverview setPage={setPage} />
      <BeforeAfter />
      <WhyChoose />
      <GalleryPreview setPage={setPage} />
      <VisitStudioHome />
    </>
  );
}

function Hero({ setPage }) {
  const { t } = useLanguage();
  return (
    <section data-nav-theme="dark" className="mobile-hero relative isolate overflow-hidden bg-ink pt-[4.5rem] text-white sm:min-h-[100svh] sm:pt-20">
      <img src={images.hero} alt={t('Luksuzni sportski automobil sa sjajnim lakom')} className="absolute inset-0 h-full w-full object-cover opacity-65" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,6,11,0.92),rgba(5,12,25,0.76)_54%,rgba(5,12,25,0.30)_100%)] sm:bg-[linear-gradient(90deg,rgba(3,6,11,0.92),rgba(5,12,25,0.74)_42%,rgba(5,12,25,0.20)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />

      <div className="mobile-hero-inner relative mx-auto flex max-w-7xl items-center px-5 py-10 sm:min-h-[calc(100svh-5rem)] sm:px-8 sm:py-20 lg:px-10">
        <div className="max-w-4xl">
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="font-display text-[2.85rem] font-bold leading-[1.02] tracking-normal text-white sm:text-6xl sm:leading-[0.98] lg:text-8xl">
            {t('Luksuzni auto detailing, prefinjeno izveden.')}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }} className="mt-6 max-w-2xl text-base leading-7 text-white/88 sm:mt-8 sm:text-xl sm:leading-8">
            {t('Diskretan studio za negu vozila po dogovoru, namenjen modelima Mercedes, BMW, Audi, Porsche i svakom automobilu koji zaslužuje besprekoran dolazak.')}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button onClick={() => setPage('contact')} variant="light">
              Kontaktirajte nas
            </Button>
            <Button onClick={() => setPage('services')} variant="dark">
              Pogledajte usluge
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.34 }} className="mt-9 grid max-w-3xl grid-cols-3 divide-x divide-white/12 border-y border-white/12 py-5 sm:mt-14 sm:py-6">
            <Stat value="4.9" label="Ocena klijenata" />
            <Stat value="1,800+" label="Uređenih vozila" />
            <Stat value="72h" label="Nega premaza" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesOverview({ setPage }) {
  return (
    <Section className="bg-chrome" navTheme="light">
      <SectionHeader eyebrow="Usluge studija" title="Precizni tretmani za svaku površinu." text="Svaka usluga zasniva se na metodama bezbednim za lak, pažljivoj završnoj obradi i kontrolisanoj hemiji." />
      <div className="grid gap-6 md:grid-cols-3">
        {services.slice(0, 3).map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button onClick={() => setPage('services')} variant="outline">
          Sve usluge
        </Button>
      </div>
    </Section>
  );
}

function BeforeAfter() {
  const { t } = useLanguage();
  return (
    <Section className="bg-white" navTheme="light">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-ocean">{t('Pre / Posle')}</p>
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">{t('Dubina, jasnoća i sjaj koji menjaju siluetu vozila.')}</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            {t('Naš proces korekcije uklanja vizuelne nepravilnosti sa laka, a zatim zaključava visok sjaj premijum zaštitom.')}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Smanjenje swirl tragova', 'Hidrofobna zaštita', 'Obnova kabine na dodir', 'Detaljna završna inspekcija'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-graphite">
                <Check className="h-5 w-5 text-ocean" />
                {t(item)}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="grid gap-4 sm:grid-cols-2">
            <ResultImage label="Pre" image={images.wheel} />
            <ResultImage label="Posle" image={images.polish} highlight />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function WhyChoose() {
  const { t } = useLanguage();
  return (
    <Section className="bg-chrome" navTheme="light">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="relative min-h-[380px] overflow-hidden rounded-lg shadow-luxury sm:min-h-[520px]">
            <img src={images.studio} alt={t('Premijum studio za auto detailing')} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-steel sm:text-sm sm:tracking-[0.22em]">{t('Nega u privatnom boksu')}</p>
              <p className="mt-3 max-w-md text-xl font-semibold sm:text-2xl">{t('Osmišljeno oko kontrolisanog osvetljenja, čistog alata i preciznog ručnog rada.')}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="flex flex-col justify-center">
          <SectionHeader eyebrow="Zašto izabrati nas" title="Mirniji i precizniji pristup nezi automobila." text="Spajamo premijum automobilsku estetiku sa disciplinovanim procesom koji štiti vašu investiciju." compact />
          <div className="mt-8 grid gap-4">
            {why.map((item) => (
              <div key={item} className="glass-panel flex items-start gap-4 rounded-lg p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-ocean" />
                <p className="text-base leading-7 text-slate-700">{t(item)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function GalleryPreview({ setPage }) {
  return (
    <Section className="bg-chrome" navTheme="light">
      <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeader eyebrow="Galerija" title="Viši standard dolaska." text="Sjaj, lajsne, kabina, felne i refleksije pripremljeni studijskom pažnjom." compact />
        <Button onClick={() => setPage('gallery')} variant="outline">
          Otvorite galeriju
        </Button>
      </div>
      <GalleryGrid preview />
    </Section>
  );
}

function VisitStudioHome() {
  const { t } = useLanguage();
  return (
    <section data-nav-theme="strong-dark" className="bg-ink px-5 py-14 text-white sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-radial-luxury shadow-glass">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 sm:p-10 lg:p-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-steel">{t('Posetite naš studio')}</p>
            <h2 className="font-display text-3xl leading-tight sm:text-5xl">{t('Doživite završnu obradu uživo.')}</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/84 sm:text-lg sm:leading-8">
              {t('Posetite naš privatni detailing boks za premijum negu, savetovanje o zaštiti laka i bliži uvid u naš studijski proces.')}
            </p>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-white/90 sm:grid-cols-2">
              <span className="inline-flex items-center gap-3">
                <MapPin className="h-4 w-4 text-steel" />
                {t(studioContact.address)}
              </span>
              <span className="inline-flex items-center gap-3">
                <Clock className="h-4 w-4 text-steel" />
                {t(studioContact.hours)}
              </span>
            </div>
            <div className="mt-8">
            <a
              href={studioContact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="shine shine-steel inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-ink shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-steel sm:w-auto sm:px-6 sm:tracking-[0.16em]"
            >
              {t('Posetite nas')}
              <Navigation className="h-4 w-4" />
            </a>
            </div>
          </div>
          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[360px] lg:min-h-full">
            <img src={images.studio} alt={t('Poseta premijum detailing studiju')} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink/80 via-ink/20 to-transparent lg:bg-[linear-gradient(90deg,rgba(7,9,13,0.55),rgba(7,9,13,0.08))]" />
            <div className="absolute bottom-5 left-5 right-5 z-10 rounded-lg border border-white/15 bg-ink/70 p-4 text-white backdrop-blur-2xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-steel sm:text-xs sm:tracking-[0.22em]">{t('Privatni boks 3')}</p>
              <p className="mt-2 font-display text-xl sm:text-2xl">Shine Time, Leskovac</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage({ setPage }) {
  const { t } = useLanguage();
  return (
    <PageShell eyebrow="Usluge" title="Kompletan detailing meni za luksuzna vozila." text="Svaki tretman se izvodi čistim materijalima, pažljivim ručnim radom i završnim standardom dostojnim premijum automobila.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} detailed />
        ))}
      </div>
      <div className="mt-10 grid gap-8 rounded-lg bg-ink p-6 text-white shadow-glass sm:mt-16 sm:p-8 lg:grid-cols-[1fr_0.75fr] lg:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-steel">{t('Individualna nega')}</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">{t('Potreban vam je prilagođen plan korekcije?')}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/84 sm:leading-8">{t('Preporuku za keramiku, poliranje ili intervale održavanja dajemo tek nakon pregleda debljine laka, tipa završnice, stanja lajsni i materijala u kabini.')}</p>
        </div>
        <div className="flex items-center lg:justify-end">
          <Button onClick={() => setPage('contact')} variant="light">
            Zatražite konsultaciju
          </Button>
        </div>
      </div>
    </PageShell>
  );
}

function GalleryPage({ setPage }) {
  const { t } = useLanguage();
  return (
    <PageShell eyebrow="Galerija" title="Sjaj, refleksija i ručno završeni detalji." text="Privremene fotografije prikazuju željeni ton sajta dok ne budu spremne autentične fotografije vašeg studija.">
      <GalleryGrid />
      <div className="mt-10 grid items-center gap-8 rounded-lg bg-white p-6 shadow-luxury sm:mt-16 sm:p-8 lg:grid-cols-[1fr_auto] lg:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-ocean">{t('Vaš automobil je sledeći')}</p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl text-ink">{t('Neka sledeća refleksija bude vaša.')}</h2>
        </div>
        <Button onClick={() => setPage('contact')} variant="primary">
          Kontaktirajte nas
        </Button>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  const { t } = useLanguage();
  return (
    <PageShell eyebrow="Kontakt / Posetite nas" title="Posetite naš premijum detailing studio." text="Pozovite nas, pošaljite email, zapratite nas ili pronađite put do našeg privatnog boksa. Rado primamo luksuzna vozila za posete studiju i detailing konsultacije.">
      <div className="grid gap-8 lg:grid-cols-4">
        <Reveal>
          <ContactCard icon={MapPin} title="Adresa" text={studioContact.address} dark />
        </Reveal>
        <Reveal delay={0.12}>
          <ContactCard icon={Phone} title="Telefon" text={studioContact.phone} href={`tel:${studioContact.phone.replace(/[^+\d]/g, '')}`} />
        </Reveal>
        <Reveal delay={0.18}>
          <ContactCard icon={Mail} title="Email" text={studioContact.email} href={`mailto:${studioContact.email}`} />
        </Reveal>
        <Reveal delay={0.24}>
          <ContactCard icon={Clock} title="Radno vreme" text={studioContact.hours} />
        </Reveal>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="h-full rounded-lg bg-ink p-6 text-white shadow-glass sm:p-8 lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-steel">{t('Povežite se')}</p>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl">{t('Pratite završnu obradu iz studija.')}</h2>
            <p className="mt-5 leading-7 text-white/84 sm:leading-8">
              {t('Pogledajte korekcije laka, sjaj keramičke zaštite, detalje iz wash baya i trenutke isporuke na našim društvenim mrežama.')}
            </p>
            <div className="mt-8 grid gap-3">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/10 px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition hover:border-white/30 hover:bg-white/20"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Icon className="h-5 w-5 text-steel" />
                      {item.name}
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              })}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ContactAction href={`tel:${studioContact.phone.replace(/[^+\d]/g, '')}`} icon={Phone} label="Pozovite sada" variant="light" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <MapPanel />
        </Reveal>
      </div>
    </PageShell>
  );
}

function PageShell({ eyebrow, title, text, children }) {
  const { t } = useLanguage();
  return (
    <div>
      <section data-nav-theme="dark" className="relative overflow-hidden bg-radial-luxury px-5 pb-16 pt-32 text-white sm:px-8 sm:pb-24 sm:pt-44 lg:px-10 lg:pb-32 lg:pt-52">
        <div className="absolute inset-0 opacity-30">
          <img src={images.polish} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-steel">{t(eyebrow)}</p>
          <h1 className="max-w-4xl font-display text-4xl leading-tight sm:text-6xl lg:text-7xl">{t(title)}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/84 sm:mt-7 sm:text-lg sm:leading-8">{t(text)}</p>
        </div>
      </section>
      <section data-nav-theme="light" className="px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">{children}</div>
      </section>
    </div>
  );
}

function Section({ children, className = '', navTheme = 'light' }) {
  return (
    <section data-nav-theme={navTheme} className={`px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, text, light = false, compact = false }) {
  const { t } = useLanguage();
  return (
    <Reveal className={`${compact ? '' : 'mx-auto mb-14 max-w-3xl text-center'}`}>
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.24em] ${light ? 'text-steel' : 'text-ocean'}`}>{t(eyebrow)}</p>
      <h2 className={`font-display text-3xl leading-tight sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}>{t(title)}</h2>
      <p className={`mt-4 text-base leading-7 sm:mt-5 sm:text-lg sm:leading-8 ${light ? 'text-white/84' : 'text-slate-600'}`}>{t(text)}</p>
    </Reveal>
  );
}

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.62, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

function Button({ children, onClick, variant = 'primary' }) {
  const { t } = useLanguage();
  const [outlineActive, setOutlineActive] = useState(false);
  const outlineTimer = useRef(null);
  const shineTone = variant === 'primary' || variant === 'dark' ? 'shine-bright' : 'shine-steel';
  const styles = {
    primary: 'bg-ink text-white shadow-lg shadow-slate-900/20 hover:bg-midnight',
    light: 'bg-white text-ink shadow-lg shadow-black/20 hover:bg-steel',
    dark: 'border border-white/35 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20',
    outline: 'outline-shine border border-slate-300 bg-white text-ink shadow-sm',
  };

  useEffect(() => () => window.clearTimeout(outlineTimer.current), []);

  function handleClick() {
    const touchInteraction = window.matchMedia('(hover: none), (pointer: coarse)').matches;

    if (variant !== 'outline' || !touchInteraction) {
      onClick?.();
      return;
    }

    if (outlineActive) return;
    setOutlineActive(true);
    outlineTimer.current = window.setTimeout(() => {
      setOutlineActive(false);
      onClick?.();
    }, 800);
  }

  return (
    <button
      onClick={handleClick}
      aria-busy={outlineActive || undefined}
      className={`shine ${shineTone} ${outlineActive ? 'outline-shine-active' : ''} inline-flex w-full items-center justify-center gap-3 rounded-lg px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] transition duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-6 sm:tracking-[0.16em] ${styles[variant]}`}
    >
      {typeof children === 'string' ? t(children) : children}
      <ArrowUpRight className="h-4 w-4" />
    </button>
  );
}

function Stat({ value, label }) {
  const { t } = useLanguage();
  return (
    <div className="px-3 first:pl-0 sm:px-4">
      <p className="font-display text-2xl leading-none text-white sm:text-4xl">{value}</p>
      <p className="mt-2 text-[0.64rem] font-semibold uppercase tracking-[0.13em] text-white/78 sm:text-xs sm:tracking-[0.18em]">{t(label)}</p>
    </div>
  );
}

function ServiceCard({ service, index, detailed = false }) {
  const { t } = useLanguage();
  return (
    <Reveal delay={index * 0.06}>
      <article className="group h-full overflow-hidden rounded-lg bg-white shadow-luxury transition duration-300 hover:-translate-y-1">
        <div className="relative h-52 overflow-hidden sm:h-64">
          <img src={service.image} alt={t(service.title)} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <div className="p-6 sm:p-7">
          <h3 className="font-display text-[1.65rem] leading-tight text-ink sm:text-2xl">{t(service.title)}</h3>
          <p className="mt-4 leading-7 text-slate-600">{t(service.text)}</p>
          {detailed && (
            <button className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-ocean">
              {t('Uključena nega')}
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function ResultImage({ label, image, highlight = false }) {
  const { t } = useLanguage();
  const translatedLabel = t(label);
  return (
    <div className={`relative min-h-[300px] overflow-hidden rounded-lg shadow-luxury sm:min-h-[430px] ${highlight ? 'sm:mt-12' : ''}`}>
      <img src={image} alt={`${t('Rezultat detailinga')}: ${translatedLabel}`} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink/78 via-transparent to-transparent" />
      <span className="absolute bottom-5 left-5 z-10 rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-lg">{translatedLabel}</span>
    </div>
  );
}

function GalleryGrid({ preview = false }) {
  const { t } = useLanguage();
  const items = preview ? gallery.slice(0, 4) : gallery;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.05}>
          <figure className={`group relative overflow-hidden rounded-lg shadow-luxury ${index === 0 && !preview ? 'lg:col-span-2' : ''}`}>
            <img src={item.image} alt={t(item.title)} className="h-[290px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[360px]" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-ink/78 via-ink/8 to-transparent opacity-90" />
            <figcaption className="absolute bottom-0 left-0 right-0 z-10 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-steel">{t('Shine Time završna obrada')}</p>
              <h3 className="mt-2 font-display text-xl sm:text-2xl text-white">{t(item.title)}</h3>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

function ContactCard({ icon: Icon, title, text, href, dark = false }) {
  const { t } = useLanguage();
  const content = (
    <div className={`group h-full rounded-lg p-6 shadow-luxury transition duration-300 hover:-translate-y-1 ${dark ? 'bg-ink text-white' : 'border border-slate-200 bg-white text-ink'}`}>
      <span className={`flex h-12 w-12 items-center justify-center rounded-lg ${dark ? 'bg-white/10 text-steel' : 'bg-ocean text-white'}`}>
        <Icon className="h-5 w-5" />
      </span>
      <p className={`mt-6 text-xs font-bold uppercase tracking-[0.2em] ${dark ? 'text-steel' : 'text-ocean'}`}>{t(title)}</p>
      <p className={`mt-3 min-w-0 break-words text-lg font-semibold leading-7 ${dark ? 'text-white' : 'text-ink'}`} style={{ overflowWrap: 'anywhere' }}>{t(text)}</p>
      {href && (
        <span className={`mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${dark ? 'text-steel' : 'text-ocean'}`}>
          {t('Otvori')}
          <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      )}
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
      {content}
    </a>
  );
}

function ContactAction({ href, icon: Icon, label, variant }) {
  const { t } = useLanguage();
  const shineTone = variant === 'light' ? 'shine-steel' : 'shine-bright';
  const styles =
    variant === 'light'
      ? 'bg-white text-ink shadow-lg shadow-black/20 hover:bg-steel'
      : 'border border-white/35 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20';

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={`shine ${shineTone} inline-flex w-full items-center justify-center gap-3 rounded-lg px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] transition duration-300 hover:-translate-y-0.5 sm:w-auto sm:px-6 sm:tracking-[0.16em] ${styles}`}
    >
      {t(label)}
      <Icon className="h-4 w-4" />
    </a>
  );
}

function MapPanel() {
  const { t } = useLanguage();
  return (
    <div className="relative min-h-[470px] overflow-hidden rounded-lg bg-radial-luxury shadow-luxury sm:min-h-[560px]">
      <div className="absolute inset-0 opacity-40">
        <img src={images.studio} alt={t('Lokacija studija Shine Time')} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,9,13,0.88),rgba(7,22,43,0.72))]" />
      <div className="absolute inset-5 rounded-lg border border-white/15 sm:inset-8">
        <div className="absolute left-[12%] top-[28%] h-px w-[74%] rotate-[-18deg] bg-white/20" />
        <div className="absolute left-[18%] top-[58%] h-px w-[68%] rotate-[14deg] bg-white/14" />
        <div className="absolute left-[48%] top-[8%] h-[78%] w-px rotate-[8deg] bg-white/14" />
        <div className="absolute left-[28%] top-[18%] h-[62%] w-px rotate-[-24deg] bg-white/10" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-steel">{t('Mapa studija')}</p>
        <h3 className="mt-3 font-display text-3xl sm:text-4xl">{t('Niška Ulica 8, Leskovac')}</h3>
        <p className="mt-4 max-w-xl leading-7 text-white/84 sm:leading-8">
          {t('Koristite navigaciju do ulaza u privatni boks. Parking za klijente nalazi se neposredno pored studija.')}
        </p>
        <div className="mt-6">
          <ContactAction href={studioContact.mapsUrl} icon={Navigation} label="Navigacija" variant="light" />
        </div>
      </div>
    </div>
  );
}

function Footer({ navigate }) {
  const { t } = useLanguage();
  return (
    <footer className="bg-ink px-5 pb-[calc(4rem+env(safe-area-inset-bottom))] pt-16 text-white sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex">
            <BrandLogo size="footer" />
          </div>
          <p className="mt-3 max-w-xl leading-7 text-white/75">{t('Luksuzno pranje, korekcija laka, zaštitni premazi i nega enterijera za vozila koja zaslužuju viši, mirniji standard.')}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ContactAction href={`tel:${studioContact.phone.replace(/[^+\d]/g, '')}`} icon={Phone} label="Pozovite sada" variant="light" />
            <ContactAction href={studioContact.mapsUrl} icon={Navigation} label="Navigacija" variant="dark" />
          </div>
        </div>

        <div>
          <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-steel sm:text-xs sm:tracking-[0.22em]">{t('Kontakt')}</p>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-white/78">
            <span className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-steel" />
              {t(studioContact.address)}
            </span>
            <span className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 flex-none text-steel" />
              {studioContact.phone}
            </span>
            <span className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 flex-none text-steel" />
              {studioContact.email}
            </span>
            <span className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 flex-none text-steel" />
              {t(studioContact.hours)}
            </span>
          </div>
        </div>

        <div>
          <p className="text-[0.64rem] font-bold uppercase tracking-[0.18em] text-steel sm:text-xs sm:tracking-[0.22em]">{t('Sadržaj')}</p>
          <div className="mt-5 flex flex-wrap gap-4">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => navigate(item.id)} className="text-sm font-medium text-white/75 transition hover:text-white">
              {t(item.label)}
            </button>
          ))}
          </div>
          <div className="mt-7 flex gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-steel transition hover:border-white/30 hover:bg-white/20 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
