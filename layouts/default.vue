<template>
  <div class="min-h-screen bg-gradient-to-tr from-stellar-red to-stellar-blue py-20 px-2">
    <site-header />

    <div class="container mx-auto px-5 py-20 bg-white rounded-b-lg">
      <Nuxt />
    </div>

    <site-footer />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default {
  components: {
    SiteHeader,
    SiteFooter
  }
}
</script>
