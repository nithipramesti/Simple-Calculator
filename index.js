let input = ['11','+','2','+','4','x','3','-','1','+','13','-','5','x','3','+','8','/','2']

for (var i=0; i<input.length; i+=2) {
    input[i]=Number(input[i])
}

for (var i=1; i<input.length; i+=2) {
    
    if(input[i]=='x') {
        input[i-1]*=input[i+1]
        input.splice(i,2)
    } else if(input[i]=='/') {
        input[i-1]/=input[i+1]
        input.splice(i,2)
    }
}

let result = input[0]

for (var i=1; i<input.length; i+=2) {
    if (input[i]=='+'){
        result += input[i+1]
    } else if (input[i]=='-'){
        result -= input[i+1]
    } 
}

console.log(input);
console.log(result);