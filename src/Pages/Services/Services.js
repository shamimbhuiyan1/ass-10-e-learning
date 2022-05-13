import React from "react";
import useServices from "../../Hooks/useServices";
import ServiceMain from "../ServiceMain/ServiceMain";

const Services = () => {
  const [services] = useServices();
  return (
    <div className="my-5 container">
      <h1 className="text-primary text-center mt-5">My Education services</h1>
      <div className="g-5 row">
        {services.map((service) => (
          <ServiceMain key={service.id} service={service}></ServiceMain>
        ))}
      </div>
    </div>
  );
};

export default Services;
