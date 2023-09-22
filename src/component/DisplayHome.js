import './home.css';
import Home from './Home';
import Navbar from './Navbar';

export default function DisplayHome() {
  return (
    <>
      <div className="main-container">
        <Navbar />
        <Home />
      </div>
    </>
  );
}
