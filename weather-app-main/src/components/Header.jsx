function Header({ logo }) {
  return (
    <header className="w-full p-4">
      <div className="flex justify-between items-center">
        <img src={logo} alt="logo" />
        <div>
          {" "}
          <button className="bg-blue-gray">Units</button>
          <div></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
