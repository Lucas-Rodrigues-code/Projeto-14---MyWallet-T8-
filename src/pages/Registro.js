import styled from "styled-components"

import { IoIosExit } from 'react-icons/io';
import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';

import { useContext } from "react";
import UserContext from '../Context/Context';

import { useNavigate, Link } from "react-router-dom";

import dayjs from "dayjs";


export default function Registro() {

    const { userData } = useContext(UserContext);
    console.log(userData)
    const navigate = useNavigate();

    function SomaTotal() {
        let total = 0;
        userData.transactions.forEach((transaction) => {
            total += transaction.value;
        });
        return total;
    }

    const registroData = userData.transactions;
    const total = SomaTotal();

    return (
        <Container>
            <Menu>
                <h1>Olá, {userData.name}</h1>
                <IoIosExit onClick={(e) => {
                    localStora .clear();
                    navigate('/')
                }} />
            </Menu>
            <BoxRegistro>
                {registroData.length > 0 ? (
                    <>
                        <Transacaos>
                            {registroData.map((transaction, index) => {
                                return (
                                    <Transacao isNegative={transaction.value < 0} key={index}>
                                        <div>{dayjs(transaction.date).format("DD/MM")}</div>
                                        <div>{transaction.description}</div>
                                        <div>{transaction.value.toFixed(2).replaceAll(".", ",")}</div>
                                    </Transacao>
                                );
                            })}
                        </Transacaos>
                        <TotalValue>
                            <div>Saldo</div>
                            <div>{total.toFixed(2).replaceAll(".", ",")}</div>
                        </TotalValue>
                    </>
                ) : (
                    <>
                        <Transacao>
                            <RegistroVazio>Não há registros de entrada ou saída</RegistroVazio>
                        </Transacao>
                    </>
                )}


            </BoxRegistro>
            <Cont>
                <Entrada onClick={(e) => {
                    navigate("/entrada");
                }}>
                    <h1>Nova<br />entrada</h1>
                    <BsPlusCircle />
                </Entrada>
                <Saida onClick={(e) => {
                    navigate("/saida");
                }}>
                    <h1>Nova<br />saída </h1>
                    <AiOutlineMinusCircle />
                </Saida>
            </Cont>
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
const Cont = styled.div`
    display:flex;
    margin-top:13px;

    margin-bottom:30px;

     svg{
       
        margin-top:10px;
        margin-left:10px;
        
        color: #FFFFFF;

        width:21.88px;
        height:21.88px;
    } 

  
`
const Entrada = styled.button`
    width: 155px;
    height: 114px;
    margin-right:7.5px;
    border:none;
    display:flex;
    

    background: #A328D6;
    border-radius: 5px;
    h1{
        position:fixed;
        

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;

        color: #FFFFFF;
        margin-top:30px;
        
        
    }

  
`
const Saida = styled.button`

    width: 155px;
    height: 114px;
    
    background: #A328D6;
    border-radius: 5px;
    border:none;

    margin-left:7.5px;

    display:flex;

    h1{
        position:fixed;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;

        color: #FFFFFF;
        margin-top:30px;
    }

    

`

//------------------------------

const BoxRegistro = styled.div`
   display:flex;
     width:326px;
    height: 446px; 
    flex-direction: column;
    font-weight: 700;
    padding: 10px 10px;
    background: #ffffff;
    border-radius: 5px;
    overflow: auto;
  
`;


const RegistroVazio = styled.div`
    width: 180px;
    color: #868686;
    font-size: 20px;
    text-align: center;
  
`;

const TotalValue = styled.div`
    height: fit-content;
    padding-top: 5px;
  
  div {
    justify-content: flex-start;
    font-size: 17px;
  }
  div:nth-child(1) {
    font-weight: 700;
    justify-content: flex-start;
    color: #000000;
  }
  div:nth-child(2) {
    justify-content: flex-end;
    color: #03ac00;
  }
`;

const Transacaos = styled.div`
    flex-direction: column;
    justify-content: flex-start;

`;

const Transacao = styled.div`
   
    height: fit-content;
    line-height: 30px;

  div {
    font-size: 16px;
  }
  div:nth-child(1) {
    justify-content: flex-start;
    min-width: 60px;
    width: 60px;
    color: #c6c6c6;
  }
  div:nth-child(2) {
    justify-content: flex-start;
    color: #000000;
  }
  div:nth-child(3) {
    min-width: 100px;
    width: 100px;
    justify-content: flex-end;
    color: ${({ isNegative }) => (isNegative ? "#c70000" : "#03ac00")};
  }
`;