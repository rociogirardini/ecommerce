import { Link } from "react-router-dom";
import { BiStore } from "react-icons/bi";
const SobreMi = () => {

  return (
    <div className="container myInfoMain">
      <div className="row m-5">
        <div className="col">
          <img
            src={require('./media/TobiasRodriguez.jpg')}
            alt="img Sobre mi"
            className="img img-fluid"
          />
        </div>
        <div className="col col-7">
          <h2 className="myInfoTitle">¡HOLA! SOY TOBÍAS</h2>
          <br />
          <p>
            Aunque me dicen Toto. Soy un fotógrafo y videófrago de la ciudad de
            Alta Gracia, Córdoba. Me dedico a esto hace varios años y realmente
            es mi pasión.
            <br />
            <br />
            En esta web vas a encontrar parte de mis trabajos, es decir, una
            parte de mí. Y, si te gustan las fotografías, vas a poder
            adquirirlas en forma de cuadro.
            <br />
            <br />
          </p>
          <span>
            Te invito a ver algunas de ellas en la{" "}
            <Link to="/productos" className="btn btnSolid">
              Tienda <BiStore color="white" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default SobreMi;
