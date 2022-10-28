import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {Routes, Route} from 'react-router-dom';
import HomeScreen from './components/homeComponents/HomeScreen'
import NewRecipe from './components/newRecipeComponents/NewRecipeScreen'
import DetailScreen from './components/detailComponents/DetailScreen'


function App() {
  return (
    <div className="App">
      <Header />
   <Routes>
      <Route index element={<HomeScreen />}/>
      <Route path='new-recipe' element={<NewRecipe />} />
      <Route path='recipe/:id' element={<DetailScreen />} />
   </Routes>
      <Footer />
    </div>
  );
}

export default App;
