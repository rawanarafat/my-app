import "aos/dist/aos.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/components/Home.js";
import "/Users/rawanarafat/Desktop/websites - React/my-app copy/src/web.css";

function App() {
  return (
    <div>
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
