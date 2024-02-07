import axios, {AxiosError} from 'axios';

const submit = async(res,req)=>{
    const {source_code, language_id} = req.body;
    try {
        const Code = source_code.replace(/\n/g, '\\n');
        const data = {"source_code": Code, "language_id": language_id};
        const token = axios.post('http://localhost:2358/submissions', data);
        console.log(token);
    } catch (error) {
        console.log(error);
    }
}

export default submit;