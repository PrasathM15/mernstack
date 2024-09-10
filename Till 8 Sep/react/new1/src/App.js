
import './App.css';
import { Provider } from 'react-redux';
import { myStore } from './redux/Config';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
import Web from './Web';
import {
  createBrowserRouter, RouterProvider,} from "react-router-dom";


let routerPaths = createBrowserRouter([
  {"path":"/","element":<Home/>},
  {"path":"/Home.js","element":<Home/>},
  {"path":"/About.js","element":<About/>},
  {"path":"/Contact.js","element":<Contact/>},
  {"path":"/Header.js","element":<Header/>},
  {"path":"/Web.js","element":<Web/>},
])
    
function App() {
  return (
      <Provider store={myStore}>
        <div className="App">
         
          <RouterProvider router = {routerPaths}/>

        </div>

      </Provider>   
  );
}

export default App;
