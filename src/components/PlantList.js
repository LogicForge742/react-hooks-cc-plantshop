import React from "react";
import PlantCard from "./PlantCard";

function PlantList({filteredPlants =[] , handleDeletePlant}) {
  return (
    <ul className="cards">
      {filteredPlants.map((plant) =>{
        return <PlantCard key={plant.id} plant={plant}
        handleDeletePlant ={handleDeletePlant} />
      })}</ul>
  );
}

export default PlantList;
