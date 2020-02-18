<template>

  <div
    class="breadcrumbs">
    <div
      class="container">
      <ul
        class="breadcrumbs__list">
        <li
          class="breadcrumbs__item">
          <nuxt-link
            to="/"
            class="breadcrumbs__link">
            <font-awesome-icon
              icon="home" />
          </nuxt-link>
        </li>
        <li
          class="breadcrumbs__item"
          v-for="(item, i) in breads" :key="i">
          <nuxt-link
            :to="item.link"
            class="breadcrumbs__link">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  props: ['breads'],
}
</script>

<style lang="css">
</style>
