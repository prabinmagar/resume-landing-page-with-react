import DATA from "../../constant/mockData";
import Title from "../common/Title";
import PropTypes from "prop-types";

const CertificateAward = () => {
  return (
    <div className="cert-award-sc resume-block">
      <div className="container">
        <div className="cert-award-content dotted-border-left">
          <Title titleText={"Certificates & Awards"} />
          <div className="cert-award-list grid">
            {DATA.certificatesAndAwards?.map((item) => (
              <CertificateAwardItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateAward;

const CertificateAwardItem = ({ item }) => {
  return (
    <div className="cert-award-item grid items-center">
      <div className="cert-award-icon">
        <img src={item.icon} alt="" />
      </div>
      <div className="cert-award-info grid">
        <div className="cert-award-info-l">
          <p className="cert-award-provider">{item.provider}</p>
          <h3 className="cert-award-course">{item.course}</h3>
        </div>
        <div className="cert-award-info-r flex items-center justify-end">
          {item.startDate} - {item.endDate || "Present"}
        </div>
      </div>
    </div>
  );
};

CertificateAwardItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
  }).isRequired,
};
