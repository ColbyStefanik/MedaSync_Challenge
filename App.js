//import { createPatient, returnPatientStats } from './Patient.js'
//import { actionAdmitPatient, actionDischargePatient, actionGivePatientTreatment, returnPatientStats } from './Actions.js'
const Patient = require('./Patient')
const Action = require('./Actions')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const patients = [] //Create an array so we can find our patients later

const PATIENT_PREFIX_LENGTH = 8 //Create some contants to make the following code a bit cleaner
const ACTION_PREFIX_LENGTH = 7

console.log("Awaiting input")

rl.on('line', (input) => {
    try {
        if (input.startsWith('Patient')) { //If input starts with 'Patient'
            const name = input.slice(PATIENT_PREFIX_LENGTH)
            Patient.createPatient(name)
            console.log("Patient created")
        }
        else if (input.startsWith('Action')) { //If input starts with 'Action'
            const action = input.slice(ACTION_PREFIX_LENGTH)
            const parts = action.split(' ')
            const actionName = parts[0]
            const name = parts[1]
            const time = parts[2]
            const treatment = parts[3]

            switch (actionName) { //Commands that can be inputted
                case 'Intake':
                    Action.actionAdmitPatient(name, time)
                    console.log(name + " admitted")
                    break;
                case 'Discharge':
                    Action.actionDischargePatient(name, time)
                    console.log(name + " discharged")
                    break;
                case 'Treatment':
                    Action.actionGivePatientTreatment(name, treatment, time)
                    console.log(name + " given treatment " + treatment)
                    break;
                case 'ReturnStats':
                    Action.returnPatientStats(name)
                    break;
                default:
                    console.log("Unknown action: " + action)
                }
        }
        else {
            console.log("Unknown command: " + input) //To catch erroneous commands
        }
    }
    catch (error) {
        console.error("Error: " + error) //To catch errors
    }
    }
)