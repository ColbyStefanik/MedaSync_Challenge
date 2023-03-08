//Logic related to actions
const Patient = require('./Patient')

function actionAdmitPatient(patientName, time){
    const patient = Patient.patients.find((u) => u.Name === patientName); //Find the correct patient
    patient.LastAdmitted = time
}

function actionDischargePatient(patientName, time){
    const patient = Patient.patients.find((u) => u.Name === patientName); //Find the correct patient
    patient.LastDischarged = time
}

function actionGivePatientTreatment(patientName, treatment, treatmentTime){
    const patient = Patient.patients.find((u) => u.Name === patientName); //Find the correct patient
    patient.Treatments.push(treatment)
    patient.TreatmentTimes.push(treatmentTime)
}

function returnPatientStats(patientName){
    const patient = Patient.patients.find((u) => u.Name === patientName); //Find the correct patient

    const startDate = new Date(patient.LastAdmitted)
    const endDate = new Date(patient.LastDischarged)
    const difference = endDate.getTime() - startDate.getTime()

    const seconds = Math.floor(difference / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = Math.floor(hours % 60) //Percent sign creates remainder for minutes

    console.log("Patient " + patient.Name + " stayed for " + hours + ".0 hours and " + remainingMinutes + ".0 minutes and recieved " + patient.Treatments.length + " treatments")
}

module.exports = { actionAdmitPatient, actionDischargePatient, actionGivePatientTreatment, returnPatientStats }