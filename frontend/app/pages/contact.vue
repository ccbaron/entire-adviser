<script setup>
useSeoMeta({
  title: "Contacto | Entire Studio",
  description:
    "Contacta con Entire Studio para explorar proyectos de desarrollo web, branding, marketing digital o consultoría tecnológica.",
});

// Form state and handlers
const form = reactive({
  name: "",
  email: "",
  company: "",
  message: "",
});

const loading = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const resetForm = () => {
  form.name = "";
  form.email = "";
  form.company = "";
  form.message = "";
};

const handleSubmit = async () => {
  successMessage.value = "";
  errorMessage.value = "";
  loading.value = true;

  try {
    const response = await $fetch("http://localhost:4000/api/contact", {
      method: "POST",
      body: form,
    });

    successMessage.value = response.message;
    resetForm();
  } catch (error) {
    errorMessage.value =
      error?.data?.message || "Ha ocurrido un error al enviar el formulario.";
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <!-- Contact page content -->
  <section class="space-y-12 pt-10 lg:pt-14">
    <section class="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
      <div class="space-y-6">
        <div class="space-y-4">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            Contacto
          </p>

          <h1
            class="text-4xl font-semibold tracking-tight text-slate-900"
          >
            Hablemos sobre tu próximo proyecto.
          </h1>

          <p class="max-w-xl text-lg leading-8 text-slate-600">
            Cuéntanos qué necesita tu marca o empresa y te contactaremos para
            explorar una solución clara, funcional y alineada con tus objetivos.
          </p>
        </div>

        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            Qué podemos desarrollar
          </p>

          <ul class="mt-4 space-y-3 text-slate-600">
            <li>Webs corporativas y landings profesionales</li>
            <li>Estrategia digital y posicionamiento</li>
            <li>Branding y estructura de presencia online</li>
            <li>Automatización y mejora de procesos digitales</li>
          </ul>
        </div>
      </div>

      <!-- Contact form -->
      <div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <form class="space-y-5" novalidate @submit.prevent="handleSubmit">
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
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400"
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
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400"
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
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400"
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
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-400"
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
  </section>
</template>
