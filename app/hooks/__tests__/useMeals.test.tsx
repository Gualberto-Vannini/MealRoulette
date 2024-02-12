import { renderHook, act, waitFor } from '@testing-library/react-native';
import { useMeals } from '../../hooks/useMeals';
import * as fetchMealsModule from '../../api/meal/fetchMeals';

describe('useMeals', () => {
    it('fetches and sets meals data correctly', async () => {
        // Mock data to be returned by fetchMeals
        const mockMealsData = [
            {
                id: 1,
                title: 'Meal 1',
                picture: 'meal1.jpg',
            },
            {
                id: 2,
                title: 'Meal 2',
                picture: 'meal2.jpg',
            },
        ];

        // Mock the implementation of fetchMeals
        jest.spyOn(fetchMealsModule, 'fetchMeals').mockResolvedValue(mockMealsData);

        // Call the hook with initial limit and offset
        const { result } = renderHook(() => useMeals(10, 0));

        // Ensure loading state is initially true
        expect(result.current.loading).toBe(true);

        // Wait for the asynchronous operation to complete
        // hook is async, we need to wait for the fetch to complete
        await waitFor(() => {
            // Ensure loading state is false after the fetch
            expect(result.current.loading).toBe(false);

            // Ensure meals data is set correctly
            expect(result.current.meals).toEqual(mockMealsData);

            // Ensure error state is null
            expect(result.current.error).toBe(null);
        });
    });
});
