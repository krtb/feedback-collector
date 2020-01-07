import axios from 'axios';
import {FETCH_USER} from './types';

const fetch_user = () => {
    // in dev environment, make user of proxy, proxy sends response back to react app
    // in prod, no create-react-app server, this address would go directly to our express backend
    axios.get('/api/current_user')
}