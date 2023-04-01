function apiPixabay(queryValue, perPage, page) {
    const API_KEY = '34823710-80207717ed108df05ffec9219';
    const options = {
        method: 'GET'
    }
    const queryParams = `?key=${API_KEY}&q=${queryValue}&per_page=${perPage}&page=${page}&image_type=photo&orientation=horizontal&safesearch=true`;
    const url = `https://pixabay.com/api/${ queryParams }`
    return { url, options };
}

export default { apiPixabay };

//function apiPexels(queryValue, perPage, page) {
//    const API_KEY = '3oxuKpOUDmN7PVko58LT0D4UzmNQWbvdQcn7xFEtRlSGza8GLVM9yp68';
//    const options = {
//        method: 'GET',
//        headers: {
//            Authorization: API_KEY
//        }
//    }
//    const queryParams = `?uthorization: API_KEY&query=${queryValue}&per_page=${perPage}&page=${page}&orientation=landscape`;
//    const url = `https://api.pexels.com/v1/search${queryParams}`
//    return { url, options };
//}


