import "./App.css";
import IronhackLogo from "./ironhack-logo.svg";
import MenuTop from "./menu-top.svg";
import reactLogo from "./react-logo.svg";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";

function App() {
  return (
    <div>
      <section className="firstPage">
        <div className="NavBar">
          <img src={IronhackLogo} />
          <img src={MenuTop} />
        </div>
        <img className="imgReact" src={reactLogo} />
        <div>
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
      </section>

      <section className="secondPage">
        <div>
          <img src={icon1} />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>

        <div>
          <img src={icon2} />
          <h2>Components</h2>
          <p>Build encapsulated compnents that manage their state.</p>
        </div>

        <div>
          <img src={icon3} />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's</p>
        </div>

        <div>
          <img src={icon4} />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
