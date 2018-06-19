import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle, headerContentStyle, 
            thumbnailtContainerStyle, headerTextStyle, imageStyle } = styles;
    return (
        <View>
            <Card>
                <CardSection>
                    <View style={thumbnailtContainerStyle}>
                        <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                        />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}> {title} </Text>
                        <Text> {artist} </Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image source={{ uri: image }} style={imageStyle} />
                </CardSection>

                <CardSection>
                    <Button onPress={() => Linking.openURL(url)} />
                </CardSection>
            </Card>
        </View>
    );
};

const styles = {
    headerContentStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        padding: 5
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailtContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }, 
    imageStyle: { 
        height: 300,
        flex: 1,
        width: null
    },

};
//I'm just using this Card component for styling purpose. I'm nesting the elements inside the Card.
export default AlbumDetail; 
