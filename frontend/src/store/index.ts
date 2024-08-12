import { defineStore } from "pinia";

interface contactInterface {
    id: number, name: string, date: string, image: string
};

interface skillInterface {
    id: number, name: string, use: boolean
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
}

interface storeInterface {
    userAuth: userAuthInterface,
    skills: skillsInterface,
    contacts: contactInterface[],
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
        changeBackgroubdColor: (state) => {
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
        const skills = {
            hardSkills: {
                javascript: [
                    {id: 1, name: 'javascript', use: true},
                    {id: 2, name: 'typescript', use: true},
                    {id: 3, name: 'vue', use: true},
                    {id: 4, name: 'react', use: false},
                    {id: 5, name: 'epxress', use: false},
                    {id: 6, name: 'nest', use: true},
                ],
                os: [
                    {id: 1, name: 'linux', use: true},
                    {id: 2, name: 'windows', use: false},
                ],
                database: [
                    {id: 1, name: 'postgresql', use: true},
                    {id: 2, name: 'sqlite', use: false},
                    {id: 3, name: 'mongodb', use: false},
                ],
                graphic: [
                    {id: 1, name: 'photoshop', use: true},
                    {id: 2, name: 'figma', use: true},
                ],
                other: [
                    {id: 1, name: 'docker', use: true},
                    {id: 2, name: 'git', use: true},
                    {id: 3, name: 'github', use: true},
                    {id: 4, name: 'postman', use: true},
                    {id: 5, name: 'pgadmin', use: true},
                    {id: 6, name: 'rest api', use: true}
                ]
            },
            softSkills: [
                {id: 1, name: 'hard working', use: true},
                {id: 2, name: 'problem solving', use: true},
                {id: 3, name: 'comunication', use: false}
            ]
        };
        return {
            userAuth,
            messages,
            contacts,
            skills,
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