import { AiFillStar } from "react-icons/ai"
import { BsFillBagHeartFill } from "react-icons/bs"

import "./Products.css"

const Products = () => {
    return ( <
        >
        <
        section className = "card-container" >
        <
        section className = "card" >
        <
        img src = "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
        className = "card-img"
        alt = "Shoe" / >
        <
        div className = "card-details" >
        <
        h3 className = "card-title" > Shoe < /h3> <
        section className = "card-reviews" >
        <
        AiFillStar className = "rating-stars" / >
        <
        AiFillStar className = "rating-stars" / >
        <
        AiFillStar className = "rating-stars" / >
        <
        AiFillStar className = "rating-stars" / >
        <
        span className = "total-reviews" > 4 < /span> <
        /section> <
        section className = "card-price" >
        <
        div className = "price" >
        <
        del > $250 < /del> $150 <
        /div> <
        div className = "bag" >
        <
        BsFillBagHeartFill className = "bag-icon" / >
        <
        /div> <
        /section> <
        /div> <
        /section> <
        /section> <
        />
    )
}

export default Products