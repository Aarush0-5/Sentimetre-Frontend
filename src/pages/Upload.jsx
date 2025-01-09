import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet-async";


function PoBlCrud() {
  const [crud, setCrud] = useState("podcast");
  const navigate = useNavigate();
  const[podcasts, setPodcasts]= useState([]);
  const[blogs, setBlogs]= useState([]);
  const [error, setError]= useState(null);
  
  // Username
  const [username, setUsername] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);


  
  // Podcast post
  const [ptitle, setPtitle] = useState("");
  const [pdescription, setPdescription] = useState("");
  const [purl, setPurl] = useState("");
  const [pbg, setPbg] = useState("");
  const handleSubmitPodcast = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://sentimetre-backend.onrender.com/auth/podcast",{
        ptitle:ptitle,
        purl:purl,
        pdescription:pdescription,
        pbg:pbg,
      }, {withCredentials:true})
      toast.success("Uploaded successfully!");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message || "An error occurred.");
      }else if (error.response && error.response.status === 401) {
        toast.error(error.response.data.message || "An error occurred.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://sentimetre-backend.onrender.com/auth/${crud}`);
        if (response.data && Array.isArray(response.data.data)) {
          if (crud === "podcast") {
            setPodcasts(response.data.data);
          } else if (crud === "blog") {
            setBlogs(response.data.data);
          }
        } else {
          setError("Unexpected data format.");
        }
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
  
    fetchData();
  }, [crud]); 
  
  //Podcast delete 
    const handleDeletePodcast= async (id) => {
      try { 
        const response = await axios.delete(`https://sentimetre-backend.onrender.com/auth/podcast/${id}`,{withCredentials:true})
      setPodcasts((prevPodcasts) => prevPodcasts.filter((podcast) => podcast._id !==id));
      toast.success("podcast deleted successfully")
    }
       catch (error) {
        if (error.response && error.response.status === 400) {
          toast.error(error.response.data.message || "An error occurred.");
        }else if (error.response && error.response.status === 401) {
          toast.error(error.response.data.message || "An error occurred.");
        } else {
          toast.error("An unexpected error occurred.");
          console.log(error);
        }
      }
    }

  //Podcast edit
  const [editing, setEditing] = useState(false);
  const [editptitle, setEditPtitle] = useState('');
  const [editpdescription, setEditPdescription] = useState('');
  const[editPodcastId , setEditPodcastId] = useState(null);

   const handleEditPodcast= (podcast) => {
    setEditing(true);
    setEditPodcastId(podcast._id);
    setEditPtitle(podcast.ptitle);
    setEditPdescription(podcast.pdescription);
   }
   const handlesaveEditedPodcast = async () => {
    setEditing(false);
    try {
      const response = await axios.put(`https://sentimetre-backend.onrender.com/auth/podcast/${editPodcastId}`, {
        ptitle: editptitle,
        pdescription: editpdescription,
      }, {withCredentials: true});
      toast.success("Podcast Edited successfully");
    } catch (error) {
      toast.error("Could not edit podcast try again");
      console.log(error);
    }
  };
  

  // Logout
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(" https://sentimetre-n2m2.onrender.com/auth/logout",[], {withCredentials:true});
      document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      localStorage.removeItem("username");
      toast.success("Logout successful");
      navigate("/");
    } catch (error) {
      toast.error("Error logging out, try again");
    }
  };

  return (
    <div>

      <Helmet>
                <title>Upload</title>
                <meta name="description" content="Podcast and blog upload page." />
                <meta name="keywords" content="Sentimeter, Upload podcast, Upload blog" />
            </Helmet>
      <div className="flex justify-between items-center p-4 bg-red-500 text-white">
        <span>{username}</span>
        <button onClick={handleLogout} className="bg-gray-800 px-4 py-2 rounded">
          Logout
        </button>
      </div>
      
      <div className="border border-gray-400 p-6 m-4 bg-teal-700">
          <div className="border border-gray-400 p-4">
            {/* Upload */}
            <div>
            <h1 className="text-xl mb-4">Upload Podcast</h1>
            <form onSubmit={handleSubmitPodcast}>
              <div className="border p-4 mb-4">
                <label>Podcast Title:</label>
                <input
                  value={ptitle}
                  onChange={(e) => setPtitle(e.target.value)}
                  type="text"
                  className="border p-2 w-full mb-4"
                />
              </div>

              <div className="border p-4 mb-4" >
                <label>Upload Audio:</label>
                <input
                   value={purl}
                  onChange={(e) => setPurl(e.target.value)}
                  type="text"
                  className="border p-2 w-full mb-4"
                />
              </div>

              <div className="border p-4 mb-4">
                <label>Description:</label>
                <textarea
                  value={pdescription}
                  onChange={(e) => setPdescription(e.target.value)}
                  className="border p-2 w-full mb-4 h-24 resize-none"
                  style={{ overflowY: "auto" }}
                />
              </div>

              <div className="border p-4 mb-4">
                <label>Color:</label>
                <textarea
                  value={pbg}
                  onChange={(e) => setPbg(e.target.value)}
                  className="border p-2 w-full mb-4 h-24 resize-none"
                  style={{ overflowY: "auto" }}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 justify-center"
              >
                Upload
              </button>
            </form>
            </div>

           
       <div className="flex justify-center flex-col gap-4 mb-4 border border-gray-400 p-6 m-4 bg-teal-900">
          <h2 className="border-2 bolrder-black text-xl text-white flex justify-center">Edit Podcast</h2>
          {podcasts.length=== 0  ? "No podcasts availavle" :< div className= " bg-gray-100 overflow-y-scroll  flex flex-col gap-y-5">
          {editing ? (<>
            <form onSubmit={(e) => { 
                  e.preventDefault(); 
                  handlesaveEditedPodcast();
                }} className="flex flex-col">
          <input 
            value={editptitle || ""} 
            onChange={(e) => setEditPtitle(e.target.value)} 
            placeholder="Edit"
            className="border-2 border-black mb-2"/>
          <textarea 
            value={editpdescription || ""} 
            onChange={(e) => setEditPdescription(e.target.value)} 
            placeholder="Description"
            className="border-2 border-black overflow-y-auto resize-none overflow-scroll"
            style={{ overflowY: "auto" }}/>
          <button type="submit" className="p-2 border-2 flex items-center justify-center">Save</button>
          </form>
        </>
          ) : (podcasts.map(podcast => {
            return (
              <div key={podcast._id} className="flex border-2 border-black  justify-center text-center flex-col">
                <p className="mb-2 border-2 border-black text-xl">{podcast.ptitle}</p>
                <p className="text-xl border-2 border-black">{podcast.pdescription}</p>
                <div class="flex flex-row justify-center gap-7 font-semibold mt-3">
                 <button onClick={() => handleEditPodcast(podcast)} className="text-l hover:text-blue-500">Edit </button>
                 <button  onClick={() =>handleDeletePodcast(podcast._id)} className="text-l hover:text-red-600">Delete</button>
                </div>
              </div>
            )
            })) }
            
          </div>}
         
        </div>

            </div>   
      </div>

    </div>
  );
}
export default PoBlCrud;

