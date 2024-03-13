const multiply=(num1,num2)=>num1*num2;

const students={
    firstName:"niranjana",
    lastName:"Balamurugan",
    age:20,
    grade:"A",
    getInfo:function(){
        return `${this.firstName} ${this.lastName}, Age: ${this.age}, Grade: ${this.grade}`;
    }

};
console.log(multiply(5,10));
console.log(students.getInfo());
