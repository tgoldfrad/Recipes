import { useContext } from "react"
import { Link } from "react-router"

import { Box } from "@mui/material"
import { UserContext } from "./Start"

const NavBar = () => {
    const [user, func] = useContext(UserContext)
    const styleLink = {
        textDecoration: 'none',
        color: 'inherit',
        fontSize: '16px',
        
    }
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
               
                <Link to='/about' style={styleLink}>About</Link> |
                <Link to='/recipes' style={styleLink}> recipes list </Link>
                {user.email &&( <Link to={`/recipes/add`} style={styleLink}> | add recipe </Link>)}
            </nav>
        </Box>

    </>)
}

export default NavBar