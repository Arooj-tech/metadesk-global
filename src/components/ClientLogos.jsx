import React from "react";

import logoTicker from "../assets/logos/logo ticker.png";


const ClientLogos = () => {


  return (

    <section className="bg-white py-8">
  <div className="max-w-300 mx-auto px-6 h-30 flex items-center justify-center">
    
    <img
      src={logoTicker}
      alt="Clients"
      className="w-full max-w-225 object-contain"
    />

  </div>
</section>
  );

};


export default ClientLogos;