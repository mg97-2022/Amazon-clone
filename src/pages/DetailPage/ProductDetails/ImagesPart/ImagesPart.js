import React, { useEffect, useState } from "react";
import Card from "../../../../components/ui/Card/Card";
import classes from "./ImagesPart.module.css";

function ImagesPart({ images }) {
  const [imgIndex, setImgIndex] = useState(0);

  const changeImageHandler = (e) => {
    setImgIndex(e.target.id);
  };

  return (
    <Card className={classes.imgs_container}>
      <div className={classes.imgs}>
        {images.map((img, i) => {
          return (
            <div key={i}>
              <img
                className={+imgIndex === +i && classes.active_img}
                id={i}
                onMouseEnter={changeImageHandler}
                src={img}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className={classes.show_img}>
        <img src={images[imgIndex]} alt="" />
      </div>
    </Card>
  );
}

export default ImagesPart;
