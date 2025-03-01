import React from 'react';
import s from './loader.module.scss';

export function Loader() {
    return (
        <div className={s.container}>
            <div className={s.spinner} />
        </div>
    );
}
