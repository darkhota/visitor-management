
const Menu = [

    {
        heading: 'Workwise HQ',
        translate: 'sidebar.heading.COMPONENTS'
    },
  
    {
        name: 'Home',
        icon: 'icon-home',
        translate: 'sidebar.nav.DASHBOARD',
        path: '/dashboardv1',      
    }, 
    {
        name: 'Feeds',
        icon: 'icon-speech',
        translate: 'sidebar.nav.form.FORM',
        path: '/table-datagrid',
       
    },
    {
        name: 'Visitors',
        icon: 'icon-people',
        translate: 'sidebar.nav.chart.CHART',
        submenu: [{
                name: 'Visitor Log',
                path: '/table-datatable',
                translate: 'sidebar.nav.table.EXTENDED'
            },
            {
                name: 'Invites',
                path: '/chart-radial',
                translate: 'sidebar.nav.chart.RADIAL'
            },
            {
                name: 'Devices',
                path: '/chart-chartjs',
            },
            {
                name: 'Settings',
                path: '/chart-morris',
                translate: 'sidebar.nav.chart.CHART',
              
                
            },           
        ]
    },

    {
        name: 'Deliveries',
        icon: 'icon-bag',
        translate: 'sidebar.nav.form.FORM',
        path: '/form-cropper',
        
       
    },
    {
        name: 'Rooms',
        icon: 'icon-screen-tablet',
        translate: 'sidebar.nav.table.TABLE',
        submenu: [{
                name: 'My rooms',
                path: '/table-standard',
                translate: 'sidebar.nav.table.STANDARD',
               
            },
            {
                name: 'Analytics',
                path: '/table-extended',
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
        path: '/form-cropper',
       
    },
    {
        name: 'Employee Directory',
        icon: 'icon-people',
        translate: 'idebar.nav.map.MAP',
        submenu: [{
                name: 'All employees',
                path: '/map-google',
                translate: 'sidebar.nav.map.GOOGLE'
            },
            {
                name: 'Admin Roles',
                path: '/map-vector',
                translate: 'sidebar.nav.map.VECTOR'
            }
        ]
    },   
];

export default Menu;