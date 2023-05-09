import { Link } from "react-router-dom";
import vector from "../../assets/Vector.png";

const Coffee = () => {
  return (
    <div>
      <div className="text-center my-20">
        <h3>--- Sip & Savor ---</h3>
        <h1 className="text-4xl my-4">Our Popular Products</h1>
        <Link to={`/addCoffee`} className="">
          <button className="btn-main text-center hover:text-black layout mx-auto ">
            Add Coffee <img src={vector} alt="vector" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Coffee;
