<template>

  <header
    class="header">

    <div
      class="header__container container">

      <div
        class="header__box">

        <div
          class="header__search">

          <search-block />

        </div>

        <div
          class="header__profile">

          <profile-block />

        </div>

      </div>

    </div>

  </header>

</template>

<script>
import SearchBlock from '@/components/shared/search'
import ProfileBlock from '@/components/shared/profile'

export default {
  components: {
    SearchBlock,
    ProfileBlock
  }
}
</script>

<style lang="css">
</style>
