import { makeRequest, handleBackEndErrorResponse } from "../utilities/network";

function majorCompetitions(response) {
    let majorArray = ["PL", "BL1", "PD", "SA"];
    var array = [];
    for (index in response) {
        let comp = response[index];
        if (majorArray.indexOf(comp.league) != -1) {
            array.push(comp);
        }
    }
    return array;
}

export async function getCompetitions() {
    let response = await makeRequest("get", "competitions/");
    return majorCompetitions(response);
}