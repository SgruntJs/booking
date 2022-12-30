export interface Hotel {
    id: string;
    type: string;
    name: string;created: Date;
    modified: Date;
    address: string;
    airportCode: string;
    city: string;confidenceRating: number;
    countryCode: string;
    deepLink: string;
    highRate: number;
    hotelId: number;
    hotelInDestination: boolean;
    locationDescription: string;
    postalCode: number;
    rateCurrencyCode: string;
    shortDescription: string;
    stateProvinceCode: string;
    thumbNailUrl: string;
    tripAdvisorRating: number;
    tripAdvisorRatingUrl: string;
}