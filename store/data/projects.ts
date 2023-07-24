import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: [
            {
                image: "/images/projects/kobeni.png",
                title: 'Cek Github',
                description: "Portofolio Github",
                technologies: ['HTML'],
                github_url: 'https://github.com/ryasya/ryasya',
                opensource: true,
            },
            {
                image: "/images/projects/kobeni.png",
                title: 'Test PHP',
                description: "Cuma Nyoba Php",
                technologies: ['PHP'],
                github_url: 'https://github.com/Mirekan/tester',
                opensource: false,
            }
        ]
    })
})