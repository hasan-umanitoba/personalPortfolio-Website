import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Experience from './pages/Experience';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Hasan Saleem',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }

      ],
      home: {
        title: 'Hasan Saleem',
        subTitle: 'Computer Science Co-op Student. </>',
        text: ''
      },
      about: {
        title: 'About Me'
      },
      email: {
        text: 'hasansal-uofm@outlook.com'
      },
      experience: {
        title: 'Laivly',
        subTitle: 'Software Developer Co-op',
        text: 'January – April 2020'

      },

    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand className="abc">Hasan Saleem</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"></Navbar.Toggle>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/personalPortfolio-Website">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/Experience">Experience</Link>

                <a href={"mailto:" + this.state.email.text} style={{ paddingTop: 8, paddingRight: 5, color: 'Grey' }} >Contact</a>


              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/personalPortfolio-Website" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => < AboutPage title={this.state.about.title} />} />
          <Route path="/Experience" render={() => < Experience text={this.state.experience.text} subTitle={this.state.experience.subTitle} title={this.state.experience.title} />} />


          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
