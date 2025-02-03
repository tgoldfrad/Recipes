import { createBrowserRouter} from "react-router";
import LoggedIn from "./components/user/LoggedIn";
import RecipesList from "./components/recipes/RecipesList";
import RecipeDisplay from "./components/recipes/RecipeDisplay";
import RecipeForm from "./components/recipes/RecipeForm";
import AppLayout from "./components/AppLayout";
import About from "./components/recipes/About";


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
          { path: ':id', element: <RecipeDisplay /> },
        ]
      },
      { path: 'recipes/add', element: <RecipeForm/>, errorElement: <>Error!</> },
      {
        path: 'loggedin', element: <LoggedIn />, errorElement: <>Error1</>,
        children: [
          { path: ':name', element: <LoggedIn /> }
        ]
      },
       { path: '/about', element: <About /> },
      
    ]
  }
])