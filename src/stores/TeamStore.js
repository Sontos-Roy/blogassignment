// eslint-disable-next-line no-undef
import { defineStore } from "pinia"

export let useTeamStore = defineStore('team', {
    state: ()=> {
        return{
            name: '',
            spots: 0,
            members: []
        }
    },
    actions: {
        // fill(){
        //     import('@/blogs.json').then(r => {
        //         // let data = r.default;
        //         this.$state = r.default;
        //         // this.$patch({
        //         //     name: data.name,
        //         //     spots: data.spots,
        //         //     members: data.members
        //         // })
        //     })
        // }
        async fill(){
            let r = await import('@/blogs.json');
            this.$state = r.default;
        },
        grow(spots){
            this.spots = spots;
        },
        
    },
    getters: {
        spotsRemaining(){
            return this.spots - this.members.length;
        }
    }
})