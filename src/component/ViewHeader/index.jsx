function ViewHeader({id}) {
    return(
        <div className="w-full p-3">
            <span className="font-medium text-lg">Invoice #{id}</span>
            <span className="float-right">X</span>
        </div>
    )
}

export default ViewHeader