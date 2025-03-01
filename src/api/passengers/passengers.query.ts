import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../axiosInstance';
import { Endpoints } from '../../shared';

export function usePassengersQuery() {
    return useQuery({
        queryKey: ['getPassengers'],
        queryFn: async () => {
            const { data } = await axiosInstance.get<Array<Passenger>>(Endpoints.passengers);
            return data;
        },
    });
}

export type Passenger = {
    id: number;
    class: string;
    survived: boolean;
    name: string;
    gender: string;
    age: number;
    sibsp: string;
    parch: string;
    ticket: string;
    fare: string;
    cabin: string;
    embarked: string;
    boat: string | null;
    body: string | null;
    home_dest: string;
}
