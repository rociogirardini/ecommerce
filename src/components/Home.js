import { Link } from "react-router-dom";
import { BiStore } from "react-icons/bi";

const Home = () => {
  return (
    <>
      {/* ---------- Carousel ---------- */}
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleFade"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleFade" data-slide-to="1"></li>
          <li data-target="#carouselExampleFade" data-slide-to="2"></li>
          <li data-target="#carouselExampleFade" data-slide-to="3"></li>
          <li data-target="#carouselExampleFade" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require('./media/slide1.jpg')}
              className="d-block w-100"
              alt="imgCarousel"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require('./media/slide2.jpg')}
              className="d-block w-100"
              alt="imgCarousel"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require('./media/slide3.jpg')}
              className="d-block w-100"
              alt="imgCarousel"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require('./media/slide4.jpg')}
              className="d-block w-100"
              alt="imgCarousel"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require('./media/slide5.jpg')}
              className="d-block w-100"
              alt="imgCarousel"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* ---------- Main ---------- */}

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
            <h2 className="myInfoTitle">??HOLA! SOY TOB??AS</h2>
            <br />
            <p>
              Aunque me dicen Toto. Soy un fot??grafo y vide??frago de la ciudad
              de Alta Gracia, C??rdoba. Me dedico a esto hace varios a??os y
              realmente es mi pasi??n.
              <br />
              <br />
              En esta web vas a encontrar parte de mis trabajos, es decir, una
              parte de m??. Y, si te gustan las fotograf??as, vas a poder
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
    </>
  );
};

export default Home;
