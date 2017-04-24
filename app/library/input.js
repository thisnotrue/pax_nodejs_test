/**
 *
 *
 * @param {any} question
 * @param {any} format
 * @param {any} callback
 */
module.exports = {
    ask: function (question, format, callback) {
        // console.log(`Write your ${question}: `);
        console.log("suka");
        var stdin = process.stdin, stdout = process.stdout;
        stdin.resume();
        stdout.write(question + ": ");
        stdin.once('data', function (data) {
            data = data.toString().trim();
            if (format.test(data)) {
                callback(data);
            }
            else {
                stdout.write("It should match: " + format + "\n");
                //Use this for calling the same function
                module.exports.ask(question, format, callback);
                //TypeError: this.ask is not a function
                // this.ask(question, format, callback);
            }
        });
    }
};
//# sourceMappingURL=input.js.map