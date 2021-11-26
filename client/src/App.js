import { TopBar, Home, Single, Write, Settings, Login } from './components/';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (<div>
    <TopBar />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/single' element={<Single/>} />
        <Route path='/write' element={<Write />} />
      </Routes>
    </main>
  </div>
  );
}

export default App;
