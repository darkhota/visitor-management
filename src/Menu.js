
const Menu = [

    {
        heading: 'Workwise HQ',
        translate: 'sidebar.heading.COMPONENTS'
    },
  
    {
        name: 'Home',
        icon: 'icon-home',
        translate: 'sidebar.nav.DASHBOARD',
        path: '/home',      
    }, 
    {
        name: 'Feeds',
        icon: 'icon-speech',
        translate: 'sidebar.nav.form.FORM',
        path: '/#',
       
    },
    {
        name: 'Visitors',
        icon: 'icon-people',
        translate: 'sidebar.nav.chart.CHART',
        submenu: [
            {
                name: 'Visitor Log',
                path: '/visitors-log',
                translate: 'sidebar.nav.table.EXTENDED'
            },
            {
                name: 'Invites',
                path: '/invites',
                translate: 'sidebar.nav.chart.RADIAL'
            },
            {
                name: 'Devices',
                path: '/devices',
            },
            {
                name: 'Settings',
                path: '/settings',
                translate: 'sidebar.nav.chart.CHART',
              
                
            },           
        ]
    },

    {
        name: 'Deliveries',
        icon: 'icon-bag',
        translate: 'sidebar.nav.form.FORM',
        path: '/deliveries',
        
       
    },
    {
        name: 'Rooms',
        icon: 'icon-screen-tablet',
        translate: 'sidebar.nav.table.TABLE',
        submenu: [{
                name: 'My rooms',
                path: '/my-rooms',
                translate: 'sidebar.nav.table.STANDARD',
               
            },
            {
                name: 'Bookings',
                path: '/bookings',
                translate: 'sidebar.nav.table.STANDARD',
               
            },
            {
                name: 'Analytics',
                path: '/#',
                translate: 'sidebar.nav.table.EXTENDED'
            },
            {
                name: 'Settings',
                path: '/table-datatable',
                translate: 'sidebar.nav.table.DATATABLE'
            },
        ]
    },
    {
        name: 'Work Requests',
        icon: 'icon-wrench',
        translate: 'sidebar.nav.form.FORM',
        submenu: [{
            name: 'View requests',
            path: '/view-requests',
            translate: 'sidebar.nav.table.STANDARD',
           
        },
        {
            name: 'Assets',
            path: '/view-assets',
            translate: 'sidebar.nav.table.STANDARD',
           
        },
    ]
        
       
    },
    {
        name: 'Employee Directory',
        icon: 'icon-people',
        translate: 'idebar.nav.map.MAP',
        submenu: [{
                name: 'All employees',
                path: '/all-employees',
                translate: 'sidebar.nav.map.GOOGLE'
            },
            {
                name: 'Admin Roles',
                path: '/map-vector',
                translate: 'sidebar.nav.map.VECTOR'
            }
        ]
    },   
    {
        name: 'Integrations',
        icon: 'icon-puzzle',
        translate:'sidebar.nav.form.FORM',
        path: '/integrations',
    }
];

export default Menu;