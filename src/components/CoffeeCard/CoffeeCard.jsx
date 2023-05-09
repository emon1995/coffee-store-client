import { BiShow } from "react-icons/bi";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, handleDelete }) => {
  const { category, chef, details, name, photo, supplier, taste, _id } = coffee;

  return (
    <div className="flex justify-between items-center bg-[#F5F4F1] rounded-md p-7">
      <div>
        <img className="w-[185px]" src={photo} alt="img" />
      </div>
      <div>
        <h1>Name: {name}</h1>
        <h1>Chef: {chef}</h1>
        <h1>Category: {category}</h1>
      </div>
      <div className="flex flex-col">
        <Link to={`/singleCoffee/${_id}`}>
          <button className="bg-[#D2B48C] p-2 rounded-md text-white mb-2">
            <BiShow />
          </button>
        </Link>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="bg-black p-2 rounded-md text-white mb-2">
            <MdModeEditOutline />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 p-2 rounded-md text-white mb-2"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
