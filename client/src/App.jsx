import './styles/index.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home/index';
import Dashboard from './components/Dashboard';
import Protocols from './components/Dashboard/Protocols';
import Description from './components/Dashboard/Protocols/Description';
import Guidelines from './components/Dashboard/Protocols/Guidelines';
import Materials from './components/Dashboard/Protocols/Materials';
import Steps from './components/Dashboard/Protocols/Steps';
import Preview from "./components/Dashboard/Protocols/Preview";
import TableComponent from './components/Dashboard/Workspace/Table';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { useSelector } from 'react-redux';


function App() {
  const { user } = useSelector((state) => state.auth)


  return (
    <BrowserRouter>
      <Routes>

        {/* <Route path="/">
          <Route index element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route> */}
         <Route path='/home' element={<Home/>} />
        <Route path="/" element={<Dashboard />}>

          <Route index element={<TableComponent />} />

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
