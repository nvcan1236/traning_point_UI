import PropTypes from 'prop-types';

const PrimaryButton = ({children, className, ...props}) => {
  return (
    <button className={`px-4 text-base py-2 bg-mainBlue text-white rounded-md  ${className}`} {...props}>
      {children}
    </button>
  )
}

PrimaryButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default PrimaryButton
