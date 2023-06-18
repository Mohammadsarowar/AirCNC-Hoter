import React from "react";
import Container from "../shared/Containr";
import { categories } from "../Categories/CategoriesData";
import CategoriesBox from "./CategoriesBox";
const Categories = () => {
  return (
    <Container> 
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoriesBox key={item.label} label={item.label} icon={item.icon}></CategoriesBox>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
