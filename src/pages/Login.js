import styled from "styled-components"

export default function Login() {
    return (
        <Container>
            <h1>MyWallet</h1>
            <LoginBox>
                <input placeholder="E-mail" />
                <input placeholder="Senha" />
                <button>Entrar</button>
            </LoginBox>
            <h2>Primeira vez? Cadastre-se!</h2>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:159px;

    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
    }
    h2{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;

        color: #FFFFFF;
        margin-top:36px;
    }

`
const LoginBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:24px;

    input{
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;

        margin-bottom:13px;

        ::placeholder{ 
            padding-left:14px;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
        }
    }

    button{
        width: 326px;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        border: none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;

        color: #FFFFFF;
    }
   
`

