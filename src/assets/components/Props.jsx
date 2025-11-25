import Child1 from "./Child1";
import Child2 from "./Child2";

const Props = () => {

    const numbervalue = 21;
    const stringvalue = "Sivakumar";
    const arrayvalue = [1,1,2,2,3,3,4,4,5,5];
    const arrayofobjectvalue = [{id: 1, name: "Siva", age: 21},{id: 2, name: "Abdul" , age:20},{id: 3, name: "Raghu", age:20}]



  return (
    <>

         <nav className="bg-black shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <h1 className="text-5xl font-bold text-white text-center">
                    Props
                </h1>
            </div>
        </nav>

        <h1 className="text-3xl font-bold text-blue-600 bg-blue-100 p-4 rounded-lg shadow-md mb-4 text-center mt-3"> 
            This is Number: {numbervalue} 
        </h1>
        <h1 className="text-xl font-semibold text-green-700 bg-green-100 p-4 rounded-lg shadow-md border-l-4 border-green-500 display-flex mb-4 text-center"> 
            This is String: {stringvalue} 
        </h1>
        
        <Child1 sendto = {arrayvalue}/>
        <Child2 sendto = {arrayofobjectvalue}/>
   
    
    </>
  )
}

export default Props;