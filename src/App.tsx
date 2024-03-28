import "./index.css"
import {Navbar} from "./Components/Navbar/index.tsx"
import SignUp from "./Pages/SingUpPage";
import LoginPage from "./Pages/LoginPage";
import {MainPage} from "./Pages/MainPage";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import { routes } from './Routing/index.tsx'
import {Header} from "./Components/Header";
function App() {

  return (

      <Router>
        <Routes>
          {routes.map((route) => (
              <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
              />
          ))}
        </Routes>

      </Router>

  )
}

export default App
