import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTrending } from "../../state/getTrending";

function Trending() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.trending.data)

  useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);

  console.log(data)

  const trendingMap = data.map((el, index) => (
    <Link key={index} to="/giphyinfo">
    <img onClick={()=>infoGiphy(el)} key={el.id} src={el.images.fixed_height.url} alt="IMG"/>
    </Link>
  ))

  const infoGiphy =(data) =>{
    localStorage.setItem("data", JSON.stringify(data))
  }

  const renderGifs = () => {
  
    return (
       <div>
         {trendingMap}
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
