import React from "react";

function NewPlantForm({handlingFormSubmit}) {
  const[name,setName]=React.useState("")
  const[image,setImage]=React.useState("")
  const[price,setPrice]=React.useState("")
  function handleSubmit(e){
    e.preventDefault();
    const formData={
      name:name,
      image:image,
      price:price
    }
    fetch("http://localhost:6001/plants",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    .then(res=>res.json())
    .then(data=>{
      handlingFormSubmit(data)
      setName("")
      setImage("")
      setPrice("")
    })
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
         name="name"
          placeholder="Plant name"
          value={name} 
          onChange={(e) =>setName(e.target.value)}/>

        <input type="text"
         name="image"
          placeholder="Image URL" 
          value={image}
          onChange={(e) =>setImage(e.target.value)}
           />
        <input type="number"
         name="price" 
         step="0.01"
          placeholder="Price"
          value={price} 
          onChange={(e) => setPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
