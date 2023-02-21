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
        showCloseIcon: false,
        showDoneIcon: false,
      };
      this.tasks.push(newTask);
      this.inputValue = "";
    },
  
    toggleDone(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
  
    removeTask(startIndex) {
      this.tasks.splice(startIndex, 1);
    },
  }
}).mount("#app");
