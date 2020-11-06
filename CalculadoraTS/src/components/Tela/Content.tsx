/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Buttons from '../Buttons/Buttons';
import Display from '../Display/Display';


export default () => {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [index, setIndex] = useState(0);
  const [displayValue, setDisplayValue] = useState('0');
  var operation = '';



  const addDigit = (n) => {

    if (n === '.' && displayValue.includes(n)){
      return;
    }

    if (displayValue === '0' && n === '.' ){
      setDisplayValue(displayValue + n);

    }

    if (displayValue === '0' && n !== '.'){
      setDisplayValue(n);
    }

    if (displayValue !== '0'){
      setDisplayValue(displayValue + n);
    }


  };


  const clearDisplay = () =>{
    setDisplayValue('0');
    setIndex(0);
    setV1(0);
    setV2(0);
  };


  const operations = (operations) => {
    var valor1 = 0;
    var valor2 = 0;
    if (index === 0){
      setV1(parseFloat(displayValue));
      valor1 = parseFloat(displayValue);
      operation = operations;
      console.debug(valor1);
      setIndex(1);
      setDisplayValue('0');

    }
    if (index === 1){
      valor2 = parseFloat(displayValue);
      console.debug(valor2);
    }


    if (operations === '='){
      switch (operation){
        case '+':
          setDisplayValue(`${valor1 + valor2}`);
      }
    }

  };


  return (
    <View style={styles.containerDisplay}>
      <Display value={`${displayValue}`}/>
      <View style={styles.container}>
        <Buttons triple label="AC" onClick={clearDisplay}/>
        <Buttons label="/" onClick={operations} />
        <Buttons label="7" onClick={addDigit}/>
        <Buttons label="8" onClick={addDigit}/>
        <Buttons label="9"onClick={addDigit} />
        <Buttons label="*" onClick={operations}/>
        <Buttons label="4"onClick={addDigit} />
        <Buttons label="5" onClick={addDigit} />
        <Buttons label="6" onClick={addDigit} />
        <Buttons label="+"  onClick={operations}/>
        <Buttons label="1" onClick={addDigit} />
        <Buttons label="2" onClick={addDigit} />
        <Buttons label="3" onClick={addDigit}/>
        <Buttons label="-" onClick={operations}/>
        <Buttons double label="0" onClick={addDigit} />
        <Buttons label="."  onClick={addDigit} />
        <Buttons label="=" onClick={operations}/>
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
