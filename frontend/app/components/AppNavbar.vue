<template>
  <header class="border-b border-slate-200 bg-white">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="text-lg font-semibold text-slate-900">
        Entire Studio
      </NuxtLink>

      <nav class="flex items-center gap-6">
        <NuxtLink
          to="/"
          class="text-sm text-slate-600 transition hover:text-slate-900"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/services"
          class="text-sm text-slate-600 transition hover:text-slate-900"
        >
          Services
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="text-sm text-slate-600 transition hover:text-slate-900"
        >
          Contact
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>
