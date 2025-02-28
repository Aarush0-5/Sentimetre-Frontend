
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
                <p className="bg-[#685c50] text-5xl whitespace-nowrap lg:text-6xl font-comic text-white p-10">Who We Be</p>
              </div>
            </header>

            <main>
              <div className="bg-[#F5F5DC]">
                <img src="../../aboutimg.png" alt="" className="w-full mx-auto lg:ml-[-30px]" />
              </div>
              <div className="bg-[#F5F5DC] p-2 text-center lg:w-full lg:h-auto text-brown-500 lg:p-[120px] font-semibold font-comic ">
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">Sup homies, welcome to Sentimetre, where we dive deep into all things emotions. </p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">Yeah, our colour palette and themes might look gay, but we’re serious when we say we’re not.</p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">If you’re gay though, good for you!</p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">Every emotion we feel gets its own unique color because the world ain't just a black and white movie.</p>
                <p className="lg:text-4xl font-bold text-xl sm:text-2xl md:text-3xl">✨ Meet the Yappaholics ✨</p>
                <p className="lg:text-4xl font-bold text-xl sm:text-2xl md:text-3xl">1. Mahira – “She.E.O of Yap Management”</p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">✨ Queen Energy? Yeah, she invented it. With a crown on her head and stars in her aura, Mahira is the boss babe who keeps the yap squad in check. Whether she’s running the show or casually breaking glass ceilings, she does it all with that main character energy. If chaos is a ladder, she’s already at the top wearing an evil smug.</p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">Shalani – “The Profesh Yappaholic</p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">💄💎 Polished, professional, but still ready to yap. Shalani’s got the poise of a TED Talk speaker and the charm of your favorite rom-com lead. She’s the one delivering hot takes with a side of elegance—and if there’s drama, she’ll sip the tea but keep it classy. Basically, if LinkedIn had a fun mode, she’d be the face of it.</p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">Sara – “The Unstoppable Yappinator”</p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">💖🎀 Cute but chaotic? Say less. Sara’s serving Hello Kitty realness with a sprinkle of heart emojis and a dash of ‘I’m-not-done-talking-yet’ energy. If you think you can out-yap her, good luck—this girl’s got verbal stamina and the vibes to match. Unstoppable? More like un-shush-able.</p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">Bomal – “The Unfiltered Mic”</p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">🤯💢 One joke away from getting canceled. Bomal’s got the kind of humor that keeps things interesting—and occasionally risky. If there’s a boundary, he’s toeing it (with a smirk). He’s not here for mainstream nonsense, but if you need someone to roast the group and the system, he’s your guy. Proceed with caution.</p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">Savini – “Chief Hug Officer”</p>
                <p className="lg:text-4xl mb-10 text-xl sm:text-2xl md:text-3xl">🎭🤗 Equal parts hugger and vibe inspector. Savini’s the friend who’ll make sure you feel welcome—but if the energy’s weird, she’s already clocked it. She’s got that low-key theatre kid energy, always ready to bring life to the party while keeping the vibes in check. Pass the vibe check? Cool. If not, better luck next time.</p>
              </div>
            </main>

            <footer className="bg-beige p-10" >
             <div className="flex space-x-7 md:space-x-7 lg:flex lg:flex-row lg:items-end lg:w-1/4 lg:space-x-4 ">
                 <a href="https://www.instagram.com/sentimetre3/"  >
                 <img  className="w-6 h-6 lg:w-10 lg:h-10" src="../../Instagram.png" alt="insta's logo"  />
                 </a>
                    <a href="https://tiktok.com/@sentimetre3"  >
                    <img className="w-6 h-6 lg:w-10 lg:h-10" src="../../Tiktok.png" alt="Tiktok's logo"  />
                    </a>
                    <a href="https://open.spotify.com/show/2I0Bxm0BB9EH5Q6DHCO7Of?si=f796f657daf7468e"   >
                    <img className="w-6 h-6 lg:w-10 lg:h-10" src="../../Spotify.png" alt="Spotify's logo"  />
                    </a>
                    <a href="https://www.youtube.com/@sentimetre3"  >
                    <img  className="w-6 h-6 lg:w-10 lg:h-10"src="../../Youtube.png" alt="Youtube logo"  />
                    </a>
                    <a href="https://x.com/sentimetre3"  >
                    <img className="w-6 h-6 lg:w-10 lg:h-10" src="../../X.png" alt="X logo"  />
                    </a>
                    <a href="https://podcasts.apple.com/us/podcast/sentimetre/id1795190598"  >
                    <img src="../../applepodcast.png" className="w-6 h-6 lg:w-10 lg:h-10" alt="apple podcast logo"  />
                    </a>
            </div>
         </footer>


         </div>
    )    
}
export default About

