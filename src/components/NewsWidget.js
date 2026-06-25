import React,{useEffect,useState} from "react";

const articles = [
  {
    title: "Want to climb Mount Everest?",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200",
    date: "2-20-2023 | 07:35 PM",
    description:
      "In the years since human beings first reached the summit of Mount Everest in 1953, climbing the world's highest mountain has changed dramatically. Today, hundreds of mountaineers manage the feat each year thanks to improvements in knowledge, technology, and infrastructure provided by commercially guided expeditions."
  },

  {
    title: "Beautiful Snow Mountains",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    date: "5-12-2023 | 09:15 AM",
    description:
      "Snow-covered mountains offer breathtaking landscapes and unforgettable adventures. From hiking trails to skiing destinations, these natural wonders attract millions of visitors every year. Their majestic beauty and peaceful environment make them some of the most cherished locations on Earth."
  }
];


const NewsWidget=()=>{

    const[index,setIndex]=useState(0);

    useEffect(()=>{

    const interval=setInterval(()=>{

    setIndex((prev)=>(prev+1)%articles.length)

    },2000)

    return()=>clearInterval(interval)

    },[])

    return (
        <div
            className="news-card"
            style={{
            background: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            }}
        >
            <div
            style={{
                position: "relative",
                height: "320px",
            }}
            >
            <img
                src={articles[index].image}
                alt={articles[index].title}
                style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                }}
            />

            <div
                style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background: "rgba(0,0,0,0.65)",
                color: "#fff",
                padding: "20px",
                }}
            >
                <h2
                style={{
                    margin: 0,
                    fontSize: "32px",
                    fontWeight: "600",
                }}
                >
                {articles[index].title}
                </h2>

                <p
                style={{
                    marginTop: "10px",
                    fontSize: "18px",
                }}
                >
                {articles[index].date}
                </p>
            </div>
            </div>

            <div
            style={{
                padding: "25px",
                color: "#333",
            }}
            >
            <p
                style={{
                lineHeight: "1.8",
                fontSize: "12px",
                textAlign: "justify",
                color: "#000000",
                fontWeight: "700",
                }}
            >
                {articles[index].description}
            </p>
            </div>
        </div>
    );

}



export default NewsWidget;