import { useState } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";

const Nav: React.FC = () => {
    const navMenu = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем'];
    const getDate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${month}/${date}/${year}`;
      }
    
    const [ date, setDate ] = useState(getDate());

    return (
        <div className="nav-container">
            {navMenu.map(item => 
                <div key={uuidv4()} className="nav-news">
                    <a href="">{item}</a>
                </div>    
            )}
            <div>{date}</div>
        </div>
    )
}

export default Nav;