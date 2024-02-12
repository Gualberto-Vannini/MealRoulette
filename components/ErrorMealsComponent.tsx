import React from 'react';
import {Button, View} from 'react-native';
import {TextComponent, TextType} from './TextComponent';
import {Container} from "./Container";
import {ImageComponent} from "./ImageComponent";

interface NoMealsComponentProps {
    onReloadClick?: () => void;
    text?: string;
}

const ErrorMealsComponent: React.FC<NoMealsComponentProps> = ({onReloadClick, text}) => {
    const imageUri = 'https://robohash.org/alien.png?size=200x200';

    return (
        <Container>
            <View style={{alignItems: 'center', marginBottom: "20%"}}>
                <ImageComponent source={{uri: imageUri}} style={{width: 200, height: 200}}/>
                <TextComponent textType={TextType.Title} text={text}/>
            </View>
            {onReloadClick && <Button title="Reload Meals" onPress={onReloadClick}/>}
        </Container>
    );
};

export default ErrorMealsComponent;
