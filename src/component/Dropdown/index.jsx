function Dropdown({clients}) {
    return(

        <>
            <select>
                {clients.map(client => <option value="hi">{client.name}</option>)}
            </select>
        </>

    )
}
export default Dropdown