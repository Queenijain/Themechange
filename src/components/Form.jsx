const Form = ({theme}) =>{
    return(
        <form className="my-3">
        <input type="text" placeholder="Enter Text Here..." className="form-control rounded-0" />
        <button className={theme?"btn btn-dark text-light rounded-0 w-100 my-3" : "btn btn-primary text-light rounded-0 w-100 my-3"}>Save</button>
      </form>
    )
}
export default Form;