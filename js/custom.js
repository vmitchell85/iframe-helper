var vApp = new Vue({
    el: '#app',
    data: function(){
        return {
            bg: "#F2DEDE",
            height: 768,
            url: "http://lorempixel.com/1024/768/",
            width: 1024,
            scroll: "yes",
            fborder: 0,
            iframe: {
                bg: null,
                height: null,
                url: null,
                width: null,
                scroll: null,
                fborder: null,
            }
        }
    },
    methods: {
        pushChanges: function(){
            this.iframe.url = '';
            this.$nextTick(function(){
                this.iframe = {
                    bg: this.bg,
                    height: this.height,
                    url: this.url,
                    width: this.width,
                    scroll: this.scroll,
                    fborder: this.fborder,
                };
            })
        }
    }
});