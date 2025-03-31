import './App.css';

function App() {
  return (
    <div className="App">
      <img src="background.png" alt="back" className="background"></img>
      <header>
        <p className="roboto-900 header-wrap-1">NAOYA IIDA</p>
        <p className="roboto-900 header-wrap-2">PORTFOLIO</p>
      </header>
      <main>
        <div className="main-wrap">
          <div className="lang-wrap">
            <div className="lang-logo-wrap">
              <img src="java-14.svg" alt="java" className="java-wrap"></img>
              <p className="roboto-900 java-text-wrap">Java</p>
            </div>
            <p className="lang-text-wrap">★★★★★</p>
          </div>
          <p className="next-wrap">》</p>
          <div className="lang-wrap">
            <div className="lang-logo-wrap">
              <img src="spring-boot-1.svg" alt="springboot" className="spring-wrap"></img>
              <p className="roboto-900 spring-text-wrap">Spring Boot</p>
            </div>
            <a href="https://github.com/MovingEmoji/mobile-order-backend" className="code-text-wrap">≪ MY CODE ≫</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
