

const contacts_list = [
    {
        contact_name: 'Louis Amstrong',
        pic: './img/02.png',
        visible: true, 

    },
    {
        contact_name: 'Valter per gli amici Water',
        pic: './img/03.png',
        visible: true, 

    },
    {
        contact_name: 'Pippo Beggings',
        pic: './img/04.png',
        visible: true, 

    },
    {
        contact_name: 'Ferry Potter',
        pic: './img/05.png',
        visible: true, 

    },
    {
        contact_name: 'Jack Mi Sparo',
        pic: './img/06.png',
        visible: true, 

    },
    {
        contact_name: 'Lady Ponte e un Quintale',
        pic: './img/07.png',
        visible: true, 

    },
    {
        contact_name: 'Amstrong the trumpet',
        pic: './img/08.png',
        visible: true, 

    },
    {
        contact_name: 'Tony Merlot',
        pic: './img/09.png',
        visible: true, 

    }
]

const app = new Vue ({
    el: '#root',
    data: {
        contacts: contacts_list,
    },
    mounted(){
        console.log(this)
    }
})