import { useRef } from "react";
import { Form } from "../Classes/Tool";


export const MyForm = () => {

   const firstRef: any = useRef("");
   const secondRef: any = useRef("");
   const thirdRef: any = useRef("");

   //
 const handleSubmit = (event: any) => {
    event.preventDefault();
let Name = event.target.name.value;
let Email = event.target.email.value;
let Psw = event.target.psw.value;

console.log(`data: ${Name} - ${Email} - ${Psw}`);

firstRef.current.value = "";
secondRef.current.value = "";
thirdRef.current.value = "";



 };


  let form1 = new Form("", "", "");

  let form2 = new Form("Submit", "", "");

  let myButton = form2.Button(null, "buttonFormSecondPage", "submit");

 let obj = [
   form1.Input("text", "inputForm1", "Text your name..", "name", firstRef ),
   form1.Input("email", "inputForm2", "Text your email..", "email", secondRef ),
   form1.Input("password", "inputForm3", "Text your passord..", "psw", thirdRef ),
   myButton
 ];
//

//
  let form3 = new Form(
    "",
    obj.map((item: any, index) => <div key={index}>{item}</div>),
    "Form"
  );

  return (
    <>
    {form3.FormTag("myFormSecondPage", handleSubmit)}
  
    </>
  );

};

