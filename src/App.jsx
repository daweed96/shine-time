import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeCheck,
  CarFront,
  Check,
  ChevronRight,
  Clock,
  Droplets,
  Facebook,
  Gauge,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Music2,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Početna' },
  { id: 'services', label: 'Usluge' },
  { id: 'gallery', label: 'Galerija' },
];

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
    icon: Droplets,
    text: 'pH-neutralna pena, mekane rukavice, metoda sa dve kante, felne, stakla i završno sušenje peškirom.',
    image: images.bay,
  },
  {
    title: 'Dubinsko čišćenje enterijera',
    icon: CarFront,
    text: 'Bezbedno čišćenje kože, parna ekstrakcija, tepisi, ventilacija, konzole, patosnice i diskretan završni tretman kabine.',
    image: images.interior,
  },
  {
    title: 'Keramička zaštita',
    icon: ShieldCheck,
    text: 'Dugotrajna zaštita laka sa pojačanim sjajem, hidrofobnim efektom i UV otpornošću.',
    image: images.polish,
  },
  {
    title: 'Poliranje laka',
    icon: Sparkles,
    text: 'Jednostepena ili višestepena korekcija za manje swirl tragova, veću dubinu, jasnoću i ogledalsku refleksiju.',
    image: images.detail,
  },
  {
    title: 'Kompletan detailing',
    icon: BadgeCheck,
    text: 'Potpuna obnova enterijera i eksterijera za premijum vozila, vikend automobile i posebne isporuke.',
    image: images.studio,
  },
  {
    title: 'Čišćenje motornog prostora',
    icon: Gauge,
    text: 'Kontrolisano odmašćivanje, nežna obrada, pažljivo ispiranje i završna nega plastičnih površina.',
    image: images.wheel,
  },
  {
    title: 'Premium održavajuće pranje',
    icon: Clock,
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
  const [navTheme, setNavTheme] = useState('dark');
  const lightHeader = navTheme === 'light' || menuOpen;
  const darkHeaderClass =
    navTheme === 'strong-dark'
      ? 'border-white/18 bg-ink/90 text-white backdrop-blur-2xl'
      : 'border-white/10 bg-ink/78 text-white backdrop-blur-2xl';

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
      className={`fixed inset-x-0 top-0 z-50 border-b shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ${
        lightHeader
          ? 'border-slate-200/80 bg-white/92 text-ink backdrop-blur-2xl'
          : darkHeaderClass
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <button onClick={() => navigate('home')} className="group flex items-center gap-3 text-left" aria-label="Shine Time početna">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-lg border shadow-glass transition ${
              lightHeader ? 'border-slate-200 bg-ink text-white' : 'border-white/15 bg-white/10'
            }`}
          >
            <Sparkles className={`h-5 w-5 ${lightHeader ? 'text-white' : 'text-steel'}`} />
          </span>
          <span>
            <span className={`block font-display text-xl leading-none tracking-normal transition ${lightHeader ? 'text-ink' : 'text-white'}`}>
              Shine Time
            </span>
            <span className={`mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.22em] transition ${lightHeader ? 'text-ocean/70' : 'text-steel/75'}`}>
              Detailing studio
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Glavna navigacija">
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
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => navigate('contact')}
            className={`shine rounded-lg px-5 py-3 text-sm font-semibold shadow-lg transition hover:-translate-y-0.5 ${
              lightHeader ? 'bg-ink text-white shadow-slate-900/20 hover:bg-midnight' : 'bg-white text-ink shadow-black/20'
            }`}
          >
            Kontakt
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((value) => !value)}
          className={`flex h-11 w-11 items-center justify-center rounded-lg border transition lg:hidden ${
            lightHeader ? 'border-slate-200 bg-slate-100 text-ink' : 'border-white/15 bg-white/10 text-white'
          }`}
          aria-label="Otvori meni"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`border-t px-5 py-5 backdrop-blur-2xl lg:hidden ${lightHeader ? 'border-slate-200 bg-white/94' : 'border-white/10 bg-ink/90'}`}
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`rounded-lg px-4 py-3 text-left text-sm font-semibold transition ${
                  lightHeader
                    ? page === item.id
                      ? 'bg-ink text-white'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-ink'
                    : page === item.id
                      ? 'bg-white text-ink'
                      : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
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
  return (
    <section data-nav-theme="dark" className="relative isolate min-h-[92vh] overflow-hidden bg-ink pt-20 text-white">
      <img src={images.hero} alt="Luksuzni sportski automobil sa sjajnim lakom" className="absolute inset-0 h-full w-full object-cover opacity-65" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,6,11,0.92),rgba(5,12,25,0.74)_42%,rgba(5,12,25,0.20)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="mb-7 inline-flex items-center gap-3 rounded-lg border border-white/30 bg-white/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-steel backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-steel" />
            Luksuzni detailing studio
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="font-display text-5xl font-bold leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-8xl">
            Luksuzni auto detailing, prefinjeno izveden.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.16 }} className="mt-8 max-w-2xl text-lg leading-8 text-white/88 sm:text-xl">
            Diskretan studio za negu vozila po dogovoru, namenjen modelima Mercedes, BMW, Audi, Porsche i svakom automobilu koji zaslužuje besprekoran dolazak.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button onClick={() => setPage('contact')} variant="light">
              Kontaktirajte nas
            </Button>
            <Button onClick={() => setPage('services')} variant="dark">
              Pogledajte usluge
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.34 }} className="mt-14 grid max-w-3xl grid-cols-3 divide-x divide-white/12 border-y border-white/12 py-6">
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
  return (
    <Section className="bg-white" navTheme="light">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-ocean">Pre / Posle</p>
          <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl">Dubina, jasnoća i sjaj koji menjaju siluetu vozila.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Naš proces korekcije uklanja vizuelne nepravilnosti sa laka, a zatim zaključava visok sjaj premijum zaštitom.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Smanjenje swirl tragova', 'Hidrofobna zaštita', 'Obnova kabine na dodir', 'Detaljna završna inspekcija'].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-semibold text-graphite">
                <Check className="h-5 w-5 text-ocean" />
                {item}
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
  return (
    <Section className="bg-chrome" navTheme="light">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="relative min-h-[520px] overflow-hidden rounded-lg shadow-luxury">
            <img src={images.studio} alt="Premijum studio za auto detailing" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-steel">Nega u privatnom boksu</p>
              <p className="mt-3 max-w-md text-2xl font-semibold">Osmišljeno oko kontrolisanog osvetljenja, čistog alata i preciznog ručnog rada.</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="flex flex-col justify-center">
          <SectionHeader eyebrow="Zašto izabrati nas" title="Mirniji i precizniji pristup nezi automobila." text="Spajamo premijum automobilsku estetiku sa disciplinovanim procesom koji štiti vašu investiciju." compact />
          <div className="mt-8 grid gap-4">
            {why.map((item) => (
              <div key={item} className="glass-panel flex items-start gap-4 rounded-lg p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-ocean" />
                <p className="text-base leading-7 text-slate-700">{item}</p>
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
  return (
    <section data-nav-theme="strong-dark" className="bg-ink px-5 py-20 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg bg-radial-luxury shadow-glass">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 sm:p-10 lg:p-12">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-steel">Posetite naš studio</p>
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">Doživite završnu obradu uživo.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/84">
              Posetite naš privatni detailing boks za premijum negu, savetovanje o zaštiti laka i bliži uvid u naš studijski proces.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-white/90 sm:grid-cols-2">
              <span className="inline-flex items-center gap-3">
                <MapPin className="h-4 w-4 text-steel" />
                {studioContact.address}
              </span>
              <span className="inline-flex items-center gap-3">
                <Clock className="h-4 w-4 text-steel" />
                {studioContact.hours}
              </span>
            </div>
            <div className="mt-8">
            <a
              href={studioContact.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="shine inline-flex items-center justify-center gap-3 rounded-lg bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-ink shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-steel"
            >
              Posetite nas
              <Navigation className="h-4 w-4" />
            </a>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden lg:min-h-full">
            <img src={images.studio} alt="Poseta premijum detailing studiju" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent lg:bg-[linear-gradient(90deg,rgba(7,9,13,0.55),rgba(7,9,13,0.08))]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-white/15 bg-ink/70 p-5 text-white backdrop-blur-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-steel">Privatni boks 3</p>
              <p className="mt-2 font-display text-2xl">Shine Time, Leskovac</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesPage({ setPage }) {
  return (
    <PageShell eyebrow="Usluge" title="Kompletan detailing meni za luksuzna vozila." text="Svaki tretman se izvodi čistim materijalima, pažljivim ručnim radom i završnim standardom dostojnim premijum automobila.">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} detailed />
        ))}
      </div>
      <div className="mt-16 grid gap-8 rounded-lg bg-ink p-8 text-white shadow-glass lg:grid-cols-[1fr_0.75fr] lg:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-steel">Individualna nega</p>
          <h2 className="mt-4 font-display text-4xl">Potreban vam je prilagođen plan korekcije?</h2>
          <p className="mt-4 max-w-2xl leading-8 text-white/84">Preporuku za keramiku, poliranje ili intervale održavanja dajemo tek nakon pregleda debljine laka, tipa završnice, stanja lajsni i materijala u kabini.</p>
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
  return (
    <PageShell eyebrow="Galerija" title="Sjaj, refleksija i ručno završeni detalji." text="Privremene fotografije prikazuju željeni ton sajta dok ne budu spremne autentične fotografije vašeg studija.">
      <GalleryGrid />
      <div className="mt-16 grid items-center gap-8 rounded-lg bg-white p-8 shadow-luxury lg:grid-cols-[1fr_auto] lg:p-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-ocean">Vaš automobil je sledeći</p>
          <h2 className="mt-4 font-display text-4xl text-ink">Neka sledeća refleksija bude vaša.</h2>
        </div>
        <Button onClick={() => setPage('contact')} variant="primary">
          Kontaktirajte nas
        </Button>
      </div>
    </PageShell>
  );
}

function ContactPage() {
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
          <div className="h-full rounded-lg bg-ink p-8 text-white shadow-glass lg:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-steel">Povežite se</p>
            <h2 className="mt-4 font-display text-4xl">Pratite završnu obradu iz studija.</h2>
            <p className="mt-5 leading-8 text-white/84">
              Pogledajte korekcije laka, sjaj keramičke zaštite, detalje iz wash baya i trenutke isporuke na našim društvenim mrežama.
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
  return (
    <div>
      <section data-nav-theme="dark" className="relative overflow-hidden bg-radial-luxury px-5 pb-24 pt-44 text-white sm:px-8 lg:px-10 lg:pb-32 lg:pt-52">
        <div className="absolute inset-0 opacity-30">
          <img src={images.polish} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-steel">{eyebrow}</p>
          <h1 className="max-w-4xl font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/84">{text}</p>
        </div>
      </section>
      <section data-nav-theme="light" className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">{children}</div>
      </section>
    </div>
  );
}

function Section({ children, className = '', navTheme = 'light' }) {
  return (
    <section data-nav-theme={navTheme} className={`px-5 py-20 sm:px-8 lg:px-10 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, text, light = false, compact = false }) {
  return (
    <Reveal className={`${compact ? '' : 'mx-auto mb-14 max-w-3xl text-center'}`}>
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.24em] ${light ? 'text-steel' : 'text-ocean'}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl leading-tight sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      <p className={`mt-5 text-lg leading-8 ${light ? 'text-white/84' : 'text-slate-600'}`}>{text}</p>
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
  const styles = {
    primary: 'bg-ink text-white shadow-lg shadow-slate-900/20 hover:bg-midnight',
    light: 'bg-white text-ink shadow-lg shadow-black/20 hover:bg-steel',
    dark: 'border border-white/35 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20',
    outline: 'border border-slate-300 bg-white text-ink shadow-sm hover:border-ink hover:bg-ink hover:text-white',
  };

  return (
    <button onClick={onClick} className={`shine inline-flex items-center justify-center gap-3 rounded-lg px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${styles[variant]}`}>
      {children}
      <ArrowUpRight className="h-4 w-4" />
    </button>
  );
}

function Stat({ value, label }) {
  return (
    <div className="px-4 first:pl-0">
      <p className="font-display text-3xl leading-none text-white sm:text-4xl">{value}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/78">{label}</p>
    </div>
  );
}

function ServiceCard({ service, index, detailed = false }) {
  const Icon = service.icon;
  return (
    <Reveal delay={index * 0.06}>
      <article className="group h-full overflow-hidden rounded-lg bg-white shadow-luxury transition duration-300 hover:-translate-y-1">
        <div className="image-sheen relative h-64 overflow-hidden">
          <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white/92 text-ocean shadow-lg backdrop-blur-xl">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="p-7">
          <h3 className="font-display text-2xl text-ink">{service.title}</h3>
          <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
          {detailed && (
            <button className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-ocean">
              Uključena nega
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function ResultImage({ label, image, highlight = false }) {
  return (
    <div className={`relative min-h-[430px] overflow-hidden rounded-lg shadow-luxury ${highlight ? 'sm:mt-12' : ''}`}>
      <img src={image} alt={`Rezultat detailinga: ${label}`} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-transparent to-transparent" />
      <span className="absolute bottom-5 left-5 rounded-lg bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-ink shadow-lg">{label}</span>
    </div>
  );
}

function GalleryGrid({ preview = false }) {
  const items = preview ? gallery.slice(0, 4) : gallery;
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.05}>
          <figure className={`group relative overflow-hidden rounded-lg shadow-luxury ${index === 0 && !preview ? 'lg:col-span-2' : ''}`}>
            <img src={item.image} alt={item.title} className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/8 to-transparent opacity-90" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-steel">Shine Time završna obrada</p>
              <h3 className="mt-2 font-display text-2xl text-white">{item.title}</h3>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}

function ContactCard({ icon: Icon, title, text, href, dark = false }) {
  const content = (
    <div className={`group h-full rounded-lg p-6 shadow-luxury transition duration-300 hover:-translate-y-1 ${dark ? 'bg-ink text-white' : 'border border-slate-200 bg-white text-ink'}`}>
      <span className={`flex h-12 w-12 items-center justify-center rounded-lg ${dark ? 'bg-white/10 text-steel' : 'bg-ocean text-white'}`}>
        <Icon className="h-5 w-5" />
      </span>
      <p className={`mt-6 text-xs font-bold uppercase tracking-[0.2em] ${dark ? 'text-steel' : 'text-ocean'}`}>{title}</p>
      <p className={`mt-3 min-w-0 break-words text-lg font-semibold leading-7 ${dark ? 'text-white' : 'text-ink'}`} style={{ overflowWrap: 'anywhere' }}>{text}</p>
      {href && (
        <span className={`mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] ${dark ? 'text-steel' : 'text-ocean'}`}>
          Otvori
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
  const styles =
    variant === 'light'
      ? 'bg-white text-ink shadow-lg shadow-black/20 hover:bg-steel'
      : 'border border-white/35 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20';

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className={`shine inline-flex items-center justify-center gap-3 rounded-lg px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${styles}`}
    >
      {label}
      <Icon className="h-4 w-4" />
    </a>
  );
}

function MapPanel() {
  return (
    <div className="relative min-h-[560px] overflow-hidden rounded-lg bg-radial-luxury shadow-luxury">
      <div className="absolute inset-0 opacity-40">
        <img src={images.studio} alt="Lokacija studija Shine Time" className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(7,9,13,0.88),rgba(7,22,43,0.72))]" />
      <div className="absolute inset-8 rounded-lg border border-white/15">
        <div className="absolute left-[12%] top-[28%] h-px w-[74%] rotate-[-18deg] bg-white/20" />
        <div className="absolute left-[18%] top-[58%] h-px w-[68%] rotate-[14deg] bg-white/14" />
        <div className="absolute left-[48%] top-[8%] h-[78%] w-px rotate-[8deg] bg-white/14" />
        <div className="absolute left-[28%] top-[18%] h-[62%] w-px rotate-[-24deg] bg-white/10" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-steel">Mapa studija</p>
        <h3 className="mt-3 font-display text-4xl">Niška Ulica 8, Leskovac</h3>
        <p className="mt-4 max-w-xl leading-8 text-white/84">
          Koristite navigaciju do ulaza u privatni boks. Parking za klijente nalazi se neposredno pored studija.
        </p>
        <div className="mt-6">
          <ContactAction href={studioContact.mapsUrl} icon={Navigation} label="Navigacija" variant="light" />
        </div>
      </div>
    </div>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="bg-ink px-5 py-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex">
            <BrandLogo size="footer" />
          </div>
          <p className="mt-3 max-w-xl leading-7 text-white/75">Luksuzno pranje, korekcija laka, zaštitni premazi i nega enterijera za vozila koja zaslužuju viši, mirniji standard.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ContactAction href={`tel:${studioContact.phone.replace(/[^+\d]/g, '')}`} icon={Phone} label="Pozovite sada" variant="light" />
            <ContactAction href={studioContact.mapsUrl} icon={Navigation} label="Navigacija" variant="dark" />
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-steel">Kontakt</p>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-white/78">
            <span className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-none text-steel" />
              {studioContact.address}
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
              {studioContact.hours}
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-steel">Sadržaj</p>
          <div className="mt-5 flex flex-wrap gap-4">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => navigate(item.id)} className="text-sm font-medium text-white/75 transition hover:text-white">
              {item.label}
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
