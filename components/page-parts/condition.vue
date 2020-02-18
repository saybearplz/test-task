<template>

  <div
    class="condition">

    <div
      class="condition__line">

      <div
        class="condition__left">

        <div
          class="condition__title">
          Условие {{ item.id }}
        </div>

      </div>

      <div
        class="condition__right">

        <v-select
          :plholder="`Выберите условие`"
          :array="conditions"
          @changeSelect="changeCondition" />

      </div>

    </div>

    <div
      v-if="item.type">
      <div
        class="condition__line"
        v-for="(child, c) in item.array" :key="c">
        <div
          class="condition__left">
          {{ child.name }} {{ c + 1 }}
        </div>
        <div
          class="condition__right">
          <v-select
            :array="item.type === 2 ? types : item.type === 3 ? statuses : []" />
        </div>
      </div>
    </div>

    <div
      class="condition__line">
      <div
        class="condition__left">
      </div>
      <div
        class="condition__right condition__right_end"
        :class="item.type != null ? 'condition__right_space' : ''">
        <v-btn
          v-if="item.type"
          class="btn_add"
          @click="changeCondition({ id: item.type })">
          + Добавить {{ item.type === 2 ? 'тип' : item.type === 3 ? 'статус' : '' }}
        </v-btn>
        <v-btn
          class="btn_trash"
          @click="$emit('deleteCondition', item.id)">
          <font-awesome-icon
            class="icon"
            :icon="['far', 'trash-alt']" />
          Удалить условие
        </v-btn>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      conditions: [
        // {
        //   id: 1,
        //   name: 'Возраст респондента',
        // },
        {
          id: 2,
          name: 'Тип карты лояльности',
        },
        {
          id: 3,
          name: 'Статус карты лояльности'
        }
      ],
      types: [
        {
          name: 'Gold',
        },
        {
          name: 'Premium'
        }
      ],
      statuses: [
        {
          name: 'Активна'
        },
        {
          name: 'Не активна'
        }
      ]
    }
  },
  methods: {
    changeCondition(data) {
      this.$emit('changeCondition', { id: this.item.id, data: data.id})
    }
  }
}
</script>

<style lang="css">
</style>
