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

exercise.solution = [line(), ' In order to build a fault-tolerant system, it is mandatory to use stateless processes. Furthermore apps should have a quick start-up time to assure a smooth recovery ', line()];

module.exports = exercise
