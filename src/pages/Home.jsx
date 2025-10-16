const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Welcome to WhatNext
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Your future, guided by Tartans.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <div className="text-red-800 text-4xl mb-4">📍</div>
          <h3 className="text-xl font-bold mb-2">Transition Guide</h3>
          <p className="text-gray-600">
            Everything you need to know about starting your journey in Kigali.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <div className="text-red-800 text-4xl mb-4">📚</div>
          <h3 className="text-xl font-bold mb-2">Degree Planner</h3>
          <p className="text-gray-600">
            Explore successful degree plans from alumni who've achieved their goals.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <div className="text-red-800 text-4xl mb-4">👥</div>
          <h3 className="text-xl font-bold mb-2">Alumni Connect</h3>
          <p className="text-gray-600">
            Connect with alumni and learn from their experiences.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
          <div className="text-red-800 text-4xl mb-4">🤖</div>
          <h3 className="text-xl font-bold mb-2">AI Assistant</h3>
          <p className="text-gray-600">
            Get personalized guidance based on your interests and goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
