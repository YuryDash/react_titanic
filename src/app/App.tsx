import React, { useState } from 'react';
import s from './App.module.scss';
import { usePassengersQuery } from '../api';
import {
    Table, TableBody, TableData, TableHeader, TableRow, Input, Loader, SelectFilter,
} from '../components';
import { ColumnKey, columns, filterPassengers } from '../shared';

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [selectedFilter, setSelectedFilter] = useState<ColumnKey>('name');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;

    const {
        data,
        error,
        isLoading,
    } = usePassengersQuery();

    const onChangeInputHandler = (value: string) => {
        setSearchValue(value);
        setCurrentPage(1);
    };

    const onFilterChangeHandler = (filterValue: ColumnKey) => {
        setSelectedFilter(filterValue);
        setSearchValue('');
        setCurrentPage(1);
    };

    const filteredData = data ? filterPassengers(data, selectedFilter, searchValue) : [];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleData = filteredData.slice(0, endIndex);

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const {
            scrollTop,
            scrollHeight,
            clientHeight,
        } = event.currentTarget;
        const isAtBottom = scrollHeight - scrollTop <= clientHeight + 10;
        if (isAtBottom) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return (
            <div>
                Error:
                {error.message}
            </div>
        );
    }

    return (
        <div onScroll={handleScroll}>
            <div className={s.container} onScroll={handleScroll}>
                <div className={s.inputWrapper}>
                    <Input value={searchValue} onChange={onChangeInputHandler} />
                    <SelectFilter
                        onFilterChange={onFilterChangeHandler}
                        selectedFilter={selectedFilter}
                        selectValues={columns}
                    />
                </div>
                <Table>
                    <TableHeader columns={columns} />
                    <TableBody>
                        {visibleData.length ? visibleData.map((passenger) => (
                            <TableRow key={passenger.id}>
                                {columns.map((column) => {
                                    let value = passenger[column.key];
                                    if (column.key === 'survived') {
                                        value = passenger[column.key] ? 'Yes' : 'No';
                                    } else if (column.key === 'age') {
                                        value = `${Math.ceil(passenger[column.key])} years`;
                                    }
                                    return (
                                        <TableData key={column.key}>
                                            {value}
                                        </TableData>
                                    );
                                })}
                            </TableRow>
                        )) : (
                            <div className={s.noContent}>
                                there are no matches for your query :С
                            </div>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default App;
