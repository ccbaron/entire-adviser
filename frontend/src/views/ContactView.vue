<script setup>
import { reactive, ref } from "vue";

const form = reactive({
  name: "",
  email: "",
  company: "",
  message: "",
});

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const resetMessages = () => {
  successMessage.value = "";
  errorMessage.value = "";
};

const resetForm = () => {
  form.name = "";
  form.email = "";
  form.company = "";
  form.message = "";
};

const handleSubmit = async () => {
  resetMessages();
  loading.value = true;

  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error al enviar el formulario");
    }

    successMessage.value = data.message;
    resetForm();
  } catch (error) {
    console.error("Error al enviar formulario:", error);
    errorMessage.value = error.message || "Ha ocurrido un error inesperado";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <section class="grid gap-10 lg:grid-cols-2">
    <div class="space-y-4">
      <p
        class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
      >
        Contacto
      </p>
      <h1 class="text-4xl font-semibold tracking-tight text-slate-900">
        Hablemos sobre tu próximo proyecto.
      </h1>
      <p class="text-lg text-slate-600">
        Cuéntanos qué necesita tu marca o empresa y te contactaremos para
        explorar la mejor solución.
      </p>
    </div>

    <div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <form class="space-y-5" @submit.prevent="handleSubmit">
        <div>
          <label
            for="name"
            class="mb-2 block text-sm font-medium text-slate-700"
            >Nombre</label
          >
          <input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Tu nombre"
            class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-400"
          />
        </div>

        <div>
          <label
            for="email"
            class="mb-2 block text-sm font-medium text-slate-700"
            >Email</label
          >
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="tu@email.com"
            class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-400"
          />
        </div>

        <div>
          <label
            for="company"
            class="mb-2 block text-sm font-medium text-slate-700"
            >Empresa</label
          >
          <input
            id="company"
            v-model="form.company"
            type="text"
            placeholder="Nombre de tu empresa"
            class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-400"
          />
        </div>

        <div>
          <label
            for="message"
            class="mb-2 block text-sm font-medium text-slate-700"
            >Mensaje</label
          >
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            placeholder="Cuéntanos brevemente qué necesitas"
            class="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-400"
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {{ loading ? "Enviando..." : "Enviar solicitud" }}
        </button>

        <p v-if="successMessage" class="text-sm font-medium text-green-600">
          {{ successMessage }}
        </p>

        <p v-if="errorMessage" class="text-sm font-medium text-red-600">
          {{ errorMessage }}
        </p>
      </form>
    </div>
  </section>
</template>
