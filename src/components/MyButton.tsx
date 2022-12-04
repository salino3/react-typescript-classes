import {  button1 } from "../Classes/Tool";
import {  dev2  } from "../Classes/Worker";


interface Props {
  setY: React.Dispatch<React.SetStateAction<boolean>>;
  x: boolean;
  Changingx: any;
}

export const MyButton = ({ setY, x, Changingx }: Props) => {
  let miTexto3 = dev2.Working();

  let showButton = button1.Button(() => Changingx(), "myButtonTool");

  return (
    <>
      {showButton}
      {miTexto3}
    </>
  );
};
