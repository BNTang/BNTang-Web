// myBehavior.js
export const counterBehavior = Behavior({
  data: {
    counter: 0
  },
  methods: {
    increase() {
      this.setData({counter: this.data.counter + 1});
    },
    decrease() {
      this.setData({counter: this.data.counter - 1});
    }
  }
});