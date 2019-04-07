import { actionsConstant } from "../Constants/user";

export function registration(state = {}, action) {
    switch (action.type) {
    case actionsConstant.REGISTER_REQUEST:
        return { registering: true };
    case actionsConstant.REGISTER_SUCCESS:
        return {};
    case actionsConstant.REGISTER_FAILURE:
        return {
            error: action.error
        };
    default:
        return state;
    }
}
