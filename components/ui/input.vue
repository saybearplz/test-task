<template>

  <div
    class="field-input">

    <input
      class="field-input__inpt"
      :class="classEl"
      :placeholder="plholder"
      :disabled="disabled"
      @input="$emit('changeInput', name)"
      @keypress.enter="$emit('keyEnterInput', $event)"
      v-model.trim="name" />

    <slot />

  </div>

</template>

<script>
export default {
  props: ['plholder', 'value', 'classEl', 'disabled'],
  data() {
    return {
      name: this.value ? this.value : '',
    }
  },
  watch: {
    value(data) {
      this.name = data;
    },
  },
}
</script>

<style lang="css">
</style>
