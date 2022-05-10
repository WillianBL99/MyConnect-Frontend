const persistUser = () => {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) return JSON.parse(userInfo);
    return {};
}

export default persistUser;