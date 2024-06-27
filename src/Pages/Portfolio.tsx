import { useNavigate } from "react-router";


const Portfolio = () => {
   const navigate = useNavigate();
   const goToHome = () => {
     navigate("/");
   };
    return (
       <>
       <h1>Portfolio</h1>
       <button onClick={goToHome}>Home</button>
       </>
    );
  };
  
  export default Portfolio;

//   https://react-device-frameset.zheeeng.me/