const root = new Vue({
    el: "#root",
    data: {
        mails: [],
        mailNum: 10,
    },
    methods: {
        getRandomEmail(){ 
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                const mail = res.data.response;
                this.emails.push(mail);
            })
        }
    },
    mounted() {
        for (let i = 0; i > this.mailNum; i++) {
            this.getRandomEmail()
        }
    }
})