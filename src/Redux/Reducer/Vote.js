import {VOTE} from "../../Constants";

let initialState = {
    votedPeopleCount: 0
};

export function vote(state = initialState, action) {
    switch(action.type) {
        case VOTE.ACTION.PUT_VOTED_PEOPLE_COUNT:
            return Object.assign({}, state, {votedPeopleCount: action.count});
    }

    return state;
}