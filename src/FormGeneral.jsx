import React from "react";

const FormGeneral = () => {
    const formHandler=(formData)=>{
        console.log(formData.get("fname"),"  ---",formData.get("lname"))
    }
  return (
    <div>
      FormGeneral{" "}
      <form action={formHandler}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname"  />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname"  />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormGeneral;
