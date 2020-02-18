<template>

  <div
    class="nav-menu">

    <nuxt-link
      class="nav-menu__item"
      v-for="(item, i) in menu" :key="i"
      :to="item.link">

      <div
        class="nav-menu__icon">
        <font-awesome-icon
          :icon="item.icon" />
      </div>

      <div
        class="nav-menu__name">
        {{ item.name }}
      </div>

    </nuxt-link>

  </div>

</template>

<script>
export default {
  data: () => ({
    menu: [
      {
        link: '/lists',
        name: 'Опросы',
        icon: ['far', 'file-alt']
      },
      {
        link: '/users',
        name: 'Пользователи',
        icon: 'user-friends'
      },
      {
        link: '/blacklist',
        name: 'Черные списки',
        icon: 'flag'
      },
      {
        link: '/call-center',
        name: 'Колл-центр',
        icon: 'phone-alt'
      }
    ]
  })
}
</script>

<style lang="css">
</style>
