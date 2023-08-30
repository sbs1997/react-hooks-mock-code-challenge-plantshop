import React, { useState } from "react";

function NewPlantForm({handleFormSubmit}) {
  const [newPlantName, setNewPlantName] = useState("")
  const [newPlantImage, setNewPlantImage] = useState("")
  const [newPlantPrice, setNewPlantPrice] = useState(0)
  const newPlant={
    name: newPlantName,
    image: newPlantImage,
    price: newPlantPrice,
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ (e)=>{
        e.preventDefault()
        handleFormSubmit(newPlant)
      }}>
        <input type="text" name="name" placeholder="Plant name" value={newPlantName} onChange={(e)=>setNewPlantName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={newPlantImage} onChange={(e)=>setNewPlantImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlantPrice} onChange={(e)=>setNewPlantPrice(e.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
