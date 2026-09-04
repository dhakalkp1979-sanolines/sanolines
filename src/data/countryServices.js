import europeServices from "./europeServices";
import asiaServices from "./asiaServices";
import africaServices from "./africaServices";

const countryServices = {
  ...europeServices,
  ...asiaServices,
  ...africaServices,
};

export default countryServices;
