

export interface Schedule {
    id: number;
    timeIn: string;
    timeOut: string;
    dayTo: string;
    dayFrom: string;
}

type ScheduleForm = Omit<Schedule, 'id'>;
