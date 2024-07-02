import { useParams } from "react-router-dom"
import ViewHeader from "../ViewHeader"

function ViewInvoice({}){
    const {idName, id} = useParams()

    return(
        <>
        <ViewHeader idName={idName} />
        <p>{id}</p>
        </>
    )
}

export default ViewInvoice