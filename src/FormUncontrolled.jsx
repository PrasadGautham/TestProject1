import { useRef } from "react";

const FormUnControlled = () => {
  const fName = useRef();
  const lName = useRef();
  const formHandler = (e) => {
    e.preventDefault();
    console.log(fName.current.value, lName.current.value);
  };
  return (
    <div>
      FormUnControlled
      <form onSubmit={formHandler}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" ref={fName} />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" ref={lName} />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default FormUnControlled;
