
export type RecipeType = {
    id?:number,
    title: string,
    description: string,
    autherId?:number,
    ingredients:string[],
    instructions:string
}