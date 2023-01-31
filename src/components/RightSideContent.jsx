import data from '../data.json'

export default function RightSideContent() {

  const stringifiedData = JSON.stringify(data)
  const jsonData = JSON.parse(stringifiedData)

  const WorkExperience = () => {

    const data = jsonData.workExperience
    let returnHTML = []

    for (let i = 0; i < data.length; i++) {
      returnHTML.push (
        <article key={i}>
          <h4>{data[i].startDate} - {data[i].endDate == 0 ? "Current" : data[i].endDate}</h4>
          <h3>{data[i].title}</h3>
          <h2>{data[i].employer}</h2>
          {data[i].notes ? <NotesUl data={data[i].notes} /> : null}
        </article>
      )
    }

    return (
      <>
        {returnHTML}
      </>
    )
  }

  const Education = () => {

    const data = jsonData.education
    let returnHTML = []

    for (let i = 0; i < data.length; i++) {
      returnHTML.push(
        <article key={i}>
          <h4>{data[i].startDate} - {data[i].endDate == 0 ? "Current" : data[i].endDate}</h4>
          <h3>{data[i].schoolName}</h3>
          <h2>{data[i].orientation}</h2>
          {data[i].notes ? <NotesUl data={data[i].notes} /> : null}
        </article>
      )
    }

    return (
      <>
        {returnHTML}
      </>
    )
  }

  const NotesUl = (props) => {
    
    let liArray = []
    for (let i = 0; i < props.data.length; i++) {
      liArray.push(
        <li key={i}>{props.data[i]}</li>
      )
    }
    return (
      <ul>
        {liArray}
      </ul>
    )
  }

  return (
    <section className="right-side-content">
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

    </section>
  )
}