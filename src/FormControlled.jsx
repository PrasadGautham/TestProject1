import { useState } from "react";

const FormControlled = () => {
  const [form, setForm] = useState({ fname: "initF", lname: "initL" });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      FormControlled
      <form onSubmit={formHandler}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          onChange={changeHandler}
          name="fname"
          value={form.fname}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          onChange={changeHandler}
          value={form.lname}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default FormControlled;
