import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { useEffect } from "react";
import { RecipeType } from "../../types";
import { fetchRecipes } from "../../store/recipesSlice";
import { Link } from "react-router";
import { Box, Typography, Card, } from "@mui/material";
import RecipeDisplay from "./RecipeDisplay";


const RecipesList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const recipes = useSelector((state: RootState) => state.recipes.list);

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch]);

    return (<>

        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '20px',
            }}
        >
            <Box
                sx={{
                    width: '80%',
                }}
            >
                <RecipeDisplay />
            </Box>

            <Box sx={{ width: '15%', padding: '10px' }}>
                <Typography variant="h6">My Recipes List:</Typography>
                {recipes.map((r: RecipeType) => (
                    <Link key={r.id} to={`/recipes/${r.id}`} style={{ textDecoration: 'none' }}>
                        <Card sx={{ marginBottom: '5px', border: '1px solid white' }}>
                            {r.title}
                        </Card>
                    </Link>

                ))}
            </Box>
        </Box>

    </>)
}

export default RecipesList





