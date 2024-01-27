import Input from '../atoms/Input'
import { type InputProps } from '../atoms/Input/Input'
import { type ErrorHandling } from '../types'

interface IInputWithLabelProps extends ErrorHandling {
  htmlFor: string
  labelText: string
  placeholderText: string
  inputType: InputProps['type']
}

export default function InputWithLabel({
  htmlFor,
  labelText,
  placeholderText,
  isError,
  inputType,
  errorMessage,
  ...props
}: IInputWithLabelProps) {
  return (
    <div {...props} className="flex flex-col gap-[4px] my-5">
      <label htmlFor={htmlFor}>{labelText}</label>
      <Input type={inputType} required placeholderText={placeholderText} isError={isError} errorMessage={errorMessage} />
    </div>
  )
}
