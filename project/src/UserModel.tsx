export type User = {
    id?: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    address?: string,
    phone?: string,
}

export type Action = {
    type: string,
    data: User
}

const userReducer = (state: User, action: Action): User => {
    switch (action.type) {
        case 'CREATE':
            console.log('email',action.data.email,'password:',action.data.password,'id:',action.data.id);
            
            return {...state,email:action.data.email,password:action.data.password,id:action.data.id}
            
        case 'UPDATE':
            return {...state, ...action.data};
        default:
            return state;
    }
}
export default userReducer;


