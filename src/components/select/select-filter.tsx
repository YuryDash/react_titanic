import * as React from 'react';
import {
    Content,
    Group,
    Label,
    Portal,
    Root,
    Trigger,
    Value,
    Viewport,
} from '@radix-ui/react-select';
import s from './select-filter.module.scss';
import { SelectItem } from './select-item/select-item';
import { Columns, ColumnKey } from '../../shared';

type Props = {
    selectValues: Columns[];
    onFilterChange: (filter: ColumnKey) => void;
    selectedFilter: ColumnKey;
};

export function SelectFilter({ selectValues, onFilterChange, selectedFilter }: Props) {
    const handleValueChange = (value: ColumnKey) => {
        onFilterChange(value);
    };

    const mappedArray = () => selectValues.map(
        ({ key }) => <SelectItem key={key} value={key}>{key}</SelectItem>,
    );

    return (
        <Root value={selectedFilter} onValueChange={handleValueChange}>
            <Trigger className={s.Trigger} aria-label="Food">
                <Value placeholder="Select a filter…">{selectedFilter}</Value>
            </Trigger>
            <Portal>
                <Content className={s.Content}>
                    <Viewport className={s.Viewport}>
                        <Group>
                            <Label className={s.Label}>Filters</Label>
                            {mappedArray()}
                        </Group>
                    </Viewport>
                </Content>
            </Portal>
        </Root>
    );
}
