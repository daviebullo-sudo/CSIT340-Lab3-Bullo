const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.units}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units {props.part1.units + props.part2.units + props.part3.units}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'Information Technology'
  const part1 = {
    name: 'Industry Elective 1',
    units: 3
  }
  const part2 = {
    name: 'Project Management',
    units: 3
  }
  const part3 = {
    name: 'Information Management 2',
    units: 3
  }
  const fullName = 'Christian Dave M. Bullo'
  const courseCode = 'CSIT340'
  const section = 'G7'

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total part1={part1} part2={part2} part3={part3} />
      <Footer fullName={fullName} courseCode={courseCode} section={section} />
    </div>
  )
}

export default App