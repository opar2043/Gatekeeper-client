import Banner from '../Home/Banner'
import Choose from '../Choose/Choose'
import LandingFull from '../LandingFull/LandingFull'
import JoinGatekeeper from '../JoinGatekeeper/JoinGatekeeper'
import GetStartedSection from '../GetStartedSection/GetStartedSection'
import AgentForm from '../Forms/AgentForm'
import ContactInfo from '../ContactInfo/ContactInfo'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Choose></Choose>
      <LandingFull></LandingFull>
      <JoinGatekeeper></JoinGatekeeper>
      <GetStartedSection></GetStartedSection>
      <AgentForm></AgentForm>
      <ContactInfo></ContactInfo>
    </div>
  )
}

export default Home