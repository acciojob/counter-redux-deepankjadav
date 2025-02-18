

const INCREMENT = "INCREMENT";
const DECEREMENT = "DECEREMENT";

const initialState = { count: 0 };

const Reducer = (state=initialState, actions) => {
    switch(actions.type){
        case INCREMENT:
            return {count : state.count + 1};
        case DECEREMENT:
            return {count : state.count - 1};
        default:
            return state;
    }
}

export default Reducer;