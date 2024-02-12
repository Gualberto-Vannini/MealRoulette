import React, { useState } from 'react';
import { Button, View } from 'react-native';
import { ScreenNames, TabOneScreenProps } from '../types';
import { Container } from '../components/Container';
import { Card } from '../components/Card';
import Loader from '../components/Loader';
import { useMeals } from '../hooks/useMeals';
import ErrorMealsComponent from '../components/ErrorMealsComponent';

const TabOneScreen = ({ navigation }: TabOneScreenProps) => {
    const { loading, meals, updateMeals, error } = useMeals(4, 0);
    const [values, addValue] = useState(0);

    const handlePress = (itemId: number) => {
        navigation.navigate(ScreenNames.MEAL_DETAIL_SCREEN, { itemId });
    };

    const handleAddMoreMealClick = () => {
        addValue(values + 4)
        updateMeals(4,  values + 4)
    };

    const handleResetMealClick = () => {
        addValue(0)
        updateMeals(4, 0);
    };

    if (loading) {
        return <Loader loading={loading} />;
    }

    if (error) {
    return <ErrorMealsComponent onReloadClick={handleResetMealClick} text={`Error: ${error}`} />;
    }

    return (
        <Container>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                {meals.length > 0 ?
                    meals.map((meal) => (
                        <Card
                            key={meal.id}
                            uri={meal.picture}
                            text={meal.title}
                            id={meal.id}
                            onPress={(id) => handlePress(id)}
                        />
                    ))
                    :
                    <ErrorMealsComponent onReloadClick={handleResetMealClick} text={`No More meals found!`} />
                }
            </View>
            {meals.length > 0 &&
                <Button title={`Load more Meals`} onPress={handleAddMoreMealClick} />
            }
        </Container>
    );
};

export default TabOneScreen;
