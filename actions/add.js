import { ADD_GOAL } from './types';

export const addGoal = goal => {
    return {
        type: ADD_GOAL,
        payload: goal
    }
}