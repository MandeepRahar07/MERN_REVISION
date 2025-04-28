import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const GotoProduct = () => {
    navigate("/product");
  };

  return (
    <header>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li onClick={GotoProduct} style={{ cursor: "pointer" }}>Product</li>
          <li onClick={()=> navigate("/cropdata")} style={{cursor : "pointer"}}>Cropdata</li>
          <li onClick={()=> navigate('/book')}>Book Ka data</li>
          <li onClick={()=> navigate('/addcropm')}>crop ka dataaa</li>
          <li onClick={()=> navigate('/counterapp')}>Counter APP</li>
          <li onClick={()=> navigate("/timerapp")}> Timer APPlication</li>
          <li onClick={()=> navigate("/todo")}>Todo app with redux</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
