/* eslint-disable react/prop-types */
export default function Heading({ className,children }) {
  return <h2 className={`text-lg text-mainBlue mt-6 font-medium ${className}`}>{children}</h2>;
}
