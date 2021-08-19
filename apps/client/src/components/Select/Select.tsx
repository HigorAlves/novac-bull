import React, { useState } from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

interface IOption {
	id: number
	text: string
}

interface IProps {
	options: IOption[]
	label: string
	value: IOption
	setSelected: (option: IOption) => void
}

export function Select({ options, label, setSelected, value }: IProps) {
	return (
		<Listbox value={value} onChange={setSelected}>
			{({ open }) => (
				<>
					<Listbox.Label className='block text-sm font-medium text-gray-700 w-full'>
						{label}
					</Listbox.Label>
					<div className='mt-1 relative w-full'>
						<Listbox.Button className='bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'>
							<span className='block truncate'>{value.text}</span>
							<span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
								<SelectorIcon
									className='h-5 w-5 text-gray-400'
									aria-hidden='true'
								/>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={'div'}
							leave='transition ease-in duration-100'
							leaveFrom='opacity-100'
							leaveTo='opacity-0'
						>
							<Listbox.Options className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm'>
								{options.map(option => (
									<Listbox.Option
										key={option.id}
										className={({ active }) =>
											active
												? 'text-white bg-indigo-600 cursor-default select-none relative py-2 pl-3 pr-9'
												: 'text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9'
										}
										value={option}
									>
										{({ selected, active }) => (
											<>
												<span
													className={
														selected
															? 'font-semibold block truncate'
															: 'font-normal block truncate'
													}
												>
													{option.text}
												</span>

												{selected ? (
													<span
														className={
															active
																? 'text-white absolute inset-y-0 right-0 flex items-center pr-4'
																: 'text-indigo-600 absolute inset-y-0 right-0 flex items-center' +
																  ' pr-4'
														}
													>
														<CheckIcon className='h-5 w-5' aria-hidden='true' />
													</span>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</>
			)}
		</Listbox>
	)
}
