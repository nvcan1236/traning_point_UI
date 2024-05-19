/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

export default function SelectBox({
  options,
  className,
  onChange,
  onBlur,
  name,
}) {
  const [selectedValue, setSelectedValue] = useState(options[0].name);
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
    onChange(name, options[0].value);
  }, []);

  const handleSelect = (option) => {
    onChange(name, option.value);
    setSelectedValue(option.name);
    setShowOptions(false);
  };

  return (
    <div className="relative" ref={selectBoxRef}>
      <div
        className={`bg-mainBlue text-white px-4 py-2 rounded-sm w-[150px] flex justify-between items-center ${className}`}
        onClick={() => setShowOptions(true)}
        onBlur={onBlur}
      >
        {selectedValue} <IoChevronDown />
      </div>
      {showOptions && (
        <ul className="absolute border rounded-sm w-full bg-white mt-1 shadow shadow-tintBlue z-10">
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
