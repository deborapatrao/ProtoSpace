import { HOST_URL } from "../data/data";
import axios from "axios";

export async function axiosPost(params, endpoint) {
    const user = JSON.parse(localStorage.getItem('user'));

    try {
        const resp = await axios.post(`${HOST_URL}/api/${endpoint}`, {
            ...params
        }, {
            headers: {
                "x-access-token": user.accessToken
            }
        });

        return resp.data;

    } catch (error) {
        console.log(error);
    }
}
