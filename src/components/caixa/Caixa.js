import React from 'react';
import './Caixa.css';
import Timer from '../timer/Timer';
import Botao from '../botao/Botao';

class Caixa extends React.Component{
    
    constructor(){
        super();

        this.state = {
        minutos: 10,
        segundos: 00
        }

        this.decrementar();
    }
    
    

    parar = () => {
        clearInterval(intervalo);
        this.intervalo=null;
    }

    iniciar = () => {
        if(this.intervalo){
            return;
        }

        intervalo = setInterval(() => {
            let meusSegundos = Number(this.state.segundos);
            let meusMinutos = Number(this.state.minutos);

            if(meusSegundos === 0 && meusMinutos === 0){
                clearInterval(intervalo);
            }
            else if(meusSegundos === 0){
                meusSegundos = 59;
                meusMinutos--;
            }
            else{
                meusSegundos--;
            }

            this.setState({
                minutos: meusMinutos,
                segundos: meusSegundos
            });
            console.log(this.segundos);
        }, 1000);
    }

    formatarNumero = (numero) =>{
        if(numero < 10){
            return "0" + numero;
        }
    }

    render = () => {
        
        return <section className="Caixa">
            <div className="main">
                <Timer minutos={this.state.minutos} segundos={this.state.segundos}/>

                <div className="buttons">
                    <Botao conteudo="+"/>
                    <Botao conteudo="-"/>
                </div>
            </div>

            <div className="buttons">
                <Botao funcao={this.iniciar()} conteudo="Iniciar"/>
                <Botao funcao={this.parar()} conteudo="Parar"/>
            </div>
      </section>
    }
}

export default Caixa;