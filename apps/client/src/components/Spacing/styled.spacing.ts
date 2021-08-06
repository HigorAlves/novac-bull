import twin, { styled } from 'twin.macro'

export interface ISpacingProps {
  children: React.ReactNode
  mt: boolean
}

export const Component = styled.div<ISpacingProps>(({ mt }) => {
  return [mt && twin`mt-6`]
})
