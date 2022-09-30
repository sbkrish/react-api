import React from 'react';
import './RecipeTile.css'

export default function RecipeTile({recipe}) {
  return (
    recipe["recipe"]["image"].match(("https?:.*.(?:png|jpeg|jpg)")) 
    != null && (
    <div className='recipeTile'>
      <img className='recipeTile__img' src={recipe["recipe"]["image"]} alt=""/>
      <p className='recipeTile__name'>{recipe["recipe"]["label"]}</p>
    </div>
  )
)}
