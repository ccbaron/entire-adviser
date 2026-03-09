<script setup>
import { ref, onMounted } from "vue";

const backendMessage = ref("Cargando mensaje del backend...");
const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3000/api/health");
    const data = await response.json();

    backendMessage.value = data.message;
  } catch (err) {
    console.error("Error al conectar con el backend:", err);
    backendMessage.value = "No se pudo conectar con el backend";
    error.value = true;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <main>
    <h1>Entire Adviser</h1>
    <p>Web corporativa en construcción</p>

    <section>
      <h2>Estado de la conexión</h2>

      <p v-if="loading">Comprobando backend...</p>
      <p v-else-if="error">{{ backendMessage }}</p>
      <p v-else>{{ backendMessage }}</p>
    </section>
  </main>
</template>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 0.5rem;
}

section {
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 12px;
}
</style>
