import europeServices from "./europeServices.js";
import asiaServices from "./asiaServices.js";
import africaServices from "./africaServices.js";
import northAmericaServices from "./northAmericaServices.js";
import southAmericaServices from "./southAmericaServices.js";
import oceaniaServices from "./oceaniaServices.js";

const countryServices = {
  ...europeServices,
  ...asiaServices,
  ...africaServices,
  ...northAmericaServices,
  ...southAmericaServices,
  ...oceaniaServices,
};

export default countryServices;
