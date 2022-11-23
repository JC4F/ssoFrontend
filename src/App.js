import Header from './components/Header/Header'
import {
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About/About'

const App = ()=>{
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/about' element={<About/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
