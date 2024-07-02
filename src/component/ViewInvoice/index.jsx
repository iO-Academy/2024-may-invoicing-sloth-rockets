import { useParams } from "react-router-dom"
import ViewHeader from "../ViewHeader"

function ViewInvoice({}){
    const {idName} = useParams()
    return(
        <>
        <ViewHeader idName={idName}/>
        </>
    )
}

export default ViewInvoice