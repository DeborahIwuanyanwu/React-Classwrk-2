// import styled from '@emotion/styled'

// const Form = () =>{
// return (
//     <Wrapper>
//         <FormInputs>
//         <FirstInputs> 
//         </FormInputs>
//     </Wrapper>
// )
// }

// export default Form

// const Wrapper = styled.div`
//     width: 100%;
//     height: 100vh;
//     background-color: white;
// `
// const FormInputs = styled.div`
//     width: 500px;
// `
// const FirstInputs = styled.div`
    
// `

import React, { useState } from 'react'

const Form = () => {
    const [FormData, setFormData] = useState({
        name: "",
        email: "",
        city: ""
    })
    const handleChange = (e) => {
// const name = e.target.name
// const value = e.target.value
const {name, value} =e.target

setFormData((prevData) =>({
    ...prevData,
    [name]: value
}))
console.log("here", FormData)
    } 
    const handleSubmit = (e) =>{
        e.preventDefault()
        // console.log("Submitted: ", formData)

        const {name, email, city} = FormData
        localStorage.setItem("userInfo", JSON.stringify ({name, email, city}))
        // navigate ("/useformdata")
    }
  return (
    <div>
        <h2>User Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type='text' 
                name='name'
                value={FormData.name}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Email: </label>
                <input type='email' 
                name='email'
                value={FormData.email}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>City: </label>
                <input type='text' 
                name='city'
                value={FormData.city}
                onChange={handleChange}
                />
            </div>
            
            <button type='submit'>Save</button>
        </form>
    </div>
  )
}

export default Form