import styled from "styled-components"
import { useContext, useState, useEffect } from "react"
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

import UserContext from '../Context/Context'


export default function Login() {

    const { userData, setUserData } = useContext(UserContext);
    const navigate = useNavigate()


    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    useEffect(() => {
        

        if (userData !== null) {
            navigate("/registro")
        }

    }, [userData])



    function fazerLogin(e) {
        e.preventDefault();

        const body = {
            email: email,
            password: senha,
        }

        axios.post("http://localhost:5000/login", body)
            .then((res) => {
                const { token, email, name, transactions } = res.data;

                setUserData({
                    ...userData,
                    token: token,
                    email: email,
                    name: name,
                    transactions: transactions,
                });

                navigate("/registro");

            })
            .catch((err) => {
                console.log(err)
            });
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <LoginBox>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
                <button onClick={fazerLogin}>Entrar</button>
            </LoginBox>
            <Link to={'cadastro'}>
                <h2>Primeira vez? Cadastre-se!</h2>
            </Link>
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

