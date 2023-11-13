const fetchAxios = async (url, options) => {
  const request = await axios.get(url,
    {
      params: options
    });
  return request.data;
}
export { fetchAxios }