
import ReportProblemTwoToneIcon from '@mui/icons-material/ReportProblemTwoTone';

const Errors = ({message}:{message:string})=>{

    const stl = {
        color:'red',
    }
    return(<>
    <small style={stl}>
    {message}
    </small>
    <svg data-testid="ReportProblemTwoToneIcon"></svg>
    </>)

}
export default Errors;