import { ChangeEvent, Dispatch, HTMLAttributes, SetStateAction } from "react";

type Props = {
  attributes: HTMLAttributes<HTMLInputElement> & {
    type: string,
    minLength?: number,
    maxLength?: number,
    required?: boolean,
    pattern?: string,
    autoComplete?: string,
  },
  useStateTuple: [string, Dispatch<SetStateAction<string>>],
};

const Input = ({ attributes, useStateTuple: [ value, setValue ] }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };
  return (
    <input
      {...attributes}
      value={ value }
      spellCheck={ false }
      required
      onChange={ handleChange }
    />
  );
};

export default Input;
