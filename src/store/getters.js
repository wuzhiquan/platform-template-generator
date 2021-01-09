const getters = {
  loading: state => state.app.loading, // loading状态
  patient: state => (JSON.stringify(state.app.patient) === '{}' ? JSON.parse(sessionStorage.patient) : state.app.patient),
};
export default getters;
