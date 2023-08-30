import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, handlePriceChange, deletePlant}) {
  return (
    <ul className="cards">
      {plants.map(
        (plant)=>{
          return <PlantCard key={plant.id} plant={plant} handlePriceChange={handlePriceChange} deletePlant={deletePlant}/>
        }
      )}
    </ul>
  );
}

export default PlantList;
