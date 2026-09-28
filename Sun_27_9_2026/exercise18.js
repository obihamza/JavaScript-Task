let exercise18CurrentStep = Number(sessionStorage.getItem("exercise18CurrentStep")) || 1;

let exercise18Data = JSON.parse(sessionStorage.getItem("exercise18Data")) || {
    name: "",
    email: "",
    university: "",
    major: ""
};


const exercise18Step1 = document.getElementById("exercise18-step1");
const exercise18Step2 = document.getElementById("exercise18-step2");
const exercise18Step3 = document.getElementById("exercise18-step3");

const exercise18Name = document.getElementById("exercise18-name");
const exercise18Email = document.getElementById("exercise18-email");

const exercise18University = document.getElementById("exercise18-university");
const exercise18Major = document.getElementById("exercise18-major");

const exercise18Review = document.getElementById("exercise18-review");

const exercise18Next1 = document.getElementById("exercise18-next1");
const exercise18Back2 = document.getElementById("exercise18-back2");
const exercise18Next2 = document.getElementById("exercise18-next2");
const exercise18Back3 = document.getElementById("exercise18-back3");
const exercise18Confirm = document.getElementById("exercise18-confirm");


function exercise18SaveData() {

    exercise18Data.name = exercise18Name.value;
    exercise18Data.email = exercise18Email.value;
    exercise18Data.university = exercise18University.value;
    exercise18Data.major = exercise18Major.value;

    sessionStorage.setItem(
        "exercise18Data",
        JSON.stringify(exercise18Data)
    );
}


function exercise18SaveStep() {

    sessionStorage.setItem(
        "exercise18CurrentStep",
        exercise18CurrentStep
    );
}


function exercise18ShowStep() {

    exercise18Step1.style.display = "none";
    exercise18Step2.style.display = "none";
    exercise18Step3.style.display = "none";

    if (exercise18CurrentStep === 1) {

        exercise18Step1.style.display = "block";

    } else if (exercise18CurrentStep === 2) {

        exercise18Step2.style.display = "block";

    } else if (exercise18CurrentStep === 3) {

        exercise18Step3.style.display = "block";

        exercise18Review.innerHTML = `
            <p><strong>Name:</strong> ${exercise18Data.name}</p>
            <p><strong>Email:</strong> ${exercise18Data.email}</p>
            <p><strong>University:</strong> ${exercise18Data.university}</p>
            <p><strong>Major:</strong> ${exercise18Data.major}</p>
        `;
    }
}


exercise18Next1.addEventListener("click", function() {

    exercise18SaveData();

    exercise18CurrentStep = 2;

    exercise18SaveStep();

    exercise18ShowStep();
});


exercise18Back2.addEventListener("click", function() {

    exercise18SaveData();

    exercise18CurrentStep = 1;

    exercise18SaveStep();

    exercise18ShowStep();
});


exercise18Next2.addEventListener("click", function() {

    exercise18SaveData();

    exercise18CurrentStep = 3;

    exercise18SaveStep();

    exercise18ShowStep();
});


exercise18Back3.addEventListener("click", function() {

    exercise18SaveData();

    exercise18CurrentStep = 2;

    exercise18SaveStep();

    exercise18ShowStep();
});


exercise18Confirm.addEventListener("click", function() {

    exercise18SaveData();

    alert("Registration completed!");

    sessionStorage.removeItem("exercise18Data");
    sessionStorage.removeItem("exercise18CurrentStep");

    exercise18Data = {
        name: "",
        email: "",
        university: "",
        major: ""
    };

    exercise18CurrentStep = 1;

    exercise18Name.value = "";
    exercise18Email.value = "";
    exercise18University.value = "";
    exercise18Major.value = "";

    exercise18ShowStep();
});


exercise18Name.value = exercise18Data.name;
exercise18Email.value = exercise18Data.email;
exercise18University.value = exercise18Data.university;
exercise18Major.value = exercise18Data.major;

exercise18ShowStep();