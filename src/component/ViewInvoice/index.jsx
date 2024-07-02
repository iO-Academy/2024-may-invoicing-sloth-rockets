import { useParams } from "react-router-dom"
import ViewHeader from "../ViewHeader"

function ViewInvoice({}){
    const {id} = useParams()
    return(
        <>
        <ViewHeader id={id}/>
        </>
    )
}

export default ViewInvoice