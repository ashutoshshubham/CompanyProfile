import Pro_list from "./components/Pro_list";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Pro_entry from "./components/Pro_entry";
import Images from "./components/Images";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Navigate to='/home' />} path='/'/>
      <Route element={<Pro_entry/>} path='/home'/>
      <Route element={<Pro_list/>} path='/list'/>
      <Route element={<Images/>} path='/images'/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
