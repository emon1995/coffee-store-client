import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex justify-center items-center bg-hero">
      <img src={logo} alt="logo" />
      <h1 className="text-6xl text-white">Espresso Emporium</h1>
    </div>
  );
};

export default Header;
