

app.controller('proveedoresController', function($scope, $location, ProveedoresService, $rootScope, $dialogs) {

    $scope.datos ={};

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.lista = [];
    }

    $scope.agregar = function() {
        $location.path( '/personas/agregar').search({param:'proveedor'});
    }

    $scope.buscar = function() {
        ProveedoresService.listarComplex($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.lista = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
        $scope.limpiar();
    }

    $scope.modificar = function(index) {
        var element = $scope.lista[index];
        $location.path( '/proveedores/modificar').search({param: element, other:'ok'});
    }

    $scope.remove = function(index) {
        var element = $scope.lista[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            //alert(resultado);

            ProveedoresService.eliminarById(element.codigo).then(function(response){

                if(response.status == 200){
                    var resultado = response.data;
                    if(resultado == "true"){
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Eliminacion Exitosa'},{key: false,back: 'static'});

                        $scope.limpiar();
                        $scope.buscar();
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al eliminar el dominio'},{key: false,back: 'static'});

                        $scope.limpiar();
                        $scope.buscar();
                    }
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            });

        },function(){
            //$scope.name = 'You decided not to enter in your name, that makes me sad.';
        });
    }


    var init = function () {

    }

    init();
});

app.controller('agregarProveedoresController', function($scope, $location, $rootScope, $cookies, $dialogs, ProveedoresService,  $timeout) {

    $scope.datos = {};

    $scope.cancelar = function(){
        $location.path( '/proveedores' );
    }

    $scope.agregar = function() {
        ProveedoresService.insertar($scope.datos).then(function(response){
            if(response.status == 200){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    var init = function(){
    }

    init();
});

app.controller('modificarProveedoresController', function($scope, $location, $rootScope, $cookies, $dialogs, ProveedoresService,  $timeout) {

    $scope.datos = {};

    $scope.cancelar = function(){
        $location.path( '/proveedores' );
    }

    $scope.guardar = function() {
        ProveedoresService.modificar($scope.datos).then(function(response){
            if(response.status == 200 && response.data == "true"){

                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    var init = function(){
        var urlParams = $location.search().param;
        if(typeof urlParams.codigo == 'undefined'){
            $scope.cancelar();
        }

        $timeout( function (){
            $scope.datos.codigo = urlParams.codigo;
            $scope.datos.representanteNombre =  urlParams.representanteNombre;
            $scope.datos.representanteTelefono =  urlParams.representanteTelefono;
            $scope.datos.representanteCelular = urlParams.representanteCelular;
            $scope.datos.paginaWeb = urlParams.paginaWeb;
            $scope.datos.obs = urlParams.obs;

            $scope.$apply();
        }, 1000)
    }

    init();
});

app.service('ProveedoresService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarComplex = function(datos) {
        var jsonObj = angular.toJson(datos);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/proveedores/complex?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }
    this.insertar = function(datos){
        var obj = {
            "codigo":datos.codigo,
            "representanteNombre":datos.representanteNombre,
            "representanteTelefono": datos.representanteTelefono,
            "representanteCelular": datos.representanteCelular ,
            "paginaWeb": datos.paginaWeb,
            "obs": datos.obs
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/personas/proveedores/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.modificar = function (datos){
        var obj = {
            "codigo":datos.codigo,
            "representanteNombre":datos.representanteNombre,
            "representanteTelefono": datos.representanteTelefono,
            "representanteCelular": datos.representanteCelular ,
            "paginaWeb": datos.paginaWeb,
            "obs": datos.obs
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/personas/proveedores/modificar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminarById = function(codigo){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/proveedores/eliminar/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});

