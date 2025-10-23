import Banner from '../Home/Banner'
import Choose from '../Choose/Choose'
import LandingFull from '../LandingFull/LandingFull'
import JoinGatekeeper from '../JoinGatekeeper/JoinGatekeeper'
import GetStartedSection from '../GetStartedSection/GetStartedSection'
import AgentForm from '../Forms/AgentForm'
import ContactInfo from '../ContactInfo/ContactInfo'
import Demo from '../Forms/Demo'
import CompanyForm from '../Forms/CompanyForm'
import PaymentAuthorizationForm from '../Forms/PaymentAuthorizationForm'
import RecurringChargeForm from '../Forms/RecurringChargeForm'
import AllForms from '../Forms/AllForms'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Demo></Demo> */}
      <Choose></Choose>
      <AllForms></AllForms>
      <LandingFull></LandingFull>
      <JoinGatekeeper></JoinGatekeeper>
      <GetStartedSection></GetStartedSection>
      {/* <AgentForm></AgentForm> */}
      <ContactInfo></ContactInfo>
      {/* <CompanyForm></CompanyForm>
      <PaymentAuthorizationForm></PaymentAuthorizationForm>
      <RecurringChargeForm></RecurringChargeForm> */}
    </div>
  )
}

export default Home