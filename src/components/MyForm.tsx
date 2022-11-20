import { Form } from "../Classes/Tool";


export const MyForm = () => {

 const handleSubmit = (event: any) => {
    event.preventDefault();
let Name = event.target.name.value;
let Email = event.target.email.value;
let Psw = event.target.psw.value;

console.log(`data: ${Name} - ${Email} - ${Psw}`)

 };


  let form1 = new Form("", "", "");

  let form2 = new Form("Submit", "", "");

  let myButton = form2.Button(null, "buttonFormSecondPage", "submit");

 let obj = [
   form1.Input("text", "inputForm1", "Text your name..", "name"),
   form1.Input("email", "inputForm2", "Text your email..", "email"),
   form1.Input("password", "inputForm3", "Text your passord..", "psw"),
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

