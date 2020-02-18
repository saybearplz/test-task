<template>

  <questions-layout>

    <div
      class="questions-add">

      <div
        class="questions-add__title">
        Добавить опрос
      </div>

      <div
        class="questions-add__conditions">

        <condition-block
          v-for="(item, i) in conditions" :key="item.id"
          :item="item"
          @deleteCondition="deleteCondition"
          @changeCondition="changeCondition" />

      </div>

      <div
        class="questions-add__bottom">
        <a
          href="/add"
          class="questions-add__box"
          @click.prevent="addBtn()">
          <div
            class="questions-add__plus">
            +
          </div>
          <div
            class="questions-add__text">
            Нажмите, чтобы добавить новое условие выборки.<br>
            Все условия связываются между собой логическим "И".
          </div>
        </a>
      </div>

    </div>

  </questions-layout>

</template>

<script>
import QuestionsLayout from '@/pages/lists';
import ConditionBlock from '@/components/page-parts/condition';

export default {
  components: {
    QuestionsLayout,
    ConditionBlock,
  },
  data() {
    return {
      conditions: [],
    }
  },
  methods: {
    addBtn() {
      let key = 1;
      if (this.conditions.length > 0)
        key = this.conditions[this.conditions.length - 1].id + 1;

      this.conditions.push({
        id: key,
        type: null,
        array: [],
      })
    },

    deleteCondition(num) {
      this.conditions.some((item, i) => {
        if (item.id === num) {
          this.conditions.splice(i, 1)
          return true;
        }
      })
    },

    changeCondition(data) {
      this.conditions.some(item => {
        if (item.id === data.id) {

          if (data.data == 0) {
            item.type = null;
            item.array = [];
            return true;
          }

          console.log('type', item.type)
          console.log('type', data)

          if (item.type && item.type !== data.data)
            item.array = [];
          item.type = data.data;

          if (data.data === 2) {
            item.array.push({
              name: 'Тип',
              value: '',
            })
          } else if (data.data === 3) {
            item.array.push({
              name: 'Статус',
              value: '',
            })
          } else {

          }

          return true;
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
