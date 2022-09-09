export interface OntopoRequest {
    slug:     string;
    locale:   string;
    criteria: Criteria;
}

export interface Criteria {
    size: string;
    date: string;
    time: string;
}

export interface OntopoResponse {
    page:             Page;
    areas:            Area[];
    recommended:      Recommended[];
    method:           Method;
    formattedRequest: FormattedRequest;
    availability_id:  string;
}

export interface Area {
    id:      string;
    icon:    string;
    name:    string;
    text:    string;
    options: Recommended[];
    score:   number;
}

export interface Recommended {
    time:   string;
    method: Method;
    text?:  string;
    score?: number;
    id?:    string;
}

export enum Method {
    Disabled = "disabled",
    Phone = "phone",
    Seat = "seat",
    Standby = "standby",
}

export interface FormattedRequest {
    date:       string;
    mediumDate: string;
    shortDate:  string;
    time:       string;
    size:       string;
    service:    string;
}

export interface Page {
    title:        string;
    showLess:     string;
    showMore:     string;
    subtitle:     string;
    generalError: string;
}
