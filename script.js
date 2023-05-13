let arr = [
    {id:1,name:"john",age:"18",marks:80},
    {id:2, name:"jack",age:"20", marks:85}, 
    {id:3, name:"karen", age:"19",marks:35}
]
  
  function PrintStudentswithMap() {
    arr.map((student) => {
      if(student.marks > 50){
        console.log(student)
      }
    })
  }

  function PrintStudentsbyForEach() {
    arr.forEach((student) => {
      if(student.marks > 50){
        console.log(student)
      }
    })
  }

  function addData() {
    const newStudent = {id:4,name:"susan",age:"20",marks:66}
    arr.push(newStudent);
    console.log(newStudent)
  }

  function removeFailedStudent() {
    const otherStudents= arr.filter((student) => {
      return student.marks < 50 
    })
      
    console.log(otherStudents)
  }

  function concatenateArray() {
    let newArr = [
      { id: 10, name: "Vidhi", age: "22", marks: 98 },
      { id: 22, name: "Amey", age: "21", marks: 56 },
      { id: 35, name: "Gomaji", age: "24", marks: 99 },
  ]

    const concantArray=[]

    arr.forEach((stu) => {
      concantArray.push(stu)
    })

    newArr.forEach((stu) => {
      concantArray.push(stu);
    })

    console.log(concantArray)
  }



