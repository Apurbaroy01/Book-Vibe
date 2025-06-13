import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="flex justify-between text-xl px-8 py-3 border-b-1 border-amber-500">
            <div className="text-3xl font-bold">
              <Link to="/">Boi-Poka</Link>
                
            </div>
            <div className="space-x-5">
              <NavLink to="/DashBoard">Home</NavLink>
              <NavLink to="/listedBooks">Listed Books</NavLink>
              <NavLink to="/otiy">Pages to Read</NavLink>
                
            </div>



            <div className="flex space-x-5">
              <div className=" btn bg-[#23BE0A] rounded text-white">
                <Link to="/">Sign In</Link>
              </div>
              <div className="btn bg-[#59C6D2] rounded text-white">
                <Link to="/">Sign Up</Link>
              </div>
              
            </div>
            
        </nav>
    );
};

export default Navbar;