import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './components/requests';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <Row
        title="NETFLIX ORGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      {/* isLargeRow made up param -> row__posterLarge */}
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row
        title="Documentaries Movies"
        fetchURL={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
