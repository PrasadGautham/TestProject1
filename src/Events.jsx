const Events=()=>{
    const buttonHandler=(e,a)=>{alert(a)}
    const changeHandler=(e)=>{alert(e.target.value)}
    return <>
    <h1>Events</h1>
    <button onClick={(e)=>{buttonHandler(e,5)}}>Click here</button>
    <br/>
    <input type="text"  onChange={changeHandler}/>
    </>
}
export default Events