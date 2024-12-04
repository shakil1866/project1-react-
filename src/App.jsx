import  { useState } from "react";
import Menu from "./component/api"; 
import List from "./component/List"; 
import "./index.css"

const App = () => {
  const [data, setData] = useState(Menu);
console.log(data);

  return (
    <>
     <h1 style={{display: "flex", justifyContent: "center"}}>{data.length} Student</h1>
      <List data={data} /> {/* Pass the data to the List component */}

      <div style={{display: "flex", justifyContent: "center"}}><button  onClick={() => setData([])}>Clear Data</button></div>
       
    </>
  );
}
export default App