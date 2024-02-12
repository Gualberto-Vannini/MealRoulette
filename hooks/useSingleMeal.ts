import { useState, useEffect } from 'react';
import { fetchSingleMeal, SingleMeal } from '../api/meal/fetchSingleMeal';

interface UseSingleMeal {
    loading: boolean;
    meal: SingleMeal | null;
    error: Error | null;
    fetchMeal: (mealId: number) => void;
}

export const useSingleMeal = (mealId:number): UseSingleMeal => {
    const [loading, setLoading] = useState<boolean>(false);
    const [meal, setMeal] = useState<SingleMeal | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const fetchMeal = async (mealId: number) => {
        try {
            setLoading(true);
            const response = await fetchSingleMeal(mealId);
            setMeal(response);
            setError(null);
        } catch (error) {
            setMeal(null);
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Fetch the meal when the component is mounted
        fetchMeal(mealId).then();
    }, []); // Empty dependency array ensures it runs only once on mount

    return { loading, meal, error, fetchMeal };
};
