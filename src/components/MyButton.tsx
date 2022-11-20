import {  button1 } from "../Classes/Tool";
import {  dev2  } from "../Classes/Worker";


interface Props {
  setY: React.Dispatch<React.SetStateAction<boolean>>;
  x: boolean;
  Chanchingx: any;
}

export const MyButton = ({  setY, x, Chanchingx }: Props) => {
  let miTexto3 = dev2.Working();

  let showButton = button1.Button(() => Chanchingx(), "myButtonTool");

  return (
    <>
      {showButton}
      {miTexto3}
    </>
  );
};
