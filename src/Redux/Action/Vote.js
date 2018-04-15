import {VOTE} from "../../Constants";

export function putVotedPeopleCount(count) {
    return {
        type: VOTE.ACTION.PUT_VOTED_PEOPLE_COUNT,
        count: count
    }
}