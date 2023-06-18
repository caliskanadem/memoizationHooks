import { useState, useMemo } from "react";
import User from "./User";
// import { Header } from "./Header";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ridvan");
  console.log("Counter component re-render");

  const userData = useMemo(() => {
    return {
      id: 1,
      name,
    };
  }, [name]);

  return (
    <div>
      {/* <Header count={count < 5 ? count : 5} /> */}
      <User userData={userData} />
      <hr />
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Arttir</button>
      <hr />
      <button onClick={() => setName(name === "Ridvan" ? "Hatice" : "Ridvan")}>
        Set Name
      </button>
    </div>
  );
};

export default Counter;
