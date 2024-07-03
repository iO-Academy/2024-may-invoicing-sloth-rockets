import { useState } from "react"

function Dropdown({clients}) {
    const [selectedClient, setSelectedClient] = useState('')

    return(

        <>
            <select className="border-2 rounded p-1 text-gray-500"
            onChange={e => setSelectedClient(e.target.value)}>
                
                <option value="">Select from client list</option>
                {clients.map(client => <option value={client.id}>{client.name}</option>)}
            </select>
        </>

    )
}
export default Dropdown