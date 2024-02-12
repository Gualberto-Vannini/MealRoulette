import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextComponent, TextType} from "./TextComponent";
import {useTheme} from '../theme/Theme';
interface IngredientsListProps {
    ingredients: string;
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  const theme = useTheme();
    const ingredientArray = ingredients.split(',').map((ingredient, index) => (
        <View key={index} style={styles.listItem}>
            <Text style={[styles.bulletPoint, {color: theme.text}]}>•</Text>
            <TextComponent textType={TextType.Paragraph} text={ingredient.trim()} />
        </View>
    ));

    return <View>{ingredientArray}</View>;
};

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: '2%',
    },
    bulletPoint: {
        fontSize: 16,
        marginRight: '2%',
    },
});

export default IngredientsList;
