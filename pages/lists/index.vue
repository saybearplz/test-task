<template>

  <section
    class="questions">

    <bread-crumbs
      :breads="breads" />

    <div
      class="questions__container container">

      <questions-tabs
        :tabs="tabs" />

      <nuxt-link
        v-if="$route.fullPath === '/lists'"
        to="/lists/add"
        class="questions__add">
        + Добавить опрос
      </nuxt-link>

      <transition
        appear
        name="slide-left"
        mode="out-in">

        <slot />

      </transition>

    </div>

  </section>

</template>

<script>
import BreadCrumbs from '@/components/layout/breadcrumbs'
import QuestionsTabs from '@/components/page-parts/tabs'

export default {
  components: {
    BreadCrumbs,
    QuestionsTabs
  },
  data() {
    return {
      breads: [
        {
          link: '/lists',
          name: 'Опросы'
        }
      ],
      tabs: [
        {
          link: '/lists/params',
          name: 'Параметры'
        },
        {
          link: '/lists/questions',
          name: 'Вопросы'
        },
        {
          link: '/lists/logic',
          name: 'Логика'
        },
        {
          link: '/lists/conditions',
          name: 'Условия'
        },
        {
          link: '/lists/add',
          name: 'Респонденты'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
