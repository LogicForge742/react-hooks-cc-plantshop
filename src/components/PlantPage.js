import React ,{useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const[plants,setPlants]=useState([])
  const[search,setSearch]=useState("")
  const[filteredPlants,setFilteredPlants]=useState([])

    useEffect(()=>{
      fetch("http://localhost:6001/plants")
      .then(res=>res.json())
      .then(data=> {setPlants(data)
        setFilteredPlants(data)
     } )
    },[])
    function handlingFormSubmit(newPlant){
      setPlants([...plants,newPlant])

      //update the filteredPlants as well
      if(newPlant.name.toLowerCase().includes(search.toLowerCase())){
        setFilteredPlants([...filteredPlants,newPlant])
      }
    }
    function handleSearch(e){
      const searchOn= e.target.value
      setSearch(searchOn)
      //filter the plants based on search
      //update the filteredPlants state
    
    const searchedPlants =plants.filter((plant) =>
        plant.name && plant.name.toLowerCase().includes(searchOn.toLowerCase())
  );
      setFilteredPlants(searchedPlants)
  
  }
  function handleDeletePlant(deletedPlantId){
    const updatedPlants=plants.filter((plant)=>plant.id !== deletedPlantId)
    setPlants(updatedPlants)
    const updatedFilteredPlants=filteredPlants.filter((plant)=>plant.id !== deletedPlantId)
    setFilteredPlants(updatedFilteredPlants)
  }
  

  return (
    <main>
      <NewPlantForm handlingFormSubmit ={handlingFormSubmit} />
      <Search handleSearch ={handleSearch}  />
      <PlantList filteredPlants={filteredPlants} handleDeletePlant ={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
