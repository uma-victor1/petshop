<template>
  <div class="home">
    <h1>Adopt a new pet.</h1>
    <p>There are currently {{petno}} available</p>
    <div class="adopt">
      <img
        src="../assets/relaxed-cat-looking-camera-golden-260nw-632318627.jpg"
        alt="cute cat"
      />
    </div>

    <b-button @click="toggleForm" size="lg">Add a Pet</b-button>

    <b-form @submit.prevent="SubmitForm" v-if="isFormOpen">
      <b-form-group id="input-group-2" label="Pets Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter Pet name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cat', 'dog']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pets Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.age"
          required
          placeholder="Enter Pet Age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      isFormOpen: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },
  computed: {
    ...mapGetters(['petno'])
  },
  methods: {
    ...mapActions(['addPet']),
    toggleForm () {
      this.isFormOpen = !this.isFormOpen
    },
    SubmitForm () {
      const { name, age, species } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)

      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
  <style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.adopt {
  width: 80%;
  height: 300px;

  img {
    width: 100%;
  }
}
</style>
