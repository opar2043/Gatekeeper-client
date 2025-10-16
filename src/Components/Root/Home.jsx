import Banner from '../Home/Banner'
import Choose from '../Choose/Choose'
import AgentForm from '../Forms/AgentForm'
import ContactInfo from '../ContactInfo/ContactInfo'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Choose></Choose>
      <AgentForm></AgentForm>
      <ContactInfo></ContactInfo>
    </div>
  )
}

export default Home