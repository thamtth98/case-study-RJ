import { Container, Grid, Typography, Link } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  const info = [
    "Thông tin liên hệ",
    "Thanh toán - trả góp",
    "Vận chuyển và giao nhận",
  ];
    const adr = [
      "Hồ Chí Minh",
      "Hà Nội",
      "Đà Nẵng",
      "Hải Phòng",
  ];
  const service = [
    "Chính sách đổi hàng",
    "Chính sách bảo hành"
];

  return (
   
    <div style={{ marginTop: "80px", backgroundColor: "#cf2e2e" }}>
      <Container className="pt-5 pb-5" sx={{ backgroundColor: "#cf2e2e", color:"white"}}>
        <Grid container>
          <Grid item xs={6} lg={3} md={3} sm={3}>
            <Typography variant="h6">
              <b>THÔNG TIN</b>
            </Typography>
            {info.map(function (element, index) {
              return (
                <Grid item xs={12} key={index}>
                  <Typography variant="caption">{element}</Typography>
                </Grid>
              );
            })}
          </Grid>

          <Grid item xs={6} lg={3} md={3} sm={3}>
            <Typography variant="h6">
              <b>CHÍNH SÁCH</b>
            </Typography>
            {service.map(function (element, index) {
              return (
                <Grid item xs={12} key={index}>
                  <Typography variant="caption">{element}</Typography>
                </Grid>
              );
            })}
          </Grid>

          <Grid item xs={6} lg={3} md={3} sm={3}>
            <Typography variant="h6">
              <b>HỆ THỐNG CỬA HÀNG</b>
            </Typography>
            {adr.map(function (element, index) {
              return (
                <Grid item xs={12} key={index}>
                  <Typography variant="caption">{element}</Typography>
                </Grid>
              );
            })}
          </Grid>

          <Grid
            item
            xs={6}
            lg={3}
            md={3}
            sm={3}
            align="center"
            className="pt-4"
          >

            <Typography variant="h4">
              <b>WatchStore</b>
            </Typography>
            <Grid container className="d-flex justify-content-center mt-3">
              <Link
                href="https://www.facebook.com/"
                sx={{ mr: 2, color: "white" }}
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://www.instagram.com/"
                sx={{ mr: 2, color: "white" }}
              >
                <InstagramIcon />
              </Link>
              <Link
                href="https://www.youtube.com/"
                sx={{ mr: 2, color: "white" }}
              >
                <YouTubeIcon />
              </Link>
              <Link href="https://twitter.com/" sx={{ color: "white" }}>
                <TwitterIcon />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
