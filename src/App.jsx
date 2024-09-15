const App = () => {
  return (
    <div className="w-[40%] mt-60 gap-16 flex flex-col">
      <h1 className="text-5xl">This is React Vite Boileapate</h1>
      <h2 className="text-3xl">{import.meta.env.VITE_API_KEY}</h2>
      <button className="px-5 py-2 bg-red-300 rounded ">Explore</button>
    </div>
  );
};

export default App;
