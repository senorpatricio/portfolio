var app = angular.module('portTrans', ['pascalprecht.translate']);

app.config(['$translateProvider', function($translateProvider) {
	$translateProvider
		.translations('en', 
            {
                'button_en' : 'English',
                'button_es' : 'Español',
                'TOP' : 'Top',
                'ABOUT' : 'About',
                'PROJECTS' : 'Projects',
                'CONTACT' : 'Contact',
                'QUOTE' : 'We are what we believe we are',
                'ABOUT_TITLE' : 'About Me',
                'ABOUT_PAR1' : 'My objective is to seek out new challenges that will broaden and sharpen my understanding and knowledge of web development.',
                'ABOUT_PAR2' : 'My Specialties include:',
                'ABOUT_L1' : 'Custom HTML/CSS',
                'ABOUT_L2' : 'Preprocessed CSS (SASS/SCSS, Compass, Gulp, Grunt), Twitter Bootstrap',
                'ABOUT_L3' : 'Custom Wordpress',
                'ABOUT_L4' : 'JavaScript and AngularJS',
                'ABOUT_L5' : 'Django Python Framework',
                'PROJECTS_PAR1' : 'Check out some projects I have been working on.',
                'PROJECTS_GIT_BUTTON' : 'Visit my github',
                'PROJECTS_TITAN_BUTTON' : 'Titan3 website',
                'PROJECTS_BABI_BUTTON' : 'Babimemo App',
                'PROJECTS_LATEST_BUTTON' : 'View my latest app',
                'CONTACT_ME' : 'Feel free to connect with me!',


            })
        .translations('es', 
            {   
                'button_en' : 'English',
                'button_es' : 'Español',
                'TOP' : 'Cima',
                'ABOUT' : 'Sobre',
                'PROJECTS' : 'Proyectos',
                'CONTACT' : 'Contactar',
                'QUOTE' : 'Somos lo que creemos que somos',
                'ABOUT_TITLE' : 'Sobre Mi',
                'ABOUT_PAR1' : 'Mi objetivo buscar nuevos desafíos que ampliarán and afilarán mi entendimiento y conocimiento del desarrollo web.',
                'ABOUT_PAR2' : 'Mis especialidades incluyen:',
                'ABOUT_L1' : 'HTML/CSS personalizado',
                'ABOUT_L2' : 'CSS preprocesado (SASS/SCSS, Compass, Gulp, Grunt), Twitter Bootstrap',
                'ABOUT_L3' : 'Wordpress personalizado',
                'ABOUT_L4' : 'JavaScript y AngularJS',
                'ABOUT_L5' : 'La estructura Django',
                'PROJECTS_PAR1' : 'Mire a los proyectos que he creado',
                'PROJECTS_GIT_BUTTON' : 'Visite mi github',
                'PROJECTS_TITAN_BUTTON' : 'Página Titan3',
                'PROJECTS_BABI_BUTTON' : 'App Babimemo',
                'PROJECTS_LATEST_BUTTON' : 'Ver mi último app',
                'CONTACT_ME' : '¡Sienta libre de connectar conmigo!',

                
            })
		.preferredLanguage('en');
}]);

app.controller('translateController', ['$translate', '$scope', function ($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey)
    }
 
}]);