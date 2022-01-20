import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [item, setItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterCategory = (category) => {
    if (category === "all") {
      setItem(items);
    } else {
      let newItem = items.filter((menuItem) => menuItem.category === category);
      setItem(newItem);
    }
  };

  return (
    <main className="section-center">
      <section id="menuContainer" className="section menu">
        <header className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </header>
        <Categories categories={categories} filterCategory={filterCategory}/>
        <div className="section-center">
          {item.map((menuItem) => {
            return <Menu key={menuItem.id} {...menuItem} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
