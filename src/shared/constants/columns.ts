export const columns: Columns[] = [
    {
        key: 'name',
        title: 'Name',
    },
    {
        key: 'id',
        title: 'ID',
    },
    {
        key: 'age',
        title: 'Age',
    },
    {
        key: 'gender',
        title: 'Gender',
    },
    {
        key: 'survived',
        title: 'Survived',
    },
] as const;

export type Columns = {key: ColumnKey, title: string}
export type ColumnKey = 'id' | 'name' | 'age' | 'gender' | 'survived';
