import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mainlayout from './layout';
import { Footer, Header, MovieListTop, Slider, WidgetArea } from './layout/components';
import Movie from './layout/components/Movie/Movie';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Mainlayout/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
