import React, {useState, useEffect} from "react";
import axios from "axios";
import axiosWithAuth from "../utils/AxiosWithAuth";


const FriendsList = () => {
const [friends, setFriends]=useState([]);

useEffect(()=> {

    axiosWithAuth()
    .get('/friends')
    .then(res => {
        setFriends(res.data)
    })
    .catch(err => console.log(err))

}, [])
    
    return(
        <div>
            FRIENDS:
            {friends.map((friend) => (
            <div key={friend.id}>
                <h4>name: {friend.name}, age {friend.age}</h4>
            </div>))}
        </div>
    )
}

export default FriendsList 