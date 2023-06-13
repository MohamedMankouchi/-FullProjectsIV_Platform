import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Livestream } from "./pages/Livestream";
import Info from "./pages/Info";
import { Video } from "./components/Video";

function App() {
  return (
    <>
      <Livestream />
    </>
  );
}

export default App;
