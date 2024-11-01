import BusinessList, { businesses } from "./Components/BusinessList";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
      </header>
      <BusinessList businesses={businesses}/>
    </div>
  );
}

export default App;
