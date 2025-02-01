import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { useEffect } from "react";
import { RecipeType } from "../../types";
import { fetchRecipes } from "../../store/recipesSlice";
import { Link, Outlet } from "react-router";
import { Box, Typography } from "@mui/material";
import RecipeDisplay from "./RecipeDisplay";

const RecipesList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const recipes = useSelector((state: RootState) => state.recipes.list);

    useEffect(()=>{
        dispatch(fetchRecipes()) // Assuming fetch recipes is a function that fetches recipes from the server
     }, [dispatch]);
 
     return (<>
     
     <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                // marginTop: '10px',
                
            }}
        >
            <Box
            sx={{
                width: '80%',
            }}
            >
            <RecipeDisplay/>
            </Box>
            <Box>
            <Typography variant="h6">My Recipes List:</Typography>
            {recipes.map((r:RecipeType) => (
                // <Link key={r.id} to={`/display/${r.id}`}>
                //     <hr />
                //     {r.title}
                // </Link>
                <Link key={r.id} to={`/recipes/${r.id}`}>
                <hr />
                {r.title}
            </Link>
                
            ))}
           </Box>
 
        </Box>
        
        {/* {recipes.map((r:recipeType)=><Link to={`/display/${r.id}`}><hr/><div>{r.title}</div></Link>)} */}
       
    </>)
}

export default RecipesList