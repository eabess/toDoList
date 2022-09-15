import { MOVE_GOAL } from './types';

export const moveGoal = goalId => {
    return {
        type: MOVE_GOAL,
        payload: goalId
    }
}