import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import logo from "./assets/studio-nova-logo.png";
import starterDemo from "./assets/starter-demo.mp4";

const easeOut = [0.16, 1, 0.3, 1] as const;

function trackWhatsAppClick(label: string) {
  (window as any).gtag?.("event", "click_whatsapp", { link_label: label });
}

function waLink(message: string) {
  return `https://wa.me/593967152530?text=${encodeURIComponent(message)}`;
}

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOut, delay: i * 0.1 },
  }),
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <motion.p
      className="text-[11px] font-semibold tracking-[0.45em] text-neutral-500 uppercase"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.p>
  );
}

/* ================= INTRO ================= */
function Intro() {
  return (
    <section className="border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-36 text-center">
        <Kicker>Soluciones con Inteligencia Artificial</Kicker>
        <motion.h2
          className="mt-8 text-2xl md:text-4xl font-extrabold tracking-[0.05em] uppercase leading-[1.35]"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
        >
          Construimos herramientas con IA que hacen crecer tu negocio.
        </motion.h2>
        <motion.p
          className="mt-8 text-neutral-400 text-[15px] leading-relaxed max-w-2xl mx-auto"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          custom={2}
        >
          En Studio Nova diseñamos y desarrollamos soluciones digitales
          impulsadas por inteligencia artificial. Hoy nuestro foco son las
          páginas web modernas: rápidas, elegantes y hechas para vender.
        </motion.p>
      </div>
    </section>
  );
}

/* ================= QUÉ HACEMOS ================= */
const servicios = [
  {
    n: "01",
    t: "Páginas Web",
    d: "Sitios modernos, rápidos y con diseño premium. Landing pages y tiendas que convierten visitas en clientes.",
  },
  {
    n: "02",
    t: "Diseño con IA",
    d: "Identidad visual, imágenes y contenido generados con inteligencia artificial de última generación.",
  },
  {
    n: "03",
    t: "Automatización",
    d: "Bots y flujos que trabajan por ti: agendan citas, responden y conectan tus herramientas.",
  },
];

function QueHacemos() {
  return (
    <section id="servicios" className="border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Kicker>Lo que hacemos</Kicker>
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900">
          {servicios.map((s, i) => (
            <motion.article
              key={s.n}
              className="bg-neutral-950 p-8 md:p-10 hover:bg-neutral-900 transition-colors"
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
            >
              <span className="text-[11px] font-extrabold tracking-[0.3em] text-neutral-600">{s.n}</span>
              <h3 className="mt-6 text-lg font-bold tracking-wide uppercase">{s.t}</h3>
              <p className="mt-4 text-sm text-neutral-400 leading-relaxed">{s.d}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CASO ZOE ================= */
function CasoZoe() {
  return (
    <section id="caso" className="border-t border-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-36">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <Kicker>Caso de estudio — 01</Kicker>
          <h2 className="mt-5 text-3xl md:text-4xl font-extrabold tracking-[0.06em] uppercase leading-[1.25]">
            Zoe — Tienda de calzado
          </h2>
          <p className="mt-6 text-neutral-400 text-[15px] leading-relaxed max-w-md">
            Diseñamos y desarrollamos la página web de Zoe: una tienda de
            calzado femenino con catálogo, video hero e identidad visual
            elegante. Un sitio moderno pensado para mostrar producto y vender.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              ["Diseño", "Interfaz moderna, elegante y responsive"],
              ["Catálogo", "Galería de productos con fotografía de marca"],
              ["Tecnología", "Next.js — sitio rápido y optimizado"],
              ["Enfoque", "Pensada para convertir visitas en ventas"],
            ].map(([k, v]) => (
              <li key={k} className="flex items-baseline gap-4 border-t border-neutral-800 pt-4">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase w-28 shrink-0">{k}</span>
                <span className="text-sm text-neutral-500">{v}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://zoe-landing-ten.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 border border-white px-8 py-3.5 text-[11px] font-bold tracking-[0.3em] uppercase transition-colors hover:bg-white hover:text-black"
          >
            Ver sitio en vivo →
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= PLANES ================= */
type Plan = {
  t: string;
  price: string;
  d: string;
  features: string[];
  featured?: boolean;
  was?: string;
  off?: string;
  monthly?: string;
};

const planes: Plan[] = [
  {
    t: "Platinum",
    price: "$200",
    d: "Bot de agendamiento para clínicas: reserva, confirma y recuerda citas de tus pacientes por WhatsApp, 24/7.",
    features: [
      "Reserva de citas automática 24/7",
      "Confirmación a pacientes por WhatsApp",
      "Sincronización con la agenda de la clínica",
      "Reduce inasistencias (no-shows)",
      "Respuestas con inteligencia artificial",
      "Configuración e integración incluida",
      "Soporte y mantenimiento mensual",
    ],
  },
];

function Planes() {
  return (
    <section id="planes" className="border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Kicker>Bots de agendamiento para clínicas</Kicker>
        <motion.p
          className="mt-5 text-neutral-400 text-[15px] max-w-xl"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
        >
          Automatiza el agendamiento de citas de tu clínica con un bot de
          WhatsApp impulsado por IA. Plan mensual, sin costo de implementación.
        </motion.p>
        <motion.div
          className="mt-12 max-w-sm mx-auto rounded-2xl overflow-hidden border border-neutral-800"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          custom={1}
        >
          <video
            src={starterDemo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto block"
          />
        </motion.div>
        <div className="mt-8 grid gap-6 items-center max-w-sm mx-auto">
          {planes.map((p, i) => (
            <motion.div
              key={p.t}
              className={`relative rounded-2xl border flex flex-col ${
                p.featured
                  ? "p-9 border-white/70 ring-1 ring-white/30 bg-gradient-to-b from-neutral-800 to-neutral-950 shadow-[0_0_70px_-10px_rgba(255,255,255,0.28)] z-10 md:-mt-4 md:-mb-4"
                  : "p-8 border-neutral-800 bg-neutral-950"
              }`}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[0.3em] uppercase bg-white text-black px-4 py-1.5 rounded-full whitespace-nowrap">
                  Más Popular
                </span>
              )}
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-bold tracking-[0.25em] uppercase text-neutral-300">{p.t}</h3>
                {p.off && (
                  <span className="text-[10px] font-bold tracking-wide bg-white/10 text-white px-2 py-1 rounded">{p.off}</span>
                )}
              </div>
              {p.was && <p className="mt-5 text-sm text-neutral-600 line-through">{p.was}</p>}
              <p className={`${p.was ? "mt-1" : "mt-5"} text-5xl font-extrabold tracking-tight`}>
                {p.price}
                <span className="text-base text-neutral-500 font-semibold">
                  {" "}USD{p.monthly ? "" : " / mes"}
                </span>
              </p>
              {p.monthly && (
                <p className="mt-1 text-sm text-neutral-400">
                  + {p.monthly}<span className="text-neutral-500"> USD / mes</span>
                </p>
              )}
              <p className="mt-4 text-[13px] text-neutral-500 leading-relaxed min-h-[2.5rem]">{p.d}</p>
              <div className="mt-6 border-t border-neutral-800 pt-6">
                <ul className="space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[13px] text-neutral-300">
                      <span className="text-emerald-400 shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={waLink(`Hola, quiero el plan ${p.t} — bot de agendamiento clínica`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`plan_${p.t}`)}
                className={`mt-8 inline-block text-center px-6 py-3.5 text-[10px] font-bold tracking-[0.3em] uppercase transition-colors ${
                  p.featured
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "border border-white hover:bg-white hover:text-black"
                }`}
              >
                Elegir {p.t}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PROCESO ================= */
const pasos = [
  { n: "01", t: "Diagnóstico", d: "Entendemos tu negocio, tu marca y qué necesitas lograr con tu web." },
  { n: "02", t: "Diseño", d: "Creamos la interfaz a tu medida: estética, estructura y contenido." },
  { n: "03", t: "Desarrollo", d: "Construimos el sitio rápido, responsive y optimizado para vender." },
  { n: "04", t: "Lanzamiento", d: "Publicamos tu página y damos soporte para que siga creciendo." },
];

function Proceso() {
  return (
    <section className="border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Kicker>Nuestro proceso</Kicker>
        <div className="mt-12 grid md:grid-cols-4 gap-px bg-neutral-900 border border-neutral-900">
          {pasos.map((p, i) => (
            <motion.div
              key={p.n}
              className="bg-neutral-950 p-7 md:p-9 hover:bg-neutral-900 transition-colors"
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              custom={i}
            >
              <span className="text-[11px] font-extrabold tracking-[0.3em] text-neutral-600">{p.n}</span>
              <h3 className="mt-5 text-sm font-bold tracking-[0.2em] uppercase">{p.t}</h3>
              <p className="mt-3 text-[13px] text-neutral-500 leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= FAQ ================= */
const faqs = [
  {
    q: "¿Cuánto cuesta una página web?",
    a: "El precio depende del alcance de tu proyecto: número de páginas, funcionalidades y contenido. Tras una breve conversación te entregamos una propuesta a medida.",
  },
  {
    q: "¿Cuánto tarda en estar lista?",
    a: "Según la complejidad, normalmente entre pocos días y un par de semanas. Definimos el tiempo exacto en la propuesta.",
  },
  {
    q: "¿Puedo actualizar la web después?",
    a: "Sí. Ofrecemos soporte y ajustes continuos para que tu sitio evolucione con tu negocio.",
  },
  {
    q: "¿También hacen otras soluciones con IA?",
    a: "Sí. Además de páginas web, creamos bots de agendamiento, contenido e imágenes con inteligencia artificial y automatizaciones a medida.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-neutral-900">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <Kicker>Preguntas frecuentes</Kicker>
        <div className="mt-10">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-neutral-900">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-sm font-bold tracking-[0.08em] uppercase">{f.q}</span>
                <span className="text-neutral-500 text-lg shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: easeOut }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-[14px] text-neutral-400 leading-relaxed max-w-xl">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CTA FINAL + FOOTER ================= */
function Footer() {
  return (
    <footer id="contacto" className="border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-36 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold tracking-[0.08em] uppercase leading-[1.2]"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          ¿Listo para tu
          <br />
          nueva página web?
        </motion.h2>
        <motion.a
          href={waLink("Hola, quiero más información sobre Studio Nova")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("footer_cta")}
          className="inline-block mt-10 border border-white px-10 py-4 text-[11px] font-bold tracking-[0.3em] uppercase transition-colors hover:bg-white hover:text-black"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          Escríbenos por WhatsApp
        </motion.a>
        <div className="mt-24 pt-12 border-t border-neutral-900">
          <img src={logo} alt="" className="w-10 mx-auto" />
          <p className="mt-5 text-sm font-extrabold tracking-[0.5em] uppercase">Studio Nova</p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.4em] text-neutral-500">
            Soluciones digitales con inteligencia artificial
          </p>
          <p className="mt-6 text-[11px] tracking-[0.25em] text-neutral-500 uppercase">
            096 715 2530 · Quito, Ecuador
          </p>
          <p className="mt-2 text-[10px] tracking-[0.4em] text-neutral-600 uppercase">
            Elevando marcas personales
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ================= APP ================= */
export default function App() {
  return (
    <main>
      <BackgroundPaths
        title="Studio Nova"
        subtitle="Vendemos soluciones con inteligencia artificial"
      />
      <Intro />
      <QueHacemos />
      <CasoZoe />
      <Proceso />
      <Planes />
      <FAQ />
      <Footer />
    </main>
  );
}
