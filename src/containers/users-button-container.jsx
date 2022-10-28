import { useDispatch } from "react-redux";
import Button from "../components/button";
import { fetchUser } from "../store/thunks";

function UsersButtonContainer() {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({ type: "FETCH_USERS" });
    dispatch(fetchUser());
  };
  return <Button onClick={onClick} text="Fetch users" />;
}

export default UsersButtonContainer;
