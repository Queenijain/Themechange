import ListItems from "./ListItems";
const ListGroup = ({ numbers , theme }) => {

    return (
        <ul className="list-group my-2">
            {
                numbers.map((number, index) => {
                    return <ListItems key={index} theme={theme} numbers={number} />
                })
            }
        </ul>
    )
}
export default ListGroup;