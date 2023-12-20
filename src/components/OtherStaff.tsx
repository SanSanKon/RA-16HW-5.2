import "../App.css"
import Popular from "./Popular";

const OtherStaff: React.FC = () => {
    const weather: string = "Погода";
    const map: string = "Карта Германии";
    const onair: string = "Эфир";
    
    return(
        <div className="otherStuff-container">
            <Popular weather={weather} map={""} onair={""}  />
            <Popular map={map} weather={""} onair={""} />
            <Popular  onair={onair} weather={""} map={""} />
        </div>
    );
}

export default OtherStaff;