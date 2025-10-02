
const multiplosD3 =[]

for(i=0;i<101;i++){
  if(i%3===0){
    multiplosD3.push(i)
  }
}
console.log(multiplosD3)

const multiplosD5 = []
for(i=0;i<101;i++){
  if(i%5===0){
    multiplosD5.push(i)
  }
}
console.log(multiplosD5)
for(i=0;i<101;i++){
  if(multiplosD3.includes(i)&& multiplosD5.includes(i)){
    console.log('FizzBuzz')
  }else if(multiplosD3.includes(i)){
    console.log('Fizz')
  } else if(multiplosD5.includes(i)){
    console.log('Buzz')
  } else{
    console.log(i)
  }
}