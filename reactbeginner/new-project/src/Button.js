// prop의 타입 validation.
import PropTypes from "prop-types";
// 모듈화한 css를 가져와서 사용할 수 있다. 스타일 독립적 유지 가능!
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
