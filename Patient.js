//Logic related to paitents themselvese

const patients = [] //Create an array so we can find our patients later

function createPatient(name){ //Create patient object
    patients.push( //So we can find this later
        {
            Name:name,
            Treatments:[],
            TreatmentTimes:[], //Placement of times should line up with placement of treatments, saves us from making a more complicated nested array
            LastAdmitted:null, //These don't need to be filled in right now, just need to create the object
            LastDischarged:null
        }
    )
}

module.exports = { patients, createPatient }