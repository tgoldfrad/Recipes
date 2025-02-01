import { createBrowserRouter, Outlet } from "react-router";
import NavBar from "./components/user/NavBar";
import LoggedIn from "./components/user/LoggedIn";
import HomePage from "./components/user/HomePage";
import RecipesList from "./components/recipes/RecipesList";
import RecipeDisplay from "./components/recipes/RecipeDisplay";
import RecipeForm from "./components/recipes/RecipeForm";
import AppLayout from "./components/AppLayout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <>
      <AppLayout />
    </>,
    children: [
      { path: 'recipes', element: <RecipesList />, errorElement: <>Error!</> },
      {
        path: 'recipes', element: <RecipesList />, errorElement: <>Error!</>,
        children: [
          { path: ':id', element: <RecipeDisplay /> }
        ]
      },
      { path: 'add', element: <RecipeForm />, errorElement: <>Error!</> },


      {
        path: 'loggedin', element: <LoggedIn />, errorElement: <>Error1</>,
        children: [
          { path: ':name', element: <LoggedIn /> }
        ]
      },
      // { path: '/home', element: <HomePage /> },
    ]
  }
])