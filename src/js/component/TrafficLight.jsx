import React, {useState, useEffect} from "react";

const TrafficLight = () => {

    const[selected,setSelected]= useState("red")
    const[active, setActive]= useState(false)


    const changeColor = (color) =>{ 
        setSelected (color)   
    
    }
    useEffect (()=>{
        if (active){
            const interval = setInterval (()=>{
                if(selected == "red"){
                   setSelected("yellow")
                    } else if (selected == "yellow"){
                     setSelected("green")
                    }else if (selected == "green"){
                     setSelected("red")}
            },2000)
            return ()=> clearInterval(interval)
        }
    },[active,selected])


    return (
       <main>
        <div className="p-box"></div>
        <div className="light-box">

            <div className={`red ${selected == "red" ? "light-on": ""}`}
            onClick={()=> changeColor ("red")}
            ></div>

			<div className={`yellow ${selected == "yellow" ? "light-on": ""}`}
              onClick={()=> changeColor ("yellow")}
            ></div>

			<div className={`green ${selected == "green" ? "light-on": ""}`}
              onClick={()=> changeColor ("green")}
            ></div>

        </div>

        <button  onClick={() => setActive (!active)} className="btn btn-secondary mx-auto">Activar</button>

       </main>


    )
}

export default TrafficLight; 