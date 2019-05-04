new Vue({
  el: '#editor',
  data: {
    input: '# hello',
    cur_file: '',
    cur_title: 'lox',
    titles: ['need', 'refresh']
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update_m: function (e) {
      this.input = e.target.value
    },
    update_f: function (e) {
        this.cur_file = e.target.value;
    },
    update_t: function(e){
        this.cur_file = e.target.value;
    },
    save: function(){
      //this.$http.put("localhost:8080/files");
    },
    del: function(){
      //this.$http.delete("localhost:8080/files");
    }, 
    select: function(){
      //this.$http.get("localhost:8080/files");
    },
    refresh: function(){
      this.$http.get("http://localhost:8080/files").then(response => {
        
        console.log(Object.values(response.body));
        for (let i = 0; i < response.body.lenght; i++){
          console.log(response.body[i]);
        }
      });
  },
  add: function(){
    /*this.$http.post("localhost:8080/files", {
      title: this.cur_title,
      text: this.input
    }).then(function(data){
      console.log(data);
    });*/
  }
  }
})
