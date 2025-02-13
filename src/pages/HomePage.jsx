import { Link } from "react-router-dom";
import {Helmet} from "react-helmet-async";
import { useState, useEffect } from "react";
import axios from "axios";
import images from "../Images.js";

const Homepage = () => {
    const currentYear = new Date().getFullYear();
    const [error, setError] = useState(null);
    const [podcasts, setPodcasts] = useState([]);
    const [currentImage, setCurrentImage]=useState(null);
    
    
    //Podcast get
    useEffect(() => {
        axios.get("https://sentimetre-backend.onrender.com/auth/podcast") 
        .then(response => {
            if (response.data && Array.isArray(response.data.data)) {
                setPodcasts(response.data.data);
            } else {
                setError("Unexpected data format.");
            }
            console.log(response.data)
        })
        .catch(error => {
            setError(error.message);
            console.log(error)
        })
    },[])

    

    useEffect(() => {
        const updateImage = () => {
            const today = new Date().toISOString().split('T')[0];
            console.log("Today's date:", today); 

            let latestImage = null;
            for (const schedule of images) {
                console.log("Checking date:", schedule.date); 
                if (today >= schedule.date) {
                    latestImage = schedule.img;
                    console.log("Updated latestImage to:", latestImage); 
                } else {
                    break;
                }
            }

            if (latestImage) {
                setCurrentImage(`../../${latestImage}`);
            }
        };

        updateImage(); 

        const intervalId = setInterval(updateImage, 86400000); 

        return () => clearInterval(intervalId); 
    }, []);

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
    }

    return (
        <div>
            <Helmet>
                <title>Sentimetre</title>
                <meta name="description" content="Sentimetre homepage" />
                <meta name="keywords" content="Sentimetre, homepage, latest podcasts, latest blogs" />
            </Helmet>

       <header>
            <div className="flex flex-col-2 justify-evenly gap-14 lg:justify-end bg-[#685c50] p-4 text-3xl font-bold text-beige font-amatic">
                <Link to={"/Podcast"}>Drop Dates & Deeds</Link>
                <Link to={"/About"}>Who We Be</Link>
            </div>
       </header> 

        <main>

        {/*Image and motto container*/}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-[#b39b82] flex items-center justify-center">
                <img src="../../NewLogoMain-modified.png" alt="The image" className="w-2/3 p-4 h-auto lg:mt-[-200px]" />
          </div>           
          <div className="bg-[#F5F5DC] p-5 font-amatic">
            <p className="text-center mb-8 font-bold text-brown-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">All Things Emotions</p>
            <p className="text-center mx-4 sm:mx-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-brown-400 font-semibold">
            We're not here to sugarcoat—this is the podcast where emotions get real, and we get loud about it. Let's face it, life's a rollercoaster of feelings we sometimes pretend don't exist. No fluff, just real talk. From "I'm fine" lies to happy highs, we're breaking down the feels, the why's and the oh-my-god-is-it-just-me's. Tune in as we dive into the good, the bad, and the downright messy parts of mental health and all the moods in between. Perfect for anyone vibing with the ups and downs or just wanting to feel seen.
            </p>
          </div>
        </div>

                
          
       
         {/*Podcast Container*/}
         <div className="grid grid-cols-1 lg:grid-cols-2 bg-beige p-4">
            <div className=" flex flex-col lg:items-start lg:justify-center items-start w-full  p-4">
                <h1 className="text-4xl  sm:text-5xl md:text-6xl font-bold text-brown-400 mb-2 font-amatic">Next Episode</h1>
                {currentImage ? (
                <img src={currentImage} alt="Scheduled Image" className="w-3/4 h-auto lg:w-full lg:h-auto mx-auto" />
                ) : (
                <p className="font-amatic text-left text-brown-500 text-2xl sm:text-3xl md:text-4xl font-bold">Episode coming soon!</p>
                )}
            </div>


            <div className=" flex flex-col items-start justify-start w-full p-4 lg:pl-2">
                {podcasts.slice(0, 5).map(podcast => (
                <div key={podcast._id} className="mb-2">
                    <div className="flex flex-col text-left items-center p-2">
                    <Link to={"/Podcast"} className={`${textColors[podcast.pbg]} underline font-bold font-amatic w-full  mb-1 text-xl sm:text-2xl md:text-3xl lg:text-2xl`}>{podcast.ptitle} </Link>
                    <p className={`${textColors[podcast.pbg]} w-full font-semibold font-amatic text-lg  sm:text-xl md:text-2xl lg:text-2xl`}>{podcast.pdescription}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </main>

         <footer className="bg-beige p-10" >
             <div className="flex space-x-7 lg:flex lg:flex-row lg:items-end lg:w-1/5 lg:space-x-4 ">
                 <a href="https://www.instagram.com/sentimetre3/"  >
                 <img src="../../Instagram.png" alt="insta's logo"  />
                 </a>
                    <a href="https://tiktok.com/@sentimetre3"  >
                    <img src="../../Tiktok.png" alt="Tiktok's logo"  />
                    </a>
                    <a href="https://open.spotify.com/show/2I0Bxm0BB9EH5Q6DHCO7Of?si=f796f657daf7468e"   >
                    <img src="../../Spotify.png" alt="Spotify's logo"  />
                    </a>
                    <a href="https://www.youtube.com/@sentimetre3"  >
                    <img src="../../Youtube.png" alt="Youtube logo"  />
                    </a>
                    <a href="https://x.com/sentimetre3"  >
                    <img src="../../X.png" alt="X logo"  />
                    </a>
            </div>
         </footer>
        </div>
        
    )    
}
export default Homepage