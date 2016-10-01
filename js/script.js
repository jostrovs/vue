$(document).ready(function () {
    var app = new Vue({
        el: '#app',
        data: {
            ownData: 'dsfsdgsdf',
            message: 'Hello Vue!',
            klikattu: ''
        },
        created: function () {
            var self = this;
            $.get("ajax/test.json", function (data) {
                self.ownData = data;
            });
        },
        methods: {
            buttonklik: function(){
                this.klikattu = "Sä klikkasit mua!";
            }
        }
    });
});
