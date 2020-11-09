import "./App.css";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";
import Page from "./Page";

function App() {
  return (
    /*Wrapping the whole application with BrowserRouter to be able to navigate
      inside the app using Route as we'll see in the components*/
    <BrowserRouter>
      <div className="App">
        <Header />
        <Page/> {/* All content in the page below the header */}
      </div>
    </BrowserRouter>
  );
}

export default App;
