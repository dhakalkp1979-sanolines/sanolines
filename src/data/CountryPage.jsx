import europeServices from "./europeServices";
import asiaServices from "./asiaServices";

const countryServices = {
  ...europeServices,
  ...asiaServices,
};

export default countryServices;
