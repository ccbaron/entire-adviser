<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const menuOpen = ref(false);
const router = useRouter();

router.afterEach(() => {
  menuOpen.value = false;
});
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-white/50 bg-slate-50/80 backdrop-blur-xl"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="group inline-flex items-center gap-3">
        <span
          class="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/70 bg-white/80 text-sm font-semibold text-slate-900 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition duration-300 group-hover:-translate-y-0.5"
        >
          EB
        </span>

        <div class="flex flex-col leading-none">
          <span class="text-sm font-semibold tracking-[0.18em] text-slate-900">
            ENTIRE BASE
          </span>
          <span class="mt-1 text-xs text-slate-500">
            Consultoría tecnológica y digital
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop nav -->
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

      <!-- Mobile hamburger -->
      <button
        class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/70 bg-white/80 shadow-[0_8px_30px_rgba(15,23,42,0.08)] transition md:hidden"
        aria-label="Abrir menú"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="block h-0.5 w-5 rounded bg-slate-900 transition-transform duration-300"
          :class="menuOpen ? 'translate-y-2 rotate-45' : ''"
        />
        <span
          class="block h-0.5 w-5 rounded bg-slate-900 transition-opacity duration-300"
          :class="menuOpen ? 'opacity-0' : ''"
        />
        <span
          class="block h-0.5 w-5 rounded bg-slate-900 transition-transform duration-300"
          :class="menuOpen ? '-translate-y-2 -rotate-45' : ''"
        />
      </button>
    </div>

    <!-- Mobile menu panel -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="menuOpen"
        class="border-t border-white/50 bg-slate-50/95 px-6 py-4 backdrop-blur-xl md:hidden"
      >
        <nav class="flex flex-col gap-1">
          <NuxtLink
            to="/"
            class="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-900"
          >
            Inicio
          </NuxtLink>
          <NuxtLink
            to="/services"
            class="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-900"
          >
            Servicios
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-slate-900"
          >
            Contacto
          </NuxtLink>
        </nav>
        <NuxtLink
          to="/contact"
          class="mt-3 flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(15,23,42,0.18)] transition hover:bg-slate-800"
        >
          Solicitar consulta
        </NuxtLink>
      </div>
    </transition>
  </header>
</template>
