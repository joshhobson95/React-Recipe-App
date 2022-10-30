import React, {useState} from "react";
import {Formik} from 'formik'
import axios from "axios";
import './NewRecipeScreen.css'

const NewRecipeScreen = () => {


const [ingredients, setIngredients] = useState([]);
const [name, setName] = useState('')
const [quantity, setQuantity] = useState('')

const addIngredient = () => {
setIngredients([...ingredients, {name, quantity}])
setName('')
setQuantity('')
}

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
};

const onSubmit = (values, {resetForm}) => {
  values.ingredients = ingredients

  axios.post(`https://recipes.devmountain.com/recipes`, values)
  .then((res) =>{
    console.log(res.data)
    
  })
  .catch((err) => {
    console.log(err)
  })
 resetForm({values: ""})
}




const ingredientsDisplay = ingredients.map((ing) => {
  return (
    <li>
      {ing.quantity} {ing.name}
    </li>
  )
});





  return (
    
    <section className="section">
      <h3 className="h3h3">Tell us about your Recipe!</h3>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (

      

        <form onSubmit={handleSubmit} className='form'>

          <div className="name" >
        <input type="text" name="recipeName" placeholder="Recipe Name" value={values.recipeName} onChange={handleChange}/>
        <input type="text" name="imageURL" placeholder="Image URL" value={values.imageURL} onChange={handleChange}/>
          </div>

          <div className="radio">
        <input type="radio" id="Cook" />
        <label for="Cook">Cook</label>
        <input type="radio" id="Bake"/>
        <label for="Bake">Bake</label>
        <input type="radio" id="Drink"/>
        <label for="Drink">Drink</label>
         </div>

         <div className="prep">
        <input type="text" name="prepTime" placeholder="Prep Time"  value={values.prepTime} onChange={handleChange}/>
        <input type="text" name="cookTime" placeholder="Cook Time" value={values.cookTime} onChange={handleChange}/>
        <input type="text" name="serves" placeholder="Serves" value={values.serves} onChange={handleChange}/>
        </div>

          <div className="ingredients">
        <input type="text" name="ingredient" placeholder="Ingredients" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="quantity" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>

             <ul>{ingredientsDisplay}</ul>
        <button type="button" onClick={addIngredient}>Add Another</button>

        </div>
        
        
       


          <div className="textarea">
        <textarea 
        placeholder="What are the Instructions?"
        rows={5}
        value={values.instructions}
        onChange={handleChange}
        name="instructions"
         />
        </div>

      <button type="submit" >Save</button>

          
        </form>
        )}
        </Formik>
        
    </section>
  );
};

export default NewRecipeScreen;
