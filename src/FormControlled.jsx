const FormControlled = () => {
    const formHandler=(e)=>
        {e.preventDefault()}
  return (
    <div>
      FormControlled
      <form onSubmit={formHandler}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" value="John" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" id="lname" name="lname" value="Doe" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default FormControlled
