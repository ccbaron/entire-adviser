<script setup>
useSeoMeta({
  title: "Entire Studio | Consultoría tecnológica y digital",
  description:
    "Entire Studio impulsa marcas y negocios con estrategia, desarrollo web, branding y marketing digital.",
});
</script>

<template>
  <!-- Home page content -->
  <section class="space-y-24">
    <section class="hero-bleed">
      <div class="hero-overlay"></div>
      <div class="hero-grid"></div>

      <!--- Hero section -->
      <div class="mx-auto max-w-6xl px-6">
        <section
          class="hero relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-30"
        >
          <div class="space-y-6">
            <span
              class="inline-flex rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 backdrop-blur"
            >
              Entire Studio · Consultoría tecnológica y digital
            </span>

            <h1
              class="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Impulsamos marcas y negocios con estrategia, tecnología y
              ejecución digital.
            </h1>

            <p class="max-w-2xl text-lg leading-8 text-slate-600">
              Ayudamos a empresas a construir una presencia digital sólida
              mediante desarrollo web, marketing digital, branding, contenidos y
              soluciones orientadas al crecimiento.
            </p>

            <div class="flex flex-wrap gap-4">
              <NuxtLink
                to="/contact"
                class="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Solicitar una consulta
              </NuxtLink>

              <NuxtLink
                to="/services"
                class="inline-flex items-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
              >
                Ver servicios
              </NuxtLink>
            </div>
          </div>

          <div
            class="hero-panel rounded-3xl border border-white/40 bg-white/65 p-8 shadow-[0_10px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl"
          >
            <div class="space-y-8">
              <div class="rounded-2xl bg-slate-100/80 p-5">
                <p class="text-sm font-medium text-slate-500">Enfoque</p>
                <p class="mt-2 text-lg font-semibold text-slate-900">
                  Tecnología, marca y crecimiento conectados en una misma
                  estrategia.
                </p>
              </div>

              <div class="grid gap-4 sm:grid-cols-2">
                <div
                  class="rounded-2xl border border-slate-200/80 bg-white/60 p-5"
                >
                  <p class="text-sm text-slate-500">Servicios</p>
                  <p class="mt-2 font-semibold text-slate-900">
                    Web, branding, marketing y automatización
                  </p>
                </div>

                <div
                  class="rounded-2xl border border-slate-200/80 bg-white/60 p-5"
                >
                  <p class="text-sm text-slate-500">Objetivo</p>
                  <p class="mt-2 font-semibold text-slate-900">
                    Crear activos digitales que impulsen negocio real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    <!-- Services section -->
    <section class="space-y-8">
      <div class="max-w-2xl space-y-3">
        <p
          class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
        >
          Servicios principales
        </p>
        <h2 class="text-3xl font-semibold tracking-tight text-slate-950">
          Una consultora diseñada para unir estrategia y ejecución.
        </h2>
        <p class="text-base leading-7 text-slate-600">
          Trabajamos en las áreas clave que hoy necesita una empresa para crecer
          con una presencia digital coherente, profesional y escalable.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 class="text-xl font-semibold text-slate-950">Desarrollo web</h3>
          <p class="mt-3 leading-7 text-slate-600">
            Sitios corporativos, landings y experiencias digitales construidas
            con una base moderna, clara y preparada para crecer.
          </p>
        </article>

        <article
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 class="text-xl font-semibold text-slate-950">
            Marketing digital
          </h3>
          <p class="mt-3 leading-7 text-slate-600">
            Estrategias para captar tráfico, generar demanda, fortalecer canales
            y convertir mejor.
          </p>
        </article>

        <article
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 class="text-xl font-semibold text-slate-950">Branding</h3>
          <p class="mt-3 leading-7 text-slate-600">
            Construcción de marca, identidad visual y mensajes que aporten
            claridad y diferenciación.
          </p>
        </article>

        <article
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 class="text-xl font-semibold text-slate-950">Redes sociales</h3>
          <p class="mt-3 leading-7 text-slate-600">
            Planificación de presencia digital y contenidos alineados con
            objetivos de negocio.
          </p>
        </article>

        <article
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 class="text-xl font-semibold text-slate-950">
            Estrategia digital
          </h3>
          <p class="mt-3 leading-7 text-slate-600">
            Definición de prioridades, oportunidades y planes de acción para
            marcas y empresas.
          </p>
        </article>

        <article
          class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h3 class="text-xl font-semibold text-slate-950">Automatización</h3>
          <p class="mt-3 leading-7 text-slate-600">
            Bases tecnológicas para escalar procesos de contenidos, captación,
            comunicación y operación.
          </p>
        </article>
      </div>
    </section>

    <!-- How we work section -->
    <section
      class="grid gap-8 rounded-4xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.95fr_2fr] lg:p-10"
    >
      <div class="space-y-3">
        <p
          class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
        >
          Cómo trabajamos
        </p>
        <h2
          class="max-w-md text-3xl font-semibold tracking-tight text-slate-950"
        >
          Un enfoque claro, práctico y orientado a resultados.
        </h2>
      </div>

      <div class="grid gap-8 md:grid-cols-3">
        <article class="space-y-4">
          <span
            class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-sm"
          >
            01
          </span>
          <h3 class="text-xl font-semibold text-slate-950">Diagnóstico</h3>
          <p class="leading-7 text-slate-600">
            Analizamos contexto, marca, canales y oportunidades para detectar
            prioridades reales.
          </p>
        </article>

        <article class="space-y-4">
          <span
            class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-sm"
          >
            02
          </span>
          <h3 class="text-xl font-semibold text-slate-950">Estrategia</h3>
          <p class="leading-7 text-slate-600">
            Diseñamos una hoja de ruta con foco en posicionamiento, captación y
            estructura digital.
          </p>
        </article>

        <article class="space-y-4">
          <span
            class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white shadow-sm"
          >
            03
          </span>
          <h3 class="text-xl font-semibold text-slate-950">Implementación</h3>
          <p class="leading-7 text-slate-600">
            Ejecutamos con orden, tecnología y criterio para convertir la
            estrategia en resultados.
          </p>
        </article>
      </div>
    </section>

    <!-- Contact section -->
    <section
      class="rounded-4xl bg-slate-950 px-8 py-12 text-white shadow-sm lg:px-10 lg:py-14"
    >
      <div
        class="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
      >
        <div class="max-w-2xl space-y-3">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300"
          >
            Contacto
          </p>
          <h2 class="text-3xl font-semibold tracking-tight text-white">
            Construyamos una presencia digital más sólida para tu negocio.
          </h2>
          <p class="max-w-xl text-base leading-7 text-slate-300">
            Si estás buscando una web profesional, una estrategia digital más
            clara o una base tecnológica para crecer, hablemos.
          </p>
        </div>

        <NuxtLink
          to="/contact"
          class="inline-flex min-w-42.5 items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
        >
          Ir a contacto
        </NuxtLink>
      </div>
    </section>
  </section>
</template>

<style scoped>
.hero-bleed {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  width: 100vw;
  background: linear-gradient(
    180deg,
    rgba(248, 250, 252, 0.92),
    rgba(248, 250, 252, 0.96)
  );
}

.hero {
  position: relative;
  z-index: 2;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(
      circle at 12% 18%,
      rgba(59, 130, 246, 0.22),
      transparent 30%
    ),
    radial-gradient(
      circle at 78% 24%,
      rgba(14, 165, 233, 0.18),
      transparent 28%
    ),
    radial-gradient(
      circle at 62% 72%,
      rgba(99, 102, 241, 0.14),
      transparent 26%
    );
  filter: blur(85px);
  animation: heroFloat 14s ease-in-out infinite alternate;
  transform-origin: center;
}

.hero-grid {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image:
    linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.65), transparent 92%);
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.65),
    transparent 92%
  );
  opacity: 0.55;
}

.hero-panel {
  position: relative;
  z-index: 2;
}

@keyframes heroFloat {
  0% {
    transform: translate3d(-24px, -16px, 0) scale(1);
  }
  50% {
    transform: translate3d(18px, 10px, 0) scale(1.05);
  }
  100% {
    transform: translate3d(34px, 24px, 0) scale(1.08);
  }
}
</style>
