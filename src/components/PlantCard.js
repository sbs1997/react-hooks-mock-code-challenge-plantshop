import React, { useState } from "react";

function PlantCard({plant, handlePriceChange, deletePlant}) {
  const {id, name, image, price} = plant
  const [inStock, setInStock] = useState(true)
  const [editingPrice, setEditingPrice] = useState(false)
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      {/* price button  */}
      {editingPrice ? (
        <input type="number" name="price" step="0.01" placeholder="Price" defaultValue={price} onBlur={(e)=>{
          console.log("we're blurrin")
          handlePriceChange(e.target.value, id)
          setEditingPrice(false)
        }}/>
      )
      :(
        <p onClick={
          (e)=>{
            setEditingPrice(true)
          }
        }>Price: {price}</p>
      )}
      {/* in stock button */}
      {inStock ? (
        <button className="primary" onClick={()=>setInStock(!inStock)}>In Stock</button>
      ) : (
        <button onClick={()=>setInStock(!inStock)}>Out of Stock</button>
      )}
      {/* delete button  */}
      <button onClick={()=>deletePlant(id)}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
