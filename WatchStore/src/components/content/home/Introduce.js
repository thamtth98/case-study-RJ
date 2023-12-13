import { Container, Grid, Button, Typography } from "@mui/material";
import introduce from "../../../assets/images/introduce.jpg";

function Introduce() {
  return (
    <div style={{ background: "linear-gradient(to bottom, #fff, #8ed1fc)" }}>
      <Grid
        container
        mt={18}
        className="mx-auto d-flex justify-content-center align-items-center"
      >
        <Grid item lg={6} md={6} sm={12} xs={12} mb={3} p={8}>
          <Typography variant="h4">
            <b>Thế giới đồng hồ chính hãng.</b>
          </Typography>

          <Typography variant="h6" mt={2}>
            Được thành lập vào năm 2020, trải qua hơn 3 năm hoạt động và phát
            triển, WatchStore trở thành đại lý ủy quyền cho rất nhiều thương
            hiệu đến từ Nhật Bản và Thụy Sỹ chuyên bán đồng hồ chính hãng Chính
            sách bảo hành 5 năm cùng với các chương trình giảm giá tốt sẽ giúp
            bạn mua sắm dễ dàng. Với đội ngũ nhân viên tận tình, am hiểu về đồng
            hồ, WatchStore rất vui được phục vụ quý khách
          </Typography>
          <Grid item lg={12} mt={5}>
            <div className="btn-introduce">
              <a href="/products">Xem thêm</a>
            </div>
          </Grid>
        </Grid>

        <Grid item lg={2} md={2} sm={12} xs={12}>
          {" "}
        </Grid>

        <Grid item lg={4} md={4} sm={12} xs={12}>
          <img src={introduce} width="100%" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Introduce;
