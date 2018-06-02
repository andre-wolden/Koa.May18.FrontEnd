import config from '../../../utils/config';
import promisifiedFetch from '../../../utils/api/promisifiedFetch';

export const getAllInvoices = (status) => {
  const url = `${config.invoicePortalApiUrl}${config.invoiceStatusQueryPrefix}${status}`;
  // const url = `${`${config.invoicePortalApiUrl}${config.invoiceStatusQueryPrefix}`}${this.props.status}`;
  return promisifiedFetch(url);
};
