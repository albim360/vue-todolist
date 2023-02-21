const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [],
      inputValue: "",
      done: false,
    };
  },
  methods: {
    addTask() {
        const newTask = {
            text: this.inputValue,
            done: false,
            showCloseIcon: false
        }
        this.tasks.push(newTask)
        this.inputValue = ''
    },
    

    removeTask(startIndex) {
      console.log(
        "elimino il task con indice:",
        startIndex,
        this.tasks[startIndex]
      );
      this.tasks.splice(startIndex, 1);
    },
  },
}).mount("#app");
