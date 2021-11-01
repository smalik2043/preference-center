export interface UserConsent {
    user: {
        id: string
    }
    consents: consent
}

export interface ConsentInterface {
    id: string;
    enabled: boolean;
}

type consent = ConsentInterface[];

export type char = 'O' | 'N';

export enum StatusEnum {
    OLD = 'O',
    NEW = 'N',
}