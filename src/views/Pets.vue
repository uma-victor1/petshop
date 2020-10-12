<template>
  <div>
    <h1>Pets page</h1>
    <h1>{{ animal.name }}</h1>
    <h4>{{ animal.age }}</h4>
    <h4>{{ animal.breed }}</h4>
    <h4>{{ animal.gender }}</h4>
    <h4>{{ animal.color }}</h4>
    <h4>{{ animal.weight }}</h4>
    <h4>{{ animal.location }}</h4>
    <h4>{{ animal.notes }}</h4>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState(['cats', 'dogs'])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>

<style lang="scss" scoped>
</style>
