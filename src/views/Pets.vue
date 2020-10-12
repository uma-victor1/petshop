<template>
  <div class="pet">
    <h1>{{ animal.name }} ({{ $route.params.species }})</h1>
    <h4><span>Age:</span> {{ animal.age }} Years old</h4>
    <h4 v-if="animal.breed"><span> Breed:</span> {{ animal.breed }}</h4>
    <h4 v-if="animal.gender"><span>Gender:</span> {{ animal.gender }}</h4>
    <h4 v-if="animal.color"><span>Color:</span> {{ animal.color }}</h4>
    <h4 v-if="animal.weight"><span>weight:</span> {{ animal.weight }}</h4>
    <h4 v-if="animal.location"><span>location:</span> {{ animal.location }}</h4>
    <h4 v-if="animal.notes"><span>About:</span>{{ animal.notes }}</h4>
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
    ...mapState(['cat', 'dog'])
  },
  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>

<style lang="scss" scoped>
.pet{

  span{
    color: #42b983;
  }
}
</style>
