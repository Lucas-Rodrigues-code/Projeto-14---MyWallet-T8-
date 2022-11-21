import styled from "styled-components"

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react"
import UserContext from '../Context/Context'

export default function Saida() {

    const { userData, setUserData } = useContext(UserContext);

    const [form, setForm] = useState({
      value: "",
      description: "",
    });
  
    const navigate = useNavigate();
  
    function postSaida(e) {
      e.preventDefault();
  
      axios
        .post(
          "http://localhost:5000/transactions",
          { ...form, value: parseFloat(form.value), date: Date.now() },
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        )
        .then(() => {
          axios
            .get("http://localhost:5000/transactions", {
              headers: {
                Authorization: `Bearer ${userData.token}`,
              },
            })
            .then((res) => {
              setUserData({
                ...userData,
                transactions: res.data.transactions,
              });
              navigate("/registro");
            });
        });
    }

    
    return (
        <Container>
            <Menu>
                <h1>Nova saída</h1>
            </Menu>
            <BoxRegistro>
                <input placeholder="Valor" value={form.value} onChange={e => setForm({ ...form, value: e.target.value })}/>
                <input placeholder="Descrição" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}/>
                <button onClick={postSaida}>Salvar saída</button>
            </BoxRegistro>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Menu = styled.div`
    width: 326px;
    display:flex;
    align-items:center;
   

    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        
        color: #FFFFFF;

        margin-top:25px;
        margin-bottom:22px;
    }

    svg{
        padding-left:163px;
        color:#FFFFFF;

        width:23px;
        height:24px;
    }
`
const BoxRegistro = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:40px;

    

    input{
        width: 326px;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        border:none;
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
        border:none;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;

        color: #FFFFFF;
    }

  
`

