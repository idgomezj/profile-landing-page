export interface Stack {
    name: string;
    description: string;
}

export interface ExperienceContent {
    image: React.ReactElement;
    description: string;
    techStack: {
        frontend?: Stack[];
        backend?: Stack[];
        infrastructure?: Stack[];
        ai?: Stack[];
        data?: Stack[];
    }
}

export interface ExperienceInfo {
    icon: React.ReactElement;
    title: string;
    company: string;
    date: string;
    link: string;
    content: ExperienceContent;
}
