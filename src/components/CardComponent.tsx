import { useState } from "react";
import { dev2 } from "../Classes/Worker";
import { MyButton } from "./MyButton";



export const CardComponent = () => {
  const [first, setFirst] = useState(true);

  const Changing = () => {
    setFirst(!first);

    dev2.Change(first);
  };

  let myText2 = dev2.Working();
  return (
    <>
      <MyButton
        setY={setFirst}
        x={first}
        Changingx={Changing}
      />

      <div className="divMyComponent">{myText2}</div>
    </>
  );
};