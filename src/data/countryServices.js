import europeServices from "./europeServices";
import asiaServices from "./asiaServices";
import africaServices from "./africaServices";
import northAmericaServices from "./northAmericaServices";
import southAmericaServices from "./southAmericaServices";

const countryServices = {
  ...europeServices,
  ...asiaServices,
  ...africaServices,
  ...northAmericaServices,
  ...southAmericaServices,
};

export default countryServices;
