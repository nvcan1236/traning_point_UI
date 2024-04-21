import PropTypes from 'prop-types';

const SecondaryButton = ({children, className, ...props}) => {
  return (
    <button className={`px-3 text-base py-1 text-mainBlue border rounded-md border-mainBlue  ${className}`} {...props}>
      {children}
    </button>
  )
}

SecondaryButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default SecondaryButton
