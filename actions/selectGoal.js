import { SELECT_GOAL } from './types';

export const selectGoal = goalId => {
    return {
        type: SELECT_GOAL,
        payload: goalId
    }
}