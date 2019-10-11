const getters = {
    //sidebar: state => state.app.sidebar,
    //device: state => state.app.device,
    //token: state => state.user.token,
    //avatar: state => state.user.avatar,
    tel: state => {
        console.log(state.user.tel);
        return state.user.tel
    },
    password: state => state.user.password,
}
export default getters