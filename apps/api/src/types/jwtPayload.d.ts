import { IUser } from '@jetpack/interfaces'

export type jwtPayload = Pick<IUser, 'role'> & Pick<IUser, 'email'>
