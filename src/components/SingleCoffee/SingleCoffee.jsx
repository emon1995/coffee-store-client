import { Link, useLoaderData } from "react-router-dom";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const SingleCoffee = () => {
  const loadCoffee = useLoaderData();

  const { category, chef, details, name, photo, supplier, taste } = loadCoffee;

  return (
    <div className="mx-48 bg-single mt-10">
      <Link to={`/`} className="layout">
        {" "}
        <HiOutlineArrowNarrowLeft /> Back To Home
      </Link>
      <div className="flex justify-center gap-20 items-center bg-[#F5F4F1] rounded-md p-7 my-20 ">
        <div>
          <img className="w-[585px]" src={photo} alt="img" />
        </div>
        <div>
          <h1>Name: {name}</h1>
          <h1>Chef: {chef}</h1>
          <h1>Supplier: {supplier}</h1>
          <h1>Taste: {taste}</h1>
          <h1>Category: {category}</h1>
          <h1>Details: {details}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
