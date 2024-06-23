import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FilterServices from "../components/FilterServices";
import { Container, Services, Body } from "./Profil";
import store from "../redux/store";
import NavbarHome from "../components/NavbarHome";
import Service from "../components/Service";
import ServiceNotFound from "../components/ServiceNotFound";

const Home = () => {
  // **** useNavigate ****/
  const navigate = useNavigate();

  // ****States****
  const [services, setServices] = useState([]);

  // ****Logic****

  // ****Profil test & set states****
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo) navigate("/admin-users");
    } else {
      if (store.getState().length === 0)
        store.dispatch({
          type: "GET_SERVICES",
          payload: { id: "" },
        });
      store.getState().then((result) => setServices(result));
    }
  }, [navigate]);

  //****set services from componnent */
  const setServicesFunction = () => {
    store.getState().then((result) => setServices(result));
  };

  return (
    <Body>
      <Container>
        <NavbarHome setServicesFunction={setServicesFunction} />

        <FilterServices id="" setServicesFunction={setServicesFunction} />
        <Services className="container">
          {services?.length === 0 ? (
            <ServiceNotFound />
          ) : (
            services?.map((e) => <Service key={e.id} service={e} />)
          )}
        </Services>
      </Container>

    </Body>
  );
};

export default Home;
