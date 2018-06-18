import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => (
        <View>
            <Card>
                <CardSection style={styles.cardHeader}>
                    <View>
                        <Text> {props.album.title} </Text>
                    </View>
                    <View style={styles.cardHeaderText}>
                        <Text> {props.album.title} </Text>
                        <Text> {props.album.artist} </Text>
                    </View>
                </CardSection>
                
            </Card>
        </View>
    );

const styles = {
    cardHeader: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    cardHeaderText: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    }
};
//I'm just using this Card component for styling purpose. I'm nesting the elements inside the Card.
export default AlbumDetail; 
