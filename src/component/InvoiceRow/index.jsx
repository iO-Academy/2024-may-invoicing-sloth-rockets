import { useEffect, useState } from "react"

function InvoiceRow({ addDetails, minusDetails, setRowDetails, id }) {
    const [quantity, setQuantity] = useState(0)
    const [rate, setRate] = useState(Number(0))
    const [desc, setDesc] = useState('')

    function handleQuantity(e) {
        setQuantity(Number(e.target.value))
    }
    function handleRate(e) {
        setRate(Number(e.target.value))
    }
    function handleDesc(e) {
        setDesc(e.target.value)
    }

    useEffect(() => {
        let newDetails = {
            "quantity": quantity,
            "rate": rate,
            "total": quantity * rate,
            "description": desc
        }
        setRowDetails(newDetails, id)
    }, [quantity, rate, desc])

    return (
        <div className="grid grid-cols-4 border-t">
            <textarea className="border border-gray-300 m-2 p-2" onChange={handleDesc} placeholder='Description'></textarea>
            <input className="border border-gray-300 m-2 p-2 h-9" onChange={handleQuantity} type='number' min='1' max='100' placeholder='Quantity' step='1'></input>
            <div className="text-nowrap ">
                <span className="bg-[#EDEFF2] text-[#5F656C] m-2 mr-0 p-2 px-[0.8rem] rounded-l-sm border">£</span>
                <input className="border border-gray-300 p-2 m-2 ml-0 h-9 w-1/2 sm:w-3/5 " onChange={handleRate} type='number' min='1' max='100' placeholder='Rate' step='1'></input>
            </div>
            <div className="grid grid-cols-2">
                <p className="mt-2">£{parseFloat(parseFloat(quantity * rate).toFixed(2)).toLocaleString()}</p>
                <button onClick={addDetails} className="p-2 m-1 text-white bg-green-600 rounded">+</button>
                <span></span>
                <button onClick={minusDetails} className={`p-2 m-1 text-white ${id === 0 ? "bg-red-300" : "bg-red-500"} rounded`}>-</button>
            </div>
        </div>

    )
}

export default InvoiceRow