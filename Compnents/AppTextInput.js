/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppTextInput = ({ icon, ...otherProps }) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {icon && <Ionicons name={icon} size={20} style={{ marginRight: 10 }} />}
      <TextInput 
        onFocus={() => setFocused(true)} 
        onBlur={() => setFocused(false)}  
        placeholderTextColor={'#626262'}
        style={[
          {
            flex: 1,
            fontSize: 14,
            padding: 20,
            backgroundColor: '#f1f4ff',
            borderRadius: 15,
            marginVertical: 10,
            borderColor: '#c2c2c2',
            borderWidth: 1,
          },
          focused && {
            borderColor: '#1f41bb',
            shadowColor: '#1f41bb',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            elevation: 5,
          },
        ]}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;
