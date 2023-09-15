// Button Click per Api call

export default function FetchData() {


    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        console.log("Data received:", data);
        return data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
  
    return {
      fetchData,
    };
  }



// In This Code continous a Api call page load per

// export default function FetchData() {
//     let todosPromise = FetchAPiData();
  
//     return {
//       todos: wrapPromise(todosPromise),
//     };
//   }
  
//   const FetchAPiData = async () => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//       const data = await response.json();
//       console.log("Data received:", data);
//       return data;
//     } catch (error) {
//       console.error(error);
//       throw error;
//     }
//   }
  
//   const wrapPromise = (promise) => {
//     let status = "pending";
//     let result = "";
//     let suspender = promise.then(
//       (res) => {
//         status = "success";
//         result = res;
//       },
//       (err) => {
//         status = "error";
//         result = err;
//       }
//     );
//     return {
//       read() {
//         if (status === "pending") {
//           throw suspender;
//         } else if (status === "error") {
//           throw result;
//         }
//         return result;
//       },
//     };
//   };
  