import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

const UpdateCoffee = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  //   console.log(watch("name"));

  return (
    <div className="bg-add h-screen px-48 mt-20 color">
      <Link to={`/`} className="layout">
        {" "}
        <HiOutlineArrowNarrowLeft /> Back To Home
      </Link>
      <div className="bg-[#F4F3F0] rounded-md px-20 py-14 mt-10 ">
        <h1 className="text-center text-4xl">
          Update Existing Coffee Details{" "}
        </h1>
        <p className="text-center">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at <br /> its layout. The
          point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed <br /> to using Content here.
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            <div>
              <label htmlFor="name">Name</label>
              <br />
              <input
                {...register("name", { required: true })}
                placeholder="Enter coffee name"
                className="w-full p-2 rounded"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="chef">Chef</label>
              <br />
              <input
                {...register("chef", { required: true })}
                placeholder="Enter coffee chef"
                className="w-full p-2 rounded"
              />
              {errors.chef && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="name">Supplier</label>
              <br />
              <input
                {...register("supplier", { required: true })}
                placeholder="Enter coffee supplier"
                className="w-full p-2 rounded"
              />
              {errors.supplier && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="chef">Taste</label>
              <br />
              <input
                {...register("taste", { required: true })}
                placeholder="Enter coffee taste"
                className="w-full p-2 rounded"
              />
              {errors.taste && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="name">Category</label>
              <br />
              <input
                {...register("category", { required: true })}
                placeholder="Enter coffee category"
                className="w-full p-2 rounded"
              />
              {errors.category && <span>This field is required</span>}
            </div>
            <div>
              <label htmlFor="chef">Details</label>
              <br />
              <input
                {...register("details", { required: true })}
                placeholder="Enter coffee details"
                className="w-full p-2 rounded"
              />
              {errors.details && <span>This field is required</span>}
            </div>
          </div>
          <div>
            <label htmlFor="chef">Photo</label>
            <br />
            <input
              {...register("photo", { required: true })}
              placeholder="Enter coffee Photo"
              className="w-full p-2 rounded"
            />
            {errors.Photo && <span>This field is required</span>}
          </div>
          <input
            className="btn-main cursor-pointer hover:text-black w-full mt-4"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
