

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
        activeChat: 0
    },

    computed:{
        contactFilter(){
            return this.contacts.filter((el) =>{
                const {contact_name} = el

                if(contact_name.toLowerCase().includes(this.searchedContact.toLowerCase())){
                    return true
                }
                return false
            })
        },
    },

    methods: {
        actived(el, index){
            this.contacts.forEach((contact, i) => {
                contact.active = false
                el.active = true
            });
            this.getActiveChat(el)
            this.currentIndex = index
            console.log(this.currentIndex)
        },
        getActiveChat(el){
            this.activeChat = el
        },

        getMessage(){
            if(this.newMessage.trim() !== ''){
                this.activeChat.messages.push(
                    {
                    date:'',
                    message: this.newMessage,
                    status: 'sent',
                    display_info: false,
                    delete_message: false
                    }
                )
                this.newMessage = ''
                this.getResponse(this.activeChat)
            } else {
                this.newMessage = ''
            }

            console.log(this.activeChat.messages)
        },

        getResponse(currentChat){
            setTimeout(() => {
                currentChat.messages.push(
                    {
                    date:'',
                    message: 'Ok fradi',
                    status: 'received',
                    display_info: false,
                    delete_message: false
                    })
            },1000)
        },
        lastMessageOf(chat){
            const lastIndex = chat.messages.length - 1

            if(lastIndex >= 0){
                return chat.messages[lastIndex]
            }
        },

        getInfo(el, i){
            el.display_info = !el.display_info
        },
        deleteMessage(el){
            el.delete_message = true
            console.log(this.activeChat.messages)
        },
    },

    mounted(){  

    }
})