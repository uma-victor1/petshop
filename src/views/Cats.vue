<template>
  <div class="table">
    <h1>Cats page</h1>
    <b-container>
      <b-table responsive striped hover :items="cats">
        <template v-slot:cell(name)="data">
          <!-- `data.value` is the value after formatted by the Formatter -->
          <router-link :to="`/pets/cats/${data.index}`">{{
            data.value
          }}</router-link>
        </template>
      </b-table>
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['cats'])
  }
}
</script>

<style lang="scss" scoped>
.table {
  overflow-x: auto;
}
</style>
