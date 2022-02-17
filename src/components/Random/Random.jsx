import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandom } from "../../state/getRandom";

function Random() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.random.data)

  useEffect(() => {
    dispatch(getRandom());
  },[dispatch]);

  console.log(data);

  const renderGifs = () => {
  
    return (
       <div>
         {data.map((el) => (

                <img key={el.id} src={el.images.fixed_height.url} alt="img"/>
                
            ))}
       </div>
    )
}
  

        return (
            <div>
              <h1>Random Giphys</h1>
                {renderGifs()}
            </div>
           
        )

}

export default Random;