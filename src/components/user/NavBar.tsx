import { useContext } from "react"
import { Link } from "react-router"

import { Box } from "@mui/material"
import { UserContext } from "./Start"

const NavBar = () => {
    const [user, func] = useContext(UserContext)
    
    return (<>
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                padding: 2,
                zIndex: 1,
            }}
        >

            <nav >
                {/* <Link to='/home'>HomePage</Link> | */}
                <Link to='/recipes'>recipes list</Link> |
                <Link to={`/loggedin/${user.firstName}`}>User</Link>|
                {user.email && user.password && <Link to={`/add`}>add recipe</Link>}
            </nav>
        </Box>

    </>)
}

export default NavBar