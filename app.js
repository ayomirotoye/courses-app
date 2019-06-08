const courseName = document.querySelector('#course-name');
const courseRating = document.querySelector('#course-rating');
const courseList = document.querySelector('#courses-list');
const btnConfirm = document.querySelector('#btn-confirm');
const btnCancel = document.querySelector('#btn-cancel');
const btnClearList = document.querySelector('#btn-clear-list');
const alertCtrl = document.querySelector('ion-alert-controller');

let minRating = 1;
let maxRating = 5;

const clearFields = () => {
    courseName.value = '';
    courseRating.value = '';
};

btnConfirm.addEventListener('click', () => {
    const enteredCourseName = courseName.value;
    const enteredCourseRating = courseRating.value;
    if ((enteredCourseName.trim().length <= 0 || enteredCourseRating.trim().length <= 0)
    ) {
        alertCtrl.create({
            message: "Please enter a valid course name and/or rating", header: 'Invalid!', buttons: ['Okay then']
        }).then(alertElement => {
            alertElement.present()
        });
        return;
    } else if ((checkIfNumber(enteredCourseRating) || checkIfGreaterThanExpected(enteredCourseRating))) {
        alertCtrl.create({
            message: "Please enter a valid rating", header: 'Invalid!', buttons: ['Okay then']
        }).then(alertElement => {
            alertElement.present()
        });
        return;
    }

    const newItem = document.createElement('ion-item');

    newItem.innerHTML = `<span style='font-weight: 700'>` + enteredCourseName + `</span>` + ' - ' + enteredCourseRating + '/5';
    courseList.appendChild(newItem);
});
const checkIfNumber = (value) => {
    if (isNaN(value)) {
        return true
    }
    return false;
}

const checkIfGreaterThanExpected = (value) => {
    if (value < minRating || value > maxRating) {
        return true;
    }
    return false;
}
btnCancel.addEventListener('click', clearFields);

