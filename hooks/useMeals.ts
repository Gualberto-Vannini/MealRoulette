import { useState, useEffect } from 'react';
import { fetchMeals, FetchMeals } from '../api/meal/fetchMeals';

interface UseMeals {
    loading: boolean;
    meals: FetchMeals[];
    updateMeals: (limit: number, offset: number) => void;
    error: Error | null;
}

export const useMeals = (initialLimit: number, initialOffset: number): UseMeals => {
    const [loading, setLoading] = useState(true);
    const [meals, setMeals] = useState<FetchMeals[]>([]);
    const [limit, setLimit] = useState(initialLimit);
    const [offset, setOffset] = useState(initialOffset);
    const [error, setError] = useState<Error | null>(null);

    const updateMeals = (newLimit: number, newOffset: number) => {
        setLimit(newLimit);
        setOffset(newOffset);
    };

    const loadMeals = async () => {
        try {
            setLoading(true);
            const response = await fetchMeals(limit, offset);
            setMeals(response);
        } catch (error) {
            setError(error as Error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadMeals().then();
    }, [limit, offset]); // Reload meals when limit or offset changes

    return { loading, meals, updateMeals, error };
};
