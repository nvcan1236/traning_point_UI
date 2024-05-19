/* eslint-disable react/prop-types */

export default function TransparentButton({children, className}) {
  return (
    <button className={`px-4 py-2 cursor-pointer ${className}`}>{children}</button>
  )
}
