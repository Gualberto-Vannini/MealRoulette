import axios from 'axios';

export interface FetchMeals {
    id: number;
    title: string;
    picture: string;
}

interface MealsResponse {
    meal_roulette_app_meals_aggregate: {
        nodes: FetchMeals[];
    };
}

export const fetchMeals = async (limit: number, offset: number): Promise<FetchMeals[]> => {
    try {
        const response = await axios.get<MealsResponse>(`https://playground.devskills.co/api/rest/meal-roulette-app/meals/limit/${limit}/offset/${offset}`);
        return response.data.meal_roulette_app_meals_aggregate.nodes;
    } catch (error) {
        throw error;
    }
};
