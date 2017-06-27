const chalk    = require('chalk')
var exercise = require('workshopper-exercise')()

function repeat (ch, sz) {
    return new Array(sz + 1).join(ch)
}

function line() {
    return '\n' + chalk.yellow(repeat('\u2500', 60)) + '\n\n'
}

exercise.addProcessor((mode, callback) => {
    callback(null, true);
})

exercise.solution = [line(), " cf target https://api.cf.us10.hana.ondemand.com ", " cf login ", "cf target -o <org> -s <space>", line()];

module.exports = exercise
