const FormHandling = () => {
  return (
    <>
    <div className="min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
            <form className="space-y-8">
                <div className="text-center mb-10">
                    <h1 className="text-5xl font-black bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                        Feedback Form
                    </h1>
                </div>
                
                <div className="space-y-6">
                    <div>
                        <label className="block text-lg font-bold text-gray-800 mb-3">Enter Your Name:</label>
                        <input 
                            type="text" 
                            className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all text-gray-800 placeholder-gray-500 text-lg shadow-inner"
                            placeholder="Your full name"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-lg font-bold text-gray-800 mb-3">Enter Your Address:</label>
                        <textarea 
                            className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all h-28 text-gray-800 placeholder-gray-500 text-lg shadow-inner"
                            placeholder="Your complete address"
                        ></textarea>
                    </div>
                    
                    <div>
                        <label className="block text-lg font-bold text-gray-800 mb-3">Enter your Mobile No:</label>
                        <input 
                            type="mobile" 
                            className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all text-gray-800 placeholder-gray-500 text-lg shadow-inner"
                            placeholder="Your mobile number"
                        />
                    </div>
                    
                    <div className="text-center py-6">
                        <h1 className="text-4xl font-black bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
                            Review Section
                        </h1>
                    </div>
                    
                    <div className="space-y-8 bg-linear-to-br from-indigo-50 to-pink-50 rounded-3xl p-8 border-2 border-white shadow-inner">
                        <div className="text-center">
                            <label className="block text-xl font-black text-indigo-700 mb-6">Syllabus Upgraded:</label>
                            <div className="flex justify-center space-x-10">
                                <label className="flex items-center space-x-4 bg-white px-6 py-4 rounded-2xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
                                    <input type="checkbox" className="w-6 h-6 text-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-200 bg-white"/>
                                    <span className="text-gray-800 font-bold text-lg">Yes</span>
                                </label>
                                <label className="flex items-center space-x-4 bg-white px-6 py-4 rounded-2xl border-2 border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
                                    <input type="checkbox" className="w-6 h-6 text-pink-600 rounded-lg focus:ring-4 focus:ring-pink-200 bg-white"/>
                                    <span className="text-gray-800 font-bold text-lg">No</span>
                                </label>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <label className="block text-xl font-black text-purple-700 mb-6">Recent Technologies:</label>
                            <div className="flex justify-center space-x-10">
                                <label className="flex items-center space-x-4 bg-white px-6 py-4 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
                                    <input type="checkbox" className="w-6 h-6 text-purple-600 rounded-lg focus:ring-4 focus:ring-purple-200 bg-white"/>
                                    <span className="text-gray-800 font-bold text-lg">Yes</span>
                                </label>
                                <label className="flex items-center space-x-4 bg-white px-6 py-4 rounded-2xl border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
                                    <input type="checkbox" className="w-6 h-6 text-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-200 bg-white"/>
                                    <span className="text-gray-800 font-bold text-lg">No</span>
                                </label>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <label className="block text-xl font-black text-pink-700 mb-6">Practical Oriented Classes:</label>
                            <div className="flex justify-center space-x-10">
                                <label className="flex items-center space-x-4 bg-white px-6 py-4 rounded-2xl border-2 border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
                                    <input type="checkbox" className="w-6 h-6 text-pink-600 rounded-lg focus:ring-4 focus:ring-pink-200 bg-white"/>
                                    <span className="text-gray-800 font-bold text-lg">Yes</span>
                                </label>
                                <label className="flex items-center space-x-4 bg-white px-6 py-4 rounded-2xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
                                    <input type="checkbox" className="w-6 h-6 text-purple-600 rounded-lg focus:ring-4 focus:ring-purple-200 bg-white"/>
                                    <span className="text-gray-800 font-bold text-lg">No</span>
                                </label>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <label className="block text-xl font-black text-indigo-700 mb-4">Infrastructure</label>
                            <textarea 
                                className="w-full px-5 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all h-28 text-gray-800 placeholder-gray-500 text-lg shadow-inner"
                                placeholder="Share your thoughts about infrastructure..."
                            ></textarea>
                        </div>
                    </div>
                    
                    <div className="text-center pt-8">
                        <button 
                            type="submit" 
                            className="bg-linear-to-r from-indigo-600 to-pink-600 hover:from-indigo-700 hover:to-pink-700 text-white font-black text-xl py-5 px-16 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-indigo-500/50 border-2 border-white/30"
                        >
                             Submit Feedback 
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default FormHandling;