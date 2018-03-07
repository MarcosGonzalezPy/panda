

app.controller('proveedoresController', function($scope, $location, ProveedoresService, $rootScope, $dialogs) {

    $scope.datos ={};

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.lista = [];
    }

    $scope.agregar = function() {
     $location.path( '/personas/agregar').search({param:'proveedor'});
        //$location.path( '/proveedores/buscador-personas').search({param:'proveedor'});

    }

    $scope.buscar = function() {
        ProveedoresService.listarComplex($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.lista = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
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

app.controller('agregarProveedoresController', function($scope, $location, $rootScope, $cookies, $dialogs, ProveedoresService ) {

    $scope.datos = {};
    $scope.existeEnProveedor = false;

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

    $scope.buscarExisteProveedor= function(){
        var obj = {codigo: $scope.datos.codigo}
        ProveedoresService.listarComplex(obj).then(function(response){
            if(response.status == 200){
                if(response.data.length>1){
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }else if(response.data.length==1){
                    $scope.existeEnProveedor = true;
                    $scope.datos.codigo = response.data[0].codigo;
                    $scope.datos.representanteNombre = response.data[0].representanteNombre;
                    $scope.datos.representanteTelefono = response.data[0].representanteTelefono;
                    $scope.datos.representanteCelular = response.data[0].representanteCelular;
                    $scope.datos.paginaWeb = response.data[0].paginaWeb;
                    $scope.datos.obs = response.data[0].obs;
                }
                else{
                    $scope.existeEnProveedor = false;
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
            if($scope.existeEnProveedor==true){
                $scope.bloquearCamposSecundarios=true;
            }
            else{
                $scope.bloquearCamposSecundarios=false;
            }
        })
    }

    $scope.habilitarCamposSecundarios= function(){
        if( $scope.datos.codigo ){
            $scope.buscarExisteProveedor();

        }else{
            $scope.bloquearCamposSecundarios=false;
        }
    }

    var init = function(){
        $scope.bloquearCamposSecundarios=true;

        var urlParams = $location.search().param;
        if(typeof urlParams.codigo == 'undefined'){
            $scope.cancelar();
        }
        $scope.datos.codigo= urlParams.codigo;
        $scope.buscarExisteProveedor();

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

app.controller('clientesController', function($scope, $location, $rootScope, $cookies, $dialogs, ClientesService) {
    $scope.datos = {};
    $scope.listaClientes=[];

    $scope.agregar = function() {
        $location.path( '/clientes/agregar' );

    }

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.listaClientes = [];
    }


    $scope.buscar= function(){
        var obj  = {
            "ruc": $scope.datos.ruc,
            "nombre": $scope.datos.nombre
        };
        var json = angular.toJson(obj);
        //var encoJson = encodeURIComponent(json)
        ClientesService.listar(json).then(function(response){
            if(response.status == 200){
                $scope.listaClientes = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    var init = function () {

    }

    init();
});

app.controller('agregarClientesController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, ClientesService, PersonasService) {
    $scope.datos = {};
    $scope.listaPaises= [];
    $scope.listaCiudades= [];
    $scope.listaBarrios= [];
    $scope.listaSexos= [];
    $scope.listaNacionalidades =[];

    $scope.listarPaises = function(){
        var json = angular.toJson({"dominio":"PAISES"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status == 200){
                $scope.listaPaises = response.data;
            }else{
                alert("Error al cargar los paises");
            }
        })
    }

    $scope.listarCiudades = function(){
        var json =angular.toJson({"dominio":"CIUDADES"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaCiudades = response.data;
            }else{
                alert("Error al cargar los paises");
            }
        })
    }

    $scope.listarBarrios = function(){
        var json =angular.toJson({"dominio":"BARRIOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaBarrios = response.data;
            }else{
                alert("Error al cargar los barrios");
            }
        })
    }

    $scope.listarSexos = function(){
        var json =angular.toJson({"dominio":"SEXO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaSexos = response.data;
            }else{
                alert("Error al cargar los sexos");
            }
        })
    }

    $scope.listarNacionalidades = function(){
        var json =angular.toJson({"dominio":"NACIONALIDAD"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaNacionalidades = response.data;
            }else{
                alert("Error al cargar las Nacionalidades");
            }
        })
    }

    $scope.cancelar = function(){
        $location.path( '/clientes' );
    }

    $scope.agregar = function() {
        ClientesService.insertar($scope.datos).then(function(response){
            if(response.status == 200){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }



    var init = function(){
        $scope.listarPaises();
        $scope.listarCiudades();
        $scope.listarBarrios();
        $scope.listarSexos();
        $scope.listarNacionalidades();
    }

    init();
});

app.service('ClientesService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listar= function(datos) {
        //var jsonObj = angular.toJson(datos);
        var encoJson = encodeURIComponent(datos);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/clientes/listar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminar = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/clientes/delete/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(datos){
        var obj = {
            "nombre":datos.nombre,
            "apellido":datos.apellido,
            "cedula":datos.cedula,
            "fechaNacimiento":datos.fechaNacimiento,
            "nacionalidad": datos.nacionalidad,
            "pais": datos.pais,
            "ciudad": datos.ciudad,
            "barrio": datos.barrio,
            "direccion": datos.direccion,
            "correoElectronico": datos.correoElectronico,
            "ruc": datos.ruc,
            "sexo": datos.sexo,
            "telefono": datos.telefono,
            "celular1": datos.celular
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/clientes/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});


