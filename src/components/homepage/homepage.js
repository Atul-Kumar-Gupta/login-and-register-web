import React from "react"
import "./homepage.css"
import { useHistory } from "react-router-dom"

const Homepage = () => {
    const history = useHistory();
    const token = localStorage.getItem('token');
    const userDetail = JSON.parse(localStorage.getItem('ud.detail'));
    if (token) {
        history.push("/")
    }
    const removeStorage = () => {
        localStorage.removeItem("ud.detail");
        localStorage.removeItem("token");
        history.push("/login")

    }
    return (
        <div className="homepage">
            <h1>{userDetail.firstName && userDetail.lastName ? 'Hello' + " " + userDetail.firstName + " " + userDetail.lastName : 'Hello Homepage'}</h1>
            <div className="button" onClick={() => removeStorage()} >Logout</div>
        </div>
    )
}

export default Homepage