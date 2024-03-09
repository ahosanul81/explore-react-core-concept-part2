export default function Friend({friend}){
    const {name, email} = friend
    return(
        <div style={{border: '2px solid green', borderRadius: '7px', marginBottom: '15px'}}>
            <h3>Name: {name}</h3>
            <h3>E-mail: {email}</h3>
        </div>
    )
}