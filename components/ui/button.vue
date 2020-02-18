<template>

  <button
    class="btn"
    @click.prevent="$emit('click')">
    <slot />
  </button>

</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
