import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrending } from "../../state/getTrending";
import s from "./Trending.module.css"

function Trending() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.trending.data)

  useEffect(() => {
    dispatch(getTrending());
  }, []);

  console.log(data)

  const renderGifs = () => {
  
    return (
       <div>
         {data.map((el) => (

                <img key={el.id} src={el.images.fixed_height.url}/>
                
            ))}
       </div>
    )
}

        return (
            <div>
              <h1>Trending Giphys</h1>
              {renderGifs()}
            </div>
           
        )

}

export default Trending;
