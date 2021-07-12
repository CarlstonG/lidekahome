const mutations = () => ({
  addLine(state, payload) {
    state.lines.push(payload);
  }
});

export default mutations();
