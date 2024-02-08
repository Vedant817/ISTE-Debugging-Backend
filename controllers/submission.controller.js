import axios from 'axios';
import checkStatus from './result.controller.js';

const handleCompile = async () => {
    //setProcessing(true);
    const formData = {
        source_code: 'I2luY2x1ZGUgPHN0ZGlvLmg+CgppbnQgbWFpbih2b2lkKSB7CiAgY2hhciBuYW1lWzEwXTsKICBzY2FuZigiJXMiLCBuYW1lKTsKICBwcmludGYoImhlbGxvLCAlc1xuIiwgbmFtZSk7CiAgcmV0dXJuIDA7Cn0=',
        language_id: 52,
        stdin: 'SnVkZ2Uw',
        //TODO encode source code in base64
        //!source_code: btoa(code),
    };
    const options = {
        method: "POST",
        url: process.env.RAPID_API_URL,
        params: { base64_encoded: "true", fields: "*" },
        headers: {
            "content-type": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-Host": process.env.RAPID_API_HOST,
            "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        },
        data: formData,
    };
    try {
        await axios
            .request(options)
            .then(function (response) {
                console.log("res.data", response.data);
                const token = response.data.token;
                //checkStatus(token);
            })
            .catch((err) => {
                let error = err.response ? err.response.data : err;
                setProcessing(false);
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
};

export default handleCompile;