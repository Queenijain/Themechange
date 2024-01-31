import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { useState } from "react";

const App = () => {

  let numbers = [1, 2, 3, 4, 5];
  // let theme = false;

  const [theme, setTheme] = useState(false);
  const changeTheme = () => {
    if (theme) {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }
  return (
    <>
      <Navbar theme={theme} changeTheme={changeTheme} />
      <div className="container p-5">
        <Form theme={theme}/>
        <ListGroup numbers={numbers} theme={theme} />
      </div>

    </>
  )
}

export default App;
