import React from 'react';
import './main.css';
import AnimeCard from './AnimeCard';

function main(props){
    return(
        <main>
            <div className="main">
                <form className="search"
                onSubmit={props.HandleSearching}>
                    <input type="search" 
                    placeholder="Search Anime" 
                    required
                    value={props.search}
                    onChange={e => props.setSearch(e.target.value)}/>
                </form>
            </div>
            <div className="list">
                {props.animeList.map(anime => (
                    <AnimeCard
                        anime={anime}
                        key={anime.mal_id} />

                ))}
            </div>
        </main>
    )

}
export default main;