class Tool {
  protected text: string;
  protected container: any;
  constructor(text: string, container: any) {
    this.text = text;
    this.container = container;
  }

  Div(className?: string | undefined) {

    return <div className={className}>{this.container} </div>;
  }

  Button(
    oncl?: React.MouseEventHandler<HTMLButtonElement> | undefined | any,
    className?: string | undefined,
    type?: any
  ) {
    return (
      <button type={type} className={className} onClick={oncl}>
        {this.text}
      </button>
    );
  }
};

let button1 = new Tool("click here", "");

//
// Class Form
class Form extends Tool {
  protected text2: string;

  constructor(text: string, container: any, text2: string) {
    super(text, container);

    this.text2 = text2;
  }

  FormTag(
    className?: string | undefined,
    handleSubmit?: React.FormEventHandler<HTMLFormElement> | undefined
  ) {
    return (
      <form className={className} onSubmit={handleSubmit}>
        <h2>{this.text2}</h2>
        {this.container}
      </form>
    );
  }

  Input(
    type?: any,
    className?: string | undefined,
    pl?: string,
    name?: string,
    ref?: any,
    valueInput?: any
  ) {
    return (
      <input
        type={type}
        className={className}
        placeholder={pl}
        name={name}
        value={valueInput}
        ref={ref}
        required
      />
    );
  }
};


export { Tool, Form, button1 };