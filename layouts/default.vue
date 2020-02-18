<template>

  <div
    class="main">

    <aside-block />

    <div
      class="main__box">

      <header-block />

      <nuxt/>

    </div>

  </div>

</template>

<script>
import AsideBlock from '@/components/layout/aside'
import HeaderBlock from '@/components/layout/header'

export default {
  components: {
    AsideBlock,
    HeaderBlock
  }
}
</script>

<style>
</style>
