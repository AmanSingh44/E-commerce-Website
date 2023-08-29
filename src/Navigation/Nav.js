import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import "./Nav.css"

const Nav = () => {
    return ( <
        nav >
        <
        div className = "nav-container" >
        <
        input type = "text"
        className = "search-input"
        placeholder = "Enter your Product Name" / >
        <
        /div> <
        div className = "profile-container" >
        <
        a href = "#" >
        <
        FiHeart className = 'nav-icons' / >
        <
        /a> <
        Link to = "/cart" >
        <
        AiOutlineShoppingCart className = 'nav-icons' / >
        <
        /Link> <
        a href = "#" >
        <
        AiOutlineUserAdd className = 'nav-icons' / >
        <
        /a> <
        /div> <
        /nav>
    )
}

export default Nav