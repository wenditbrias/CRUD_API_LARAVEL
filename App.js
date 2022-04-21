import { Routes, Route } from "react-router-dom";
import { Sidebar,Admin, Homepage } from "./components";
import axios from 'axios';
import { Provider } from "./context/Context";

const App = () => {

  return (
    <Provider>
    <div className="container relative">
      <Sidebar />
      <div className="w-[82%] py-7 px-5 absolute right-0 top-0">
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route index path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
};

export default App;
