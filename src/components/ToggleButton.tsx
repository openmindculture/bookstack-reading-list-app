import React from 'react';

interface CustomButtonProps {
  children?: React.ReactNode;
  initialSelected?: boolean;
  onChange?: (
    event: React.MouseEvent<HTMLButtonElement>,
    isSelected: boolean,
  ) => void;
  className?: string;
  forTargetId?: string;
}

const ToggleButton: React.FC<CustomButtonProps> = ({
  children,
  initialSelected = false,
  onChange,
  className,
  forTargetId,
}) => {
  const [selected, setSelected] = React.useState(initialSelected);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newSelected = !selected;
    setSelected(newSelected);

    // Call onChange with event and new selected state
    onChange?.(event, newSelected);

    // Or if you want to pass the button element:
    // onChange?.(event, event.currentTarget);
  };

  return (
    <button
      type="button"
      className={`${className} ${selected ? 'selected' : ''}`}
      data-selected={selected}
      data-for-target-id={forTargetId}
      onClick={handleClick}
      {...(onChange !== undefined && { 'data-has-change-handler': true })}
    >
      <svg className='w-6 h-6 fill-current text-green-500'>
        <use href='status-icon' />
      </svg>
      {children}
    </button>
  );
};

export default ToggleButton;
