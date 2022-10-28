import React from 'react'
import './RecipeCard.css'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RecipeCard({recipe}) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }
  
    return (
        <div className='recipe_card'>
          <div>
            <div className='img_container'>
              <img alt='foodpic' src={recipe.image_url} />
            </div>
            <h3>{recipe.recipe_name}</h3>
          </div>
          <button onClick={handleClick}>See More</button>
        </div>
      );
    };


export default RecipeCard;