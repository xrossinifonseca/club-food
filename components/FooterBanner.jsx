import React from "react";
import { urlFor } from "../lib/client";

const FooterBanner = ({ FooterBanner: { image } }) => {
  return (
    <div className="footerbanner-container">
      <div className="footerbanner">
        <img src={urlFor(image)} className="footer-image" />

        <div>
          <h5>A maior variedade de frutas, legumes e verduras.</h5>
          <p>
            Peça sem sair de casa, deixa que a gente te entrega tudo o que
            precisar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
