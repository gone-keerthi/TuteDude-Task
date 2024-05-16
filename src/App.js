
import './App.css';
import Cirriculum from './components/Cirriculum/Cirriculum';
import EnrollmentCard from './components/EnrollmentCard/EnrollmentCard';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Overview from './components/Overview/Overview';
import Refund from './components/Refund/Refund';
import Testimonials from './components/Testmonials/Testimonials';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation/>
      <Overview />
      <Cirriculum />
      <Refund />
     <Testimonials />
     <EnrollmentCard />
    </div>
  );
}

export default App;
