import React, {useEffect, useState} from "react";

function App(){
    const [image, setImage] = useState(null);

    const fetchDog = useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>{return response.json()})
        .then((data)=>{
            //console.log(data);
            setImage(data.message);
            return data
        })
    }, [])

    if(!image) return(<p>Loading...</p>)

    return(
        <img src={image} alt="A Random Dog"></img>
    )
}

export default App;