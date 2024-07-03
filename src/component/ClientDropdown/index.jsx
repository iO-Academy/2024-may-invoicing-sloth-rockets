import moment from "moment"
import { useEffect, useState } from "react"

function ClientDropdown({clients}) {
    const [selectedClient, setSelectedClient] = useState('')

    function storeClient(e) {
        setSelectedClient(e.target.value)
        console.log(clients[e.target.value])
    }
    
    return(

        <>
            <select className="border-2 rounded p-1 text-gray-500"
            onChange={storeClient}>
                
                <option value="">Select from client list</option>

                {clients.map(client => <option key={client.id} value={client.id}>{client.name}</option>)}
            </select>
        </>

    )
}
export default ClientDropdown