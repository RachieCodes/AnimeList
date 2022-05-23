import "./sidebar.css";

function sidebar({topAnime, topChar}) {

  return (
    <aside>
        <h3>Top 10 Anime</h3>
            {topAnime.map(anime => (
                <a
                href={anime.url}
                target="_black"
                key = {anime.mal_id}
                rel="noreferrer">
                { anime.title}
            </a>
        ))}
        <h3>Top 10 Characters</h3>
            {topChar.map(char => (
                <a
                href={char.url}
                target="_black"
                key = {char.mal_id}
                rel="noreferrer">
                { char.title}
            </a>
        ))}
  </aside>
 )   
}
 

export default sidebar;