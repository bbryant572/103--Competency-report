var userName="Brett";
let userAge=35;
const URL="http://www.google.com";

function challenge(){
    let num1=prompt("Enter num1: ");
    let num2=prompt("Enter num2: "); 

    if(num1>num2){
        console.log("Num1 is bigger!");
    }else if(num2>num1){
        console.log("Num2 is bigger!")
    }else{
        console.log("These numbers are the same!");
    }

}
//challenge();
let students=["Brett","Miles","Ray","Kyle"];
let grades=["A","B","A","B+"];

console.table(students);
console.log(students[3]);

//travel arrays
for(let i=0;i<students.length;i++){
    document.write(`<p> Name: ${students[i]} <br> Grade: ${grades[i]}</p>`)

}