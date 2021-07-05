import React from 'react'

import Image from 'next/image'

import {
	MainFooter,
	CopyrightDiv,
	PreRegisterDiv,
	PreRegisterInputDiv,
	HeadingFooter,
	Paragraph
} from './styled.component'
import { Button } from '~/components/'

export default function HomeFooter() {
	return (
		<MainFooter>
			<CopyrightDiv>
				<a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						stroke='currentColor'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
						viewBox='0 0 24 24'
					>
						<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
					</svg>
					<HeadingFooter>Novac</HeadingFooter>
				</a>
				<Paragraph>© 2021 Novac —</Paragraph>
			</CopyrightDiv>
			<PreRegisterDiv>
				<PreRegisterInputDiv className='flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start'>
					<div className='relative sm:w-64 w-40 sm:mr-4 mr-2'>
						<label
							htmlFor='footer-field'
							className='leading-7 text-sm text-gray-600'
						>
							Faça seu pré-registro
						</label>
						<input
							type='text'
							id='footer-field'
							name='footer-field'
							className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<Button primary>Cadastre-se</Button>
				</PreRegisterInputDiv>
				<span className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
					<a className='ml-3 text-gray-500'>
						<svg
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-5 h-5'
							viewBox='0 0 24 24'
						>
							<rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
							<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
						</svg>
					</a>
					<a className='ml-3 text-gray-500'>
						<svg
							fill='currentColor'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='0'
							className='w-5 h-5'
							viewBox='0 0 24 24'
						>
							<path
								stroke='none'
								d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
							></path>
							<circle cx='4' cy='4' r='2' stroke='none'></circle>
						</svg>
					</a>
				</span>
			</PreRegisterDiv>
		</MainFooter>
	)
}
