new Vue({
    el: '#editor',
    data: {
      input: '# hello',
      cur_file: '',
      title: 'lox',
      titles: ['omg', 'lol', 'mda']
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
    }
    refresh: function(){
        //request for all titles
    }
    }
  })
