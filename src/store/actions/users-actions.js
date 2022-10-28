export function setUsers(payload) {
  return {
    type: "SET_USERS",
    payload,
  };
}

export function setComments(payload) {
  return {
    type: "SET_COMMENTS",
    payload,
  };
}


export function fetchComments(payload) {
  return {
    type: "FETCH_COMMENTS",
    payload,
  };
}

export function setIsLoading(payload) {
  return {
    type: "IS_LOADING",
    payload,
  };
}
