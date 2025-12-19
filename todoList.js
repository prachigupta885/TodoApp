import readline from "readline";

const rl = readline.createInterface({
     input:process.stdin , 
    output : process.stdout 
});
 
const todos = [];
const showMenu = () => {
    console.log("\n 1: Add a Tasks");
    console.log("2: View Tasks ");
    console.log("exit");
    rl.question("choose option :" , handleInput)
}
const handleInput = (option)=>{
    if(option === "1"){
        rl.question("enter the tasks : " ,(tasks)=>{
        todos.push(tasks);
        console.log(" tasks added" , tasks);
        showMenu();
        })
    }
     else if(option === "2"){
       console.log("\n your todoLists : ");
       todos.forEach((tasks , index)=>{
        console.log(`${index+1}.${tasks}`);
        showMenu();
       })
    }
    else if (option ==="3"){
        console.log('Good bye');
        rl.close();
     }
     else{
        console.log("invaild option.please try again");
        showMenu();
     }
    }
showMenu();