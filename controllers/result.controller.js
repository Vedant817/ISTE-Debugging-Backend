const checkStatus = async (token) => {
    const options = {
        method: "GET",
        url: process.env.RAPID_API_URL + "/" + token,
        params: { base64_encoded: "true", fields: "*" },
        headers: {
            "X-RapidAPI-Host": process.env.RAPID_API_HOST,
            "X-RapidAPI-Key": process.env.RAPID_API_KEY,
        },
    };
    try {
        let response = await axios.request(options);
        let statusId = response.data.status?.id;

        //TODO Processed - we have a result
        if (statusId === 1 || statusId === 2) {
            //! still processing
            setTimeout(() => {
                checkStatus(token)
            }, 2000)
            return
        } else {
            setProcessing(false)
            setOutputDetails(response.data)
            showSuccessToast(`Compiled Successfully!`)
            console.log('response.data', response.data)
            return
        }
    } catch (err) {
        console.log("err", err);
        setProcessing(false);
        showErrorToast();
    }
};

export default checkStatus;