export const parseJwt = (authToken) => {
    if (!token) { return; }

    var token = authToken.substring(7);
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}