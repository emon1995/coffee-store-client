import cup1 from "../../assets/img/cup/Rectangle9.png";
import cup2 from "../../assets/img/cup/Rectangle10.png";
import cup3 from "../../assets/img/cup/Rectangle11.png";
import cup4 from "../../assets/img/cup/Rectangle12.png";
import cup5 from "../../assets/img/cup/Rectangle13.png";
import cup6 from "../../assets/img/cup/Rectangle14.png";
import cup7 from "../../assets/img/cup/Rectangle15.png";
import cup8 from "../../assets/img/cup/Rectangle16.png";

const Follow = () => {
  return (
    <div className="my-20 text-center">
      <h1>Follow Us Now</h1>
      <h1 className="text-4xl my-4">Follow on Instagram</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 main mt-10">
        <img src={cup1} alt="img" />
        <img src={cup2} alt="img" />
        <img src={cup3} alt="img" />
        <img src={cup4} alt="img" />
        <img src={cup5} alt="img" />
        <img src={cup6} alt="img" />
        <img src={cup7} alt="img" />
        <img src={cup8} alt="img" />
      </div>
    </div>
  );
};

export default Follow;
