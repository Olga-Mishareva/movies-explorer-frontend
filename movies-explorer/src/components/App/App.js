import { Routes, Route } from "react-router-dom";
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route exact path="/"/>
        <Route path="/movies"/>
        <Route path="/saved-movies"/>
        <Route path="/profile"/>
        <Route path="/signup"/>
        <Route path="/signin"/>
      

      </Routes>
    </div>
  );
}

export default App;
