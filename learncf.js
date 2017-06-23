const learncf = require('workshopper-adventure')({
  appDir: __dirname,
  languages: ['en'],
  header: require('workshopper-adventure/default/header'),
  footer: require('workshopper-adventure/default/footer'),
  fail: require('workshopper-adventure/default/fail'),
  pass: require('workshopper-adventure/default/pass'),
  exerciseDir: 'exercises'
})

learncf.addAll([
  '1 Getting Started',
  '2 Push your first app',
  '3 The backing service',
  '4 Deploy the frontend',
  '5 Connect the two',
  '6 Get the chef running',
  '7 Scale up, we need more chefs'
])

module.exports = learncf