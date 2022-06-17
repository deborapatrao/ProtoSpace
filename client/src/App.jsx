import './styles/index.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path='protocols'>
            <Route path="description" element={<div>description</div>} />
            <Route path="guidelines" element={<div>guidelines</div>} />
            <Route path="materials" element={<div>materials</div>} />
            <Route path="steps" element={<div>steps</div>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
