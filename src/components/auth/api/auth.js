import client from './client';

export const login = ({ username, password }) =>
    client.post('/api/auth/login', {username,password});

export const join = ({ name, username, password }) =>
    client.post('join', { name: name, id: username, pwd: password, pwdConfirm: password }).then(function (response) {
        console.log(response);
        return response;
    }).catch(function (error) {
        console.log(error);
        console.log(error.response.status)
    });

export const check = () => client.get('/api/auth/check');