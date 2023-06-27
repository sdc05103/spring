import styled from 'styled-components';
import { Link } from '../../../node_modules/react-router-dom/dist/index';
import Button from '../Button.js';

//회원가입 혹은 로그인 폼을 보여줌

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: black;
        margin-bottom: 2rem;
        text-align: center;
    }
`;

const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid black;
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid red;
    }
    &+& {
        margin-top: 1.5rem;
    }
`;

const Footer = styled.div`
    margin-top: 2rem;
    text-align: right;
    a {
        color: mint;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 2rem`;

const textMap = {
    login: '로그인',
    join: '회원가입',
};

const AuthForm = ({type}) => {
    const text = textMap[type];
  return <AuthFormBlock>
    <h3>{text}</h3>
    <form>
        <StyledInput autoComplete='username' name='username' placeholder='아이디' />
        <StyledInput autoComplete='new-password' name='password' placeholder='비밀번호' type='password' />
        {type==='join' && (
            <StyledInput
                autoComplete='new-password'
                name='passwordConfirm'
                placeholder='비밀번호 확인'
                type='password' />
        )}
        <ButtonWithMarginTop cyan fullWidth >{text}</ButtonWithMarginTop>
    </form>
    <Footer>
        {type === 'login' ? (<Link to="/join">회원가입</Link>) : (<Link to="/login">로그인</Link>)}
        
    </Footer>
  </AuthFormBlock>;
};

export default AuthForm;
