import { useState } from "react"

function InvoiceRow({addDetails, minusDetails}) {
    const [quantity, setQuantity] = useState(0)
    const [rate, setRate] = useState(Number(0))

    function handleQuantity(e) {
        setQuantity(Number(e.target.value))

    }
    function handleRate(e) {
        setRate(Number(e.target.value))

    }
    
    return (
        <>
            <div className="grid grid-cols-4">
                <textarea className="border border-gray-300 m-2 p-2" placeholder='Description'></textarea>
                <input className="border border-gray-300 m-2 p-2 h-1/3" onChange={handleQuantity} type='number' min='1' max='100' placeholder='Quantity' step='1'></input>
                <input className="border border-gray-300 m-2 p-2 h-1/3" onChange={handleRate} type='number' min='1' max='100' placeholder='Rate' step='1'></input>

                <div className="grid grid-cols-2">
                    <p>£{parseFloat(parseFloat(quantity*rate).toFixed(2)).toLocaleString()}</p>

                    <button onClick={addDetails} className="p-2 m-1 text-white bg-green-600 rounded">+</button>

                    <span></span>
                    <button onClick={minusDetails} className="p-2 m-1 text-white bg-red-500 rounded">-</button>
                </div>
            </div>
        </>
    )
}

export default InvoiceRow