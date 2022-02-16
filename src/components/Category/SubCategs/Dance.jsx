import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../state/getCategories";


function Random() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.category.data)

  useEffect(() => {
    dispatch(getCategory("dancing"));
  },[]);

 console.log(data);

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
              <h1>Dancing Giphys</h1>
              {renderGifs()}
            </div>
           
        )

}

export default Random;