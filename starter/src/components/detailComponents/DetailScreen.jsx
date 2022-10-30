import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios"; 
import DetailImg from "./DetailImg";
import './DetailScreen.css'

const DetailScreen = () => { 

  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const url = "https://recipes.devmountain.com";


  useEffect(() => {
    axios
      .get(`${url}/recipes/${id}`)
      .then((res) => {
      setRecipe(res.data);
    });
  }, []);



  return (
    <section>
     <DetailImg image={recipe.image_url} title={recipe.recipe_name}  />
     <div className="parentbox">
     <div className="recipeinfo">
     <div className="box1">
     <h2>Recipe</h2>
            <h4>Prep Time: {recipe.prep_time}</h4>
            <h4>Cook Time: {recipe.cook_time}</h4>
            <h4>Serves: {recipe.serves}</h4>
     <h2>Ingredients</h2>
            {recipe.ingredients && recipe.ingredients.map((ing, index) => {
              return <h4>{ing.quantity} {ing.ingredient}</h4>
            })}
  </div>

        <div className="box2">
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
        </div>
        </div>
    

            </section>

            
  );
};

export default DetailScreen;
