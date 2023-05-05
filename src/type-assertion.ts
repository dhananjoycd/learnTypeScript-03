// TS er kon valu er type jana na thake tokhon 'as' use kore tar type declare kore deyar nam e holo Type Assertion

let janPakhiBolo:any = 'valobasa lagbe?';
let bollam=(janPakhiBolo as string ).length;

let measureMent:any= 88;
let newLOVE =(measureMent as number).toFixed(4);
console.log(bollam)

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
