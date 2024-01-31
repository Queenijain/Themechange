const ListItems = ({numbers, theme}) =>{
    return(
        <li className={theme?"list-group-item bg-dark text-light rounded-0" :"list-group-item rounded-0 bg-primary text-light"}>{numbers}
        <span className="float-end">
          <button className="btn btn-warning rounded-0">Edit</button>
          <button className="btn btn-danger rounded-0 ms-2">Delete</button>
        </span>    
        </li>
    )
}

export default ListItems;