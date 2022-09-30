import './App.css';
import {YOUR_APP_ID, YOUR_APP_KEY} from './key';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  let url = `https://api.edamam.com/api/recipes/v2?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&type=public`

  async function getRecipe() {
    let result = await Axios.get(url);
    setRecipes(result.data.hits)
    console.log(result);
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    getRecipe();
  }
  return (
    <div className="app">
      <h1>🐕 NAASI Food Court 🍔</h1>
      <form onSubmit={handleSubmit} className="app__searchForm">
        <input type="text" className='app__input' placeholder="What do you need Naasi?" onChange={handleChange} />
        <input type="submit" className='app__submit' value="Search" />
      </form>
      <div className='app__recipes'>
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
