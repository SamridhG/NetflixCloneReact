import { useState } from 'react';

type CustomDropdownProps = {
  img?: string;
  mainContainerStyle?: string;
  options?: {
    value: string;
    label: string;
    disabled?: boolean;
    icon?: string;
  }[];
  onChange?: ({ value, label }: { value: string; label: string }) => void;
};

function CustomDropdown({
  img = '',
  mainContainerStyle = '',
  options = [],
  onChange = () => {},
}: CustomDropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (option: { value: string; label: string }) => {
    onChange(option);
    setShowDropdown(false);
  };

  const handleToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={`relative inline-block text-left`}>
      <div
        className={`cursor-pointer flex flex-row items-start justify-start gap-[2.9px]`}
        onClick={handleToggle}
      >
        <div className="flex flex-col items-start justify-start pt-[5.1px] px-0 pb-0">
          <img
            alt=""
            src={img}
            style={{ height: '100px' }} // Fixed icon height
          />
        </div>
      </div>
      <div
        className={`${showDropdown ? 'block' : 'hidden'} absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${mainContainerStyle}`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
        <div className="py-1" role="none">
          {options.map((option) => (
            <div
              key={option.label}
              className="cursor-pointer flex px-4 py-2 w-full items-center bg-transparent justify-start rounded-md text-lg text-white hover:bg-gray-700 relative text-[inherit]" // Text color white and hover background
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
              onClick={() => handleChange(option)}
            >
              {option?.icon ? (
                <img
                  className="max-w-[18px] relative object-contain shrink-0 mr-2"
                  alt=""
                  src={option?.icon}
                  style={{ height: '18px' }} // Fixed icon height
                />
              ) : null}
              <span className='text-white text-3xl'>{option.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomDropdown;
