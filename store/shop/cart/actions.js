const actions = () => ({
  addLine (context, payload) {
    context.commit('addLine', payload)
  }
});

export default actions();
