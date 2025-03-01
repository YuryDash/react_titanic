import React, { ChangeEvent } from 'react';
import s from './input.module.scss';

type Props = {
    value: string
    onChange: (value: string) => void
    placeholder?: string
}

export function Input({
    onChange,
    value,
    placeholder = 'Search...',
}: Props) {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };
    return (
        <div className={s.wrapper}>
            <input
                className={s.input}
                type="search"
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
            />
        </div>
    );
}
