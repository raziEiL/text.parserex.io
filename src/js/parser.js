/**
 * @param {string} text
 * @returns {(undefined|[string][])}
 */
const parseToExcel = function (text) {
    try {
        if (!text)
            return;

        text = text.trim();

        if (!text.length)
            return;

        const array = text.trim().split("\n\n");

        if (!array.length)
            return;

        const aoa = [[], []];
        let temp;

        for (const string of array) {
            temp = string.split("\n", 1);
            if (temp.length == 1) {
                aoa[0].push(string.replace(temp[0] + "\n", "")); // text
                aoa[1].push(temp[0]); // 00:00:00:00
            }
            else {
                aoa[0].push(string);
                aoa[1].push("");
            }
        }
        console.log(aoa);
        return aoa;
    } catch { }
};

/**
 * @param {[string][]} aoa
 * @returns {(undefined|string)}
 */
const parseToBuffer = function (aoa) {
    if (!aoa || aoa.length !== 2)
        return;
    const buffer = [];
    for (let array of aoa) {
        array = array.map((s, i) => `"${s}"${i < (array.length - 1) ? "\t" : "\n"}`);
        buffer.push(...array);
    }
    if (buffer.length)
        return buffer.join("");
};

module.exports.parseToExcel = parseToExcel;
module.exports.parseToBuffer = parseToBuffer;

