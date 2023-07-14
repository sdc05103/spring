import client from './client';

export const login = ({ userId, password }) =>
    client.post('http://localhost:8080/login', { id: userId, pwd: password}).then(function (response) {
        console.log(response);
        return response;
    }).catch(function (error) {
        console.log(error);
        console.log(error.response.status);
    });

export const join = ({ userName, userId, password }) =>
    client.post('/api/join', { name: userName, id: userId, pwd: password }).then(function (response) {
        console.log(response);
        return response;
    }).catch(function (error) {
        console.log(error);
        /*
        console.log(error.response.status);
        if(error.response.status===409)
            return -1;
            */
        return error;

    });

export const check = () => client.get('/api/auth/check');