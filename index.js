const Trainer = require('./lib/Trainer')
const Pokemon = require('./lib/Pokemon')
const inquirer = require('inquirer')

inquirer.prompt(
    {
        type:'list',
        message:'Choose an action.',
        choices: ['add trainer', 'add pokemon', 'get random pokemon'],
        name:'main-menu',
    }
)