import "./styles/home.css";
import stroke from "../../components/icons/stroke.svg";
import image from "../../assets/Image.png";
import LocalFireDepartmentSharpIcon from "@mui/icons-material/LocalFireDepartmentSharp";
import SearchIcon from "@mui/icons-material/Search";
import { Container, Grid, Stack } from "@mui/material";
import SwipeSlider from "./slider/slider";
import TestimonialsSection from "../testimonials/ContactBanner";
import AboutHome from "../../components/molecules/about/AboutHome";


export default function Home() {
  return (
    <div className="container-home">
      <section className="container-project">
        <Stack direction="row" spacing={2}>
          <div className="name-container">
            <h2 className="name">
              Soy diseñador asassasasasUX/UI y soy Desarrollador fullstack
              Developerasasass{" "}
            </h2>
            <button className="btn-mirar">Mira mis proyectos web</button>
          </div>
          <div>
            <img className="image-project" src={image} alt="project img" />
          </div>
        </Stack>
      </section>
      <Container className="container-diferencia">
        <h2 className="title-diferent">¿Que me hace diferente?</h2>
        <Grid
          container
          columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          
          alignContent="center"
          justifyContent="center">
          <Grid xs={4} spacing={1} className="diseño">
            <img src={stroke} alt="" />
            <h3>Disenio Atractivo</h3>
            <p>
            El diseño es nuestro principal fuerte ya que nos encargamos que tu página web siga los estándares y tendencias internacionales.
            </p>
          </Grid>
          <Grid xs={4} spacing={1} className="web">
            <SearchIcon
              sx={{
                color: "#0591F5",
                fontSize: 55,
                background: "#E1F1FD",
                borderRadius: "12px",
              }}
            />
            <h3>Pocicionamiento web</h3>
            <p>
            El diseño es nuestro principal fuerte ya que nos encargamos que tu página web siga los estándares y tendencias internacionales.
            </p>
          </Grid>
          <Grid xs={4} spacing={1} className="desa">
            <LocalFireDepartmentSharpIcon
              sx={{
                color: "red",
                fontSize: 55,
                background: "#FBD7DD",
                borderRadius: "12px",
              }}
            />
            <h3>Desarrollo eficaz</h3>
            <p>
            El diseño es nuestro principal fuerte ya que nos encargamos que tu página web siga los estándares y tendencias internacionales.
            </p>
          </Grid>
        </Grid>
      </Container>

    <section className="slider">
        <SwipeSlider />
      </section>
      <section>
        <AboutHome/>
      </section> 
     
    </div>
  );
}
