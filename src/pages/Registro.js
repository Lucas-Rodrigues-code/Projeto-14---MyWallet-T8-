import styled from "styled-components"

import { IoIosExit } from 'react-icons/io';
import { BsPlusCircle } from 'react-icons/bs';
import { AiOutlineMinusCircle } from 'react-icons/ai';



export default function Registro() {
    return (
        <Container>
            <Menu>
                <h1>Olá, Fulano</h1>
                <IoIosExit />
            </Menu>
            <BoxRegistro>
                <h1>Não há registros de<br />entrada ou saída</h1>
            </BoxRegistro>
            <Cont>
                <Entrada>
                    <h1>Nova<br />entrada</h1>
                    <BsPlusCircle />
                </Entrada>
                <Saida>
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
const BoxRegistro = styled.div`
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    display:flex;
    justify-content:center;
    align-items:center;

    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;

        color: #868686;   
            }
`
const Cont = styled.div`
    display:flex;
    margin-top:13px;

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
        margin-top:15px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;

        color: #FFFFFF;
        margin-top:70px;
        
        
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
        margin-top:15px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;

        color: #FFFFFF;
        margin-top:70px;
    }

    

`
