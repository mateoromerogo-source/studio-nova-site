import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import logo from "./assets/studio-nova-logo.png";
import botPromo1 from "./assets/bot-promo-1.png";
import botRecepcionistaIA from "./assets/bot-recepcionista-ia.jpeg";
import botDemoFlow from "./assets/bot-demo-flow.mp4";
import botDemoPoster from "./assets/bot-demo-poster.jpg";

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

/* ================= TRUST BAR ================= */
const trustItems = ["Activo en 48h", "Sin permanencia", "Soporte incluido", "Integración con WhatsApp"];

function TrustBar() {
  const loop = [...trustItems, ...trustItems];
  return (
    <div className="border-t border-b border-neutral-900 bg-neutral-950 overflow-hidden">
      <style>{`
        @keyframes trust-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="flex whitespace-nowrap py-4"
        style={{ animation: "trust-marquee 22s linear infinite" }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="flex items-center text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-400 px-8"
          >
            {item}
            <span className="ml-8 text-neutral-700">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ================= INTRO ================= */
function Intro() {
  return (
    <section className="border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-36 text-center">
        <Kicker>El problema</Kicker>
        <motion.h2
          className="mt-8 text-2xl md:text-4xl font-extrabold tracking-[0.05em] uppercase leading-[1.35]"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
        >
          Cada mensaje sin responder es un paciente que se va a la competencia.
        </motion.h2>
        <motion.p
          className="mt-8 text-neutral-400 text-[15px] leading-relaxed max-w-2xl mx-auto"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          custom={2}
        >
          Tu recepción no da abasto, los mensajes de WhatsApp se acumulan y
          los pacientes que no reciben respuesta rápido agendan en otro lado.
          El bot de Studio Nova responde y agenda al instante, 24/7 — vos no
          movés un dedo.
        </motion.p>
      </div>
    </section>
  );
}

/* ================= QUÉ HACEMOS ================= */
const servicios = [
  {
    n: "01",
    t: "Responde al instante",
    d: "El bot contesta por WhatsApp en segundos, a cualquier hora. Cero pacientes esperando, cero mensajes perdidos.",
  },
  {
    n: "02",
    t: "Agenda solo",
    d: "Reserva, confirma y reprograma citas directo en tu calendario, sin que nadie de tu equipo tenga que intervenir.",
  },
  {
    n: "03",
    t: "Reduce inasistencias",
    d: "Manda recordatorios automáticos antes de cada cita, así llegan más pacientes a la consulta.",
  },
];

function QueHacemos() {
  return (
    <section id="servicios" className="border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Kicker>Qué hace el bot por vos</Kicker>
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
    price: "$80",
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

type GalleryItem =
  | { type: "video"; src: string; label: string }
  | { type: "image"; src: string; label: string };

const galleryItems: GalleryItem[] = [
  { type: "image", src: botPromo1, label: "Bot de agendamiento Studio Nova" },
  { type: "image", src: botRecepcionistaIA, label: "Recepcionista IA" },
];

function ProductGallery() {
  const [active, setActive] = useState(0);
  const item = galleryItems[active];

  return (
    <div>
      <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 aspect-square flex items-center justify-center">
        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
        )}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {galleryItems.map((g, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={g.label}
            className={`rounded-lg overflow-hidden border aspect-square flex items-center justify-center bg-neutral-950 transition-colors ${
              active === i ? "border-blue-500" : "border-neutral-800 hover:border-neutral-600"
            }`}
          >
            {g.type === "video" ? (
              <video src={g.src} muted playsInline className="w-full h-full object-cover" />
            ) : (
              <img src={g.src} alt={g.label} className="w-full h-full object-cover" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

function Planes() {
  const p = planes[0];
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

        <div className="mt-12 grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            custom={1}
          >
            <ProductGallery />
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            custom={2}
          >
            <h3 className="text-2xl font-extrabold tracking-tight">Bot de Agendamiento — {p.t}</h3>
            <p className="mt-3 text-[14px] text-neutral-400 leading-relaxed">{p.d}</p>

            <div className="mt-8 rounded-2xl border border-blue-500/70 ring-1 ring-blue-500/30 bg-gradient-to-b from-neutral-800 to-neutral-950 p-7">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-neutral-300">
                Plan {p.t}
              </span>
              <p className="mt-4 text-4xl font-extrabold tracking-tight">
                {p.price}
                <span className="text-base text-neutral-500 font-semibold"> USD / mes</span>
              </p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[13px] text-neutral-300">
                    <span className="text-blue-400 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hola, quiero dejar de perder pacientes — bot de agendamiento clínica`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`plan_${p.t}`)}
                className="mt-7 block text-center px-6 py-3.5 text-[10px] font-bold tracking-[0.3em] uppercase bg-blue-500 text-white hover:bg-blue-400 transition-colors rounded-lg"
              >
                Quiero dejar de perder pacientes
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= DEMO EN VIVO ================= */
const demoSteps = [
  { t: 0, label: "Saluda y muestra el menú" },
  { t: 10, label: "Pide los datos del paciente" },
  { t: 28, label: "Elige la especialidad" },
  { t: 42, label: "Elige la fecha" },
  { t: 58, label: "Elige el horario" },
  { t: 73, label: "Confirma la cita — listo" },
];

function DemoEnVivo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafRef = useRef<number | null>(null);
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  const stepFromTime = (time: number) => {
    let current = 0;
    for (let i = 0; i < demoSteps.length; i++) {
      if (time >= demoSteps[i].t) current = i;
    }
    return current;
  };

  const tick = () => {
    const time = videoRef.current?.currentTime ?? 0;
    setStep(stepFromTime(time));
    rafRef.current = requestAnimationFrame(tick);
  };

  const startTracking = () => {
    setPlaying(true);
    if (rafRef.current == null) rafRef.current = requestAnimationFrame(tick);
  };

  const stopTracking = () => {
    setPlaying(false);
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  };

  return (
    <section className="border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <Kicker>Mirá cómo funciona</Kicker>
        <motion.h2
          className="mt-5 text-2xl md:text-4xl font-extrabold tracking-[0.05em] uppercase leading-[1.35]"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          custom={1}
        >
          Así agenda una cita, en tiempo real
        </motion.h2>
        <motion.p
          className="mt-6 text-neutral-400 text-[15px] leading-relaxed max-w-lg mx-auto"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          custom={2}
        >
          Sin actores, sin edición. Una conversación real de WhatsApp: el
          bot pregunta, agenda y confirma solo.
        </motion.p>

        <motion.div
          className="relative mt-10 mx-auto max-w-[280px]"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          custom={3}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/80 backdrop-blur border border-neutral-800 rounded-full px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-neutral-200">
              En vivo, sin edición
            </span>
          </div>
          <div className="rounded-[2.5rem] border-4 border-neutral-800 bg-neutral-950 overflow-hidden shadow-[0_0_60px_-15px_rgba(59,130,246,0.35)]">
            <video
              ref={videoRef}
              src={botDemoFlow}
              poster={botDemoPoster}
              controls
              playsInline
              preload="metadata"
              onPlay={startTracking}
              onPause={stopTracking}
              onEnded={stopTracking}
              onSeeked={() => setStep(stepFromTime(videoRef.current?.currentTime ?? 0))}
              className="w-full h-auto block"
            />
          </div>
        </motion.div>

        <div className="mt-6 h-6">
          <AnimatePresence mode="wait">
            {playing && (
              <motion.p
                key={step}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="text-[12px] font-semibold tracking-[0.15em] uppercase text-blue-400"
              >
                {step + 1}. {demoSteps[step].label}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-2 flex justify-center gap-2">
          {demoSteps.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                playing && i === step ? "w-6 bg-blue-400" : "w-1.5 bg-neutral-800"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PROCESO ================= */
const pasos = [
  { n: "01", t: "Diagnóstico", d: "Entendemos cómo agenda hoy tu clínica y dónde se pierden pacientes." },
  { n: "02", t: "Configuración", d: "Armamos el bot con las respuestas y horarios de tu clínica." },
  { n: "03", t: "Conexión a WhatsApp", d: "Lo conectamos a tu número, sin cambiar nada de tu lado." },
  { n: "04", t: "Activo en 48h", d: "Empieza a responder y agendar solo. Vos solo lo revisás." },
];

function Proceso() {
  return (
    <section className="border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Kicker>Cómo se implementa</Kicker>
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
    q: "¿Necesito cambiar mi número de WhatsApp?",
    a: "No. El bot se conecta a tu número actual (o uno nuevo si preferís). Tus pacientes siguen escribiendo donde ya te escriben.",
  },
  {
    q: "¿Cuánto tarda en estar activo?",
    a: "Normalmente 48 horas desde que nos pasás los datos de tu clínica: horarios, servicios y forma de agendar.",
  },
  {
    q: "¿Qué pasa si un paciente pregunta algo que el bot no sabe?",
    a: "El bot deriva la conversación a tu equipo automáticamente. Nunca deja a un paciente sin respuesta.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. Es un plan mensual, sin permanencia ni contrato a largo plazo.",
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
          ¿Listo para dejar
          <br />
          de perder pacientes?
        </motion.h2>
        <motion.a
          href={waLink("Hola, quiero automatizar el agendamiento de mi clínica")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("footer_cta")}
          className="inline-block mt-10 border border-blue-500 px-10 py-4 text-[11px] font-bold tracking-[0.3em] uppercase transition-colors hover:bg-blue-500 hover:text-white"
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
function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hola, quiero información del bot de agendamiento")}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick("floating_button")}
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(0,0,0,0.35)] transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="white">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.34.663 4.523 1.812 6.377L4 29l7.823-1.79A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7c-1.99 0-3.85-.56-5.432-1.53l-.39-.23-4.65 1.06 1.09-4.53-.25-.4A9.66 9.66 0 0 1 5.3 15c0-5.9 4.8-10.7 10.704-10.7 5.9 0 10.7 4.8 10.7 10.7 0 5.9-4.8 10.7-10.7 10.7Zm5.86-8.02c-.32-.16-1.9-.94-2.19-1.05-.29-.11-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.26-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.86-1.61-1.92-1.8-2.24-.19-.32-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55h-.62c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.67s1.14 3.1 1.3 3.31c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.53-.08-.13-.29-.21-.61-.37Z"/>
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <main>
      <BackgroundPaths
        title="Studio Nova"
        subtitle="Deja de perder pacientes por no contestar a tiempo"
      />
      <TrustBar />
      <Planes />
      <DemoEnVivo />
      <Intro />
      <QueHacemos />
      <Proceso />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
