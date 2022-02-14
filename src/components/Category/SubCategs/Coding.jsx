import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../../state/getCategories";


function Coding() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.category.data)

  useEffect(() => {
    dispatch(getCategory("coding"));
  });

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
              <h1>Coding Giphys</h1>
              {renderGifs()}
            </div>
           
        )

}

export default Coding;