import React, {useState} from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from '../../elements/RecipeCard';
import './RecipeContainer.css'


function RecipeContainer({recipes}) {
    const [search, setSearch] = useState("");

    const recipeDisplay = recipes
    .filter((recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    })
    .map((recipe, index) => {
        return <RecipeCard recipe={recipe}/>
    })




  return (

<section >
    <div className='searchcontainer'>
    
    <span className='search'>
      <BiSearchAlt2 size="2em" color="#DA7635" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a Recipe"
      />
    </span>
    </div>

<div className='recipeDisplay'>

{recipeDisplay ? recipeDisplay : <h2>No Recipes :(</h2>}

</div>

</section>


  )
}

export default RecipeContainer