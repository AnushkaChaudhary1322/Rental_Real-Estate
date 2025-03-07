import { categories } from "../data";
import "../styles/Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <h1 className="h1">Top Property Categories</h1>
      <p className="p">
        View the most sought-after property types on Dreamlet
      </p>

      <div className="categories_list">
        {categories?.slice(1, 5).map((category, index) => (
          <Link to={`/properties/category/${category.label}`} className="link" key={index}>
            <div className="category card-hover" key={index}>
              <img src={category.img} alt={category.label} className="imageServices" />
              <div className="overlay"></div>
              <div className="category_text card-hover__content">
                <div className="category_text_icon">{category.icon}
                <p className="category_text_label">{category.label}</p></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
