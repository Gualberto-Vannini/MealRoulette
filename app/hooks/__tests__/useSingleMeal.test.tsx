import { renderHook, act, waitFor } from '@testing-library/react-native';
import { useSingleMeal } from '../../hooks/useSingleMeal';
import * as fetchSingleMealModule from '../../api/meal/fetchSingleMeal';

describe('useSingleMeal', () => {
    it('fetches and sets meal data correctly', async () => {
        // Mock data to be returned by fetchSingleMeal
        const mockMealData = {
            id: 4,
            title: 'Thai fried prawn & pineapple rice',
            picture: 'https://firebasestorage.googleapis.com/v0/b/devskills-prod.appspot.com/o/Thai%20fried%20prawn%20%26%20pineapple%20rice.webp?alt=media&token=268c55fc-e977-496c-be36-b99d9e6eba04',
            description: 'This quick, low-calorie supper is perfect for a busy weeknight.',
            ingredients: '2 tsp sunflower oil, bunch spring onions greens and whites separated both sliced',
        };

        // Mock the implementation of fetchSingleMeal
        jest.spyOn(fetchSingleMealModule, 'fetchSingleMeal').mockResolvedValue(mockMealData);

        // Call the hook with a mealId
        const { result } = renderHook(() => useSingleMeal(1));

        // Ensure loading state is initially true
        expect(result.current.loading).toBe(true);

        // Wait for the asynchronous operation to complete
        // hook is async, we need to wait for the fetch to complete
        await waitFor(() => {
            // Ensure loading state is false after the fetch
            expect(result.current.loading).toBe(false);

            // Ensure meal data is set correctly
            expect(result.current.meal).toEqual(mockMealData);

            // Ensure error state is null
            expect(result.current.error).toBe(null);
        });
    });
});
