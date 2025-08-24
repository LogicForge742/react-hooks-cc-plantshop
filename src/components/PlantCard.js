import React from "react";

function PlantCard({plant,handleDeletePlant}) {
  const{ id,name,price,image}=plant
  const[inStock,setInStock]=React.useState(true)
  
  function handleStock(){
    setInStock((inStock)=>!inStock)
  }
  function handleDelete(){
fetch (`http://localhost:6001/plants/${id}`,{
  method:"DELETE"
})
.then(res=>res.json())
  .then(deletedPlantID => {
    // If API returned an object with id, use it; otherwise use the id you deleted
    if (deletedPlantID && deletedPlantID.id) {
      handleDeletePlant(deletedPlantID.id);
    } else {
      handleDeletePlant(id);
    }
    
  })
}
  return (
    <li className="card" data-testid="plant-item">
      <img src={ image ||"https://via.placeholder.com/400"} alt={name} />
      <h4>{ name}</h4>
      <p>Price: { price}</p>
      {inStock? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
