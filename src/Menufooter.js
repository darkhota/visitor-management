const Menufooter = [
  {
    name: "Help center",
    icon: "icon-info",
    translate: "sidebar.nav.DASHBOARD",
    path: "/dashboardv1"
  },
  {
    name: "Billing",
    icon: "icon-wallet",
    translate: "sidebar.nav.form.FORM",
    path: "/billing"
  },
  {
    name: "Buy devices and badges",
    icon: "icon-basket-loaded",
    translate: "sidebar.nav.chart.CHART",
    path: "/form-extended"
  },

  {
    name: "Tioluwani Joseph",
    icon: "icon-user",
    translate: "sidebar.nav.form.FORM",
    submenu: [
      {
        name: "Profile",
        icon: "icon-settings",
        translate: "sidebar.nav.table.STANDARD",
        path: "/profile"
      },
      {
        name: "Logout",
        icon: "icon-logout",
        translate: "sidebar.nav.table.EXTENDED",
        path: "/"
      }
    ]
  }
];

export default Menufooter;
