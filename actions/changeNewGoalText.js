import { CHANGE_GOAL_TEXT } from './types';

export const changeNewGoalText = text => {
    return {
        type: CHANGE_GOAL_TEXT,
        payload: text
    }
}