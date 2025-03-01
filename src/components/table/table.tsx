import React, { ComponentProps, ComponentPropsWithoutRef } from 'react';
import s from './table.module.scss';

type TableProps = ComponentProps<'table'>;

export function Table({
    className,
    ...rest
}: TableProps) {
    return <table className={`${s.tableRoot} ${className}`} {...rest} />;
}

export function TableHead({ ...rest }: ComponentProps<'thead'>) {
    return <thead className={s.tHead} {...rest} />;
}

export function TableBody({ ...rest }: ComponentProps<'tbody'>) {
    return <tbody {...rest} />;
}

export function TableRow({ ...rest }: ComponentProps<'tr'>) {
    return <tr className={s.tRow} {...rest} />;
}

export function TableData({ ...rest }: ComponentProps<'td'>) {
    return <td className={s.tData} {...rest} />;
}

export function TableHeaderData({ ...rest }: ComponentProps<'th'>) {
    return <th className={s.thData} {...rest} />;
}

export type Column = {
    key: string;
    title: string;
};

export function TableHeader({
    columns,
    ...restProps
}: Omit<
    ComponentPropsWithoutRef<'thead'> & {
    columns: Column[];
},
    'children'
>) {
    return (
        <TableHead {...restProps}>
            <TableRow>
                {columns.map(({
                    title,
                    key,
                }) => (
                    <TableHeaderData
                        key={key}
                    >
                        <div className={s.headerContent}>
                            {title}
                        </div>
                    </TableHeaderData>
                ))}
            </TableRow>
        </TableHead>
    );
}
