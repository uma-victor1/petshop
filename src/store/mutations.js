export default {
  appendpet: (state, { pet, species }) => {
    state[species].push(pet)
  }
}
