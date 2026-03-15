<script setup>
useSeoMeta({
  title: "Servicios | Entire Studio",
  description:
    "Conoce los servicios de Entire Studio: desarrollo web, branding, marketing digital, estrategia y automatización.",
});
</script>

<template>
  <!-- Services page content -->
  <section class="space-y-16 pt-10 lg:pt-14">
    <section class="space-y-6">
      <div class="max-w-3xl space-y-4">
        <p
          class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
        >
          Servicios
        </p>

        <h1
          class="text-4xl font-semibold tracking-tight text-slate-900"
        >
          Soluciones digitales para marcas y empresas en crecimiento.
        </h1>

        <p class="max-w-2xl text-lg leading-8 text-slate-600">
          Entire Studio reúne estrategia, desarrollo y marketing para construir
          una presencia digital sólida, diferenciada y preparada para
          evolucionar.
        </p>
      </div>
    </section>

    <section class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article
        class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <h2 class="text-xl font-semibold text-slate-900">Desarrollo web</h2>
        <p class="mt-4 leading-7 text-slate-600">
          Creación de webs corporativas, landings y activos digitales con una
          base moderna, clara y escalable.
        </p>
      </article>

      <article
        class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <h2 class="text-xl font-semibold text-slate-900">Marketing digital</h2>
        <p class="mt-4 leading-7 text-slate-600">
          Estrategias orientadas a visibilidad, captación, posicionamiento y
          optimización de resultados.
        </p>
      </article>

      <article
        class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <h2 class="text-xl font-semibold text-slate-900">Branding</h2>
        <p class="mt-4 leading-7 text-slate-600">
          Construcción de identidad y posicionamiento para marcas que quieren
          diferenciarse con claridad.
        </p>
      </article>

      <article
        class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <h2 class="text-xl font-semibold text-slate-900">Redes sociales</h2>
        <p class="mt-4 leading-7 text-slate-600">
          Planificación y gestión de contenidos alineados con objetivos de
          negocio y presencia digital.
        </p>
      </article>

      <article
        class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <h2 class="text-xl font-semibold text-slate-900">Estrategia digital</h2>
        <p class="mt-4 leading-7 text-slate-600">
          Consultoría para definir prioridades, canales, oportunidades y planes
          de acción sostenibles.
        </p>
      </article>

      <article
        class="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
      >
        <h2 class="text-xl font-semibold text-slate-900">Automatización</h2>
        <p class="mt-4 leading-7 text-slate-600">
          Estructuras y flujos para escalar comunicación, contenidos y procesos
          digitales con eficiencia.
        </p>
      </article>
    </section>

    <!-- Call to action section -->
    <section class="rounded-3xl bg-slate-900 px-8 py-12 text-white">
      <div
        class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <div class="max-w-2xl space-y-3">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300"
          >
            Siguiente paso
          </p>
          <h2 class="text-2xl font-semibold tracking-tight">
            Construyamos una solución digital alineada con tus objetivos.
          </h2>
          <p class="text-slate-300">
            Si buscas una web profesional, una estrategia más clara o una base
            tecnológica preparada para crecer, conversemos.
          </p>
        </div>

        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-200"
        >
          Ir a contacto
        </NuxtLink>
      </div>
    </section>
  </section>
</template>
