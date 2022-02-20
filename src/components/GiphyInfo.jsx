import React, {useEffect, useState} from 'react';

const GiphyInfo = () => {
    const data = localStorage.getItem("data");
    const parse = JSON.parse(data);
    const [local, setLocal] = useState(false);

    useEffect(() => {
      if (parse){
         setLocal(true)
      }
    }, [])

    console.log(parse)
   
    if(local) { return  (
        <div>
        <h4>{parse.title}</h4>
        <div>
            <div>
                <img src={parse.images.fixed_height.url}/>
            </div>
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

