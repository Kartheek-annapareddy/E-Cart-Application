function addcartaction(data){
    return(
        {
            type:data.id,
            payload:data
        }
    )
}
export default addcartaction;