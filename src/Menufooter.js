const Menufooter = [ 
    {
        name: 'Help center',
        icon: 'icon-info',
        translate: 'sidebar.nav.DASHBOARD',
        path: '/dashboardv1',      
    }, 
    {
        name: 'Billing',
        icon: 'icon-wallet',
        translate: 'sidebar.nav.form.FORM',
        path: '/form-validator',
       
    },
    {
        name: 'Buy devices and badges',
        icon: 'icon-basket-loaded',
        translate: 'sidebar.nav.chart.CHART',
        path: '/form-extended',
        
    },

    {
        name: 'Tioluwani Joseph',
        icon: 'icon-user',
        translate: 'sidebar.nav.form.FORM',
        submenu: [{
            name: 'Profile',
            icon: 'icon-settings',
            translate: 'sidebar.nav.table.STANDARD',
            path: '/form-upload',

        },
        {
            name: 'Logout',
            icon: 'icon-logout',
            translate: 'sidebar.nav.table.EXTENDED',
            path: '/form-wizard',

        },
    ]
       
    },
    
    
   
];

export default Menufooter;