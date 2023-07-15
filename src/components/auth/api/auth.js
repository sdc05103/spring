import client from './client';

const joinURL = "http://localhost:8080/join";
const config = { headers : { "Content-Type": 'application/json' } };

export const login = ({ userId, password }) =>
    client.post('http://localhost:8080/login', { id: userId, pwd: password}).then(function (response) {
        console.log(response);
        return response;
    }).catch(function (error) {
        console.log(error);
        console.log(error.response.status);
    });

export const join = (form) => {
    console.log(form);
    const data = { 'name': form.userName, 'id': form.userId, 'pwd': form.password };
    console.log(data);
client.post('/api/join', data, config).then(function (response) {
    console.log(response);
    return response;
}).catch(function (error) {
    console.log(error);
    return error;

});
}

export const check = () => client.get('/api/auth/check');