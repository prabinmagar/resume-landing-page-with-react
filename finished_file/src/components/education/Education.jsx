import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";

const Education = () => {
  return (
    <div className="education-sc resume-block">
      <div className="container">
        <div className="education-content dotted-border-left">
          <Title titleText={"Education"} />
          <div className="education-list grid">
            {DATA.educationalExperiences?.map((item) => (
              <EducationItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

const EducationItem = ({ item }) => {
  return (
    <div className="education-item" key={item.id}>
      <div className="edu-title flex items-center">
        <img src={item.icon} className="edu-icon" alt={item.course} />
        <h3 className="edu-course">{item.course}</h3>
      </div>
      <p className="edu-info text">
        {item.institution}, {item.startDate} - {item.endDate || "Present"}
        {""}
        ({item.degree && `${item.degree}`})
      </p>
    </div>
  );
};

EducationItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    institution: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    degree: PropTypes.string,
  }),
};
