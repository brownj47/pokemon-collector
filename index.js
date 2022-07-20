const Trainer = require('./lib/Trainer')
const Pokemon = require('./lib/Pokemon')
const inquirer = require('inquirer')

const trainerList = []

const start = async () => {
    const mainResp = await inquirer.prompt(
        {
            type: 'list',
            message: 'Choose an action.',
            choices: ['add trainer', 'add pokemon', 'get random pokemon'],
            name: 'mainMenu',
        }
    )
    switch (mainResp.mainMenu) {
        case 'add trainer':
            const newName = await newTrainerQs();
            trainerList.push(new Trainer(newName));
            console.log(trainerList);
            start();
            break
        case 'add pokemon':
            // if (trainerList ===[]){ // add logic to prevent this if no trainers have been made
            //     null
            // }
            console.log("add pokemon");
            const trainerToAddPoke = selectTrainer();
            break
        case 'get random pokemon':
            console.log("get random pokemon");
            break
        default:
            console.log('error');
    }

}


async function newTrainerQs() {
    const trainName = await inquirer.prompt(
        {
            type: 'input',
            message: 'Pick a name',
            name: 'trainerName'
        })
    return trainName.trainerName
}

async function selectTrainer() {
    const trainerChoiceOBJ = await inquirer.prompt(
        {
            type: 'list',
            message: 'Pick a trainer',
            name: 'trainerChoice',
            choices: trainerList,
        }
    )
    console.log(trainerChoiceOBJ.trainerChoice)
    return trainerChoiceOBJ.trainerChoice
}

start();