export interface Campaign{
    id: string,
    image: string,
    name: string,
    description: string,
    number: number,
    organisationId: string,
    organisation: string,
    tags: string[],
    goal: number,
    raised: number,
}