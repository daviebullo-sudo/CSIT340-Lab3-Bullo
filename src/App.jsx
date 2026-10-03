const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.subject} {props.units}</p>
  )
}

const Content = (props) => {
  

  return (
    <div>
      <Part subject={props.subject1} units={props.units1} />
      <Part subject={props.subject2} units={props.units2} />
      <Part subject={props.subject3} units={props.units3} />
    </div>
  )
}

const Total = (props) => {
  const units1 = 3
  const units2 = 3
  const units3 = 3

  return (
    <p>Number of units {units1 + units2 + units3}</p>
  )
}

const App = () => {
  const course = 'Information Technology'
  const subject1 = 'Industry Elective 1'
  const units1 = 3
  const subject2 = 'Project Management'
  const units2 = 3
  const subject3 = 'Information Management 2'
  const units3 = 3
  const fullName = 'Christian Dave M. Bullo'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content 
        subject1={subject1}
        units1={units1}
        subject2={subject2}
        units2={units2}
        subject3={subject3}
        units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <footer>
        <p>{fullName} - {courseCode} - {section}</p>
      </footer>
    </div>
  )
}

export default App