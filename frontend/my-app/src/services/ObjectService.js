import axios from 'axios'

const OBJECT_REST_API_URL='http://localhost:8889/api/objects';

class ObjectService{

    getObjects(){
        return axios.get(OBJECT_REST_API_URL);
    }

}

export default new ObjectService();