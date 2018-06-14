import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
             <Text style={textStyle}> Albums! </Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
    },
    textStyle: {
        fontSize: 20,
    }
};

export default Header; 
