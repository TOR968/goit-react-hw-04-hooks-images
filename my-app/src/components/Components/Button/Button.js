import s from '../../utils/styles.module.css';
import PropTypes from 'prop-types';

function Button({ pageChanger }) {
  return (
    <button type="button" className={s.Button} onClick={pageChanger}>
      Load more
    </button>
  );
}

Button.propTypes = {
  pageChanger: PropTypes.func.isRequired,
};

export default Button;
