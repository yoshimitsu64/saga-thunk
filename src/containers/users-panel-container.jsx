import { useSelector } from "react-redux";
import UsersPanel from "../components/users-panel";

function UsersPanelContainer() {
  const users = useSelector((state) => state.users);
  const isLoading = useSelector(state => state.isLoading);

  return <UsersPanel users={users} isLoading={isLoading}/>;
}

export default UsersPanelContainer;
