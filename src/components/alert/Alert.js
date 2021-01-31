import PropTypes from 'prop-types';
import AlertBox from './AlertStyled';
const Alert = ({ message }) => {
  return (
    <AlertBox>
      <p className="alertText">{message}</p>
    </AlertBox>
  );
};

export default Alert;

Alert.propTypes = {
  message: PropTypes.string,
};
