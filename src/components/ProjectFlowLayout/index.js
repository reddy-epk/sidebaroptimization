import {IoSettingsOutline} from 'react-icons/io5'
import './index.css'
const ProjectFlowLayout = () => {
  return (
    <div className='project-flow-layout'>
      <div className='sidebar'>
        <div className='lama-svg'>
          <img
            src='https://res.cloudinary.com/dqfqwre2q/image/upload/v1717913919/lama.svg'
            alt='lama'
            width='80'
            height='40'
          />
          <h1 className='lama-head'>LAMA.</h1>
        </div>
        <p id='flow-para'>Podcast Update Flow</p>
        <div className='sidebar-top'>
          <button className='circle-button'>
            <span className='circle'>1</span>
            Project
          </button>
          <button className='circle-button'>
            <span className='circle'>2</span>
            Widget Configuration
          </button>
          <button className='circle-button'>
            <span className='circle'>3</span>
            Deployment
          </button>
          <button className='circle-button'>
            <span className='circle'>4</span>
            Pricing
          </button>
          <hr />
        </div>
        <hr />
        <button className='circle-button setting-button'>
          <span className='setting'>
            <IoSettingsOutline />
          </span>
          <span className='spacer'>Settings</span>
        </button>
      </div>
      <div className='main-bar'>{/* Content for the main bar */}</div>
    </div>
  )
}

export default ProjectFlowLayout
