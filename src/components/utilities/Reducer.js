export const initialState = {
    details: null,
    isVisible: false,
    categoryName: null
};

export const actionTypes = {
    SET_DETAILS: "SET_DETAILS",
    SET_IS_VISIBLE: "SET_IS_VISIBLE",
    SET_CATEGORYNAME: "SET_CATEGORYNAME"
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_DETAILS:
            return {
                ...state,
                details: action.details
            };
        case actionTypes.SET_IS_VISIBLE:
            return {
                ...state,
                isVisible: action.isVisible
            };
        case actionTypes.SET_CATEGORYNAME:
            return {
                ...state,
                categoryName: action.categoryName
            };
        default:
            return state;
            break;
    }
};

export default reducer;
