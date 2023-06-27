import React from 'react';
import AuthForm from './AuthForm';
import AuthTemplate from './AuthTemplate';

const Login = () => {
    return (
        <AuthTemplate>
            <AuthForm type="login" />
        </AuthTemplate>
    );
};

export default Login;