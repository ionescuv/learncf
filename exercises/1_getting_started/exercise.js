
var exercise = require('workshopper-exercise')()

exercise.addProcessor((mode, callback) => {
    callback(null, true);
})

module.exports = exercise
