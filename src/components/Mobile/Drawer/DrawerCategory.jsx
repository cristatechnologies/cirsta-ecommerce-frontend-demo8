import { useState } from "react";
import DrawerCategoryItem from "./DrawerCategoryItem";
import DrawerSubCategory from "./DrawerSubCategory";

function DrawerCategory({categoryList,action}) {
    const [expandedItem, setExpandedItem] = useState(null);
    
    const toggleSubcategories = (index) => {
      if (expandedItem === index) {
        setExpandedItem(null); // Collapse if already expanded
      } else {
        setExpandedItem(index); // Expand the clicked item
      }
    };
  
  return (
    <ul className="categories-list">
      {categoryList &&
        categoryList.map((item, i) => (
          <li key={i} className="category-item">
            <DrawerCategoryItem item={item} i={i} toggleSubcategories={()=>toggleSubcategories(i)} expandedItem={expandedItem} action={action}/>
            {expandedItem === i && item.active_sub_categories && (
                <DrawerSubCategory item={item} action={action}/>
            )}
          </li>
        ))}
    </ul>
  );
}

export default DrawerCategory;
