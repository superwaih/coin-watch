import Nav from "./components/Nav";
import {  Divider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import MarketPage from "./pages/MarketPage";
import TrendingPage from "./pages/Trending";

function App() {
  return (
    <div className="App  flex flex-col">
      <Nav />
      <Divider />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarketPage />} />
        <Route path="/trending" element={<TrendingPage />} />

      </Routes>
      </BrowserRouter>


    </div>
    
  );
}

export default App;
