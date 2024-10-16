//Async y Await
const fnAsync = () => {
    return new Promise((resolve, reject)=> {
        (true) 
            ? setTimeout(()=> resolve('Async!!'), 2000) 
            : reject(new Error('Error!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!'); //pero este hello si debe esperar a something
}

console.log('Before');
anotherFn();
console.log('After');

//como tal no se frena la ejecución

//Output:
// Before
// After
// Async!!
// Hello!