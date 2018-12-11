import _ from "lodash";

/**
 * Function to check whether given input is a valid input or not
 * @param p_input Input string to be validated
 * @returns {boolean} Whether input is a valid input or not
 */
export function isValidInput(p_input) {
    const result = false;

    if (
        !(typeof p_input === "string") ||
        p_input === "" ||
        p_input.length === 0
    ) {
        return result;
    }

    return !result;
} //isValidInput..

/**
 * Method to generate unique id for adding new user
 * @returns {string}
 */
export function generateUniqueId() {
    let uniqueId = null;

    // uniqueId = new Date().getUTCMilliseconds();

    // https://gist.github.com/gordonbrander/2230317
    uniqueId =
        new Date().getUTCMilliseconds() +
        // "_"
        Math.random()
            .toString(36)
            .substr(2, 9);

    uniqueId = _.uniqueId(uniqueId);

    return "" + uniqueId + "";
} //generateUniqueId..

export function logToConsole(caller, inputToLog) {
    console.log(caller, " => ", JSON.stringify(inputToLog, null, 4));
} //logToConsole..

export function getUserIdFromLocal() {
    let user_id = localStorage.getItem("user_id");
    return parseInt(user_id);
}

export function clearUserDataFromLocal() {
    localStorage.removeItem("user_id");
}
