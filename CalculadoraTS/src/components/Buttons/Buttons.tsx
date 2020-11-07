import React, { ButtonHTMLAttributes } from 'react';
import { Dimensions, StyleSheet, Text, TouchableHighlight} from 'react-native';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>  {
  label: string;
  double?: string;
  triple?: string;
  operation?: string;

}

export default (props: Props) => {

const buttonStyles = [styles.buttonsContainer];

if (props.double){buttonStyles.push(styles.buttonDouble);}
if (props.triple){buttonStyles.push(styles.buttonTriple);}
if (props.operation){buttonStyles.push(styles.operation);}




  return (
    <>
      <TouchableHighlight style={buttonStyles} onPress={props.onClick} >
        <Text style={styles.textButton} >{props.label}</Text>
      </TouchableHighlight>
    </>
  );
};


const styles = StyleSheet.create({
  buttonsContainer: {
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#27c2dd',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,

  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,

  },
  textButton: {
    fontSize: 40,
  },
  operation: {
    backgroundColor: '#2767dd'
  }
});


