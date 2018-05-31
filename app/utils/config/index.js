import { getString } from './config-helper';

const config = {
  invoicePortalApiUrl: getString(location.protocol + "//" + location.hostname + ':2424/invoice/getonstatus'),
  invoiceStatusQueryPrefix: getString('?status='),
}
;

export const getInsurancePortalUrl = () => window.location.protocol === 'https:'
    ? config.insurancePortalUrlHttps
    : config.insurancePortalUrlHttp;

export default config;
