import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandom } from "../../state/getRandom";

function Random() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.random.data)

  useEffect(() => {
    dispatch(getRandom());
  });

  console.log(data);

  

        return (
            <div>
              <h1>Random Giphys</h1>
            </div>
           
        )

}

export default Random;