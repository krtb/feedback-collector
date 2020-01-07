import axios from 'axios';
import {FETCH_USER} from './types';

// 1. when action creator called, returns a function
// 2. redux-thunk sees that we return a function, automatically calls it with a dispatch
// 3. make a request with axios
// 4. wait till we get a response
// 5. then dispatch our action

const fetch_user = () => {
    // in dev environment, make user of proxy, proxy sends response back to react app
    // in prod, no create-react-app server, this address would go directly to our express backend

    // only want to dispatch actions once the ASYNC REQUEST completes
    return function(dispatch){
        // when this func is executed, will return actual request
        // when action creator gets called, will instantly return a function
        // purpose of redux thunk is to inspect whatever action we return from our action creator
        axios.get('/api/current_user')
            .then(res => dispatch ({ type: FETCH_USER, payload: res  }))
    }
}