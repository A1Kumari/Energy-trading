import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {MoralisProvider} from 'react-moralis';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import About from './Pages/About/About/About';
import Approved from './Pages/Approved/Approved';
import Contact from './Pages/Contact/Contact/Contact';
import Dentist from './Pages/Dentist/Denitst/Dentist';
import Footer from './Pages/Home/Footer/Footer.jsx';
import Header from './Pages/Home/Header/Header.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Service from './Pages/Services/Service/Service';



function App() {
  const moralisAppId = "77IfzDQc5dLFD3YbNKeuNrxHGe2c5OWGoMxgfLTU";
const moralisServerURL = "https://ioc7ccqovdu5.grandmoralis.com:2053/server";
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <MoralisProvider appId={moralisAppId} serverUrl="{moralisServerURL}">
        <Header />
        </MoralisProvider>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/dentist' element={<Dentist />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/approved' element={<Approved />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;