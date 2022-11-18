import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/navigation';
import Authentication from './routes/authentication/authentication';
import Home from './routes/Home/home';
import Shop from './routes/shop/shop';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
      </Route>
    </Routes>
  );
};

export default App;
