import europeServices from "./europeServices";
import asiaServices from "./asiaServices";
import africaServices from "./africaServices";
import northAmericaServices from "./northAmericaServices";

const countryServices = {
  ...europeServices,
  ...asiaServices,
  ...africaServices,
  ...northAmericaServices,
};

export default countryServices;
