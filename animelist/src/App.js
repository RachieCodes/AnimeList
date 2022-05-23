import { useState, useEffect } from 'react';
import Header from "./components/header"
import Sidebar from './components/sidebar';
import MainContent from './components/main'
import "./App.css";

function App() {
  const [animeList, setAnime] = useState([]);
  const [topAnime, setTop] = useState([]);
  const [topChar, setChar] = useState([]);
  const [search, setSearch] = useState("");

  const GetTop = async () => {
    const temp = await fetch("https:/api.jikan.moe/v3/top/anime/1/bypopularity").then(res => res.json());

    setTop(temp.top.slice(0,10));
  }

  const GetChar = async() => {
    const charlist = await fetch("https:/api.jikan.moe/v3/top/characters").then(res => res.json());

    setChar(charlist.top.slice(0,10));
  }


  const FetchAnime = async (query) => {
    const animefetched = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
			.then(res => res.json());

    setAnime(animefetched.results);
  }


  const HandleSearching = e => {
    e.preventDefault();

    FetchAnime(search)
  }

  useEffect(() =>{
    GetTop();
  }, []);

  useEffect(() =>{
    GetChar();
  }, []);

  return (
    <div className="App">
        <div className='head'>
        <Header/>
        </div>
        <div className="section">
        <div className="sidebar">
          <Sidebar
            topAnime={topAnime}
            topChar={topChar}>
          </Sidebar>
        </div>
      </div>
      <div className='mainContent'>
        <MainContent
          HandleSearching={HandleSearching}
          search={search}
          setSearch ={setSearch}
          animeList={animeList}
        />
        </div>
    </div>
  );
}

export default App;
