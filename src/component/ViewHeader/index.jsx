import { Link } from "react-router-dom"

function ViewHeader({id}) {
    return(
        <div className="w-full p-3 border-b">
            <span className="font-medium text-lg">Invoice <span className="text-gray-500">#</span>{id}</span>
            <Link to={"/"} className="float-right text-gray-500">X </Link>
        </div>
    )
}

export default ViewHeader