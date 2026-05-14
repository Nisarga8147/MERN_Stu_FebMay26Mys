import { useRef } from "react";
import { useState } from "react";

// Controlled & Uncontrolled components
const initialFormData = {
    username:"",
    bio:"",
    country:"",
    gender:"",
    agree:false
};
export function ControlledForm(){
    const [fromData,setFormData] = useState(initialFormData);
    
    //Uncontrolled file input
    const fileRef = useRef(null);
    function handleChange(event){
        const {name,value,checked,type} = event.target;
        setFormData((prevFormData)=>({
            ...prevFormData,
            [name]:type === "checkbox" ? checked : value,
        }));
    }
    // Form submit handler
    function handleSubmit(event){
        event.preventDefault();
        const uploadedFile = fileRef.current?.files?.[0] || null;
        const dubmittedData = {
            ...fromData,
            uploadedFileName : uploadedFile ? uploadedFile.name :"No file selected",
        };
        console.log("Submitted Form Data : ",submittedData);
        alert("Form submitted successfully");
    }

    //Reset form to initial state
    function handleReset(){
        setFormData(initialFormData);
        if(fileRef.current){
            fileRef.current.value = "";
        }
    }
    return(
        <section>
            <h2>Controlled Components</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="username" id="username" value={fromData.username} onChange={handleChange} 
                    placeholder="Enter username" /><br /> 
                    <textarea name="bio" id="bio" value={fromData.bio} onChange={handleChange}
                    placeholder="Write a short bio" /><br />
                    <select name="country" id="country" value={fromData.country} onChange={handleChange}>
                        <option value="">Select Country</option>
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="SouthAfrica">SouthAfrica</option>
                    </select>
                    <br />
                    <fieldset>
                        <legend>Gender</legend>
                        <label htmlFor="male">
                        <input type="radio" name="gender" id="male" value="Male"  checked={fromData.gender === "Male"}
                        onChange={handleChange}/>
                        Male</label>
                        <label htmlFor="female">
                        <input type="radio" name="gender" id="female" value="Female"  checked={fromData.gender === "Female"}
                        onChange={handleChange}/>
                        Female</label>
                    </fieldset>
                    <br />
                    <label htmlFor="agree">
                        <input type="checkbox" name="agree" id="agree" checked={fromData.agree} onChange={handleChange}/>
                        Accept terms </label>
                        <br />
                        <label htmlFor="resume">
                           Upload Resume
                        </label>
                        <input type="file" id="resume" ref={fileRef}/>
                        <br />
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                </div>
            </form>
            <hr />
            <h3>
                Live form data preview : 
            </h3>
            <p>Username : {fromData.username || "Not Entered"}</p>
            <p>Bio : {fromData.bio || "Not Entered"}</p>
            <p>Country : {fromData.country || "Not Entered"}</p>
            <p>Gender : {fromData.gender || "Not Selected"}</p>
            <p>Accepted terms? : {fromData.agree ? "Yes" : "No"}</p>
            <p>Selected file : {fileRef.current?.files?.[0]?.name || "No file selected"}
            </p>
        </section>
    );
}