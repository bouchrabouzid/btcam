import Car from "./components/Car.jsx";
import Events from "./components/Events.jsx";
import Phone from "./components/phone.jsx"; 
import Color from "./components/colors.jsx";

export default function App() {
    const carinfo = { name: "Ford", model: "Mustang" };

    return (
        <div className='App' style={{border: "3px solid blue", padding: "10px"}}>
            <div style={{border: "3px solid green" , padding: "10px"}}>

            <Car carInfo={carinfo} />
            <Events/>
            <Phone/>
             <hr />
            <colors />
            </div>
        </div>
    )
}



