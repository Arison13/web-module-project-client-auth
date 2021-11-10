import React, {useEffect} from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "../utils/AxiosWithAuth";

const Logout = () => {
    const {push} = useHistory();
    
    useEffect(()=> {
        const token = localStorage.getItem("token");
        axiosWithAuth()
            .post('/logout')
            .then(resp => {
                localStorage.removeItem('token');
                push('/login');
            });
    }, []);
    
    return(
        <div>
            <h2>Logout</h2>
        </div>
    )
}

export default Logout