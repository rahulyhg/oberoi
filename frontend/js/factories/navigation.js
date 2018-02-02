myApp.factory('NavigationService', function() {
    var navigation = [{
            name: "About Us",
            classis: "active",
            anchor: "home",
            subnav: [{
                    name: "Our History",
                    classis: "active",
                    anchor: "aboutus"
                }, {
                    name: "Our Philosophy",
                    classis: "active",
                    anchor: "aboutus"
                },
                {
                    name: "Governance",
                    classis: "active",
                    anchor: "aboutus"
                },
                {
                    name: "Safety",
                    classis: "active",
                    anchor: "about-us"
                }
            ]
        }, {
            name: "Learning",
            classis: "active",
            anchor: "links",
            subnav: [{
                name: "Subnav1",
                classis: "active",
                anchor: "home"
            }]
        },
        {
            name: "Admissions",
            classis: "active",
            anchor: "links",
            subnav: [{
                name: "Subnav1",
                classis: "active",
                anchor: "home"
            }]
        },
        {
            name: "Employment",
            classis: "active",
            anchor: "links",
            subnav: [{
                name: "Subnav1",
                classis: "active",
                anchor: "home"
            }]
        },
        {
            name: "Contact Us",
            classis: "active",
            anchor: "links",
            subnav: []
        }
    ];

    return {
        getNavigation: function() {
            return navigation;
        },
    };
});