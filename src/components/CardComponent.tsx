import { useState } from "react";
import { dev2 } from "../Classes/Worker";
import { MyButton } from "./MyButton";
import { Tool } from "../Classes/Tool";




export const CardComponent = () => {
  const [first, setFirst] = useState(true);

  const Changing = () => {
    setFirst(!first);

    dev2.Change(first);
  };

  let myText2 = dev2.Working();

  
  let div2 = new Tool("", myText2);

  let myDiv2 = div2.Div("divMyComponent");


  return (
    <>
      <MyButton
        setY={setFirst}
        x={first}
        Changingx={Changing}
      />

     {myDiv2}
    </>
  );
};