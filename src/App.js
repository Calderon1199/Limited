import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/Navigation/navigation';
import SignIn from './routes/Sign-in/sign-in';
import Home from './routes/Home/home';

const Shop = () => {
  return(
    <div>
      <h1>I am the shop</h1>
    </div>
  )
}
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='sign-in' element={<SignIn />}/>
      </Route>
    </Routes>
  );
};

export default App;
