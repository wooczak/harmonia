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
  errorMessage
}: IInputWithLabelProps) {
  return (
    <div>
      <label htmlFor={htmlFor}>{labelText}</label>
      <Input type="text" required placeholderText={placeholderText} isError={isError} errorMessage={errorMessage} />
    </div>
  )
}
