import tw, { styled } from 'twin.macro'

export interface IAvatar {
  rounded?: boolean
  circular?: boolean
  size?: 'large' | 'medium' | 'small'
}

export const Component = styled.img<IAvatar>(
  ({ rounded = false, size = 'medium', circular = true }) => [
    tw`inline-block`,
    rounded && tw`rounded-md`,
    circular && tw`rounded-full`,
    size === 'large' && tw`h-14 w-14`,
    size === 'medium' && tw`h-10 w-10`,
    size === 'small' && tw`h-8 w-8`
  ]
)
