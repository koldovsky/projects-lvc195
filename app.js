var app = angular.module('GroupApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', 'studentService', function ($scope, $mdSidenav, studentService) {
    var allStudents = [];


    $scope.subgroups = [1, 2];
    $scope.selectedsubgroups = [1, 2];
    $scope.isChosenOnly = false;
    //$scope.toggle = function (item, list) {
    //  var idx = list.indexOf(item);
    //  if (idx >-1) {
    //    list.splice(idx, 1);
    //  } else {
    //    list.push(item);
    //  }
    //};
    $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
    };
    $scope.toggleChosen = function (item) {
        $scope.isChosenOnly = !$scope.isChosenOnly;
    };
    //$scope.filterBySubgroup = function (student) {
    //  return $scope.exists(student.subgroup, $scope.selectedsubgroups);
    //};

    $scope.filterByChosen = function (student) {
        if ($scope.isChosenOnly) {
            if (student.isChosenProject) {
                console.log(student);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    };

    $scope.selected = null;
    $scope.students = allStudents;
    $scope.selectStudent = selectStudent;
    $scope.toggleSidenav = toggleSidenav;

    loadStudents();

    function loadStudents() {
        studentService.loadAll()
            .then(function (students) {
                allStudents = students;
                $scope.students = [].concat(students);
                $scope.selected = $scope.students[0];
            })
    }

    function toggleSidenav(name) {
        $mdSidenav(name).toggle();
    }

    function selectStudent(student) {
        $scope.selected = angular.isNumber(student) ? $scope.students[student] : student;
        $scope.toggleSidenav('left');
    }

}]);

app.service('studentService', ['$q', function ($q) {

    //! http://www.convertcsv.com/csv-to-json.htm
    // http://www.csvjson.com/csv2json
    var students = [
        {
            "name": "Andrii Leshchyshyn",
            "websiteUrl": "https://andriileshchyshyn.github.io/my_al/",
            "codeSourceUrl": "https://github.com/AndriiLeshchyshyn/my_al",
            "cvUrl": "",
            "photo": "images/students/leshchyshyn.jpg"
        },
        {
            "name": "Andrii Malytskyi",
            "websiteUrl": "https://andymalytskyi.github.io/mypage/",
            "codeSourceUrl": "https://github.com/AndyMalytskyi/mypage",
            "cvUrl": "https://www.linkedin.com/in/andy-malytskyi-948517b5?trk=nav_responsive_tab_profile",
            "photo": "images/students/malytskyi.jpg"
        },
        {
            "name": "Bohdan Vitrovyi",
            "websiteUrl": "https://vitrovyi.github.io/mywebsite/",
            "codeSourceUrl": "https://github.com/vitrovyi/mywebsite",
            "cvUrl": "",
            "photo": "images/students/vitrovyi.jpg"
        },
        {
            "name": "Mariana Nyshpor",
            "websiteUrl": "https://mariananyshpor.github.io/myproject/",
            "codeSourceUrl": "https://github.com/MarianaNyshpor/myproject",
            "cvUrl": "",
            "photo": "images/students/nyshpor.jpg"
        },
        {
            "name": "Oksana Matsevko",
            "websiteUrl": "https://oksanamats.github.io/personal_page/",
            "codeSourceUrl": "https://github.com/OksanaMats",
            "cvUrl": "",
            "photo": "images/students/matsevko.jpg"
        },
        {
            "name": "Roxolana Mazur",
            "websiteUrl": "https://lyanamazur.github.io/my-website/",
            "codeSourceUrl": "https://github.com/LyanaMazur/my-website",
            "cvUrl": "",
            "photo": "images/students/mazur.jpg"
        },
        {
            "name": "Roman Bartushak",
            "websiteUrl": "https://bartushak007.github.io/site-layout/",
            "codeSourceUrl": "https://github.com/bartushak007/",
            "cvUrl": "",
            "photo": "images/students/bartushak.jpg"
        },
        {
            "name": "Rostyslav Levkiv",
            "websiteUrl": "https://rlevkiv1.github.io/website/",
            "codeSourceUrl": "https://github.com/rlevkiv1",
            "cvUrl": "",
            "photo": "images/students/levkiv.jpg"
        },
        {
            "name": "Khrystyna Stegnii",
            "websiteUrl": "https://khrystyna123456.github.io/temporary/",
            "codeSourceUrl": "https://github.com/Khrystyna123456/temporary",
            "cvUrl": "",
            "photo": "images/students/stegnii.jpg"
        },
        {
            "name": "Mariia Ishchuk",
            "websiteUrl": "https://mariya-ishchuk.github.io/my_personal_page/",
            "codeSourceUrl": "https://github.com/mariya-ishchuk",
            "cvUrl": "",
            "photo": "images/students/ishchuk.jpg"
        },
        {
            "name": "Volodymyr Klymkiv",
            "websiteUrl": "https://volodymyrklymkiv.github.io/newmockup/page1.html",
            "codeSourceUrl": "https://github.com/volodymyrklymkiv",
            "cvUrl": "",
            "photo": "images/students/klymkiv.jpg"
        },
        {
            "name": "Oleksandr Vlasiuk",
            "websiteUrl": "https://alexandervlasyk.github.io/Sample233/",
            "codeSourceUrl": "https://github.com/AlexanderVlasyk/Sample233",
            "cvUrl": "",
            "photo": "images/students/vlasiuk.jpg"
        },
        {
            "name": "Serhii Stehnii",
            "websiteUrl": "https://serhiisteg.github.io/prukladhtml/",
            "codeSourceUrl": "https://github.com/Serhiisteg",
            "cvUrl": "",
            "photo": "images/students/stehnii.jpg"
        },
        {
            "name": "Yuliya Ivanytska",
            "websiteUrl": "https://juliaivanytska.github.io/rozmitkahw/",
            "codeSourceUrl": "https://github.com/juliaivanytska/rozmitkahw",
            "cvUrl": "",
            "photo": "images/students/ivanytska.jpg"
        },
        {
            "name": "Volodymyr Nadolskyi",
            "websiteUrl": "https://nadolskyi.github.io/my-page/",
            "codeSourceUrl": "https://github.com/Nadolskyi",
            "cvUrl": "https://github.com/Nadolskyi/my-page/blob/master/CV.docx",
            "photo": "images/students/nadolskyi.jpg"
        },
        {
            "name": "Volodymyr Prokopiv",
            "websiteUrl": "https://volodya-pr.github.io/website_vol/",
            "codeSourceUrl": "https://github.com/volodya-pr",
            "cvUrl": "",
            "photo": "images/students/prokopiv.jpg"
        },
        {
            "name": "Oleg Kuchma",
            "websiteUrl": "https://ananaple.github.io/personal/",
            "codeSourceUrl": "https://github.com/ananaple/personal",
            "cvUrl": "",
            "photo": "images/students/kuchma.jpg"
        },
        {
            "name": "Roman Didukh",
            "websiteUrl": "https://quviller.github.io/firstproject/",
            "codeSourceUrl": "https://github.com/Quviller/firstproject",
            "cvUrl": "https://www.linkedin.com/in/romandidukh?trk=nav_responsive_tab_profile_pic",
            "photo": "images/students/didukh.jpg"
        },
        {
            "name": "Serhiy Buk",
            "websiteUrl": "https://serhiy62.github.io/test-site/",
            "codeSourceUrl": "https://github.com/Serhiy62",
            "cvUrl": "https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D1%96%D0%B9-%D0%B1%D1%83%D0%BA-246b4b11a?trk=nav_responsive_tab_profile",
            "photo": "images/students/buk.jpg"
        },
        {
            "name": "Serhiy Kolesnyk",
            "websiteUrl": "https://skhazard.github.io/mainProject/",
            "codeSourceUrl": "https://github.com/skHazard",
            "cvUrl": "https://ua.linkedin.com/in/serhiy-kolesnyk-76ba69102",
            "photo": "images/students/kolesnyk.jpg"
        },
        {
            "name": "Stanislav Kostin",
            "websiteUrl": "https://kostinstanislav.github.io/copysite/",
            "codeSourceUrl": "https://github.com/KostinStanislav/copysite",
            "cvUrl": "https://www.linkedin.com/in/stanislav-kostin-21b583123?trk=nav_responsive_tab_profile_pic",
            "photo": "images/students/kostin.jpg"
        },
        {
            "name": "Yuriy Kokhalevych",
            "websiteUrl": "https://yurii-kokhalevych.github.io/fist_page/",
            "codeSourceUrl": "https://github.com/yurii-kokhalevych/fist_page",
            "cvUrl": "https://www.dropbox.com/s/hx9h2uk2dajtirb/Yuriy_Kokhalevych_CV.pdf?dl=0",
            "photo": "images/students/kokhalevych.jpg"
        },
        {
            "name": "Ivan Shyyka",
            "websiteUrl": "https://shyyka.github.io/sample5_layout/",
            "codeSourceUrl": "https://github.com/shyyka",
            "cvUrl": "https://ua.linkedin.com/in/ivan-shyyka-889129128",
            "photo": "images/students/shyyka.jpg"
        },
        {
            "name": "Taras Kukharets",
            "websiteUrl": "https://kukharets.github.io/personal/",
            "codeSourceUrl": "https://github.com/kukharets/personal",
            "cvUrl": "",
            "photo": "images/students/kukharets.png"
        },
        {
            "name": "Yaroslav Stefanyshyn",
            "websiteUrl": "https://yaroslavstefanyshyn.github.io/landing_page_project/",
            "codeSourceUrl": "https://github.com/YaroslavStefanyshyn/landing_page_project",
            "cvUrl": "",
            "photo": "images/students/stefanyshyn.jpg"
        },
        {
            "name": "Olena Mikula",
            "websiteUrl": "https://olenamikula.github.io/www/",
            "codeSourceUrl": "https://olenamikula.github.io/www/",
            "cvUrl": "",
            "photo": "images/students/mikula.jpg"
        },
        {
            "name": "Iryna Demkovych",
            "websiteUrl": "https://ira55.github.io/my-site/",
            "codeSourceUrl": "https://github.com/ira55",
            "cvUrl": "https://www.linkedin.com/in/iryna-demkovych-57479b120",
            "photo": "images/students/demkovych.jpg"
        },
        {
            "name": "Ksenya Klakovych",
            "websiteUrl": "https://ksenyaklakovych.github.io/page/",
            "codeSourceUrl": "https://github.com/ksenyaklakovych/page",
            "cvUrl": "",
            "photo": "images/students/klakovych.jpg"
        }
    ];

    // Promise-based API
    return {
        loadAll: function () {
            // Simulate async nature of real remote calls
            return $q.when(students);
        }
    };
}]);
