import FirstComp from "./pages/firstComp";
import SecondComponent from "./pages/secondComp";
import Test from "./test";


function App(props) {
  const obj = {name: 'latifah',role: 'frontend'}
  const exp = 5
  return (
    <div className="App">
      <SecondComponent />
      {/* <h1>hello world </h1> */}
      {/* <Test men='' /> */}
      {/* <FirstComp experience={exp} person={obj} /> */}
    </div>
  );
}

export default App;
