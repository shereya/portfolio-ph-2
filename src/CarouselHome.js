import React,{useState,useEffect} from "react";
import "./styles.css";
function CarouselHome()
{
    let [c,setC] = useState(0);
    let Image1=require("./Pictures Portfolio/Computer.jpeg");
    let Image2=require("./Pictures Portfolio/Coffee.jpeg");
    let Image3=require("./Pictures Portfolio/Camera.png");
    useEffect(() => {
        const interval = setInterval(()=>{
            if(c===0||c===1)
            {
                setC(++c);
            }
            else
            {
                setC(0);
            }
        },3000);
        return () => clearInterval(interval);
    },[c]);
    if(c===0)
    {
        return <div className="img-box"><img className="computer-img" src={Image1}></img></div>
    }
    if(c===1)
    {
        return <div className="img-box"><img className="coffee.img"src={Image2}></img></div>
    }
    if(c===2)
    {
        return <div className="img-box"><img className="camera-img "src={Image3}></img></div>
    }
}
export default CarouselHome;