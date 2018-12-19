const controller = {
  startTimer() {
    this.timer = setTimeout(() => {
      this.count--;
      if (this.count === 0) {
        this.$router.replace('/');
      }
      this.startTimer();
    }, 1000);
  }
};

export default controller;
