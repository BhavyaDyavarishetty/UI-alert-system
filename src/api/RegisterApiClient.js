import {doRequest} from "./BaseApiClient.js";

export default {
    async register(userDetails) {
        return doRequest(`/register`, userDetails, 'POST');
    }
}