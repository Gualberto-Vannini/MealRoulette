import React, { useState } from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';

interface CardImageProps {
    source: { uri: string };
    style?: ViewStyle;
}

const ImageComponent: React.FC<CardImageProps> = ({ source, style }) => {
    const [error, setError] = useState(false);
    //TODO: Add a better placeholder image
    const imageNotFoundUrl = 'https://via.placeholder.com/150?text=Image+Not+Found';

    const handleImageError = () => {
        setError(true);
    };

    return (
        <View style={[styles.container, style]}>
            {!error ? (
                <Image
                    source={source}
                    style={styles.cardImage}
                    resizeMode="cover"
                    onError={handleImageError}
                />
            ) : (
                <Image source={{uri: imageNotFoundUrl}} style={styles.cardImage} resizeMode="cover" />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 150,
        overflow: 'hidden',
        borderRadius: 10,
    },
    cardImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export { ImageComponent };
