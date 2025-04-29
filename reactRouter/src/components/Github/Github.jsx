import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

export default function GitHub() {

    const data = useLoaderData()
   // const [data, setData] = useState([]);
    // useEffect(()=> {
    //     fetch("https://api.github.com/users/Deeppatel-4032")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // }, [])
    return(
        <div className="bg-amber-500 py-3 px-11 text-center text-blue-100">Github followers : {data.followers}
            <img src={data.avatar_url} alt="git_img" width={300}/>
        </div>
    )
}

export const githubInfoLoder = async () => {
    const res = await fetch("https://api.github.com/users/Deeppatel-4032");
    return res.json();
}

