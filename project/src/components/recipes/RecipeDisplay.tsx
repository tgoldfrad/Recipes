import { useParams } from "react-router";
import { RecipeType } from "../../types"
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Box, Paper, Typography } from "@mui/material";



const RecipeDisplay = () => {
  const { id } = useParams();
  const recipes: RecipeType[] = useSelector((state: RootState) => state.recipes.list);

  let recipe: RecipeType | undefined;
  if (id)
    recipe = recipes.find(r => r.id === parseInt(id));
  return (<>
    {
      recipe && <div>

        <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
          <Typography variant="h5" gutterBottom color="#ce9575" fontWeight={"bold"}>
            {recipe.title}
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 1 }}>
            {recipe.description}
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Ingredients:
          </Typography>
          <Box component="ul" sx={{ paddingLeft: 2 }}>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <Typography variant="body2">{ingredient}</Typography>
              </li>
            ))}
          </Box>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Instructions:
          </Typography>
          <Typography variant="body1">{recipe.instructions}</Typography>
        </Paper>

      </div>
    }

  </>)
}

export default RecipeDisplay