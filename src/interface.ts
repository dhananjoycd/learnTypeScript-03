// Interface use for Array, Function and Object

// --------Normal Use in Object-----------
interface IPerson {
    name: string;
    age: number;
    address?:{
        vill:string
        postCode?: number
    }
}

// extend the interface
interface ISuperPerson  extends IPerson {
    bodyShape: string
    weigt: number
    color?: string
    isPowerFull?:boolean
}

// example
const normalPerson: IPerson = {
    name: "Razzak Saheb",
    age: 23,
    address:{
        vill: "Natore",
        postCode: 3540
    }
}

// when We want to use extends Version then we must use the before version like as the example of below
const superPerson: ISuperPerson = {
    name: "Kheder Udiib Boktiyar Saheb",
    age: 203,
    bodyShape: "Square",
    weigt: 150,
    color: "Dark Blue and White",
    isPowerFull: true,
    address:{
        vill: "Akashe Batase Pahare",
    }
}

// console.log(normalPerson)
// console.log(superPerson)

// --------------Use in Function--------------
interface ICheckPerson {
    (name:string, age:number, jaEcaa:any):any
}

// example 
let isNormalPerson:ICheckPerson = (person, ages, weigts) =>{
    let data = {
        aged:ages,
        weigtd: weigts
    }
    if (ages>=100) {
        return `${person} is not a normal Human. Because The guys is ${data.aged} Years old and weight ${data.weigtd} KG`
    } else {
        return`${person} is a normal Human. Because The guys is ${data.aged} Years old and weight ${data.weigtd} KG`
    }

}

// console.log(isNormalPerson("Dhananjoy", 23, 55))

// -----use in array------

interface IStudentList{
      name: string;
      age: number;
      email: string
  }
  
  // ----Example---- 
  const students: IStudentList[]= [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 305, email: "charlie@example.com" }
  ];

  const normalStudent:IStudentList[]=[];
  students.map(student=> {
    if(student.age<=150){
        normalStudent.push(student)
        
    }
  })
  console.log(normalStudent)
