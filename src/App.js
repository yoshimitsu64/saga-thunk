import UsersPanelContainer from "./containers/users-panel-container";
import UsersButtonContainer from "./containers/users-button-container";
import InputContainer from "./containers/input-container";
import { Provider } from "react-redux";
import { store } from "./store";
import CommentsContainer from "./containers/comments-container";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <span>
          <UsersButtonContainer />
          <InputContainer />
        </span>
        <div style={{display:"flex", justifyContent:"space-between"}}>
          <UsersPanelContainer />
          <CommentsContainer />
        </div>
      </div>
    </Provider>
  );
}

export default App;
