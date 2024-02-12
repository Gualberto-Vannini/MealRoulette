import React, {useEffect} from 'react';
import { ScrollView } from 'react-native';
import { TextComponent, TextType } from '../components/TextComponent';
import { RouteProp } from '@react-navigation/native';
import { ScreenNames, TabOneParamList } from '../types';
import { ImageComponent } from "../components/ImageComponent";
import { Container } from "../components/Container";
import IngredientsList from "../components/IngredientsList";
import { useSingleMeal } from '../hooks/useSingleMeal';
import Loader from "../components/Loader";
import ErrorMealsComponent from "../components/ErrorMealsComponent";

type MealDetailScreenRouteProp = RouteProp<TabOneParamList, ScreenNames.MEAL_DETAIL_SCREEN>;

type MealDetailScreenProps = {
    route: MealDetailScreenRouteProp;
};

export default function MealDetailScreen({ route }: MealDetailScreenProps) {
    const { itemId } = route.params;
    const { loading, error, meal, fetchMeal } = useSingleMeal(itemId);

    useEffect(() => {
        fetchMeal(itemId);
    }, [itemId]);

    if (loading) {
        return <Loader loading={loading} />;
    }

    if (error || !meal) {
        return <ErrorMealsComponent text={'No details have been found! Please select another item.'} />;
    }

    return (
        <Container>
            <ScrollView>
                <ImageComponent source={{ uri: meal.picture }} />
                <TextComponent textType={TextType.Title} text={meal.title} />
                <TextComponent textType={TextType.Paragraph} text={meal.description} />
                <TextComponent textType={TextType.Subtitle} text={'Ingredients'} />
                <IngredientsList ingredients={meal.ingredients} />
            </ScrollView>
        </Container>
    );
}
