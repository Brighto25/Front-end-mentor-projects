import "./App.css";
import Header from "./components/Header";
import UnitsToggle from "./components/UnitsToggle";

function App() {
  return (
    <>
      <Header logo="/assets/images/logo.svg"
       />
      <footer className="text-white fixed bottom-0 left-0 right-0 text-center text-sm p-4">
        Challenge by{" "}
        <a
          className="text-blue-500 underline"
          href="https://www.frontendmentor.io?ref=challenge"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="text-blue-500 underline" href="#">
          Bright Kwame Addaney
        </a>
        .
      </footer>
    </>
  );
}

export default App;
