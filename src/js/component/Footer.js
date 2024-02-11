import React from "react";
const whiteColor = {
    Color: "white"
}
// Revisar Por qué no aplica el style whiteColor?
const Footer = () =>{
    return (
        <footer className="container-fluid bg-secondary d-flex justify-content-center text-white" style={{whiteColor}}>
            <div className="row">
                <div className="col-lg-12">
                    <p className="justify-content-center mt-2">
                        Copyright @ Your Website 2018
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;