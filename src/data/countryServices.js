import europeServices from "./europeServices.js";
import asiaServices from "./asiaServices.js";
import africaServices from "./africaServices.js";
import northAmericaServices from "./northAmericaServices.js";
import southAmericaServices from "./southAmericaServices.js";

const countryServices = {
  ...europeServices,
  ...asiaServices,
  ...africaServices,
  ...northAmericaServices,
  ...southAmericaServices,
};

export default countryServices;
