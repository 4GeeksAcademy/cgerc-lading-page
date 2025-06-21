import Card from "./Card";
import Footer from "./Footer";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";


const Home = () => {
  return (
    <>
      <Navbar title={"INICIO"} />
      <Jumbotron title={"ASESORIAS E INVERSIONES CHACÓN"} />
      <div class="row ">
        <div class="col ">
          <Card title={"Gestión proyectos de construcción"} imageUrl={"https://advance.unab.cl/assets/uploads/2021/11/Ingenieria-Civil-Industrial-Que-hacen.webp"} description={"Ofrecemos asesoría completa en la búsqueda de arquitectos y especialistas, gestionamos licitaciones privadas con constructoras y supervisamos la ejecución del proyecto para asegurar su éxito."} />

        </div>
        <div class="col">
          <Card title={"Arriendo de maquinarias para construcción"} imageUrl={"https://cdnx.jumpseller.com/casticar/image/51097924/resize/1200/1200?1721933730"} description={"Incluye: plataformas elevadoras, generadores eléctricos, compresores de aire, torres de iluminación, motobombas, soldadoras, taladros, esmeriles , sierras, etc."} />

        </div>
        <div class="col">
          <Card title={"Traslado de materiales"} imageUrl={"https://www.16valvulas.com.ar/wp-content/uploads/2017/05/nuevo-kia-k2500.jpg"} description={" Este servicio abarca desde la planificación logística y la selección del transporte adecuado, hasta la carga, descarga, embalaje y protección de los materiales. También incluye la gestión de la documentación necesaria y, a menudo, el seguimiento en tiempo real de la carga, todo con el fin de asegurar que los materiales lleguen de forma segura, eficiente y optimizando los costos."} />

        </div>
        <div class="col">
          <Card title={"Servicio de limpieza clínica"} imageUrl={"https://wipp.cl/wp-content/uploads/2019/11/personal-de-aseo-en-chile.jpg.webp"} description={"Un servicio de limpieza clínica va mucho más allá de la limpieza convencional; es un conjunto de procedimientos especializados diseñados para mantener entornos de salud estériles, seguros y libres de patógenos. Este servicio es crucial en hospitales, clínicas, consultorios médicos, laboratorios y cualquier instalación donde la higiene es vital para prevenir la propagación de infecciones y proteger la salud de nuestros clientes."} />

        </div>

      </div>
      <Footer title={"Company"}/>
    </>

  );
};

export default Home;