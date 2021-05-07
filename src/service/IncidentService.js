import axios from 'axios';

export default class IncidentService {

    getIncidents() {
        return axios.get('assets/demo/data/incidents.json').then((res) => res.data.data);
    }
}