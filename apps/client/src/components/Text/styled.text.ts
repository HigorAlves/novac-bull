import twin, { styled } from 'twin.macro'

export interface IComponetProps {
  text: string
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  bold?: boolean
  extraBold?: boolean
}

export const Component = styled.p<IComponetProps>(
  ({ extraBold = false, bold = false, as = 'p' }) => [
    twin`text-gray-900`,
    extraBold && twin`font-extrabold`,
    bold && twin`font-bold`,
    as === 'h1' && twin`text-3xl`
  ]
)
