const Footer = ()=> {
    return (

<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
    <p>© 2025 GER Company, Inc. All rights reserved.</p>
    <ul className="list-unstyled d-flex">
        <li className="ms-3"><a class="link-body-emphasis" href="#" aria-label="Instagram">
            <svg className="bi" width="24" height="24">
                <use xlinkHref="#instagram">
                    </use></svg></a>
                    </li> 
                    <li className="ms-3">
                        <a className="link-body-emphasis" href="#" aria-label="Facebook">
                            <svg className="bi" width="24" height="24" aria-hidden="true">
                                <use xlinkHref="#facebook"></use>
                                </svg>
                                </a>
                                </li> 
                                </ul> 
                                </div>
    );
}

export default Footer;
