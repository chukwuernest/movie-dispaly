API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=2df8c8f9c2fc663f820e2f5373bfdbab"

<header id='head' class='head'>
        <form id='searcher'>
          <input
            type='text'
            id='search'
            npm
            class='searcher'
            placeholder='search'
          />
        </form>
      </header>

      css
      .movie_img img {

width: 200px;
height: 300px;
padding: 0.5em;
border: 2px solid var(--primary-2);
border-radius: 20px;
}

.movie_img {
border-radius: 20px;
width: auto;
margin: 0.2em;
box-shadow: 1px 0.1em 1em 0.1em var(--primary-2);
justify-content: center;
padding: 1.5em;
margin: 0 0.2em 0.2em 0;
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-gap: 5px;
box-sizing: border-box;
height: 100%;
width: 100%;
padding: 0.8em;
justify-content: center;
margin: 0.5em;
}
.movie {
position: relative;
overflow: hidden;
}
.movie_overview p {
justify-content: center;
text-align: center;
color: var(--primary-4);
width: 85%;
}
.movie_overview {
position: absolute;

right: 0;
left: 0;
bottom: 0;
max-height: 100%;
background-color: transparent;
transform: translateY(100%);
padding: 0.5em;
transition: transform 0.3s ease-in;
}

.movie_img:hover .movie_overview {
transform: translateY(0);
}

@media screen and (min-width: 480px) {
.movie_img {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 5px;
}
.movie_img img {
width: 200px;
height: 300px;
}
}
@media screen and (min-width: 540px) {
.movie_img {
display: grid;
grid-template-columns: repeat(3, 1fr);
}
.movie_img img {
width: 150px;
height: 200px;
}
}
@media screen and (min-width: 760px) {
.movie_img {
display: grid;
grid-template-columns: repeat(3, 1fr);
}
.movie_img img {
width: 200px;
height: 250px;
}
}
@media screen and (min-width: 900px) {
.movie_img {
display: grid;
grid-template-columns: repeat(4, 1fr);
}
.movie_img img {
width: 180px;
height: 250px;
}
}
@media screen and (min-width: 1200px) {
.movie_img {
display: grid;
grid-template-columns: repeat(5, 1fr);
}
.movie_img img {
width: 200px;
height: 280px;
}
}
