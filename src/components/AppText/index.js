import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const AppText = ({style, children, numberOfLines, onPress, ...props}) => (
  <Text
    numberOfLines={numberOfLines}
    style={[styles.default, style]}
    onPress={onPress}
    {...props}>
    {children}
  </Text>
);

export default React.memo(AppText);
