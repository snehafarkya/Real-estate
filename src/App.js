import './App.css';
import Filterbasic from './components/filters/Filterbasic';
import NavBar from './components/NavBar';
// import Search from './components/Search';
// import Property from './components/Property';
// import Searchfilters from './components/Searchfilters';

function App() {
  return (
    <div className="App">
      {/* <Search/> */}
      <NavBar/>
      <Filterbasic/>
    </div>
  );
}

export default App;
