import { Route, Routes } from 'react-router-dom';
import { FairFores } from '../pages/FairForest';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<FairFores />} />
      </Routes>
    </div>
  );
}

export default App;
