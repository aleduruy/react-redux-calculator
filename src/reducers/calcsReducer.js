import initialState from '../store/initialState';

const calcsReducer = (state = initialState.calcs, action) => {
    switch (action.type) {
        case 'ADD_CALC':
            return [
                ...state,
                Object.assign({}, action.calc)
            ];
        default:
            return state;
    }
}

export default calcsReducer;