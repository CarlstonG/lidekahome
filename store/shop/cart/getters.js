const getters = () => ({
  lines: state => {
    return state.lines
  },
  count: state => {
    return state.lines.length;
  }
});

export default getters();

