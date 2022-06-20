import {useEffect} from "react";
import './app.css';
import SearchIcon from './search.svg';



// 8272c623
const API_URL = 'http://www.ombdapi.com?apikey=8272c623';



const App = () => {


const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    console.log(data.search);
    
}

    useEffect(() => {
  searchMovies('Batman')
    }, []);
    return (
        <div className="app">
        <h1>Movieland</h1>
        <div className="search">
            <input placeholder="Search for Movies" value="Superman" onChange={() => {}} type="text" />
            <img src={SearchIcon} alt="search" onClick={() => {}} />
        </div>
        <div className="container">

        </div>
        </div>
    )
};

export default App;