

//לבדוק בלי setvalue
import { Box, Button, Modal, TextField } from "@mui/material"
import { FormSubmitHandler, useForm } from "react-hook-form"
import { object, string, number, array } from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"
import Errors from "./Errors"
import { style } from "../user/HomePage"
import IngredientInput from "./IngredientInput"
import { addRecipe } from "../../store/recipesSlice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../store/store"
import { RecipeType } from "../../types"
import { useContext, useState } from "react"
import { UserContext } from "../user/Start"

const schema = object({
    title: string().required().min(3).max(80),
    description: string(),
    ingredients: array().of(string().required()),
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

    
    const onSubmit = async (data:any) => {
         dispatch(addRecipe({...data,autherId: currentUser.id}));
         setOpen(false);
    }

    const handleIngredientsChange = (newIngredients: string[]) => {
        setValue("ingredients", newIngredients);
    };

    return (<>
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>

                    <label> title:</label>
                        <input {...register("title")} />
                    {errors.title && <Errors message={errors.title.message || " "} />}

                    <label>description</label>
                    <input type="text" {...register("description")} />
                    {errors.description && <Errors message={errors.description.message || " "} />}

                    <IngredientInput  onIngredientsChange={handleIngredientsChange}  />
                    {/* //{...register("ingredients")} */}
                    {errors.ingredients && <Errors message={errors.ingredients.message || " "} />}

                    <TextField label='instructions' type="text" {...register("instructions")} />
                    {errors.instructions && <Errors message={errors.instructions.message || " "} />}

                    <Button type="submit" >add recipe</Button>
                </form>
            </Box>
        </Modal>
    </>)
}

export default RecipeForm

