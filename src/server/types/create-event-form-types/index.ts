export interface CreateEventForm {
    name: string;
    description: string;
    venue: string;
    invitees: Array<string>;
    privacy: boolean;
    start_date: Date;
    end_date: Date;
}