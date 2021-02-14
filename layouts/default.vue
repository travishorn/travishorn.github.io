<template>
  <div class="bg-gradient-to-tr from-stellar-red to-stellar-blue py-20 px-2">
    <site-header />
    <Nuxt />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader";

export default {
  components: {
    SiteHeader
  }
}
</script>
