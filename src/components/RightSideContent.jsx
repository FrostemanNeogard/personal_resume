import data from '../data.json'

export default function RightSideContent() {

  const stringifiedData = JSON.stringify(data)
  const jsonData = JSON.parse(stringifiedData)

  const WorkExperience = () => {
    const data = jsonData.workExperience

    return (
      <>
        {data.map((item, index) => {
          <article key={index}>
            <h4>{item.startDate} - {item.endDate == 0 ? "Current" : item.endDate}</h4>
            <h3>{item.title}</h3>
            <h2>{item.employer}</h2>
            {item.notes && <NotesUl data={item.notes} />}
          </article>
        })}
      </>
    )
  }

  const Education = () => {
    const data = jsonData.education

    return (
      <>
        {data.map((item, index) => {
          return (
            <article key={index}>
              <h4>{item.startDate} - {item.endDate == 0 ? "Current" : item.endDate}</h4>
              <h3>{item.schoolName}</h3>
              <h2>{item.orientation}</h2>
              {item.notes && <NotesUl data={item.notes} />}
            </article>
          )
        })}
      </>
    )
  }

  const NotesUl = (props) => {
    return (
      <ul>
        {props.data.map((data, index) => {
          return (
            <li key={index}>{data}</li>
          )
        })}
      </ul>
    )
  }

  return (
    <main className="right-side-content">
      <section className="header">
        <h1>Liam Frosteman Neogard</h1>
        <h2>Web Developer</h2>
      </section>

      <section className="about-me">
        <h1 className='section-header'>About Me</h1>
        <p>
          I am a self taught young web developer from Sweden. I specialize in UI/UX with React combined with extensive CSS styling. I am very passionate about all things coding and find web development incredibly fun.
        </p>
      </section>

      <section className="work-experience">
        <h1 className='section-header'>Work Experience</h1>
        <WorkExperience />
      </section>

      <section className='education'>
        <h1 className='section-header'>Education</h1>
        <Education />
      </section>

    </main>
  )
}