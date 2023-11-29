"use client"

interface CheckboxProps {
  label: string;
  id: string;
  checked: boolean;
  onChange: Function;
}

export default function Checkbox(props: CheckboxProps) {
  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={props.id}
        checked={props.checked}
        onChange={() => props.onChange()}
        className="checkbox__input"
      />

      <label className="checkbox__label" htmlFor={props.id}>
        <span className="checkbox__label__svg-parent">
          <svg viewBox="0 0 12 9" width="12px" height="9px">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
        <span className="checkbox__label__text">{props.label}</span>
      </label>
    </div>
  );
}
