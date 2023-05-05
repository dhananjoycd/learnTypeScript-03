# **Module - 03 = Advance Types of TypeScript _[ Hand note  by [DHANANJOY](https://www.facebook.com/DhananjoyChandraDas.Official)]_**

# Module - 02 ReCheck

### 1.Setting up TypeScript Environment

1. Install Node.js and npm.
2. Open a command prompt or terminal and run the following command to install TypeScript globally:

```bash
npm install -g typescript
```

1. Create a new folder for your TypeScript project.
2. Open the command prompt or terminal and navigate to the project folder.
3. Run the following command to initialize a new TypeScript project:

```bash
tsc --init
```

1. A `tsconfig.json` file will be created in your project folder. This file contains the configuration settings for your TypeScript project.
2. Write your TypeScript code in a `.ts` file and compile it to JavaScript using the following command:

```
tsc filename.ts
```

1. The compiled JavaScript file will be created in the same folder as the TypeScript file.

### 2. Different Dir Set For Customize the TS & JS code in different Path

```
>> Go to TSconfig File >> "rootDir": "./src” && "outDir": "./dist"
```

### 3. Create package.json, package-lock.json and node_modules a

```bash
npm init -y
npm install ts-node-dev --save-dev
npm install -g/D nodemon
```

You may want to install `ts-node-dev` because it provides a convenient way to run TypeScript files in development mode. It automatically restarts your server when changes to your code are detected, making the development process faster and more efficient. 

**`npm install -g nodemon`** installs nodemon globally, while **`npm install -D nodemon`** installs it locally as a development dependency. Global packages can be accessed from anywhere on your system, while local packages are specific to the current project.

### 

```bash
npm init -y
npm install ts-node-dev --save-dev
npm install -g/D nodemon
```

You may want to install `ts-node-dev` because it provides a convenient way to run TypeScript files in development mode. It automatically restarts your server when changes to your code are detected, making the development process faster and more efficient. 

**`npm install -g nodemon`** installs nodemon globally, while **`npm install -D nodemon`** installs it locally as a development dependency. Global packages can be accessed from anywhere on your system, while local packages are specific to the current project.

### 4. JSON code ⇒ automatically restarts the server when changes in code are detected

```json
"scripts": {
    "start": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc",
    "test": "echo \\"Error: no test specified\\" && exit 1"
},

```

In the JSON code, `"build": "tsc"` is included as a script to build the TypeScript code to JavaScript. By running `npm run build`, the TypeScript code will be transpiled to JavaScript and the JavaScript files will be outputted to the `./dist` folder, as specified in the `tsconfig.json` file.

***Basically, To Run the TS code without TSC command in Shell***

# Module-03 : Advance Types of TypeScript

## Type Assertion In TypeScript

Type Assertion is a way to tell TypeScript that a specific type is valid for a variable, even if TypeScript's compiler can't detect it automatically.

Type Assertion can be done in two ways, either by using the `as` keyword or by using angle brackets (`<>`). Here's an example:

```tsx
let someValue: any = "hello world";

let valueLength: number = (someValue as string).length;

```

In this example, we're telling TypeScript that `someValue` is a string by using the `as` keyword. Then, we're getting the length of the string using the `length` property.

Alternatively, we could have used **angle brackets** to do the same thing:

```tsx
let someValue: any = "hello world";

let valueLength: number = (<string>someValue).length;

```

Both of these approaches are equivalent, **but the `as` syntax is preferred by the TypeScript team.**

Type Assertion is useful when you're working with types that TypeScript can't detect automatically, such as when you're working with third-party libraries or legacy code that doesn't have type annotations.

### My Practice Code

```tsx
// TS er kon valu er type jana na thake tokhon 'as' use kore tar type declare kore deyar nam e holo Type Assertion

let janPakhiBolo:any = 'valobasa lagbe?';
let bollam=(janPakhiBolo as string ).length;

let measureMent:any= 88;
let newLOVE =(measureMent as number).toFixed(4);

function loveCalculator(love:any): string|number|boolean|undefined{
 
    if( typeof love==="number"){
        return `The "${love}" is number`   
    }
    if( typeof love==="string"){
        return `The "${love}" is string`   
    }
    if( typeof love==="boolean"){
        return `The "${love}" is boolean`   
    }
    else{
        return "It is undefined"
    }
}

console.log(loveCalculator(janPakhiBolo));
console.log(loveCalculator(bollam));
console.log(loveCalculator(newLOVE));
```

## Interfaces In TypeScript

Interfaces in TypeScript define a set of rules for how objects should be structured. They define the properties and methods that an object should have, as well as their types.

```tsx
interface IPerson {
    name: string;
    age: number;
    email: string;
}

let person: IPerson = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

```

In this example, we define an interface called `IPerson` that has three properties: `name`, `age`, and `email`. We then create an object that conforms to this interface.

Interfaces can also be used to define optional properties, readonly properties, and indexable types:

```tsx
interface IPerson {
    name: string;
    age: number;
    email?: string; // optional property
    readonly id: number; // readonly property
    [key: string]: any; // indexable type
}

```

In this example, we've added an optional `email` property, a readonly `id` property, and an indexable type that allows us to add any additional properties to the object.

Interfaces can also be used to define function types:

```tsx
interface MathOperation {
    (x: number, y: number): number;
}

let add: MathOperation = function(x: number, y: number): number {
    return x + y;
};

let subtract: MathOperation = function(x: number, y: number): number {
    return x - y;
};

```

In this example, we define an interface called `MathOperation` that defines a function that takes two numbers and returns a number. We then create two functions that conform to this interface.

Interfaces are a powerful tool for defining complex types in TypeScript. They allow you to define rules for how objects should be structured and provide a way to ensure type safety throughout your code. 

### ***More Details Code in this below:***

```tsx
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
```

## Interface vs Type Alias in TypeScript
## 

Both interfaces and type aliases can be used to define complex types in TypeScript. They have similar functionality but some differences in how they are implemented.

### Interface

Here's an example of an interface:

```tsx
interface IPerson {
  name: string;
  age: number;
}

```

### Type Alias

Here's an example of a type alias:

```tsx
type Person = {
  name: string;
  age: number;
};

```

### **Differences**

Here are some key differences between interfaces and type aliases:

1. Type aliases can be used to define any type ( ***primitive, union, tuple, and object types*** ), while interfaces are primarily used to define object shapes ( ***Array, Function, Object*** ).
2. Interfaces can be extended and merged, while type aliases cannot.
3. Type aliases can be used to create union types and intersection types, while interfaces cannot.
4. Interfaces are generally preferred for public API definitions, while type aliases are preferred for complex internal types.

Overall, both interfaces and type aliases are useful for defining custom types in TypeScript, and the choice between them depends on the specific use case.