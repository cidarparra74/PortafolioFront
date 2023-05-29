import "./About.css";
import foto from "../../assets/perfil.png";
import bg from "../../assets/BG.png";
import { Stack } from "@mui/material";
import Tecnologias from "./tecnologias/Technology";


export default function About() {
  return (
    <div>
      <section className="container-about">
        <Stack direction="row" spacing={2}>
          <div className="image-container">
            <img src={bg} className="bg-foto" />
            <img src={foto} alt="perfil" className="foto" />
          </div>

          <div className="aboutme">
            <div className="text-about">
              <h3 className="title">Un poco sobre mi</h3>
              <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio, nemo illo. Illum harum porro officia fugit veritatis
                cumque. Cum cupiditate neque culpa dolore itaque expedita
                tempora! Minus eum ea vero? Is a long established fact that a
                reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it
                has a more-or-less normal distribution of letters, as opposed to
                using 'Content
              </p>
            </div>
          </div>
        </Stack>
      </section>
      <section>
        <Tecnologias/>
      </section>
    </div>
  );
}
