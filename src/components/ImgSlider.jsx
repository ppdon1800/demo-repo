import React, { useEffect } from "react";

function ImgSlider({ limit = 10 }) {
    const [data, setData] = React.useState([]);
    const [index, setIndex] = React.useState(0);
    async function getImages() {
        try {
            const res = await fetch(
                `https://picsum.photos/v2/list?page=2&limit=${limit}`
            );
            const d = await res.json();
            if (d.length > 0) {
                setData(d);
            }
        } catch (error) {
            console.error("Error fetching images:", error);
        }
    }
    useEffect(() => {
        getImages();
    }, []);
    if (data.length === 0) {
        return <h1>Loading...</h1>;
    } else {
        return (
            <div className="w-full max-w-2xl mx-auto p-4 relative">
                <img
                    src={data[index].download_url}
                    alt={`Photo by ${data[index].author}`}
                    className="w-full h-auto rounded-lg shadow-lg"
                />
                <button
                    className="bg-blend-difference  rounded-full absolute top-1/2  left-0 opacity-80"
                    onClick={() => setIndex((a) => (a - 1 > 0 ? a - 1 : limit - 1))}
                >
                    {"<-"}
                </button>
                <button
                    onClick={() => setIndex((a) => (a + 1 < limit ? a + 1 : 0))}
                    className=" bg-blend-color-burn  rounded-full absolute top-1/2 opacity-80 font-extrabold border-amber-400 right-0"
                >
                    {"->"}
                </button>
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {data.map((_, i) => (
                        <div onClick={()=>setIndex(i)} key={i} className={`rounded-4xl opacity-80  bg-white ${i === index ? "border-6 border-blue-700 w-3 h-3" : "w-2 h-2"}`}></div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ImgSlider;
