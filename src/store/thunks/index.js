import { setUsers } from "../actions/users-actions";
import { getPlaceholder } from "../sagas";

export function fetchUser() {
    return async dispatch => {
    getPlaceholder("users/9").then((data) => dispatch(setUsers(data)));
  };
}
