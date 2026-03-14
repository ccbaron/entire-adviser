<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <Navbar />

    <main class="mx-auto max-w-6xl px-6 py-10">
      <router-view />
    </main>

    <Footer />
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
