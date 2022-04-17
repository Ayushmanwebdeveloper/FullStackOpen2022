const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
//Made & Submitted by Ayushman Tripathi

// const Content = (props) => {
//  return (
//     <>
//      <p>
//        {props.p1.name} {props.p1.exercises}
//      </p>
//      <p>
//        {props.p2.name} {props.p2.exercises}
//      </p>
//      <p>
//        {props.p3.name} {props.p3.exercises}
//      </p>
//     </>
//   )
// }
const Content = (props) => {
  return (
    <>
      <Part part={props.p1.name} exercise={props.p1.exercises} />
      <Part part={props.p2.name} exercise={props.p2.exercises} />
      <Part part={props.p3.name} exercise={props.p3.exercises} />
    </>
  )
}

const Part = (props) => {
  return (
  <p> 
    {props.part} {props.exercise}
  </p>
  )
}

const Total = (props) => {
 
  return (
    <>
      <p>Number of exercises {props.p1.exercises + props.p2.exercises + props.p3.exercises}</p>
    </>
  )
}


const App = () => {
const courseName ='Half Stack Application Development';
  const part1 =
  {
        name: 'Fundamentals of React',
        exercises: 10
  };

  const part2 = {
       name: 'Using props to pass data',
       exercises: 7
  };

  const part3=
  {
        name: 'State of a component',
        exercises: 14
  };

  

  return (
    <>
      <Header course={courseName} />
      <Content p1={part1} p2={part2} p3={part3} />
      <Total p1={part1} p2={part2} p3={part3} />
    </>
  )
}
export default App