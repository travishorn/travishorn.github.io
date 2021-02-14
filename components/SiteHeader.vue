<template>
  <div class="space-y-20">
    <div class="flex flex-col items-center space-y-6 text-white">
      <div class="rounded-full w-24 h-24 bg-white text-stellar-blue flex items-center justify-center">
        <svg class="w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9 12v2h6v-2h-6zm-3.586-3l-2.828 2.828L7 16.243 11.243 12 7 7.757 5.586 9.172 8.414 12z"/></svg>
      </div>
      <h1 class="text-5xl">Travis Horn</h1>
      <h2 class="text-2xl">Full-stack web developer. Data visualization expert.</h2>
    </div>

    <div class="flex flex-col sm:block container mx-auto p-5 rounded-t-lg bg-gray-200 space-y-2 sm:space-y-0 sm:space-x-10 text-center">
      <nuxt-link class="py-3 px-6 rounded-lg hover:bg-gray-100" exact-active-class="bg-white" v-for="link in navLinks" :key="link.text" :to="link.to">{{ link.text }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [
        {
          text: "Portfolio",
          to: "/"
        },
        {
          text: "Résumé",
          to: "/resume"
        },
        {
          text: "Contact",
          to: "/contact"
        }
      ]
    }
  }
}
</script>