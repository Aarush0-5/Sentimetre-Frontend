import { Helmet } from "react-helmet-async"; 
import { useState, useEffect} from "react"; 
import axios from "axios";

const Podcast = () => {
    const [error,setError] = useState(null);
    const [podcasts, setPodcasts] = useState([]);
    const [search, setSearch] = useState('');
    const [selectedPodcast, setSelectedPodcast] = useState(null);
    const [platformdata, setPlatformData] = useState({});
    const [selectedPlatform, setSelectedPlatform] = useState('');

    const handleListen = (podcast) => {
          setSelectedPodcast(podcast);
    };
      
    const handleCloseModal = () => {
          setSelectedPodcast(null);
          setSelectedPlatform('');
    };

    const filteredPodcasts = podcasts.filter((podcast) =>  
        podcast.title.toLowerCase().includes(search.toLowerCase()) || 
        podcast.description.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        axios.get("https://sentimetre-backend.onrender.com/auth/podcast")
        .then(response => {
            if (response.data && Array.isArray(response.data.data)) {
                setPodcasts(response.data.data);
                const platforms = {
                    "youtube": response.data.data[0]['urly'],
                    "spotify": response.data.data[0]['urls'],
                    "applepodcast": response.data.data[0]['urla'],
                };
                setPlatformData(platforms);
            } else {
                setError("Unexpected data format.");
            }
        })
        .catch(error => {
            setError(error.message);
        })
    },[]);

    const handlePlatform =(platformdata) => {
        setSelectedPlatform(platformdata);
    };

    const textColors= {
        red: "text-red-600",
        green: "text-green-500",
        darkgreen: "text-green-700",
        blue: "text-blue-400",
        darkblue: "text-blue-800",
        yellow: "text-yellow-600",
        orange: "text-orange-500",
        purple: "text-purple-500",
        special: "text-blue-950"
    };

    const backgroundColors= {
        red: "bg-red-600",
        green: "bg-green-500",
        darkgreen: "bg-green-700",
        blue: "bg-blue-400",
        darkblue: "bg-blue-800",
        yellow: "bg-yellow-600",
        orange: "bg-orange-500",
        purple: "bg-purple-500",
        special: "bg-blue-950"
    };

    return (
        <div>
            <Helmet>
                <title>Podcasts</title>
                <meta name="description" content="Podcasts page" />
                <meta name="keywords" content="Sentimeter, Podcasts, latest podcasts" />
            </Helmet>
            <header className="flex flex-col lg:flex-row justify-evenly lg:justify-end bg-[#685c50] p-4 text-3xl font-bold text-beige font-comic">
             <h2 className="text-4xl flex justify-center lg:text-7xl whitespace-nowrap p-7 mt-[-10px] text-beige font-comic font-extrabold">Drop, Dates, & Deets</h2>
            </header> 

            <main className="min-h-screen bg-beige flex flex-col lg:flex-row w-full">
             <div className="flex flex-col h-full w-full lg:w-1/2">
                {filteredPodcasts.map((podcast) => (
                    <div key={podcast._id} className="flex flex-col p-2 w-full h-full ml-0 lg:ml-10 mr-0 lg:mr-3">
                        <div className="flex flex-col h-full">
                            <p
                                onClick={() => handleListen(podcast)}
                                className={`flex text-2xl ${textColors[podcast.bg]} font-comic w-full p-2 cursor-pointer font-bold underline`}
                            >
                                {podcast.title}
                            </p>
                            <p
                                className={`flex ${textColors[podcast.bg]} font-semibold font-comic w-full text-xl p-2`}
                            >
                                {podcast.description}
                            </p>
                        </div>
                    </div>
                ))}
             </div>
            </main>

            {selectedPodcast && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center h-full w-full">
                    <div className={`${backgroundColors[selectedPodcast.bg]} p-5 rounded-lg max-w-lg w-full text-left`}>
                        <button
                            onClick={handleCloseModal}
                            className="mb-5 bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 hover:text-black cursor-pointer"
                        >
                            Close
                        </button>
                        <h2 className="text-center text-xl lg:text-2xl mb-5 font-semibold underline">Choose Your Favourite Platform!</h2>
                        <div className="border-2 border-black flex bg-brown-200 text-l text-black justify-center w-full mb-2">
                            <button onClick={() => handlePlatform(platformdata["applepodcast"])}>Apple Podcasts</button>
                        </div>
                        <div className="border-2 border-black flex bg-brown-200 text-l text-black justify-center w-full mb-2">
                            <button onClick={() => handlePlatform(platformdata["spotify"])}>Spotify Podcasts</button>
                        </div>
                        <div className="border-2 border-black flex bg-brown-200 text-l text-black justify-center w-full mb-2">
                            <button onClick={() => handlePlatform(platformdata["youtube"])}>YouTube</button>
                        </div>
                        <div className="border-2 border-black flex bg-brown-200 text-l text-black justify-center w-full mb-2"
                            dangerouslySetInnerHTML={{ __html: selectedPlatform }}>
                        </div>
                    </div>
                </div>
            )}

            <footer className="bg-beige p-10">
             <div className="flex space-x-7 md:space-x-7 lg:flex lg:flex-row lg:items-end lg:w-1/4 lg:space-x-4">
                 <a href="https://www.instagram.com/sentimetre3/">
                 <img className="w-6 h-6 lg:w-10 lg:h-10" src="../../Instagram.png" alt="insta's logo" />
                 </a>
                    <a href="https://tiktok.com/@sentimetre3">
                    <img className="w-6 h-6 lg:w-10 lg:h-10" src="../../Tiktok.png" alt="Tiktok's logo" />
                    </a>
                    <a href="https://open.spotify.com/show/2I0Bxm0BB9EH5Q6DHCO7Of?si=f796f657daf7468e">
                    <img className="w-6 h-6 lg:w-10 lg:h-10" src="../../Spotify.png" alt="Spotify's logo" />
                    </a>
                    <a href="https://www.youtube.com/@sentimetre3">
                    <img className="w-6 h-6 lg:w-10 lg:h-10" src="../../Youtube.png" alt="Youtube logo" />
                    </a>
                    <a href="https://x.com/sentimetre3">
                    <img className="w-6 h-6 lg:w-10 lg:h-10" src="../../X.png" alt="X logo" />
                    </a>
                    <a href="https://podcasts.apple.com/us/podcast/sentimetre/id1795190598">
                    <img src="../../applepodcast.png" className="w-6 h-6 lg:w-10 lg:h-10" alt="apple podcast logo" />
                    </a>
             </div>
            </footer>
        </div>
    );    
};

export default Podcast;
