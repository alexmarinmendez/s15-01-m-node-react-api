import PropTypes from "prop-types";
import classNames from "classnames";

const buttonStyles = {
  primary:
    "bg-[#F7786B] hover:bg-[#ea7064] text-white font-semibold py-2 px-6 rounded-full font-thin",
  secondary:
    "bg-secondary-500 hover:bg-secondary-600 text-white font-semibold py-4 px-6 rounded-full",
  tertiary:
    "bg-transparent hover:bg-primary-100 text-white font-semibold py-2 px-6 rounded-full",
  quaternary:
    "bg-white shadow-xl hover:bg-gray-300 text-black font-semibold py-2 px-6 rounded-full",
  // se pueden agregar más variantes acá
};

const Buttons = ({ variant, children, onClick }) => {
  const buttonClass = classNames(buttonStyles[variant]);

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

Buttons.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "quaternary"])
    .isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Buttons.defaultProps = {
  onClick: () => {},
};

export default Buttons;
