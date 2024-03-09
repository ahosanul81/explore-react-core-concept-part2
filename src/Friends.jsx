import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends(){
    // 1. declare state to hold data
    const [friends, setFriends] = useState([])
    // 2. useEffect with call back and dependency array
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return(
        <div style={{border: '2px solid purple', borderRadius: '7px', marginBottom: '15px', padding: '20px'}}>
            <h1>Friends: {friends.length}</h1>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}