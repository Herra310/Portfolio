
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Proyects from "./components/Proyects";
import Stack from "./components/Stack";
import Contact from "./components/Contact";

function App() {
   return (
      <div className="App overflow-hidden">
         <Nav />
         <Hero />
         <Stack/>
         <Proyects/>
         <Contact/>
      </div>
   );
}

export default App;
