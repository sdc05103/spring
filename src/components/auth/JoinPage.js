import React from 'react';
import AuthForm from './AuthForm';
import AuthTemplate from './AuthTemplate';

const Join = () => {
    return (
        <AuthTemplate>
            <AuthForm type="join" />
        </AuthTemplate>
    );
};

export default Join;