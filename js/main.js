

const contacts = [
    {
        contact_name: 'Louis Amstrong',
        pic: './img/02.png',
        visible: true,
        active: true,
        messages: [
            {
                date: '10/01/2022 15:30:15',
                message: 'Ciao bellooo, come stai?',
                status: 'sent',
                display_info: false,
                delete_message: false
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received',
                display_info: false,
                delete_message: false
            }
        ]
        

    },
    {
        contact_name: 'Valter per gli amici Water',
        pic: './img/03.png',
        visible: true, 
        active: false,
        messages: [
            {
                date: '10/01/2022 15:30:15',
                message: 'Ciao come stai?',
                status: 'sent',
                display_info: false,
                delete_message: false
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received',
                display_info: false,
                delete_message: false
            }
        ]

    },
    {
        contact_name: 'Pippo Beggings',
        pic: './img/04.png',
        visible: true, 
        active: false,
        messages: [
            {
                date: '10/01/2022 15:30:15',
                message: 'Ciao come stai?',
                status: 'sent',
                display_info: false,
                delete_message: false
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received',
                display_info: false,
                delete_message: false
            }
        ]

    },
    {
        contact_name: 'Ferry Potter',
        pic: './img/05.png',
        visible: true, 
        active: false,
        messages: [
            {
                date: '10/01/2022 15:30:15',
                message: 'Ciao come stai?',
                status: 'sent',
                display_info: false,
                delete_message: false
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received',
                display_info: false,
                delete_message: false
            }
        ]

    },
    {
        contact_name: 'Jack Mi Sparo',
        pic: './img/06.png',
        visible: true, 
        active: false,
        messages: [
            {
                date: '10/01/2022 15:30:15',
                message: 'Ciao come stai?',
                status: 'sent',
                display_info: false,
                delete_message: false
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received',
                display_info: false,
                delete_message: false
            }
        ]

    },
    {
        contact_name: 'Lady Ponte e un Quintale',
        pic: './img/07.png',
        visible: true, 
        active: false,
        messages: [
            {
                date: '10/01/2022 15:30:15',
                message: 'Ciao come stai?',
                status: 'sent',
                display_info: false,
                delete_message: false
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received',
                display_info: false,
                delete_message: false
            }
        ]

    },
    {
        contact_name: 'Amstrong the trumpet',
        pic: './img/08.png',
        visible: true, 
        active: false,
        messages: [
            {
                date: '10/01/2022 15:30:15',
                message: 'Ciao come stai?',
                status: 'sent',
                display_info: false,
                delete_message: false
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received',
                display_info: false,
                delete_message: false
            }
        ]

    },
    {
        contact_name: 'Tony Merlot',
        pic: './img/09.png',
        visible: true, 
        active: false,
        messages: [
            {
                date: '10/01/2022 15:30:15',
                message: 'Ciao come stai?',
                status: 'sent',
                display_info: false,
                delete_message: false
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received',
                display_info: false,
                delete_message: false
            }
        ]

    }
]

const app = new Vue ({
    el: '#root',
    data: {
        contacts: contacts,
        currentIndex: 0,
        messageSelected: null,
        newMessage: '',
        searchedContact:'',
    },

    methods: {
        actived(el){
            this.contacts.forEach((contact, i) => {
                contact.active = false
                el.active = true
                this.getCurrentIndex(el)
            });
        },

        getCurrentIndex(el) {
            this.currentIndex = this.contacts.indexOf(el)
            console.log(this.currentIndex)
        },

        getMessage(){
            if(this.newMessage.trim() !== ''){
                const activeChat = this.currentIndex

                this.contacts[this.currentIndex].messages.push(
                    {
                    date:'',
                    message: this.newMessage,
                    status: 'sent',
                    display_info: false,
                    delete_message: false
                    }
                )
                console.log(activeChat)
                this.newMessage = ''
                this.getResponse(activeChat)
            } else {
                this.newMessage = ''
            }
        },

        getResponse(activeChat){
            setTimeout(() => {
                this.contacts[activeChat].messages.push(
                    {
                    date:'',
                    message: 'Ok fradi',
                    status: 'received',
                    display_info: false,
                    delete_message: false
                    })

                    console.log(activeChat)
            },1000)
            
        },

        getInfo(el){
            this.contacts[this.currentIndex].messages.forEach(message => {
                message.display_info = false
            })
            el.display_info = true
        },
        deleteMessage(el){
            el.delete_message = true
        }
    },

    mounted(){
            
    }
})