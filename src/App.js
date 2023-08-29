import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommendation from "./Recommendation/Recommendation";
import Sidebar from "./Sidebars/Sidebar";
import products from "./db/data";
import Cards from "./components/Cards";
import Shop from "./pages/shop";

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    //Input Filter
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const filteredItems = products.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    //Radio Filters
    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    //Button Filters
    const handleClick = (event) => {
        setSelectedCategory(event.target.value);
    };

    function filteredData(products, selected, query) {
        let filteredProducts = products;

        // Filtering Input Items
        if (query) {
            filteredProducts = filteredItems;
        }

        // Applying selected filter
        if (selected) {
            filteredProducts = filteredProducts.filter(
                ({ category, color, company, newPrice, title }) =>
                category === selected ||
                color === selected ||
                company === selected ||
                newPrice === selected ||
                title === selected
            );
        }

        return filteredProducts.map(
            ({ img, title, star, reviews, prevPrice, newPrice }) => ( <
                Cards key = { Math.random() }
                img = { img }
                title = { title }
                star = { star }
                reviews = { reviews }
                prevPrice = { prevPrice }
                newPrice = { newPrice }
                />
            )
        );
    }

    const result = filteredData(products, selectedCategory, query);



    return ( <
        >
        <
        Router >
        <
        Sidebar handleChange = { handleChange }
        /> <
        Navigation query = { query }
        handleInputChange = { handleInputChange }
        />

        <
        Routes >
        <
        Route path = "/"
        element = { < Shop / > }
        /> <
        Route path = "/cart" / >
        <
        /Routes> <
        /Router> <
        />
    )
}

export default App;