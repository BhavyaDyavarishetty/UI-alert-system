import {doRequest} from "./BaseApiClient.js";

export default {
    async report(reportDetails) {
        return doRequest(`/report`, reportDetails, 'POST');
    }
}