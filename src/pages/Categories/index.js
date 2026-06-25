import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/useStore";

import "./index.css";

const categories = [
  {
    id: 1,
    name: "Action",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400",
    color: "#ff5200",
  },
  {
    id: 2,
    name: "Drama",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
    color: "#d7aefb",
  },
  {
    id: 3,
    name: "Romance",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400",
    color: "#2fb000",
  },
  {
    id: 4,
    name: "Thriller",
    image:
      "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=400",
    color: "#87cefa",
  },
  {
    id: 5,
    name: "Comedy",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400",
    color: "#d35400",
  },
  {
    id: 6,
    name: "Horror",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI1jlUddB9bemB39XcePzeAhSMtqHMIkTvqvGLLKHUAw&s=10",
    color: "#7059ff",
  },
  {
    id: 7,
    name: "Fantasy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgJ8kCZyvmvpTjrRQhXXEoJchkmSYU3jbK31_JcY3LA&s=10",
    color: "#ff42d0",
  },
  {
    id: 8,
    name: "Music",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF6Ik580ey3n4SmlA0pQPKpG2TOVBEX3zXRknUhIEP8A&s=10",
    color: "#ff1f3d",
  },
  {
    id: 9,
    name: "Sports",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zOJ-HU-zlQ0f0ILE38nVMiJhj7GVPPGDCtwZuwFtulKDAC8uCCOQu7nI&s=10",
    color: "#ff1f3d",
  },
];


  

const Category = () => {
  const navigate = useNavigate();

  const setCategories = useStore(
    (state) => state.setCategories
  );

  console.log("setCategories function:", setCategories); // Debugging line

  const [selected, setSelected] = useState([]);

  const handleSelect = (name) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((item) => item !== name));
    } else {
      setSelected([...selected, name]);
    }
  };

  const handleNext = () => {
    setCategories(selected);
    navigate("/dashboard");
  };

  return (
    <div className="category-page">
      <div className="left-section2">
        <h1 className="logo">Super app</h1>

        <h2>
          Choose your
          <br />
          entertainment
          <br />
          category
        </h2>

        <div className="selected-tags">
          {selected.map((item) => (
            <div className="tag" key={item}>
              {item}
            </div>
          ))}
        </div>

        {selected.length < 3 && (
          <p className="error">
            ⚠ Minimum 3 category required
          </p>
        )}
      </div>

      <div className="right-section2">
        <div className="grid">
          {categories.map((item) => (
            <div
              key={item.id}
              className={`card ${
                selected.includes(item.name) ? "active" : ""
              }`}
              style={{ background: item.color }}
              onClick={() => handleSelect(item.name)}
            >
              <h3>{item.name}</h3>

              <img src={item.image} alt={item.name} />
            </div>
          ))}
        </div>

        <button
          type="button"
          disabled={selected.length < 3}
          onClick={handleNext}
        >
          Next Page
        </button>
        {/* <button type="submit" disabled={selected.length < 3} onClick={() => navigate("/dashboard")}>
          Next Page
        </button> */}
      </div>
    </div>
  );
};

export default Category;

