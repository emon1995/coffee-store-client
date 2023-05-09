import { Link } from "react-router-dom";
import vector from "../../assets/Vector.png";
import { useEffect, useState } from "react";
import CoffeeCard from "../CoffeeCard/CoffeeCard";

const Coffee = () => {
  const [coffees, setCoffees] = useState([]);
  const [control, setControl] = useState(false);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/coffees/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setControl(!control);
      });
  };

  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, [control]);

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
      <div className="mx-48 grid grid-cols-1 md:grid-cols-2 gap-8 bg-coffee">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            handleDelete={handleDelete}
            coffee={coffee}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
