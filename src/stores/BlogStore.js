// eslint-disable-next-line no-undef
import { defineStore } from "pinia"

export let useBlogStore = defineStore('blogs', {
    state: ()=> {
        return{
            title: '',
            blogs: []
        }
    },
    actions: {
        async fill(){
            let r = await import('@/blogs.json');
            this.$state = r.default;
        },
        
    }
})