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
//Just works if its a simple component, I could not create a var insidethat function
// const App = () => {  
//     return (
//         <Text>Udemy Test</Text>
//     );
// };

AppRegistry.registerComponent('albums', () => App);
