const Child2 = ({ items = [] }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="bg-blue-50 flex flex-col justify-center align-middle text-center p-6 rounded-xl shadow-md mb-4 border-l-4 border-blue-500 mt-3">
               <div> <h1 className="text-sm font-bold text-white bg-linear-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full inline-block w-fit mb-4 shadow-lg uppercase tracking-widest">This is Child2</h1></div> 
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{item.name}</h1>
          <h1 className="text-xl text-blue-600 font-medium">{item.age} </h1>
        </div>
      ))}
    </>
  );
}

export default Child2;