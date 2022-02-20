import React from 'react';
import { Routes, Route} from "react-router-dom";
import Trending from './Trending/Trending';
import Random from './Random/Random';
import Dance from './Category/SubCategs/Dance'
import Coding from './Category/SubCategs/Coding'
import LoginPage from './Athentication//LoginPage';
import RegisterPage from './Athentication/RegisterPage';
import GiphyInfo from './GiphyInfo';

function Routing() {
  return (
                  <div>
                  <Routes>
                      <Route path="/" element={<Trending />}/>  
                    </Routes> 
                    <Routes>
                      <Route path="trending" element={<Trending />}/>  
                    </Routes>
                    <Routes>
                      <Route path="random" element={<Random />}/>  
                    </Routes>
                    <Routes>
                      <Route path="dance" element={<Dance />}/>  
                    </Routes>     
                    <Routes>
                      <Route path="coding" element={<Coding />}/>  
                    </Routes> 
                    <Routes>
                      <Route path="login" element={<LoginPage />}/>  
                    </Routes> 
                    <Routes>
                      <Route path="register" element={<RegisterPage />}/>  
                    </Routes>  
                    <Routes>
                      <Route path="/giphyinfo" element={<GiphyInfo />}/>  
                    </Routes> 
                  </div>

  );
}

export default Routing;