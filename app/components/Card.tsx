import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {ImageComponent} from "./ImageComponent";
import {TextComponent, TextType} from "./TextComponent";

interface CardProps {
    style?: StyleProp<ViewStyle>;
    uri: string;
    text: string;
    id: number;
    onPress: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ uri, style, text, id, onPress }) => {
    return (
        <View style={[styles.card, style]} onTouchEnd={() => onPress(id)}>
            <ImageComponent source={{ uri }} />
            <TextComponent style={styles.text} textType={TextType.Subtitle} text={text} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '40%',
        margin: 15,
        overflow: 'hidden',
        borderRadius: 10,
    },
    text: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});

export {Card};
