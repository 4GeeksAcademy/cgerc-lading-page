const Jumbotron = (props) => {
    return (
        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">{props.title}</h1>
                <p class="col-md-8 fs-4">Nuestro conocimiento profundo del retail chileno nos permite identificar las mejores oportunidades y mitigar los riesgos, asegurando que sus decisiones estén siempre respaldadas por la información más relevante y actualizada. Brindamos soluciones estratégicas adaptadas a las condiciones actuales del mercado.</p> 
                <button class="btn btn-primary btn-lg" type="button">Conoce más aquí</button> 
            </div> 
        </div>
    );
}
export default Jumbotron;