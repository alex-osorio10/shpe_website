// src/App.jsx
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Body from './Body.jsx';

function App() {
  return (
    <div className="app-container"> {/* Ensure this container does not limit width */}
      <Header />
      <main> {/* Main container for Body */}
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
