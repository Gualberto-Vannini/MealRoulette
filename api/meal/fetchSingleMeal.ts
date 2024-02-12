import axios from 'axios';

export interface SingleMeal {
    id: number;
    title: string;
    picture: string;
    description: string;
    ingredients: string;
}

export const fetchSingleMeal = async (mealId: number): Promise<SingleMeal> => {
    try {
        const response = await axios.get(`https://playground.devskills.co/api/rest/meal-roulette-app/meals/${mealId}`);
        return response.data.meal_roulette_app_meals_by_pk;
    } catch (error) {
        throw error;
    }
};
