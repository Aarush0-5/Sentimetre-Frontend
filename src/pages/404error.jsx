import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
    return (
      <div>
         <Helmet>
      <title>404 Not Found</title>
      <meta name="description" content="404 Error Page" />
      <meta name="keywords" content="Sentimeter, error, 404 , 404 error" />
         </Helmet>
    <div className="h-screen flex flex-col justify-center items-center gap-y-3 bg-black"> 
      <h1 className="border-3 border-black text-white text-xl">404 Error!</h1>
      <p className="border-3 border-black text-white text-l">The page you are trying to visit does not exists. Kindly check the url path !</p>
      <button className="border-2 rounded-l bg-blue-500 text-black hover:bg-red-600"><Link to="/">Go to home</Link></button>
   </div>
   </div>
       )
}

export default NotFound;