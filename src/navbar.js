import logo1 from "./logo/logo.jpg"
const Navbar = () => {
    return ( 
        <div>
         
            <nav>
             <img className="logo" src={logo1} alt="logo"></img>
                <ul>
                    <li><a href="#" >Register</a></li>
                    <li><a href="#">Manage User</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </nav>
        
                <h1>New Battery</h1>
            </div>
    
          

     );
}
 
export default Navbar;
