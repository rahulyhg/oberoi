myApp.factory('NavigationService', function() {
    var navigation = [{
            name: "About Us",
            classis: "active",
            anchor: "aboutus",
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
                    anchor: "aboutus"
                }
            ]
        }, {
            name: "Learning",
            classis: "active",
            anchor: "links1",
            // subnav: [{
            //     name: "Subnav1",
            //     classis: "active",
            //     anchor: "home"
            // }]
        },
        {
            name: "Admissions",
            classis: "active",
            anchor: "links1",
            // subnav: [{
            //     name: "Subnav1",
            //     classis: "active",
            //     anchor: "home"
            // }]
        },
        {
            name: "Employment",
            classis: "active",
            anchor: "links1",
            // subnav: [{
            //     name: "Subnav1",
            //     classis: "active",
            //     anchor: "home"
            // }]
        },
    ];

    return {
        getNavigation: function() {
            return navigation;
        },
    };
});