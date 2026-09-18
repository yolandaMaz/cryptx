import Navbar from "./components/Navbar";
import Mainpage from "./components/pages/Mainpage";

function App() {
 
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <Navbar />
      <div className="flex-1 flex flex-col">
      <Mainpage />
    </div>
    </div>               
  );
}

export default App
