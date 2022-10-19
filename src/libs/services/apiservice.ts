import { OTTResponseLogin } from "../models/rti.models";

class APIService {

    static anonymousLogin = async():Promise<OTTResponseLogin | null>  => {
        const url = `https://api-ott-testcomm-fe.mediaset.net/TESTCOMM/play/idm/anonymous/login/v2.0`;
        const data = {"client_id":"423a9059-60c6-4a62-ad4b-fd3269d35d26","appName":"generic-tvsimulator//mediasetplay-ctv/0.38.1-TEST"};
        const options = {
            method: 'POST',
            //mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch(url, options);
        const responseSuccess = response && response.ok;
        if (responseSuccess) {
            const data:OTTResponseLogin = await response.json();
            const beToken =  data.response.beToken ?? "";
            const sid =  data.response.sid ?? "";
            return data;
        }
        return null;
    }


}

export default APIService;