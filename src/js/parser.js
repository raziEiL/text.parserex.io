/**
 * @param {string} text
 */
const parser = function (text){
    try {
        const array = text.trim().split("\n\n");
        const aoa = [[],[]];
        let temp;

        for (const string of array) {
            temp = string.split("\n", 1);
            if (temp.length == 1){
                aoa[0].push(string.replace(temp[0] + "\n", "")); // text
                aoa[1].push(temp[0]); // 00:00:00:00
            }
            else{
                aoa[0].push(string);
                aoa[1].push(" ");
            }
        }
        console.log(aoa);
        return aoa;
    } catch {}
};

module.exports = parser;
