<script setup>
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>

    <main>
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
