import { useEffect, useState } from "react"

export default function AllUsers(){
    // 1. declare a state to hold the data
    const [user, setUser] = useState([])
    // 2. useEffect with call back and dependency array
    useEffect( () => {
    // 3. use fetch to load data
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data)) // 4. set loaded a data to fetch
    }, [])
    return (
        <div style={{border: '2px solid purple', borderRadius: '7px', marginBottom: '15px'}}>
            <h3>Users: {user.length}</h3>
        </div>
    )
}