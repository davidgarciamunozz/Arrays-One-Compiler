//ejercicio 1
const books = [
    {
        title : 'El principito',
        author:'Antoine de Saint Exuperie',
        year: 2007,
        pages:400
    },
    {
        title : 'Hush hush',
        author:'Clark',
        year: 1872,
        pages:100
    }
    ]
    
    //método filter
    const filteredBooks = books.filter((book) => book.year > 2000 && book.pages > 300)
    
    console.log ('filter', filteredBooks)
    
//ejercicio 2
const tasks = [
  {
    id : 1,
    description:'hacer el taller',
    status:'pendiente'
  },
  {
    id : 2,
    description:'hacer la comida',
    status:'pendiente'
  },
  {
    id : 3,
    description:'visitar a mamá',
    status:'Completada'
  }
  ]
  
  const TaskCompleted = tasks.map(task => ({
    ...task,
    status: task.id % 2 === 0 ? 'completada' : task.status
  }))
  
  console.log(TaskCompleted)
  
  
  // ejercicio 3
  
  const products = [
    {
      name: 'blancox',
      price:123
    },
    {
      name:'aromatel',
      price:134
      
    },
    {
      name:'cerezas',
      price:99999
    }
    ] 
    
    
    const expensiveProduct = products.reduce((max,productoActual) => {
      return productoActual.price > max.price ? productoActual : max ;
    }, products [0]);
    
    console.log('producto más caro:', expensiveProduct)
    
    //ejercicio 4
    
    const tasks2 = [
      {
        id:1,
        description: 'do homework'
      },
      {
        id:1,
        description:'eat breakfast'
      },
      {
        id:2,
        description:'work'
      }
      
      ]
      
    const filteredTasks = tasks2.filter((task,index,self) => index === self.findIndex((t)=> t.id === task.id))
    
    console.log(filteredTasks)
    
    
    
    //ejercicio 5
    
    const students = [
      {
        name:'David',
        grade: 7
      },
      {
        name:'Victor',
        grade: 9
      },
      {
        name:'Aleja',
        grade:10
      }
      ]
      
      const grades = students.map((student) => student.grade)
      console.log(grades)
      
      const sumOfGrades = grades.reduce((total,grade) => total + grade,0);
      
      console.log(sumOfGrades)
      
      const average = sumOfGrades / grades.length
      
      console.log(average)
      
      
      //Ejercicio 6
      
      const fruits = ['manzana', 'pera','manzana','sandia']
      
      conteo = fruits.reduce((contador,fruta) =>{
         if (contador[fruta]) {
           contador[fruta] += 1 
         } else {
           contador[fruta] = 1
         }
         
         return contador
      },{}) 
      
      console.log(conteo)
      
      //ejercicio 7
      
      const transacciones = [
    { categoria: "salud", monto: 300 },
    { categoria: "salud", monto: 500 },
    { categoria: "occio", monto: 200 },
    { categoria: "occio", monto: 200 },
    { categoria: "negocio", monto: 1000 },
    { categoria: "negocio", monto: 1000 }
];

    const montoPorCategoria = transacciones.reduce((acumulador, transaccion) => {
      if (acumulador[transaccion.categoria]) {
        acumulador[transaccion.categoria] +=transaccion.monto
      } else {
        acumulador[transaccion.categoria] = transaccion.monto
      }
      return acumulador
    },{})
    
    console.log(montoPorCategoria)
      
      
  
  