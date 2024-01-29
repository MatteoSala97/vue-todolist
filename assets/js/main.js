const {
    createApp
} = Vue

createApp({
    data(){
        return {
            message: "To Boolist",
            newTask: "",
            toDos: [
                { 
                    text: "Complete work assignment", 
                    done: false 
                },
                { 
                    text: "Buy groceries for the week", 
                    done: false 
                },
                { 
                    text: "Go for a 20-minute walk", 
                    done: false 
                },
                { 
                    text: "Call a friend or family member", 
                    done: false 
                },
                { 
                    text: "Organize desk and workspace", 
                    done: false 
                }
            ]
        }
    },
    created(){
    },
    methods:{
        addTask(){
            if (this.newTask.trim()!== ""){
                this.toDos.push({
                    text: this.newTask, done: false,
                })
                this.newTask = ""
            }
        },
        removeTask(index){
            this.toDos.splice(index, 1)
        },
        lineThrough(index){
            this.toDos[index].done = !this.toDos[index].done
        }
    }
}).mount("#app")