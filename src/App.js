import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function App() {
  const [categories, setCategories] = useState([""]);

  return (
    <div>
      <h2>GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => {
          return <GifGrid key={category} category={category} />;
        })}
      </ol>
    </div>
  );
}

export default App;
