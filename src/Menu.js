import React from "react";
import { Link } from "react-router-dom";


const Menu = () => {

    return (

        <div className="p2">
            <Link to="/" style={{
                display: "flex",
                justifyContent: "center"
            }} >About Us</Link>

            <Link to="/contact"
                style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                Contact Us</Link>
        </div>
    );
}
export default Menu;