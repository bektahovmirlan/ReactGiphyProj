import axios from 'axios';
import { useState } from 'react';

export const fetchTrending = async() => {
        const [Data, setData] = useState([]);

        let URL = `https://api.giphy.com/v1/gifs/trending?&api_key=${process.env.REACT_APP_API_KEY}&limit=${limit}&offset=${offset}`;
        let fetchGif = await axios(URL);
        let fetchRes = await fetchGif;
        // Set State console log
        
        setData(fetchRes.data.data)
}