import React from "react";
import { useParams } from "react-router";

function User() {

    const {userId} = useParams()
    return(
        <div><h3 className="text-amber-950">User : {userId}</h3></div>
    )
}

export default User;