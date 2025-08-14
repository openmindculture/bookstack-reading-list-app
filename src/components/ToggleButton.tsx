import React from 'react';

interface CustomButtonProps {
  children?: React.ReactNode;
  initialSelected?: boolean;
  onChange?: (
    event: React.MouseEvent<HTMLButtonElement>,
    isSelected: boolean,
  ) => void;
  forTargetId?: string;
}

const ToggleButton: React.FC<CustomButtonProps> = ({
  children,
  initialSelected = false,
  onChange,
  forTargetId,
}) => {
  const [selected, setSelected] = React.useState(initialSelected);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newSelected = !selected;
    setSelected(newSelected);
  };

  return (
    <button
      type="button"
      data-selected={selected}
      data-for-target-id={forTargetId}
      onClick={handleClick}
      {...(onChange !== undefined && { 'data-has-change-handler': true })}
    >
      <svg 
        className={`w-6 h-6 text-blue-500 ${selected ? 'fill-current' : ''}`}
      >
        <use href='status-icon' />
      </svg>
      {children}
    </button>
  );
};

export default ToggleButton;
