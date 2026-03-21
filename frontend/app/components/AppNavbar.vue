<template>
  <header
    class="sticky top-0 z-50 border-b border-white/50 bg-slate-50/80 backdrop-blur-xl"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="group inline-flex items-center gap-3">
        <span
          class="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/70 bg-white/80 text-sm font-semibold text-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition duration-300 group-hover:-translate-y-0.5"
        >
          ES
        </span>

        <div class="flex flex-col leading-none">
          <span class="text-sm font-semibold tracking-[0.18em] text-slate-900">
            ENTIRE STUDIO
          </span>
          <span class="mt-1 text-xs text-slate-500">
            Consultoría tecnológica y digital
          </span>
        </div>
      </NuxtLink>

      <div class="hidden items-center gap-3 md:flex">
        <nav
          class="flex items-center gap-1 rounded-full border border-white/70 bg-white/70 p-1.5 shadow-[0_8px_30px_rgba(15,23,42,0.05)]"
        >
          <NuxtLink
            to="/"
            class="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Inicio
          </NuxtLink>

          <NuxtLink
            to="/services"
            class="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Servicios
          </NuxtLink>

          <NuxtLink
            to="/contact"
            class="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
          >
            Contacto
          </NuxtLink>
        </nav>

        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Solicitar consulta
        </NuxtLink>
      </div>

      <NuxtLink
        to="/contact"
        class="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(15,23,42,0.18)] transition hover:bg-slate-800 md:hidden"
      >
        Contacto
      </NuxtLink>
    </div>
  </header>
</template>
