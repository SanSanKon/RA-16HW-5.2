import { v4 as uuidv4 } from "uuid";

const News: React.FC = ({newsArray}) => {
    console.log(newsArray);
 return (
    <div className="news-container">
        {newsArray.map((item) => (
            <div key={uuidv4()} className="currentnews-container">
                <img src={item.icon}/>
                <p>{item.text}<a href={item.link}></a></p>
            </div>
        ))}
    </div>
 )
}

export default News;