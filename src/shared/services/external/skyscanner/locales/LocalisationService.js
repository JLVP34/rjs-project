import axios from 'axios';
import SkyscannerServiceConstants from './../SkyscannerService.const';

function getListMarkets() {
    return axios.get(SkyscannerServiceConstants.mockyApi);
}

export default {
    getListMarkets
}