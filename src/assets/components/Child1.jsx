const Child1 = (props) => {
  return (
    <>
    <div className="bg-linear-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold text-white text-center mb-4">
            This is Child1: <span className="text-yellow-300 bg-black/20 px-2 py-1 rounded">{props.sendto}</span>
        </h1>
    </div>
    </>
  )
}

export default Child1;