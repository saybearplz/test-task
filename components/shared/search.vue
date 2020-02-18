<template>

  <v-input
    :plholder="`Поиск по системе`"
    :value="text"
    @changeInput="text = $event">

    <v-btn
      class="btn_search"
      @click="searchBtn()">
      <font-awesome-icon
        icon="search" />
    </v-btn>

  </v-input>

</template>

<script>

export default {
  data() {
    return {
      text: '',
    }
  }
}
</script>

<style lang="css">
</style>
