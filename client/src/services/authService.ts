
export const autoLogin = () => {
    const userId = 1
    localStorage.setItem('userId', JSON.stringify(userId));
}

export const getCurrentUserId = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
        return JSON.parse(userId);
    }

    return null;
}

const AuthService = {
    autoLogin,
    getCurrentUserId
};

export default AuthService;