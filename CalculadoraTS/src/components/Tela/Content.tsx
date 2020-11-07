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
