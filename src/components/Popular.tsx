import cloudy from "../img/cloudy.png";
import play from "../img/play.svg";
import { v4 as uuidv4 } from "uuid";

type Props = {
    weather: string;
    map: string;
    onair: string;
}


const Popular: React.FC<Props> = ({weather, map, onair}) => {

    const schedule = [
        {
            title: "Управление как искусство",
            channel: "Успех"    
        },
        {
            title: "Ночь. Мир в это время",
            channel: "earthTV"
        },
        {
            title: "Чье-то имя и фамилия",
            channel: "Совершенно секретно"
        }
    ]

    if (weather) {
        return (
        <div className="popular-container">
            <div className="weather-container">
                <h3>{weather}</h3>
                <div className="forecast-container">
                    <div className="forecast-current">
                        <img src={cloudy} alt="cloudy"/>
                        <p>+17</p>
                    </div>
                    <div className="forecast-future">
                        <p>Утром +17</p>
                        <p>днем +20</p>
                    </div>
                </div>
            </div>
            <div className="visited-container">
                <h3>Посещаемое</h3>
                <p><b>Недвижимость</b> - о сталинках</p>
                <p><b>Маркет</b> - люстры и светильники</p>
                <p><b>Авто.ру</b> - привод 4х4 до 500 000</p>
            </div>
        </div>
    )} else if (map) {
        return (
            <div className="popular-container">
                <div className="map-container">
                    <h3>{map}</h3>
                    <p>Расписания</p>
                </div>
                <div className="tv-container">
                    <div className="tv-programm">
                        <h3>Телепрограмма</h3>
                        <button><a href="">Эфир</a></button>
                    </div>
                    <div className="schedule">
                        <p><span>02:00</span><span>ТНТ.Best</span><span>THT International</span></p>
                        <p><span>02:15</span><span>Джинглики</span><span>Карусель INT</span></p>
                        <p><span>02:25</span><span>Наедине со всеми</span><span>Первый</span></p>
                    </div>
                </div>
            </div>
    )} else if(onair) {
        return(
            <div className="popular-container">
                <div className="onair-container">
                    <h3>{onair}</h3>
                    <div className="onair-schedule-container">
                        {schedule.map((item) => (
                            <p key={uuidv4()}>
                                <img src={play} />
                                <span className="onair-title">{item.title}</span>
                                <span>{item.channel}</span>
                            </p>
                        ))}
                    </div>
                </div>
            </div>)
    }

}

export default Popular;