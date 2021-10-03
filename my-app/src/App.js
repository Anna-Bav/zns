import logo from './logo.svg';
import './App.css';
import Login from '../src/components/login/Login'
import {BrowserRouter as Router} from 'react-router-dom'
import Layout from './components/Layout';

function App() {
    return ( 
        <Router>
        <Layout/>
        </Router>
    );
}

export default App;

