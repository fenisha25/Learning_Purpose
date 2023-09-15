export function FetchData(){
    
    let namePromise = FetchName();
    let addressPromise = FetchAddress();

    return{
        address:wrapPromise(addressPromise),
        name:wrapPromise(namePromise)
    }

}

const FetchName = ()=>{
    return  new Promise((resolve,reject)=>{
      setTimeout(()=>{
        const name = "Fenisha"
          resolve(name)
      },4000)
  });
  }

  const FetchAddress =()=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
          resolve("101 Iskon Cross Road")
      },4000)
  });
  }

  
const wrapPromise = promise => {
  let status = "pending";
  let result = "";
  let suspender = promise.then(
    res => {
      status = "success";
      result = res;
    },
    err => {
      status = "error";
      result = err;
    }
  );
 return {
//  The .read() method is specific to the Suspense API for managing data fetching in React, which works with promises.
    // above address and name return a read() function
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }
      return result;
    }
  };
};
