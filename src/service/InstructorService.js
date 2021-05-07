import axios from 'axios';

export default class InstructorService {

    getInstructors() {
        return axios.get('assets/demo/data/instructors.json').then((res) => res.data.data);
    }
}