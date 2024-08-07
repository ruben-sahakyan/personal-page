import { defineStore } from "pinia";

interface contactInterface {
    id: number, name: string, date: string, image: string
};

interface skillInterface {
    id: number, name: string,
};

interface hardSkillsInterface {
    javascript: skillInterface[],
    os: skillInterface[],
    database: skillInterface[],
    graphic: skillInterface[],
    other: skillInterface[]
}

interface skillsInterface {
    hardSkills: hardSkillsInterface,
    softSkills: skillInterface[],
};

interface messageInterface {
    id: number, text: string
};

interface UsedSkillsInterface {
    frontend: skillInterface[],
    backend: skillInterface[],
    database: skillInterface[],
    webserver: skillInterface[],
    other: skillInterface[],
}

interface storeInterface {
    userAuth: userAuthInterface,
    skills: skillsInterface,
    contacts: contactInterface[],
    usedSkills: UsedSkillsInterface,
    messages: messageInterface[],
};

interface userAuthInterface {
    status: boolean,
    email: string
}


export const useStyleStore = defineStore('sroreId', {
    state: () => {
        return {
            lightTheme: true,
        }
    },
    getters: {
        changeBackgroundColor: (state) => {
            if(!state.lightTheme) {
                return document.body.style.backgroundColor = 'black';
            } else {
                return document.body.style.backgroundColor = '#282828';
            }
        }
    },
    actions: {}
});

export const useStore = defineStore('storeId', {
    state: (): storeInterface => {
        let userAuth: userAuthInterface = {status: false, email: ''};
        const messages: messageInterface[] = [];
        const contacts: contactInterface[] = [
            {id: 1, name: 'email', date: 'ruben1987sahakyan@gmail.com', image: 'email.png'},
            {id: 2, name: 'telegram', date: '@ruben_sahakyan', image: 'telegram.png'},
            {id: 3, name: 'linkedIn', date: 'https://am.linkedin.com/in/ruben-sahakyan-611258238/en', image: 'linkedIn.png'},
            {id: 4, name: 'github', date: 'https://github.com/ruben-sahakyan', image: 'github.png'},
        ];
        const usedSkills = {
            frontend: [
                {id: 1, name: 'typescript' },
                {id: 2, name: 'vue3' },
                {id: 3, name: 'html5' },
                {id: 4, name: 'scss' },
                {id: 5, name: 'pinia' }
            ],
            backend: [
                {id: 1, name: 'typescript' },
                {id: 2, name: 'nest' },
                {id: 3, name: 'oop'},
                {id: 4, name: 'restapi'}
            ],
            database: [
                {id: 1, name: 'postgresql'}
            ],
            webserver: [
                {id: 1, name: 'nginx'}
            ],
            other: [
                {id: 1, name: 'docker'},
                {id: 2, name: 'git'},
                {id: 3, name: 'github'},
                {id: 4, name: 'dbeaver'},
                {id: 5, name: 'postman'},
                {id: 7, name: 'restapi'}
            ]
        };
        const skills = {
            hardSkills: {
                javascript: [
                    {id: 1, name: 'javascript' },
                    {id: 2, name: 'typescript' },
                    {id: 3, name: 'vue' },
                    {id: 4, name: 'react' },
                    {id: 5, name: 'epxress' },
                    {id: 6, name: 'nest' },
                ],
                os: [
                    {id: 1, name: 'linux' },
                    {id: 2, name: 'windows' },
                ],
                database: [
                    {id: 1, name: 'postgresql' },
                    {id: 2, name: 'sqlite' },
                    {id: 3, name: 'mongodb' },
                ],
                graphic: [
                    {id: 1, name: 'photoshop' },
                    {id: 2, name: 'figma' },
                ],
                html: [
                    {id:1, name: 'html5' }
                ],
                css: [
                    {id: 1, name: 'css3' },
                    {id: 1, name: 'scss' },
                    {id: 1, name: 'tailwind' }
                ],
                other: [
                    {id: 1, name: 'docker' },
                    {id: 2, name: 'git' },
                    {id: 3, name: 'github' },
                    {id: 4, name: 'dbeaver' },
                    {id: 5, name: 'postman' },
                    {id: 6, name: 'pgadmin' },
                    {id: 7, name: 'restapi' }
                ]
            },
            softSkills: [
                {id: 1, name: 'hard working' },
                {id: 2, name: 'problem solving' },
                {id: 3, name: 'comunication' }
            ]
        };
        return {
            userAuth,
            messages,
            contacts,
            skills,
            usedSkills,
            }
    },
    getters: {
        getMessages(state) {
            return state.messages
        },
    },
    actions: {
        addMessage(text: string) {
            this.messages.push({id: Math.floor(Math.random()*10000), text});
        },
        clearMessages() {
            this.messages = [];
        },
    }
}
);