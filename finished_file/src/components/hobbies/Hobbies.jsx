import PropTypes from "prop-types";
import Title from "../common/Title";
import DATA from "../../constant/mockData";

const Hobbies = () => {
  return (
    <div className="hobbies-sc resume-block">
      <div className="container">
        <div className="hobbies-content dotted-border-left">
          <Title titleText={"Hobbies & Interests"} />
          <div className="hobbies-list flex items-center flex-wrap">
            {DATA.hobbiesAndInterests?.map((item) => (
              <HobbiesItem key={item.id} item={item} />
            ))}
          </div>
          <div className="dots-shape"></div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;

const HobbiesItem = ({ item }) => {
  return (
    <div className="hobbies-item flex items-center">
      <div className="hobbies-icon">
        <img src={item.icon} alt="" />
      </div>
      <div className="hobbies-text">{item.name}</div>
    </div>
  );
};

HobbiesItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
