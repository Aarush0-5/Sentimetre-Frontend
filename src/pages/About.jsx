
import { Helmet } from "react-helmet-async";
const About = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
           <Helmet>
                <title>Who we be</title>
                <meta name="description" content="About Us page" />
                <meta name="keywords" content="Sentimeter, About us , contact us" />
            </Helmet>
            <header>
              <div>
                <p className="bg-[#685c50] text-6xl font-amatic text-white p-10">Who We Be</p>
              </div>
            </header>

            <main>
              <div className="bg-[#F5F5DC]">
                <img src="../../NewLogo.png" alt="" className="w-full mx-auto lg:ml-[-30px]" />
              </div>
              <div className="bg-[#F5F5DC] p-2 text-center lg:w-full lg:h-auto text-brown-500 lg:p-[120px] font-semibold font-amatic ">
                <p className="lg:text-5xl mb-10 text-xl sm:text-2xl md:text-3xl">Sup homies, welcome to Sentimetre, where we dive deep into all things emotions. </p>
                <p className="lg:text-5xl mb-10 text-xl sm:text-2xl md:text-3xl">Yeah, our colour palette and themes might look gay, but we’re serious when we say we’re not.</p>
                <p className="lg:text-5xl mb-10 text-xl sm:text-2xl md:text-3xl">If you’re gay though, good for you!</p>
                <p className="lg:text-5xl mb-10 text-xl sm:text-2xl md:text-3xl">Every emotion we feel gets its own unique color because the world ain't just a black and white movie.</p>
                <p className="lg:text-5xl font-bold text-xl sm:text-2xl md:text-3xl">Now, let’s meet the team!</p>
                <p className="lg:text-5xl mb-10 text-xl sm:text-2xl md:text-3xl">Starting with Mahira, the backbone of Sentimetre. She started this whole thing from scratch, loves her independence, and minds her own business. She’s bossy but also hyperactive.</p>
                <p className="lg:text-5xl mb-10 text-xl sm:text-2xl md:text-3xl">Next up is Shalani, the curly-haired freak. She’s everything you wish to be.</p>
                <p className="lg:text-5xl mb-10 text-xl sm:text-2xl md:text-3xl">Then there's Bomal, who can’t keep his thumbs away from the record button. Slide into his DMs, and you’ll get flooded with voice messages.</p>
                <p className="lg:text-5xl mb-10 text-xl sm:text-2xl md:text-3xl">Moving on to Savini, Mahira’s pookie. “She’s mine, back off,” Mahira growls. If you wanna see tomorrow, better stay away from Savini. </p>
                <p className="lg:text-5xl mb-10 text-xl sm:text-2xl md:text-3xl">Finally, we have Sara, the diva and the yappaholic. She’ll never fail to make you giggle. But she’s also a dumb brunette, you know, like those Americans (no offence if you’re American).</p>
              </div>
            </main>

            <footer className="bg-[#685c50] grid justify-center grid-flow-col p-10">
              <div className="flex flex-row justify-center items-center space-x-4 w-full  sm:w-2/3 md:w-1/2 lg:w-1/6 p:4">
                <a href="https://www.instagram.com/sentimetre3/">
                  <img src="../../Instagram.png" alt="insta's logo" />
                </a>
                <a href="https://tiktok.com/@sentimetre3">
                  <img src="../../Tiktok.png" alt="Tiktok's logo" />
                </a>
                <a href="https://open.spotify.com/show/2I0Bxm0BB9EH5Q6DHCO7Of?si=f796f657daf7468e">
                  <img src="../../Spotify.png" alt="Spotify's logo" />
                </a>
                <a href="https://www.youtube.com/@sentimetre3">
                  <img src="../../Youtube.png" alt="Youtube logo" />
                </a>
                <a href="https://x.com/sentimetre3">
                  <img src="../../X.png" alt="X logo" />
                </a>
              </div>
            </footer>


         </div>
    )    
}
export default About

