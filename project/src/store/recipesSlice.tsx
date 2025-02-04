import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RecipeType } from "../types";
import axios from "axios";

export const fetchRecipes = createAsyncThunk('recipes/fetch',async (_, thunkAPI)=>{
    try{
        const response = await axios.get('http://localhost:3000/api/recipes');
        return response.data as RecipeType[];
    }catch(e){
        return thunkAPI.rejectWithValue(e);
    }
});

export const addRecipe = createAsyncThunk('recipes/add',async (recipe: RecipeType, thunkAPI)=>{
    try{
        const response = await axios.post('http://localhost:3000/api/recipes',
             recipe,{headers:{"user-id":recipe.autherId}});
        return response.data.recipe as RecipeType;
    }catch(e){
        return thunkAPI.rejectWithValue(e);
    }
})

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {list:[] as RecipeType[],loading:false,error:null as string|null},
    reducers: {
    },
 
    extraReducers:(builder)=>{
        builder
        .addCase(fetchRecipes.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
       .addCase(fetchRecipes.fulfilled, (state, action) => {
           state.loading = false;
            state.list = [...action.payload]
        })
        .addCase(fetchRecipes.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
        .addCase(addRecipe.pending,(state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(addRecipe.fulfilled, (state, action) => {
            state.loading = false;
            state.list.push(action.payload)
        })
        .addCase(addRecipe.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
    }
   
});
export default recipesSlice;
