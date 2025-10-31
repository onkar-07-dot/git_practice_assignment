import { useState } from "react";
function Counter() {
  const [data, setdata] = useState(10);

  const handleupdate = (amount) => {
    setdata(amount + data);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h3>{data}</h3>
      <button onClick={() => handleupdate(1)}>+</button>
      <button onClick={() => handleupdate(-1)}>-</button>
    </div>
  );
}

export default Counter;
  