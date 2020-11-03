import React from 'react';
import {Text, TouchableHighlight} from 'react-native';

interface Props {
  label: string;
}

export default (props: Props) => {
  return (
    <>
      <TouchableHighlight>
        <Text>{props.label}</Text>
      </TouchableHighlight>
    </>
  );
};


