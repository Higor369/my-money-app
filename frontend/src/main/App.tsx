import React from 'react';

import Footer from '../common/template/footer';
import Header from '../common/template/header'
import SideBar from '../common/template/sideBar';
import Routes from './routes';


const App: React.FC = () => {
  return (
    <div className='wrapper' >
        <Header />
        <SideBar />
        <div>
          <Routes />
        </div>
        <Footer />
    </div>
  );
}

export default App;
