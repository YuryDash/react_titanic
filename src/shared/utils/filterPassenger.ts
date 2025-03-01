import { Passenger } from '../../api';
import { ColumnKey } from '../index';

export const filterPassengers = (
    data: Passenger[],
    selectedFilter: ColumnKey,
    searchValue: string,
) => data.filter((passenger) => {
    let filterValue = passenger[selectedFilter];

    if (selectedFilter === 'survived') {
        filterValue = filterValue ? 'Yes' : 'No';
    }

    const stringValue = String(filterValue).toLowerCase();
    const searchQuery = searchValue.toLowerCase();

    if (selectedFilter === 'gender') {
        return stringValue.startsWith(searchQuery);
    }

    return stringValue.includes(searchQuery);
});
