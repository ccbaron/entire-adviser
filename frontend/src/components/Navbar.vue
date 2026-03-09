<template>
  <header class="border-b border-slate-200 bg-white">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <router-link to="/" class="text-lg font-semibold text-slate-900">
        Entire Adviser
      </router-link>

      <nav class="flex items-center gap-6">
        <router-link to="/" class="text-sm text-slate-600 transition hover:text-slate-900">
          Home
        </router-link>
        <router-link to="/services" class="text-sm text-slate-600 transition hover:text-slate-900">
          Services
        </router-link>
        <router-link to="/contact" class="text-sm text-slate-600 transition hover:text-slate-900">
          Contact
        </router-link>
      </nav>
    </div>
  </header>
</template>