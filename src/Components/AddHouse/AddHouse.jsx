import { useState } from "react";


export const AddHouse = () => {

  const [formData,setFormData]=useState({});
  const [data,setData]=useState([]);

  const handleChange=(e)=>{
    
    let {className,value,checked,type}=e.target;
    value=type ==="cheackbox"?checked:value
    setFormData({...formData,
    [className]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formData)
    axios.post('http://localhost:8080/houses', formData)
    .then(function (response) {
      console.log(response);
    })
    

    .catch(function (error) {
      console.log(error);
    });
  }
  
  
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input onChange={handleChange} type="text" name="name" className="name"  required />
        <br />
        <label>ownerName</label>
        <input onChange={handleChange}   type="text" name="Ownersname" className="ownerName" required />
        <br />
        <label>address</label>
        <input onChange={handleChange}   type="text" name="Address" className="address" required />
        <br />
        <label>areaCode</label>
        <input onChange={handleChange}   type="text" name="Areacode" className="areaCode" required />
        <br />
        <label>rent</label>
        <input onChange={handleChange}  type="text" name="rent" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input onChange={handleChange}  name="preferredtenants" type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input checked={""} name="preferredtenants" type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input onChange={handleChange}   name="image" type="text" className="image" required />
        <br />
        <input onChange={handleChange}  className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
