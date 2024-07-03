function Bill({detail}){
    return(
        <div className="py-4 p pl-5 pr-0 grid grid-cols-5 md:grid-cols-6">
            <p className="col-span-2 md:col-span-3">{detail.description}</p>
            <p>{detail.quantity}</p>
            <p>{detail.rate}</p>
            <p>£{detail.total}</p>
        </div>
    )
}
export default Bill