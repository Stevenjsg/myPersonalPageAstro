export interface CvMockup {
    basics:    Basics;
    work:      Work[];
    education: Education[];
    skills:    Skill[];
    languages: Language[];
    interests: Interest[];
    projects:  Project[];
    stack:     Skill[];
}

export interface Basics {
    name:     string;
    label:    string;
    image:    string;
    email:    string;
    url:      string;
    summary:  string;
    location: Location;
    profiles: Profile[];
}

export interface Location {
    address:     string;
    postalCode:  string;
    city:        string;
    countryCode: string;
    region:      string;
}

export interface Profile {
    network:  string;
    username: string;
    icon:     string;
    url:      string;
}

export interface Education {
    institution: string;
    url:         string;
    area:        string;
    degree:      string;
    studyType:   string;
    startDate:   string;
    endDate:     string;
    score:       string;
}

export interface Interest {
    name:     string;
    keywords: string[];
}

export interface Language {
    language: string;
    fluency:  string;
}

export interface Project {
    name:        string;
    startDate:   Date;
    endDate:     Date;
    description: string;
    highlights:  string[];
    url:         string;
    image:       string;
    keywords:    string[];
    repository:  string;
    demo:        string;
}

export interface Skill {
    name:     string;
    level:    string;
    keywords: string[];
    icon?:    string;
}

export interface Work {
    name:       string;
    position:   string;
    url:        string;
    startDate:  Date;
    endDate:    Date;
    summary:    string;
    highlights: string[];
}
