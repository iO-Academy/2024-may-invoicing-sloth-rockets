import { Link } from "react-router-dom"

function ViewInvoiceHeader({ idName }) {
    return (
        <div className="w-full p-3 border-b">
            <span className="font-medium text-lg">Invoice <span className="text-gray-500">#</span>{idName}</span>
            <Link to={"/"} className=" text-gray-500 float-right">X </Link>
        </div>
    )
}

export default ViewInvoiceHeader