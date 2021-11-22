const API_ROOT = "http://127.0.0.1:8080"

export const apiUrls = {
    login: () => `${API_ROOT}/authenticate`,
    signup: () => `${API_ROOT}/register`,
    createGroup: () => `${API_ROOT}/createGroup`,
    getUserGroups: () => `${API_ROOT}/getUserGroups`,
}