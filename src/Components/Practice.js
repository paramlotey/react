import { useState } from "react";
import "../App.css";
function Practice() {
  // let a = 10;

  // console.log("hello world");

  // hooks
  // console.log(`Value of a is ${a}`);

  let [a, setA] = useState(10);

  let [name, setName] = useState("PARAM");

  let [color1, setColor1] = useState("black");
  let [color2, setColor2] = useState("black");

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  const Changecolor = () => {
    setColor1(
      `rgb(${Math.round(Math.random() * 256)},${Math.round(
        Math.random() * 256
      )},${Math.round(Math.random() * 256)})`
    );
    console.log(color1);
    // setColor2()
    setColor1(
      `rgb(${Math.round(Math.random() * 256)},${Math.round(
        Math.random() * 256
      )},${Math.round(Math.random() * 256)})`
    );
  };

  const Add = () => {
    if (a < 15) {
      setA(a + 1);
    }

    console.log("ADD", a);
  };

  function Change() {
    setName("John");
  }

  return (
    <>
      <h1 className="first text-center" style={{ backgroundColor: "black" }}>
        Hello{" "}
      </h1>
      <h1>World</h1>
      <p>lorem</p>
      <h1 onClick={Change}>{name}</h1>
      <h1>{a}</h1>
      <button className="btn btn-primary" onClick={Add}>
        Add
      </button>
      <button className="btn btn-danger" onClick={() => setA(a - 1)}>
        Subtract
      </button>

      <div className="div1" style={{ backgroundColor: color1 }}></div>
      <br></br>
      <div className="div2" style={{ backgroundColor: color1 }}></div>

      <button className="btn btn-warning" onClick={Changecolor}>
        Change Color
      </button>

      <form className="mb-5">
        <label htmlFor="email">Email Address:</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {email}
        <br />
        <label htmlFor="password">Password:</label> <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>

      <form className="mt-5">
        <label htmlFor="email">Email Address:</label>
        <br />
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <label htmlFor="password">Password:</label> <br />
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </form>
    </>
  );
}

export default Practice;
