import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    
    const nagative=useNavigate();
    
    const handelBack=()=>{
        nagative(-1)
    }

    return (
        <div className="text-8xl text-center font-bold">
            <h1>404 Error 👊 </h1>
            <button className="btn text-3xl  border-teal-400" onClick={handelBack}>Go Back</button>

        </div>
    );
};

export default ErrorPage;