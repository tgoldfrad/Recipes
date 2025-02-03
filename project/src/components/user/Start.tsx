import { RouterProvider } from "react-router";
import { router } from "../../router";
import { createContext, Dispatch, useReducer } from "react";
import userReducer, { Action, User } from "../../UserModel";
import { Provider } from "react-redux";
import store from "../../store/store";

export const UserContext = createContext<[User, Dispatch<Action>]>([{ firstName: 'fff', lastName: "dgd", password: "546456" }, () => { }]);

function Start() {

  const [currentUser, currentUserDispatch] = useReducer(userReducer, {} as User)
  return (
    <>
      <UserContext.Provider value={[currentUser, currentUserDispatch]}>
      <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
      </UserContext.Provider>
    </>
  )
}

export default Start;