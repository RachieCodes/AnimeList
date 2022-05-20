import { useState, useEffect } from 'react';
import Header from "./components/header"
import Sidebar from './components/sidebar';

function App() {
  const [animeList, setAnime] = useState([]);
  const [topAnime, setTop] = useState([]);
  const [topChar, setChar] = useState([]);
  const [search, setSearch] = useState([]);

  const GetTop = async () => {
    const temp = await fetch("https:/api.jikan.moe/v3/top/anime/1/bypopularity").then(res => res.json());

    setTop(temp.top.slice(0,10));
  }

  const GetChar = async() => {
    const charlist = await fetch("https:/api.jikan.moe/v3/top/characters").then(res => res.json());

    setChar(charlist.top.slice(0,10));
  }

  useEffect(() =>{
    GetTop();
  }, []);

  useEffect(() =>{
    GetChar();
  }, []);
 

  return (
    <div className="App">
      <Header/>
      <Sidebar
        topAnime={topAnime}
        topChar={topChar}/>
    </div>
  );
}

export default App;
