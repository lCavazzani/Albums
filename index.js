import { AppRegistry } from 'react-native';
import React from 'react';
import Header from './src/components/header';

const App = () => (
        <Header />
    );
// Pre-refactor
// const App = () => {  
//     return (
//         <Text>Udemy Test</Text>
//     );
// };

AppRegistry.registerComponent('albums', () => App);
