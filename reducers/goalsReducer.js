import { ADD_GOAL, MOVE_GOAL, CHANGE_GOAL_TEXT, SELECT_GOAL, DELETE_GOAL } from "../actions/types";

const initialState = {
    goals: [],
    newGoalText: '',
    selectedGoalId: -1
};

const goalsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_GOAL: {
            state.goals.push({
                id: Math.random(),
                category: 'Backlog',
                text: state.newGoalText,
                user_id: 1,
            });
            state.newGoalText = '';
            return state;
        }
        case MOVE_GOAL: {
            const idx = state.goals.findIndex((element) => element.id === action.payload);
            if (idx === -1) {
                return state;
            }
            if ( state.goals[idx].category === 'Backlog' ) {
                state.goals[idx].category = 'InProgress';
            } else {
                state.goals[idx].category = 'Done';
            }
            let newState = {...state};
            let modifiedState = state.goals[idx];
            newState.goals = state.goals.filter((goal) => goal.id !== action.payload);
            newState.goals.push(modifiedState);
            return newState;
        }
        case CHANGE_GOAL_TEXT: {
            console.log(action.payload);
            state.newGoalText = action.payload;
            return state;
        }
        case SELECT_GOAL: {
            state.selectedGoalId = action.payload;
            return state;
        }
        case DELETE_GOAL: {
            let newState = {...state};
            newState.goals = state.goals.filter((goal) => goal.id !== action.payload);
            return newState;
        }
        default:
            return state;
    }
}

export default goalsReducer;