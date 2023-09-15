import React, { Suspense,useState } from "react";
import FetchData from "./ApiIntegration"; // Correct path to your API file

function Appintegreate() {
    const [isLoading, setIsLoading] = useState(false);
    const [todos, setTodos] = useState([]);

    // console.log(todos)
  
    const handleFetchData = async () => {
      setIsLoading(true);
      try {
        const data = await FetchData().fetchData();
        setTodos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    return (
      <div>
        <h1>Data from Api</h1>
        <button onClick={()=>handleFetchData()}>
          {isLoading ? "Fetching..." : "Fetch Data"}
        </button>
  
        <Suspense fallback={<div>Loading...</div>}>
          <ApiIntegration todos={todos} />
        </Suspense>
      </div>
    );
  }
  
  function ApiIntegration({todos}) {
    // console.log(todos)
    return (
      <div>
        {todos.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Appintegreate;



// In This Code continous a Api call page load per

// import React, { Suspense } from "react";
// import FetchData from "./ApiIntegration"; // Correct path to your API file

// function Appintegreate() {
//   return (
//     <div>
//       <h1>Data from API</h1>
//       <Suspense fallback={<div>Loading...</div>}>
//         <ApiIntegration />
//       </Suspense>
//     </div>
//   );
// }

// function ApiIntegration() {
//   const todos = FetchData().todos;

//   return (
//     <div>
//       {todos.read().map((item) => (
//         <div key={item.id}>
//           <p>{item.title}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Appintegreate;