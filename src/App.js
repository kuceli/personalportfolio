import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
