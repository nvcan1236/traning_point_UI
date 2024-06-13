/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function SelectBox({
  options,
  className,
  onChange,
  onBlur,
  name, 
  children,
  value,
  ...props
}) {
  const [selectedValue, setSelectedValue] = useState(value?value:options[0]?.name);
  const [showOptions, setShowOptions] = useState(false);
  const selectBoxRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectBoxRef.current && !selectBoxRef.current.contains(e.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectBoxRef]);

  useEffect(() => {
    options && onChange(name, options[0].value);
    value && setSelectedValue(value)
  }, [value]);

  const handleSelect = (option) => {
    onChange(name, option.value);
    setSelectedValue(option.name);
    setShowOptions(false);

  };

  return (
    <div className="relative w-full" ref={selectBoxRef}>
      <div
        className={`bg-mainBlue text-white px-4 py-2 rounded-sm w-full flex justify-between items-center line-clamp-1 ${className?className:""}`}
        onClick={() => setShowOptions(!showOptions)}
        onBlur={onBlur}
        {...props}
      >
        {selectedValue || {children}} <IoChevronDown />
      </div>
      {showOptions && options && (
        <ul className="absolute border rounded-sm w-full bg-white mt-1 shadow shadow-tintBlue z-10 max-h-[300px] overflow-y-auto">
          {options.map((opt) => (
            <li
              key={opt.id}
              className="px-4 py-2 cursor-pointer hover:bg-slate-100 transition-all"
              onClick={() => handleSelect(opt)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
