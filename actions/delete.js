import { DELETE_GOAL } from './types';

export const deleteGoal = goalId => {
    return {
        type: DELETE_GOAL,
        payload: goalId
    }
}