import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from 'shared/ui/buttons';
import { DropdownProps } from '../../model/types';
import cn from 'classnames';
import classes from '../../fields.module.scss';
import { Typography } from 'shared/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeDropdown } from 'shared/lib/animations';

const Dropdown = <T extends string>({
	options = [],
	onChange,
	value,
	placeholder = 'Выберите из списка',
	readOnly,
	optionsTitle,
	className,
	view,
}: DropdownProps<T>) => {
	const [showOptions, setShowOptions] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	
	// Закрытие по клику вне
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setShowOptions(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const selectedOption = useMemo(() => {
		return options.find(opt => opt.value === value);
	}, [value, options]);

	const toggleOptions = useCallback(() => {
		if (!readOnly) {
			setShowOptions(prev => !prev);
		}
	}, [readOnly]);

	const handleSelect = useCallback((event: React.MouseEvent<HTMLElement>) => {
		const newValue = event.currentTarget.getAttribute('data-value');
		if (newValue && onChange) {
			onChange(newValue as T);
		}
		setShowOptions(false);
	}, [onChange]);

	const renderedOptions = useMemo(() => {
		return options.map((option) => {
			const contentArray = Array.isArray(option.content)
				? option.content
				: [option.content ?? String(option.title)];
	
			return (
				<li
					key={option.id}
					role="option"
					className={cn(classes.dropdown__option)}
				>
					<Button
						data-value={option.value}
						onClick={handleSelect}
						className={cn(classes.row, classes['row_g-16'], classes.dropdown__btn)}
						base
					>
						{contentArray.map((cell, i) => (
							<Typography
								key={ i }
								tag="span"
								className={cn(
									optionsTitle
										? classes['sm:col-' + (optionsTitle[i]?.titleClass || '4')]
										: undefined
								)}
							>
								{ cell }
							</Typography>
						))}
					</Button>
				</li>
			);
		});
	}, [options, handleSelect, optionsTitle]);

	return (
		<div 
			className={cn(
				classes.dropdown,
				className,
				{
					[classes.dropdown_open]: showOptions,
					[classes.dropdown + '_' + view]: view,
				},
			)}
			ref={ dropdownRef }
		>
			<Button
				base
				onClick={ toggleOptions }
				disabled={ readOnly }
				className={cn(classes.dropdown__select)}
				addonRight='chevronDown'
				addonRightClass={cn(classes.dropdown__icon)}
			>
				<Typography 
					tag='span'
					className={cn(classes['dropdown__select-inner'])}
				>
					<span>
						{
							selectedOption
								? ('content' in selectedOption
									? (Array.isArray(selectedOption.content)
										? selectedOption.content[0]
										: selectedOption.content)
									: 'title' in selectedOption
										? selectedOption.title
										: placeholder)
								: placeholder
						}
					</span>
				</Typography>
			</Button>

			<AnimatePresence>
				{ showOptions && (
					<motion.ul 
						className={cn(classes.dropdown__list)}
						{ ...fadeDropdown }
					>
						{optionsTitle && (
							<li className={cn(classes.row, classes['row_g-16'], classes['dropdown__options-title'])}>
								{ optionsTitle.map((option, i) => (
									<Typography
										key={ i }
										tag='span'
										color='disabled'
										className={ cn(classes['col-' + option.titleClass]) }
									>
										{ option.title }
									</Typography>
								)) }
							</li>
						)}
						{ renderedOptions }
					</motion.ul>
				)}
			</AnimatePresence>
		</div>
	);
};

export { Dropdown };
