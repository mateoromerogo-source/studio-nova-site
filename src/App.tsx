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

function trackFormSubmit() {
  (window as any).gtag?.("event", "lead_form_submit");
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
    <div className="border-t border-b border-[#1b2545] bg-[#070b16] overflow-hidden">
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
    <section className="border-t border-[#1b2545]">
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
    <section id="servicios" className="border-t border-[#1b2545]">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Kicker>Qué hace el bot por vos</Kicker>
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-[#111a33] border border-[#1b2545]">
          {servicios.map((s, i) => (
            <motion.article
              key={s.n}
              className="bg-[#070b16] p-8 md:p-10 hover:bg-[#111a33] transition-colors"
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
      <div className="rounded-2xl overflow-hidden border border-[#232f57] bg-[#070b16] aspect-square flex items-center justify-center">
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
            className={`rounded-lg overflow-hidden border aspect-square flex items-center justify-center bg-[#070b16] transition-colors ${
              active === i ? "border-white" : "border-[#232f57] hover:border-[#3a4a80]"
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

/* ================= LEAD FORM ================= */
const OWNER_EMAIL = "mateoromerogo@gmail.com";

function LeadForm({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    nombre: "",
    clinica: "",
    telefono: "",
    fecha: "",
    hora: "",
  });

  const update = (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Quiero dejar de perder pacientes — ${values.clinica || values.nombre}`;
    const body = [
      `Nombre: ${values.nombre}`,
      `Clínica: ${values.clinica}`,
      `Teléfono: ${values.telefono}`,
      `Fecha preferida: ${values.fecha || "—"}`,
      `Hora preferida: ${values.hora || "—"}`,
    ].join("\n");
    const mailto = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    trackFormSubmit();
    window.location.href = mailto;
    setSent(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSent(false);
      setValues({ nombre: "", clinica: "", telefono: "", fecha: "", hora: "" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            className="relative w-full max-w-md rounded-2xl border border-[#232f57] bg-[#0a1128] p-8"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: easeOut }}
          >
            <button
              onClick={handleClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 text-neutral-500 hover:text-white text-lg"
            >
              ✕
            </button>

            {!sent ? (
              <>
                <h3 className="text-xl font-extrabold tracking-tight">
                  Agendá tu llamada
                </h3>
                <p className="mt-2 text-[13px] text-neutral-400 leading-relaxed">
                  Dejanos tus datos y coordinamos una llamada por Zoom pa mostrarte el bot funcionando en tu clínica.
                </p>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    required
                    placeholder="Nombre"
                    value={values.nombre}
                    onChange={update("nombre")}
                    className="w-full rounded-lg border border-[#232f57] bg-[#070b16] px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/50"
                  />
                  <input
                    required
                    placeholder="Nombre de la clínica"
                    value={values.clinica}
                    onChange={update("clinica")}
                    className="w-full rounded-lg border border-[#232f57] bg-[#070b16] px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/50"
                  />
                  <input
                    required
                    type="tel"
                    placeholder="Teléfono"
                    value={values.telefono}
                    onChange={update("telefono")}
                    className="w-full rounded-lg border border-[#232f57] bg-[#070b16] px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/50"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="date"
                      value={values.fecha}
                      onChange={update("fecha")}
                      className="w-full rounded-lg border border-[#232f57] bg-[#070b16] px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/50"
                    />
                    <input
                      type="time"
                      value={values.hora}
                      onChange={update("hora")}
                      className="w-full rounded-lg border border-[#232f57] bg-[#070b16] px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-2 px-6 py-3.5 text-[10px] font-bold tracking-[0.3em] uppercase bg-white text-black hover:bg-neutral-200 transition-colors rounded-lg"
                  >
                    Agendar llamada
                  </button>
                </form>
              </>
            ) : (
              <div className="py-6 text-center">
                <p className="text-3xl">✅</p>
                <h3 className="mt-4 text-lg font-extrabold tracking-tight">
                  ¡Listo!
                </h3>
                <p className="mt-2 text-[13px] text-neutral-400 leading-relaxed">
                  Se abrió tu app de correo con los datos cargados — solo dale enviar. Te contactamos en menos de 24h pa coordinar la llamada.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 px-6 py-3 text-[10px] font-bold tracking-[0.3em] uppercase border border-[#232f57] hover:border-white/50 transition-colors rounded-lg"
                >
                  Cerrar
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Planes({ onOpenForm }: { onOpenForm: () => void }) {
  const p = planes[0];
  return (
    <section id="planes" className="border-t border-[#1b2545]">
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

            <div className="mt-8 rounded-2xl border border-white/70 ring-1 ring-white/30 bg-gradient-to-b from-[#1b2545] to-[#070b16] p-7">
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
                    <span className="text-emerald-400 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={onOpenForm}
                className="mt-7 block w-full text-center px-6 py-3.5 text-[10px] font-bold tracking-[0.3em] uppercase bg-white text-black hover:bg-neutral-200 transition-colors rounded-lg"
              >
                Quiero dejar de perder pacientes
              </button>
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
    <section className="border-t border-[#1b2545]">
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
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-black/80 backdrop-blur border border-[#232f57] rounded-full px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-neutral-200">
              En vivo, sin edición
            </span>
          </div>
          <div className="rounded-[2.5rem] border-4 border-[#232f57] bg-[#070b16] overflow-hidden shadow-[0_0_60px_-15px_rgba(255,255,255,0.15)]">
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
                className="text-[12px] font-semibold tracking-[0.15em] uppercase text-emerald-400"
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
                playing && i === step ? "w-6 bg-emerald-400" : "w-1.5 bg-[#232f57]"
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
    <section className="border-t border-[#1b2545]">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <Kicker>Cómo se implementa</Kicker>
        <div className="mt-12 grid md:grid-cols-4 gap-px bg-[#111a33] border border-[#1b2545]">
          {pasos.map((p, i) => (
            <motion.div
              key={p.n}
              className="bg-[#070b16] p-7 md:p-9 hover:bg-[#111a33] transition-colors"
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
    <section className="border-t border-[#1b2545]">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <Kicker>Preguntas frecuentes</Kicker>
        <div className="mt-10">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b border-[#1b2545]">
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
    <footer id="contacto" className="border-t border-[#1b2545]">
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
          className="inline-block mt-10 border border-white px-10 py-4 text-[11px] font-bold tracking-[0.3em] uppercase transition-colors hover:bg-white hover:text-black"
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          Escríbenos por WhatsApp
        </motion.a>
        <div className="mt-24 pt-12 border-t border-[#1b2545]">
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
  const [formOpen, setFormOpen] = useState(false);

  return (
    <main>
      <BackgroundPaths
        title="Studio Nova"
        subtitle="Deja de perder pacientes por no contestar a tiempo"
      />
      <TrustBar />
      <Planes onOpenForm={() => setFormOpen(true)} />
      <DemoEnVivo />
      <Intro />
      <QueHacemos />
      <Proceso />
      <FAQ />
      <Footer />
      <LeadForm open={formOpen} onClose={() => setFormOpen(false)} />
    </main>
  );
}
