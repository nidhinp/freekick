import { Alert } from "react-native";

import { capitalize } from "./helpers";
import { APP_URL } from "./constants";

export async function makeRequest(method, url, parameter) {
    let apiEndpoint = APP_URL+url;
    console.log(apiEndpoint);
    if (method == "get") {
        try {
            let response = await fetch(apiEndpoint, {
                method: method,
                headers: {
                    "Accept": "application/json", 
                    "Content-Type": "application/json",
                    "X-Auth-Token": "51e8a038a4d64750946da951eac8c890",
                }});
            return await response.json();
        } catch(error) {
            console.error(error);
        }
    }else {
        try {
            let response = await fetch(apiEndpoint, {
                method: method,
                headers: {
                    "Accept": "application/json", 
                    "Content-Type": "application/json",
                    "X-Auth-Token": "51e8a038a4d64750946da951eac8c890",
                },
                body: (JSON.stringify(parameter)),
            });
            return {"status": response.status, "body": JSON.parse(response._bodyText)};
        } catch(error) {
            console.log(error);
        }
    }
}

export function handleBackEndErrorResponse(response) {
    var errorMessages = []
    for (key in response.body) {
        errorMessages.push(capitalize(key) + ": " + response.body[key].join(", "));
    }
    return errorMessages.join("\n");
}