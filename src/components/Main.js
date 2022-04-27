import React from 'react';
import styled from 'styled-components'

const ContainerMain = styled.div`
//width: 300px;
height: 100vh;
background-color: green;

`
const ContainerMensageiro = styled.div`
background: orange;
display:flex;


`
const ContainerListaMSG = styled.div`
    display: flex;
    height: 100%;
    align-content: flex-end;
    flex-direction: column;
    justify-content: flex-end;
    background: url(https://i.postimg.cc/FHp1NvMb/Fundo-whatsapp.jpg);
`
const Span = styled.div`
    margin-left:10px;
    background: #C2EB96;
    width: 30%;
    padding: 12px;
    margin-bottom: 10px;
    border-radius: 20px 20px 0 20px;
    color:black;
`
 

class Main extends React.Component {

    state = {
        mensagens: [],
        valorInputUsuario: "",
        valorInputMensagem: "",
    };

    enviarMensagem = () => {
        const novaMSG = {

            user: this.state.valorInputUsuario,

            message: this.state.valorInputMensagem,


        };

        const msgRecebidas = [...this.state.mensagens, novaMSG];


        this.setState({ mensagens: msgRecebidas, valorInputMensagem: '', valorInputUsuario: '' });
    };

    onChangeInputUsuario = (event) => {

        this.setState({ valorInputUsuario: event.target.value });
    };

    onChangeInputMensagem = (event) => {

        this.setState({ valorInputMensagem: event.target.value });
    };

    render() {

        const listaDeMSG = this.state.mensagens.map((msg) => {
            return (
                <Span>
                    <strong>{msg.user}</strong> - {msg.message}
                </Span>
            );
        });
        return (
            <ContainerMain>
                <ContainerListaMSG>{listaDeMSG}</ContainerListaMSG>
                <ContainerMensageiro>
                    <input
                        style={{ width: '20%', height: '35px'}}
                        type="text"
                        placeholder="Usuario"
                        value={this.state.valorInputUsuario}
                        onChange={this.onChangeInputUsuario}
                    />
                    <input
                        style={{ width: '100%' }}
                        type="text"
                        placeholder="Mensagem"
                        value={this.state.valorInputMensagem}
                        onChange={this.onChangeInputMensagem}
                    />
                    <button onClick={this.enviarMensagem}> Enviar </button>
                </ContainerMensageiro>

            </ContainerMain>

        )
    }
}

export default Main;