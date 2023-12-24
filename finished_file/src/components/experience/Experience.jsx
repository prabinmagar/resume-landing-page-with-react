import { FaLink } from "react-icons/fa6";
import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";
import { DiamondLgBlue, DiamondLgGreen, DiamondLgOrange, DiamondLgPink, DiamondLgYellow } from "../../assets/image";

const Experience = () => {
  return (
    <div className="experience-sc resume-block">
      <div className="container">
        <div className="experience-content dotted-border-left">
          <Title titleText={"Professional Experience"} />
          <div className="experience-list grid">
            {DATA.professionalExperiences.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const ExperienceItem = ({ item }) => {
  const showDiamondImage = (color) => {
    if (color === "Blue") {
      return DiamondLgBlue;
    } else if (color === "Green") {
      return DiamondLgGreen;
    } else if (color === "Orange") {
      return DiamondLgOrange;
    } else if (color === "Pink") {
      return DiamondLgPink;
    } else if (color === "Yellow") {
      return DiamondLgYellow;
    }
  };

  return (
    <div className="experience-item" key={item.id}>
      <div className="exp-time flex items-center">
        <span className="start-time">{item.startDate}</span>
        <span>-</span>
        <div className="end-time">{item.endDate || "Present"}</div>
      </div>
      <div className="exp-position flex items-center flex-wrap">
        <p className="exp-position-text">{item.position}</p>
        <div className="diamond-shapes-group">
          {item.diamondColors?.map((color, index) => (
            <img key={index} src={showDiamondImage(color)} alt="" />
          ))}
        </div>
      </div>
      <div className="exp-company flex items-center flex-wrap">
        <div className="company-logo">
          <img src={item.company.logo} alt="" />
        </div>
        <p className="company-name">{item.company.name}</p>
        <p className="company-info text">{item.company.info}</p>
      </div>
      <p className="exp-description text">{item.description}</p>
      <div className="exp-links">
        {item.links?.map((link) => (
          <a key={link.label} href={link.url} className="text-mauve">
            <FaLink />
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

ExperienceItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    position: PropTypes.string.isRequired,
    diamondColors: PropTypes.array,
    company: PropTypes.shape({
      logo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        url: PropTypes.string,
      })
    ),
  }),
};
