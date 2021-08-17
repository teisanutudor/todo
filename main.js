const app = new Vue({
  el: "#app",
  data: {
    form: {
      languages: []
    },
    url: "https://mail.testways.online"
  },
  methods: {
    async submit(e) {
      e.preventDefault()
      console.log(this.form);
      // const respnse = await fetch(this.url, {
      //   method: 'POST',
      //   headers: {
      //     "Content-type": "application/json"
      //   },
      //   body: JSON.stringify(this.form)
      // })
    }
  }
})