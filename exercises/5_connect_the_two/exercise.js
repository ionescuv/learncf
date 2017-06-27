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

exercise.solution = [line(), ' cf create-user-provided-service rest_backend -p "url" ', ' cf bind-service web rest_backend ' , line()];

module.exports = exercise
