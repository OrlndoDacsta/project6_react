import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link style={{ textDecoration: "none" }} to={"/"}>
                <h2>Home</h2>
            </Link >

            <Link style={{ textDecoration: "none" }} to={"/login"}>
                <h2>Login</h2>
            </Link >
        </div>
    );
};

export default Navbar;