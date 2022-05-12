import React from "react";
import useServices from "../../../Hooks/useServices.js";
import HomeService from "../HomeService/HomeService.js";

const Service = () => {
  const [services] = useServices();
  return (
    <div className="my-5 container">
      <h1 className="text-primary text-center my-5">My Education Service</h1>
      <div className="g-5 row">
        {services.slice(0, 3).map((service) => (
          <HomeService key={service.id} service={service}></HomeService>
        ))}
      </div>
    </div>
  );
};

export default Service;
