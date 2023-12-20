import search from "../img/search.svg"
import "../App.css"
import { v4 as uuidv4 } from "uuid"

const Search: React.FC = () => {

    const searchListArray: string[] = [
        "Видео", 
        "Картинки", 
        "Новости", 
        "Карты", 
        "Маркет", 
        "Переводчик", 
        "Эфир", 
        "ещё"
    ];

    return (
        <div className="search">
            <div className="search-container">
                <nav className="search-navigation">
                    <ul className="search-list">
                        {searchListArray.map((item) => (
                            <li className="searchlist-item" key={uuidv4()}><a href="">{item}</a></li>
                        ))}
                    </ul>
                </nav>
                <div className="search-input"> 
                    <div className="search-form">
                        <img src={search} alt="magnifying glass" />
                        <form className="inner-search-form">
                            <input />
                            <button>Найти</button>
                        </form>
                    </div>
                    <p>Найдется все. Например, <a href="">всякое разное</a></p>
                </div>
            </div>
            <div className="search-advertisement">
                <img src="" />
            </div>
        </div>
    )
}

export default Search;