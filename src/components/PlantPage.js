import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(
    ()=>{
      fetch('http://localhost:6001/plants')
      .then(r=>r.json())
      .then(data=>setPlants(data))
    }, []
  )

  function handleFormSubmit(newPlant){
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers:{ 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(r=>r.json())
    .then(data=>{
      console.log(data)
      setPlants([...plants, data])
    })
  }

  function handlePriceChange(newPrice, id){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify({
        price: newPrice
      })
    })
    .then(r=>r.json())
    .then(data=>{
      setPlants(plants.map(
        (plant)=>{
          if (plant.id === id){
            return data
          }else{
            return plant
          }
        }
      ))
    })
  }

  function deletePlant(id){
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then(r=>r.json())
    .then(()=>{
      setPlants(plants.filter(
        (plant)=>{return plant.id!==id}
      ))
    })
  }

  const filteredPlants = plants.filter(
    (plant)=>{
      return plant.name.toLowerCase().includes(search.toLowerCase())
    }
  )

  return (
    <main>
      <NewPlantForm handleFormSubmit={handleFormSubmit}/>
      <Search setSearch={setSearch}/>
      <PlantList plants={filteredPlants} handlePriceChange={handlePriceChange} deletePlant={deletePlant}/>
    </main>
  );
}

export default PlantPage;
