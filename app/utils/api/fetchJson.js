const fetchJson = () => (input, init) => fetch(input, {
  ...init,
  headers: {
    ...(init && init.headers ? init.headers : {}),
    'Content-Type': 'application/json',
  },
});

export default fetchJson;
