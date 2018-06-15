import { AppRegistry, View } from 'react-native';
import React from 'react';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => 
(
    <View>
        <Header headerText='Albums!' />
        <AlbumList />
    </View>
    );
// Pre-refactor
// so funciona se for simples, nao consegui criar variaveis dentro da funcao assim
// const App = () => {  
//     return (
//         <Text>Udemy Test</Text>
//     );
// };

AppRegistry.registerComponent('albums', () => App);
