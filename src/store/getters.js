export default {
  petno: (state) => {
    return state.cat.length + state.dog.length
  }
}
