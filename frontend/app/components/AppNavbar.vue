<template>
  <header class="navbar">
    <div class="container navbar__content">
      <NuxtLink to="/" class="navbar__brand">Entire Studio</NuxtLink>

      <nav class="navbar__nav">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/services">Services</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  border-bottom: 1px solid #e2e8f0;
  background: white;
}

.navbar__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  padding-bottom: 18px;
}

.navbar__brand {
  font-size: 1.1rem;
  font-weight: 700;
}

.navbar__nav {
  display: flex;
  gap: 24px;
  font-size: 0.95rem;
  color: #475569;
}
</style>
