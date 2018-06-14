import { AppRegistry } from 'react-native';
import React from 'react';
import Header from './src/components/header';

const App = () => 
(
        <Header headerText='Albums!' />
    );
// Pre-refactor
// so funciona se for simples, nao consegui criar variaveis dentro da funcao assim
// const App = () => {  
//     return (
//         <Text>Udemy Test</Text>
//     );
// };

AppRegistry.registerComponent('albums', () => App);
