
import { Box, Button, Modal, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import { object, string, array } from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import Errors from "./Errors"
import { style } from "../user/HomePage"
import IngredientInput from "./IngredientInput"
import { addRecipe } from "../../store/recipesSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store/store"
import { useContext, useState } from "react"
import { UserContext } from "../user/Start"
import { useNavigate } from "react-router"

const schema = object({
    title: string().required().min(3).max(80),
    description: string(),
    ingredients: array().of(string().required().min(5)),
    instructions: string().required(),
}).required()


const RecipeForm = () => {
    const [currentUser, dispatchUser] = useContext(UserContext)
    const [open, setOpen] = useState(true);

    const dispatch = useDispatch<AppDispatch>();
    const {
        formState: { errors },
        register,
        handleSubmit,
        setValue,
    } = useForm({ resolver: yupResolver(schema) })

    const navigate = useNavigate();
    
    const onSubmit = async (data:any) => {
         dispatch(addRecipe({...data,autherId: currentUser.id}));
         setOpen(false);
         navigate(-1);
    }

    const handleIngredientsChange = (newIngredients: string[]) => {
        setValue("ingredients", newIngredients);
    };

    return (<>
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
                   
                    <TextField label='title' {...register("title")} />
                    {errors.title && <Errors message={errors.title.message || " "} />}
                    
                    <TextField label='description' type="text" {...register("description")} />
                    {errors.description && <Errors message={errors.description.message || " "} />}

                    <IngredientInput  onIngredientsChange={handleIngredientsChange}  />
                    
                    {errors.ingredients && <Errors message={errors.ingredients.message || " "} />}

                    <TextField label='instructions' type="text" {...register("instructions")} 
                    multiline={true} minRows={5}/>
                    {errors.instructions && <Errors message={errors.instructions.message || " "} />}

                    <Button type="submit" >add recipe</Button>
                </form>
            </Box>
        </Modal>
    </>)
}

export default RecipeForm

