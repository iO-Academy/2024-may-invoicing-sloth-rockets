import moment from "moment"
import { useEffect, useState } from "react"

function ClientDropdown({ clients, selectedClient, setSelectedClient, storeClient }) {
    return (
        <>
            <select className="border-2 rounded p-2 text-gray-500 mt-6"
                onChange={(e) => storeClient(e.target.value)}>
                <option value="">Select from client list</option>
                {clients.map(client => <option key={client.id} value={client.id}>{client.name}</option>)}
            </select>
        </>
    )
}
export default ClientDropdown