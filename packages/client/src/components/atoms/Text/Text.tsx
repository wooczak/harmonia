import { TextSize } from '@/theme/types'
import { textMapper } from './helpers'

export interface TextProps {
  size: TextSize
  className?: string
  children: React.ReactNode
}

export default function Text({ size, className, children }: TextProps) {
  return textMapper(size, children, className)
}
