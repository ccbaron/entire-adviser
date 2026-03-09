<script setup></script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <nav class="border-b border-slate-200 bg-white">
      <div class="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <router-link to="/" class="font-semibold text-slate-900"
          >Entire Adviser</router-link
        >
        <router-link to="/" class="text-slate-600 hover:text-slate-900"
          >Home</router-link
        >
        <router-link to="/services" class="text-slate-600 hover:text-slate-900"
          >Services</router-link
        >
        <router-link to="/contact" class="text-slate-600 hover:text-slate-900"
          >Contact</router-link
        >
      </div>
    </nav>

    <main class="mx-auto max-w-6xl px-6 py-10">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

main {
  padding: 40px;
}
</style>
