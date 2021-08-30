import React from "react";
import "./Store.css";

import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const StoreList = ({ clothes, textSearch, quality }) => {
  return (
    <div>
      <div className="container page-wrapper">
        <div className="page-inner">
          <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
            {clothes
              .filter((ele) =>
                ele.name.toLowerCase().includes(textSearch.toLowerCase())
              )
              .filter((ele) => ele.quality >= quality)
              .map((ele) => (
                <div className="el-wrapper" key={ele.id}>
                  <div className="box-up">
                    <img className="img" src={ele.image} alt="" />
                    <div className="img-info">
                      <div className="info-inner">
                        <span className="p-name">{ele.name}</span>
                        <Box
                          component="fieldset"
                          mb={3}
                          borderColor="transparent"
                        >
                          <Typography component="legend">Quality</Typography>
                          <Rating
                            name="read-only"
                            value={ele.quality}
                            readOnly
                          />
                        </Box>
                      </div>

                      <div className="a-size">
                        Available sizes :{" "}
                        <span className="size">S , M , L , XL</span>
                      </div>
                    </div>
                  </div>
                  <div className="box-down">
                    <div className="h-bg">
                      <div className="h-bg-inner" />
                    </div>
                    <a className="cart" href>
                      <span className="price">{ele.price}</span>
                      <span className="add-to-cart">
                        <span className="txt">Add in cart</span>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreList;
