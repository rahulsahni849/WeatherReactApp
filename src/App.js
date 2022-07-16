import './App.css';
import Search from './components/Search';

function App() {

  const handleSearch = (test) =>{
    console.log(test);
  }
  return (
    <div className="app-container">
      <Search onSearchChange={handleSearch} />
    </div>
  );
}

export default App;
