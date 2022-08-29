

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
                status: 'sent'
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received'
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
                status: 'sent'
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received'
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
                status: 'sent'
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received'
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
                status: 'sent'
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received'
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
                status: 'sent'
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received'
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
                status: 'sent'
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received'
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
                status: 'sent'
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received'
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
                status: 'sent'
            },
            {
                date: '10/01/2022 15:30:20',
                message: 'Tutto bene, e tu?',
                status: 'received'
            }
        ]

    }
]

const app = new Vue ({
    el: '#root',
    data: {
        contacts: contacts,
        currentIndex: 0,
        newMessage: '',
        searchedContact:'',
        contactsFiltered: []
    },

    computed: {
        
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
            this.contacts[this.currentIndex].messages.push(
                {
                date:'',
                message: this.newMessage,
                status: 'sent'
                }
            )
            this.newMessage = ''
            this.getResponse()
        },
        getResponse(){
            setTimeout(() => {
                this.contacts[this.currentIndex].messages.push(
                    {
                    date:'',
                    message: 'Ok fradi',
                    status: 'received'
                    })
            },1000)
            
        },
        filterContact(){
            let contactsName = []
            contacts.forEach(contact => {
                console.log(contact.contact_name.filter(names =>{
                    names === this.searchedContact
                }))
            })
        }
    },

    mounted(){
        
    }
})