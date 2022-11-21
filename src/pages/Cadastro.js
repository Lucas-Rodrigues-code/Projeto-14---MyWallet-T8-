import styled from "styled-components"

import axios from "axios"
import { useState } from "react"
import { useNavigate, Link } from 'react-router-dom';


export default function Cadastro() {


    const [form, setForm] = useState({
        nome: "",
        email: "",
        senha: "",
        confirmeSenha: "",
    });

    const navigate = useNavigate();

    async function fazerCadastro(e) {
        e.preventDefault();

        if (form.senha !== form.confirmeSenha) {
            alert("Senhas diferentes !!");
            return;
        }

        const body = {
            name: form.nome,
            email: form.email,
            password: form.senha
        }

         axios.post("http://localhost:5000/register", body)
         .then(()=>{
            navigate("/");
         })
         .catch((err)=>{
            console.log(err)
         })

        
    }


    return (
        <Container>
            <h1>MyWallet</h1>
            <LoginBox>
                <input placeholder="Nome" value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} />
                <input type="email" placeholder="E-mail" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                <input type="password" placeholder="Senha" value={form.senha} onChange={e => setForm({ ...form, senha: e.target.value })} />
                <input type="password" placeholder="Confirme a senha" value={form.confirmeSenha} onChange={e => setForm({ ...form, confirmeSenha: e.target.value })} />
                <button onClick={fazerCadastro}>Cadastrar</button>
            </LoginBox>
            <Link to={'/'}>
                <h2>Já tem uma conta? Entre agora!</h2>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:95px;

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
