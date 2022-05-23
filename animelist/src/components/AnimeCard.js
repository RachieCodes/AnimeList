import React from 'react'
import "./AnimeCard.css"

function AnimeCard({anime}) {
  return (
    <article className="card">
        <a href={anime.url} className="cards"
            target="_blank"
            rel = "noreferrer">
            <figure>
                <img src={anime.image_url} alt="Anime"/>
            </figure>
            <h3>{anime.title}</h3>
        </a>
    </article>
  )
}

export default AnimeCard