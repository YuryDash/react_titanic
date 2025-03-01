import * as React from 'react';
import { Item, ItemIndicator, ItemText } from '@radix-ui/react-select';
import s from './select-item.module.scss';

type SelectItemProps = {
    children: React.ReactNode;
    value: string;
};

export const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
    ({ children, value, ...props }, forwardedRef) => (
        <Item
            value={value}
            className={s.Item}
            {...props}
            ref={forwardedRef}
        >
            <ItemText>{children}</ItemText>
            <ItemIndicator className={s.ItemIndicator} />
        </Item>
    ),
);
