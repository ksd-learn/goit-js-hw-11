function apiPexels(queryValue, perPage, page) {
    const API_KEY = '3oxuKpOUDmN7PVko58LT0D4UzmNQWbvdQcn7xFEtRlSGza8GLVM9yp68';
    const options = {
        method: 'GET',
        headers: {
            Authorization: API_KEY
        }
    }
    const queryParams = `?query=${queryValue}&per_page=${perPage}&page=${page}&orientation=landscape`;
    const url = `https://api.pexels.com/v1/search${queryParams}`
    return { url, options };
}

export default { apiPexels };
