import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { setFavorite, removeFavorite } from '../state/favoriteReducer';


const GiphyInfo = () => {
    const data = localStorage.getItem("data");
    const parse = JSON.parse(data);
    const [local, setLocal] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
      if (parse){
         setLocal(true)
      }
    }, [])

const addToFavorite = () => {
   
}

   
    if(local) { return  (
        <div>
        <h4>{parse.title}</h4>
        <div>
            <div>
                <img src={parse.images.fixed_height.url}/>
            </div>
            <button onClick={() => addToFavorite()} >Add to favorite</button>
            <div>
                <span>Имя профиля:</span>
                <span> {parse.username} </span>
                <br/>
                <div>
                    <span>Ссылка на аккаунт:</span>
                        <a href={`${parse.user.profile_url}`}>Перейти по
                            профилю: {parse.username}... </a>
                </div>
                <div>
                    <span>Дата добавление:</span>
                    <span> {parse.import_datetime} </span>
                </div>
                <div>
                    <span>Внешяя ссылка:</span>
                    <a href={`${parse.url}`}>Перейти по внешной ссылки... </a>
                </div>
            </div>
        </div>
    </div>
        
    )} 

    return  <h3>Данные в локальном хранилище нету информации этого гифки </h3>
    
}
export default GiphyInfo;

