import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; 
import { useState, useEffect} from "react"; 
import axios from "axios";
import { format} from "date-fns";

const Podcast = () => {
    const currentYear = new Date().getFullYear();
    const [error,setError] = useState(null);
    const [podcasts, setPodcasts] = useState([]);
    const [search, setSearch] = useState('')
    const [selectedPodcast, setSelectedPodcast] = useState(null);
     

    const handleListen = (podcast) => {
          setSelectedPodcast(podcast);
        };
      
     const handleCloseModal = () => {
          setSelectedPodcast(null);
        };
   
   
    const filteredPodcasts = podcasts.filter((podcast) =>  podcast.ptitle.toLowerCase().includes(search.toLowerCase()) || podcast.pdescription.toLowerCase().includes(search.toLowerCase()))

    useEffect(() => {
        axios.get("https://sentimetre-backend.onrender.com/auth/podcast")
        .then(response => {
            if (response.data && Array.isArray(response.data.data)) {
                setPodcasts(response.data.data);
            } else {
                setError("Unexpected data format.");
            }
        })
        .catch(error => {
            setError(error.message);
        })
    },[])

    const textColors= {
        red: "text-red-600",
        green: "text-green-600",
        blue: "text-blue-600",
        yellow: "text-yellow-600",
    }

    return (
        <div>
            <Helmet>
                <title>Podcasts</title>
                <meta name="description" content="Podcasts page" />
                <meta name="keywords" content="Sentimeter, Podcasts, latest podcasts" />
            </Helmet>
            <header className="flex flex-col lg:flex-row justify-evenly lg:justify-end bg-[#685c50] p-4 text-3xl font-bold text-beige font-amatic">
             <h2 className="text-4xl lg:text-7xl whitespace-nowrap p-7 mt-[-10px] text-beige font-amatic font-extrabold">Drop, Dates, & Deets</h2>
            </header> 

            <main className="min-h-screen bg-beige flex flex-col lg:flex-row w-full">
             {/* Right side container */}
              <div className="flex flex-col h-full w-full lg:w-1/2">
                {[...filteredPodcasts].map((podcast) => {
                return (
                    <>
                    {selectedPodcast && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center h-full w-full">
                        <div className="bg-white p-5 rounded-lg max-w-lg w-full text-left">
                            <button
                            onClick={handleCloseModal}
                            className="mb-5 bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700 cursor-pointer"
                            >
                            Close
                            </button>
                            <div
                            className="border-2 border-black flex bg-brown-200 text-l text-black justify-center w-full mb-2"
                            dangerouslySetInnerHTML={{ __html: selectedPodcast.purl }}
                            ></div>
                            <h2 className={`border-2 border-black  flex bg-brown-200 text-l text-black justify-center w-full mb-2`}>
                            {selectedPodcast.ptitle}
                            </h2>
                            <p className={`overflow-hidden overflow-wrap border-2 border-black flex bg-brown-200 text-l text-black  justify-center p-4 w-full`}>
                            {selectedPodcast.pdescription}
                            </p>
                        </div>
                        </div>
                    )}
                    <div key={podcast._id} className="flex flex-col p-2 w-full h-full ml-0 lg:ml-10 mr-0 lg:mr-3">
                        <div className="flex flex-col h-full">
                        <p
                            onClick={() => handleListen(podcast)}
                            className={`flex text-2xl ${textColors[podcast.pbg]} font-amatic w-full p-2 cursor-pointer font-bold underline`}
                        >
                            {podcast.ptitle}
                        </p>
                        <p
                            className={`flex ${textColors[podcast.pbg]} font-semibold font-amatic w-full text-xl p-2`}
                        >
                            {podcast.pdescription}
                        </p>
                        </div>
                    </div>
                    </>
                );
                })}
             </div>
            </main>

            <footer className="bg-beige p-10">
                <div className="flex flex-row space-x-10 lg:space-x-4 lg:w-1/6">
                    <a href="https://www.instagram.com/sentimetre3/">
                    <img className="w-6 h-6 lg:w-10 lg:h-10" src="../../Instagram.png" alt="Instagram's logo" />
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
                </div>
            </footer>


        </div>

    )    
}
export default Podcast