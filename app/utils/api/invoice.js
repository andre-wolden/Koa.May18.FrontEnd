import config from '../config';

export function fetchData() {
  fetch(`${config.invoicePortalUrl}`)
        .then((response) => response.json())
        .then((responseJson) => responseJson)
        .catch((error) => (error));
}
