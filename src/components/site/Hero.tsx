import { Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Reveal } from "./Reveal";

const STATS = [
  { valor: "10+", etiqueta: "Años de experiencia" },
  { valor: "4.9★", etiqueta: "Valoración de clientes" },
  { valor: "1 min", etiqueta: "Para pedir cita" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-deep">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent 0 38px, #FFFFFF 38px 40px), repeating-linear-gradient(90deg, transparent 0 38px, #FFFFFF 38px 40px)",
        }}
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-brass">
                <span className="inline-block h-[3px] w-12 bg-accent"></span>
                Negocio · {CONFIG.zona}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-6xl font-semibold uppercase leading-[1.04] tracking-tight text-paper sm:text-7xl lg:text-8xl">
                Tu negocio,
                <br />
                con <span className="text-accent">carácter</span>
                <br />
                propio.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70 sm:text-xl">
                Lo que ofreces, dónde estás y cómo contactar, sin rodeos. Pide
                tu cita en un momento: {CONFIG.nombre}, {CONFIG.ciudad}.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#reserva"
                  className="btn-sheen inline-flex items-center justify-center bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-brass"
                >
                  Pedir cita
                </a>
                <a
                  href={`tel:${CONFIG.telefonoEnlace}`}
                  className="inline-flex items-center justify-center border border-paper/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-paper transition-colors hover:border-accent hover:text-accent"
                >
                  <Phone className="mr-2 h-4 w-4 text-accent" aria-hidden="true" />
                  {CONFIG.telefono}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-paper/20 pt-8">
                {STATS.map((stat) => (
                  <div key={stat.etiqueta}>
                    <p className="font-display text-3xl font-semibold uppercase leading-none text-paper">
                      {stat.valor}
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-wider text-paper/50">
                      {stat.etiqueta}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-3 border-2 border-accent"
                aria-hidden="true"
              ></div>
              <div className="relative overflow-hidden bg-steel">
                <img
                  src="img/haircut-close.jpg"
                  alt="Detalle de tu negocio"
                  className="h-[430px] w-full object-cover contrast-110"
                  loading="eager"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}