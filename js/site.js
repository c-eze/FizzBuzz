//get the values from the Page
//starts or controller function
function getValues() {
    //get values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value; 

    //Need to validate input
    //parse into integers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //call generateNumbers
        let numbers = generateNumbers();

        //call displayNumbers
        displayNumbers(fizzValue, buzzValue, numbers);
    } else {
        alert("You must enter integers");
    }

}

//logic function
function generateNumbers() {
    let numbers = [];

    //get all numbers from start to end
    
    for (let index = 1; index <= 100; index++) { 
        //execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;
}


//display or view functions
function displayNumbers(fValue, bValue, numbers) {
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let className = "";
        let number = numbers[index];

        if (index % 5 == 0) {
            templateRows += `<tr>`;
        }

        if (number % fValue == 0 && number % bValue == 0) {
            className = "fizzBuzz";
            templateRows += `<td class="${className}">${className}</td>`;
        }
        else if (number % fValue == 0) {
            className = "fizz";
            templateRows += `<td class="${className}">${className}</td>`;
        }
        else if (number % bValue == 0){
            className = "buzz";
            templateRows += `<td class="${className}">${className}</td>`;
        }
        else {
            templateRows += `<td class="${className}">${number}</td>`;
        } 

        if ((index + 1) % 5 == 0) {
            templateRows += `</tr>`;
        }
    }

    document.getElementById("results").innerHTML = templateRows;

}