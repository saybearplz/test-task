<template>

  <aside
    class="aside">

    <div
      class="aside__top">

      <div
        class="aside__logo">

        <logo-block />

      </div>

      <div
        class="aside__menu">

        <nav-menu />

      </div>

    </div>

  </aside>

</template>

<script>
import LogoBlock from '@/components/shared/logo'
import NavMenu from '@/components/shared/navigation'

export default {
  components: {
    LogoBlock,
    NavMenu
  }
}
</script>

<style lang="css">
</style>
