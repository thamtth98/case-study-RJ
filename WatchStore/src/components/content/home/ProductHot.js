import { Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { NavLink } from 'react-router-dom';


import { useState, useEffect } from "react";


function ProductHot() {
  const [productHot, setProductHot] = useState([]);

  const fetchAPI = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  useEffect(() => {
    fetchAPI("https://my-store-node-js.vercel.app/products/?limit=6&skip=7")
      .then((data) => {
        setProductHot(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <Container>
      {/* ////////  * PRODUCT *    ////////////// */}
      <Grid item xs={12} mt={12} mb={4}>
        <div className="header">
          <h5 className="title">
            <b>Sản phẩm nổi bật</b>
          </h5>
        </div>
        {/* <Typography variant="h5" className="text-center"><b>Sản phẩm nổi bật</b></Typography> */}
      </Grid>
      <Grid container>
        {productHot.map((product, index) => {
          return (
            <Grid item xs={6} lg={2} md={3} sm={6} className="p-2 pb-5 animate__animated animate__backInLeft" key={index}>
              <NavLink to={product._id} style={{ textDecoration: "none" }}>
                <div className="product-card">
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        // height="140"
                        width="200"
                        image={product.imageUrl}
                        alt="green iguana"
                      // className="img-card"
                      />
                      <CardContent>
                        <Typography
                          mt={2}
                          variant="h6"
                          style={{ fontSize: "16px", height: "50px", opacity: "0.8" }}
                          component="div"
                          className="name-product"
                          align="center"
                        >
                          <b>{product.name}</b>
                        </Typography>
                      </CardContent>

                      {/* <Grid container sx={{ pt: 1, pb: 2 }}>
                        <Grid item xs={6} align="right">
                          <Typography variant="body1" sx={{ mr: 2, fontSize: "16px", opacity: "0.6" }}>
                            <strike><b>${numberWithCommas(product.buyPrice)}</b></strike>
                          </Typography>
                        </Grid>
                        <Grid item xs={6} >
                          <Typography variant="h6" sx={{ color: "red" }}>
                            <b>${numberWithCommas(product.promotionPrice)}</b>
                          </Typography>
                        </Grid>
                      </Grid> */}
                    </CardActionArea>
                  </Card>
                </div>
              </NavLink>
            </Grid>
          );
        })}
      </Grid>

      <Grid item xs={12} style={{ textAlign: "center" }}>
        <NavLink to="/products" style={{ textDecoration: "none" }}>
          <button
            // variant="contained"
            className="btn btn-primary btn-lg disabled"
          >
            <span>Xem thêm</span>
          </button>
        </NavLink>
      </Grid>
    </Container>
  );
}

export default ProductHot;
