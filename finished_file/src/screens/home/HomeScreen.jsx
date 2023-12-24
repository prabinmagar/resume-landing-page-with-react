import CertificateAward from "../../components/CertificateAward/CertificateAward"
import BackgroundEffect from "../../components/background_effect/BackgroundEffect"
import Cursor from "../../components/cursor/Cursor"
import Education from "../../components/education/Education"
import Experience from "../../components/experience/Experience"
import Header from "../../components/header/Header"
import Hobbies from "../../components/hobbies/Hobbies"
import Skill from "../../components/skill/Skill"

const HomeScreen = () => {
  return (
    <div className="page-container">
        <Header />
        <Experience />
        <Education />
        <Skill />
        <CertificateAward />
        <Hobbies />
        {/* Effects */}
        <Cursor />
        <BackgroundEffect />
    </div>
  )
}

export default HomeScreen
