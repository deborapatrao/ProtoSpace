import './styles/index.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Description from './components/Dashboard/Protocols/Description';
import Guidelines from './components/Dashboard/Protocols/Guidelines';
import Materials from './components/Dashboard/Protocols/Materials';
import Steps from './components/Dashboard/Protocols/Steps';
import Preview from "./components/Dashboard/Protocols/Preview";

import Dashboard from './components/Dashboard';
import Protocols from './components/Dashboard/Protocols';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/">
          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route> */}

        <Route path="/" element={<Dashboard />}>
          <Route path='protocols' element={<Protocols />}>
            <Route path="description" element={<Description />} />
            <Route path="guidelines" element={<Guidelines />} />
            <Route path="materials" element={<Materials />} />
            <Route path="steps" element={<Steps />} />
            <Route path="preview" element={<Preview />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
