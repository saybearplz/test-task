<template>

  <div
    class="questions__tabs">

    <div
      class="questions__tab"
      v-for="(item, i) in tabs" :key="i">

      <nuxt-link
        :to="item.link"
        class="questions__link">
        {{ item.name }}
      </nuxt-link>

    </div>

  </div>

</template>

<script>
export default {
  props: ['tabs'],
  data() {
    return {
    }
  }
}
</script>

<style lang="css">
</style>
