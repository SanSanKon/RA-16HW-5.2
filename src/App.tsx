import './App.css'
import Nav from './components/Nav'
import News from './components/News';
import OtherStaff from './components/OtherStaff'
import Search from './components/Search'

function App() {

  const newsArray = [
    {
      icon: "Some icon",
      text: "Some news text",
      link: "Some news link"
    },
    {
      icon: "Some icon 1",
      text: "Some news text 1",
      link: "Some news link 1"
    },
    {
      icon: "Some icon 2",
      text: "Some news text 2",
      link: "Some news link 2"
    },
    {
      icon: "Some icon 3",
      text: "Some news text 3",
      link: "Some news link 3"
    },
    {
      icon: "Some icon 4",
      text: "Some news text 4",
      link: "Some news link 4"
    }
  ];


  return (
    <>
       <Nav /> {/* Верхняя навигация переключения: Сейчас в СМИ и т.п */}
      <News newsArray={newsArray} /> {/* Новосити */}
      <Search /> {/* Компонент с поиском */}
      <OtherStaff /> {/* Все, что под полем поиска */}
    </>
  )
}

export default App
