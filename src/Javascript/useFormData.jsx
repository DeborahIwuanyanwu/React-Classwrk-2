import React, { useEffect, useState} from 'react'

const UseFormData = () =>{
    const [userData, setUserData] = useState<any> ("")
        useEffect(()=>{

            const savedData = localStorage.getItem ("userInfo")
            console.log(savedData)

            if(savedData){
                setUserData(JSON.parse(saved))
            }
        }, [])
    console.log("userdata: ", userData)
    const handleClear = () =>{
        localStorage.removeItem("userinfo")
        setUserData("")
    }

    //destructuring the userData
    const {name, email} = userData

    return (
        <div>
            <h2>Stored User Data</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>City: </p>
            <button onClick={handleClear}>Clear Data</button>
        </div>
    )
}

export default UseFormData