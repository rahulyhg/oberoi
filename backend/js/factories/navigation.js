var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;



myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "Users",
            classis: "active",
            sref: "#!/page/viewUser//",
            icon: "phone"
        },
        {
            name: "SchoolCollege",
            classis: "active",
            sref: "#!/page/viewSchoolCollege//",
            icon: "phone"
        },
        {
            name: "Banner",
            classis: "active",
            sref: "#!/page/viewBanner//",
            icon: "phone"
        },
        {
            name: "Module",
            classis: "active",
            sref: "#!/page/viewModule//",
            icon: "phone"
        },
        {
            name: "Message",
            classis: "active",
            sref: "#!/page/viewMessage//",
            icon: "phone"
        },
        {
            name: "Atheletics",
            classis: "active",
            sref: "#!/page/viewAtheletics//",
            icon: "phone"
        },
        {
            name: "Trip",
            classis: "active",
            sref: "#!/page/viewTrip//",
            icon: "phone"
        },
        {
            name: "Curricular",
            classis: "active",
            sref: "#!/page/viewCurricular//",
            icon: "phone"
        }
    ];

    return {
        getnav: function () {
            return navigation;
        },

        parseAccessToken: function (data, callback) {
            if (data) {
                $.jStorage.set("accessToken", data);
                callback();
            }
        },
        removeAccessToken: function (data, callback) {
            $.jStorage.flush();
        },
        profile: function (callback, errorCallback) {
            var data = {
                accessToken: $.jStorage.get("accessToken")
            };
            $http.post(adminurl + 'user/profile', data).then(function (data) {
                data = data.data;
                if (data.value === true) {
                    $.jStorage.set("profile", data.data);
                    callback();
                } else {
                    errorCallback(data.error);
                }
            });
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        search: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        delete: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
        countrySave: function (formData, callback) {
            $http.post(adminurl + 'country/save', formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },

        apiCall: function (url, formData, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        searchCall: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },

        getOneCountry: function (id, callback) {
            $http.post(adminurl + 'country/getOne', {
                _id: id
            }).then(function (data) {
                data = data.data;
                callback(data);

            });
        },
        getLatLng: function (address, i, callback) {
            $http({
                url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyC62zlixVsjaq4zDaL4cefNCubjCgxkte4",
                method: 'GET',
                withCredentials: false,
            }).then(function (data) {
                data = data.data;
                callback(data, i);
            });
        },
        uploadExcel: function (form, callback) {
            $http.post(adminurl + form.model + '/import', {
                file: form.file
            }).then(function (data) {
                data = data.data;
                callback(data);

            });

        },

    };
});