# Projeto-Calculadora


## Desenvolver a lógica e a interface de uma calculadora padrão MAC

  A primeira calculadora, foi feita através da linguagem JavaScript e desenvolvida através do curso da **COD3R**, todo código e lógica foi feito junto com o professor.
  
  <div align="center">
  <img src="https://github.com/danielVaini/Projeto-Calculadora/blob/main/assets/Screenshot_1604789840.png" height="500" width="300" />
  </div>
  
  
  A criação do display e dos botões foi algo bem simples, porém acabei aprendendo algo bem legal do CSS com react-native. 
  Essa coisa legal foi que, podemos pegar largura e altura da tela do dispositivo, e dividir em quantas partes nós quisermos, isso pode ser feito dessa maneira:
  
  <div align="center">
    <img src="https://github.com/danielVaini/Projeto-Calculadora/blob/main/assets/code1.png" height="300" width="700" />
  </div>
  
  Neste código acima, dividimos a altura e a largura do componente em 4x4, quatro linhas, quatro colunas, isso foi utilizado em um **Text**
  envolvido por um **TouchableHighlight**.
  
  <div align="center">
    <img src="https://github.com/danielVaini/Projeto-Calculadora/blob/main/assets/code2.png" height="400" width="700" />
  </div>
  Aqui o código do componente para um melhor entendimento: <a href="https://github.com/danielVaini/Projeto-Calculadora/blob/main/calculadoraJS/src/components/Button.js">Código Completo </a>
  
  # Calculadora TS
  
Esta calculadora, foi feita totalmente do zero, seguindo conceitos aprendido nas aulas do curso até o momento.
Decidi usar o typescript para ter mais familiaridade com a linguagem, e consegui fazer uma calculadora funcional, com uma lógica muito mais simples e uma funcionabilidade a mais de colocar parênteses.


 <div align="center">
  <img src="https://github.com/danielVaini/Projeto-Calculadora/blob/main/assets/Screenshot_1604792571.png" height="500" width="300" />
  </div>
  
 A parte gráfica foi exatamente igual a calculadora feita em **JavaScript**, 
 porém tivemos uma boa reduzida de código na parte lógica. E com isso foi adicionado a opção de elevar um numero **n** a outro numero **n (2^3)**.
 
Foi adicionando também as **Interfaces** do typescript, uma forma bem interessante de poder colocar atributos obrigatórios ou não.

<div align="center">
    <img src="https://github.com/danielVaini/Projeto-Calculadora/blob/main/assets/code3.png" height="400" width="700" />
</div>

E aqui a parte lógica da calculadora, bem simples porém funcional:
```
/* eslint-disable no-eval */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Buttons from '../Buttons/Buttons';
import Display from '../Display/Display';


export default () => {

  const [displayValue, setDisplayValue] = useState('');
  const [conta, setConta] = useState('');

  const addDigit = (n: string) => {

    if (displayValue === '0' && n !== '.'){
      setDisplayValue(n);
    } else {
      setDisplayValue(displayValue + n);


    }

    setConta(`${displayValue + n}`);

  };


  const clearDisplay = () =>{
    setDisplayValue('');
    setConta('');
  };


  const operations = (operations) => {
    if (operations === '='){
      try {
        const result = eval(`${conta}`);
        setDisplayValue(result);
      } catch (e){
        Alert.alert('Verifique a conta');
      }

    }

  };


  return (
    <View style={styles.containerDisplay}>
      <Display value={`${displayValue}`}/>
      <View style={styles.container}>
        <Buttons  label="AC" onClick={clearDisplay}/>
        <Buttons  label="(" onClick={() => addDigit('(')}/>
        <Buttons  label=")" onClick={() => addDigit(')')}/>
        <Buttons operation label="/" onClick={() => addDigit('/')} />
        <Buttons label="7" onClick={() => addDigit('7')}/>
        <Buttons label="8" onClick={() => addDigit('8')}/>
        <Buttons label="9"onClick={() => addDigit('9')} />
        <Buttons operation label="*" onClick={() => addDigit('*')}/>
        <Buttons label="4"onClick={() => addDigit('4')} />
        <Buttons label="5" onClick={() => addDigit('5')} />
        <Buttons label="6" onClick={() => addDigit('6')} />
        <Buttons operation label="+"  onClick={() => addDigit('+')}/>
        <Buttons label="1" onClick={() => addDigit('1')} />
        <Buttons label="2" onClick={() => addDigit('2')} />
        <Buttons label="3" onClick={() => addDigit('3')}/>
        <Buttons operation label="-" onClick={() => addDigit('-')}/>
        <Buttons double label="0" onClick={() => addDigit('0')} />
        <Buttons label="."  onClick={() => addDigit('.')} />
        <Buttons operation label="=" onClick={() => operations('=')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  containerDisplay: {
    flex: 1,


  },
});

```

Código completo: <a href="https://github.com/danielVaini/Projeto-Calculadora/tree/main/CalculadoraTS">Calculadora TS</a>

