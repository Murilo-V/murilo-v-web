const { default: Header } = require("./components/Header");
const { default: Landing } = require("./pages/Landing");

function App() {
  return (
    <div className="App">
     <Header />
     <Landing />
    </div>
  );
}

export default App;