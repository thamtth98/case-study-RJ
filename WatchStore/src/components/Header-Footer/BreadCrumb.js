import { Container, Grid, Breadcrumbs } from "@mui/material";
import { NavLink } from 'react-router-dom';



function BreadCrumb({ breadCrumbs }) {
    return (
        <div style={{ backgroundColor: "rgb(207,46,46) 100%) )" }}>
            <Container>
                <Grid container mt={1}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb" color="blue">
                        {
                            breadCrumbs.map((page, index) => {
                                return (
                                    <NavLink to={page.route} underline="hover" color="inherit" key={index}
                                        style={{ textDecoration: "none", color: "blue" }}>
                                        <div className="BreadCrumb">{page.name} </div>
                                    </NavLink>
                                )
                            })
                        }
                    </Breadcrumbs>

                </Grid>
            </Container>
        </div>
    )
}

export default BreadCrumb;