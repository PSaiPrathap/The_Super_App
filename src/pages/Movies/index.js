import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";
import "./index.css";

const movieData = {
  Action: [
    "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/08/visually-stunning-action-movies.jpg?w=1200&h=675&fit=crop",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShh_FkH2OjmrfEB9XkGy6zA-y3mUlsJZ4YuK110zz-&s",
    "https://variety.com/wp-content/uploads/2023/07/Best-Action-Films.jpg",
    "https://pbs.twimg.com/media/Guc7ZNVasAAfQhY.jpg",
  ],

  Drama: [
    "https://substackcdn.com/image/fetch/$s_!V7U3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcea7a384-dd75-4316-acb8-275b70a86612_1536x1024.jpeg",
    "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQRyruy3VX74B3clZV0KK5jLrLj2Vm6psEVkCqjAsigi61oaNXHbiGmtrzpjaIPIhymS0Q_tKn4utqIZ3yGWVG6W72SxS70pihwk1xCrJqlei1x-Og8gz-WFjqzFO8P6V8YqrlQkV_UiS4diHLTyOUI5P7b0.jpg?r=de5",
    "https://akamaividz2.zee5.com/image/upload/w_336,h_504,c_scale,f_webp,q_auto:eco/resources/0-0-1z5961778/portrait/1920x770695c83175b6c4ed6a3350cdd6c283d2520ba393903df4ad8a23e545fcb05bd8c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSBg7QgitgU5cTeA5MUw8-XLE11MVl_7z1Sw&s",
  ],

  Music: [
    "https://static.vecteezy.com/system/resources/thumbnails/049/726/376/small/closeup-of-a-personalized-fan-with-the-movies-title-and-date-of-release-photo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfSot8BdBXFnx_-o4bzIJ66I-e7ouxU8Iuiw&s",
    "https://pbs.twimg.com/media/HI12emDacAA-FLi.jpg",
    "https://obrazki.ai/cdn-cgi/image/width=1920,quality=75,format=auto,fit=cover/nb/movie-songs--realistic-thumbnail-photo--no-text--no-border--no-margins--no-solid-background--photo-only?aspect_ratio=16:9",
  ],
  
  Comedy: [
    "https://www.nfi.edu/wp-content/uploads/2022/08/image23-16-1024x537.png",
    "https://i.ytimg.com/vi/FMdcGEt3oKA/sddefault.jpg",
    "https://www.zee5.com/global/blog/wp-content/uploads/2026/01/Best-New-Comedy-Movies.jpg",
    "https://www.comicbasics.com/wp-content/uploads/2026/04/New-Comedy-Movies-TV-Shows-Set-to-Release-in-April-2026.webp",
  ],

  Thriller: [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpQVq8DsHGpUWFbGCZ1033ClPP-2SgB3Wqw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPuX7nBHBQhiINi_5gcS63vpdF1iP1z-EWgQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw5WB4z5NDmJcofm_PCrnEUJTV_N3nVbOCjQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qJ1IlAUW9j2YMNVrdXjSh6cbIBycEDWJkA&s",
  ],

  Fantasy: [
    "https://static0.colliderimages.com/wordpress/wp-content/uploads/2025/03/disney-enchanted-1.jpg?w=1200&h=675&fit=crop",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOpk7jX16aOFI7m8AhWb6Oks83Atkxs4O38A&s",
    "https://media.istockphoto.com/id/1158833956/photo/medieval-knights-fighting-huge-fire-breathing-dragon-near-castle.jpg?s=612x612&w=0&k=20&c=WoMh_Bm9f9XJBcjOsopQvFwr08jMkSa4CQhyFlGLPZo=",
    "https://static0.moviewebimages.com/wordpress/wp-content/uploads/2023/02/alice-in-wonderland-l.jpg",
  ],

  Horror: [
    "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://img.youtube.com/vi/TjLJj3i2W6k/hqdefault.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ__WFfdWdeowG8XN8ZAwVho24vU7E6tkxYIg&shttps://img.magnific.com/free-vector/poster-cinema-horror-night-movie-theater_107791-14338.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gtrNfwQyEZTeshZ2aK5UGDu4G-26s0Y1BQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22RGygKsu7X0tieJfEqAmTdW5ut066QhJiQ&s ",
  ],

  Romance: [
    "https://qqcdnpictest.mxplay.com/pic/b1bea43d6c4d7719e1926a82bee205eb/en/2x3/312x468/25fdd3575583ed9ea1881ba45106d1d9_2000x3000.webp",
    "https://t3.ftcdn.net/jpg/12/14/20/34/360_F_1214203419_o86b55tn0lPsoFmHQW5aRe2atXbrDUHg.jpg",
    "https://static0.colliderimages.com/wordpress/wp-content/uploads/2026/01/before-sunset-1.jpeg?w=1200&h=675&fit=crop",
    "https://i.ytimg.com/vi/JoDgPug0Xw8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCtXjbwyhuUw2F9kQuirGEWf0bD1g",
  ],
  Sports: [
    "https://saturation.io/_next/image?url=https%3A%2F%2Fqgdsel5nethchfwk.public.blob.vercel-storage.com%2Fmedia%2FMOqBE4iwkWdXmAK41IriydnAk-1.jpeg&w=3840&q=75",
    "https://i.ytimg.com/vi/lR4e8YTJTcU/maxresdefault.jpg",
    "https://static01.nyt.com/athletic/uploads/wp/2020/03/27182719/Sports-Movies-Lead_Image-scaled.jpg?width=1200&height=900&fit=cover",
    "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQViuUq79LL_xpWUWnSXfmbQ293S8qbVeidiqpLZHPjqJexeBegI41kE1vsIy-bjXTDvj85GGjRwXQm5TAmBWBKq6BF0Qorg9O1smLGEOhVZ_g3Idl-AgVCkmxEEGP2KQYR50w3ftRMJqRjbfdtVjfri08c4.jpg?r=ba1",
  ],
};


const Movies = () => {
  const categories = useStore((state) => state.categories);
  console.log("Selected categories:", categories); // Debugging line
  

  return (
    <div className="movies-container">
      <header className="movies-header">
        <Link to="/" className="link">
          <h1 className="logo">Super app</h1>
        </Link>

        <img className="profile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdbhDRXfLP1DEyfzmNPpnLawFK4d00AsgWiOId_Y9-PvPfS8nQv8GUZtxj&s=10" alt="profile" />
      </header>
      <h2 className="title">
        Entertainment according to your choice
      </h2>

      {categories.map((category) => (
      <div key={category} className="category-section">
        <h3 className="category-title">{category}</h3>

        <div className="movies-grid">
          {movieData[category]?.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img
                src={movie}
                alt={`${category}-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    ))}
    </div>
  );
};

export default Movies;


