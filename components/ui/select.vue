<template>

  <div
    v-if="array"
    class="field-select">

    <select
      v-model="select"
      class="field-select__slect field-select_default"
      :class="classEl"
      @change.prevent="changeSelect">
      <option
        v-if="plholder"
        value="0" selected>
        {{ plholder }}
      </option>
      <option
        v-for="(item, i) in array" :key="i"
        :value="i+1">
        {{ item.name }}
      </option>
    </select>

    <slot />

  </div>

</template>

<script>
export default {
  props: ['plholder', 'array', 'active', 'classEl'],
  data() {
    return {
      select: this.active ? this.active : 0,
    }
  },
  watch: {
    array(data) {
      if (data && this.active) {
        this.select = this.active;
      }
    },
  },
  methods: {
    changeSelect(e) {
      const value = e.target.value;
      this.select = value;
      const item = this.array.filter((item, i) => i+1 == value);
      this.$emit('changeSelect', item.length > 0 ? item[0] : { id: value, name: '' })
    },
  }
}
</script>

<style lang="css">
</style>
