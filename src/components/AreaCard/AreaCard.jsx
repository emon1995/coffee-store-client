import coffee from "../../assets/1.png";
import high from "../../assets/2.png";
import pure from "../../assets/3.png";
import proper from "../../assets/4.png";

const AreaCard = () => {
  return (
    <div className="bg-[#ECEAE3] py-10 layout gap-8 justify-between main">
      <div>
        <img src={coffee} alt="coffee" />
        <h1 className="text-2xl">Awesome Aroma</h1>
        <p>
          You will definitely be a fan of the design <br /> & aroma of your
          coffee
        </p>
      </div>
      <div>
        <img src={high} alt="coffee" />
        <h1 className="text-2xl">High Quality</h1>
        <p>
          We served the coffee to you maintaining <br /> the best quality
        </p>
      </div>
      <div>
        <img src={pure} alt="coffee" />
        <h1 className="text-2xl">Pure Grades</h1>
        <p>
          The coffee is made of the green coffee <br /> beans which you will
          love
        </p>
      </div>
      <div>
        <img src={proper} alt="coffee" />
        <h1 className="text-2xl">Proper Roasting</h1>
        <p>
          Your coffee is brewed by first roasting <br /> the green coffee beans
        </p>
      </div>
    </div>
  );
};

export default AreaCard;
