

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
    //$scope.habilitarAgregar = true;



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
                    $scope.datos.paginaWeb = response.data[0].paginaWeb;
                    $scope.datos.representanteTelefono = response.data[0].representanteTelefono;
                    $scope.datos.representanteCelular = response.data[0].representanteCelular;
                    $scope.datos.obs = response.data[0].obs;

                    if((!$scope.datos.codigo || !$scope.datos.representanteNombre
                        || !$scope.datos.representanteTelefono || !$scope.datos.representanteCelular
                        || !$scope.datos.paginaWeb || !$scope.datos.obs) || $scope.habilitarAgregar){
                          alert("soy true");

                    }else{
                        alert("soy false")
                    }
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
        $location.path( '/personas/agregar').search({param:'clientes'});

    }

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.listaClientes = [];
    }

    $scope.buscar = function() {
        if($scope.datos.ruc == "") {
            delete $scope.datos.ruc
        }
        if($scope.datos.nombre == "") {
            delete $scope.datos.nombre
        }
        ClientesService.listar($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.listaClientes = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.modificar = function(index) {
        var element = $scope.listaClientes[index];
        $location.path( '/clientes/modificar').search({param: element, other:'ok'});
    }

    $scope.remove = function(index) {
        var element = $scope.listaClientes[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            ClientesService.eliminar(element.codigo).then(function(response){

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

app.controller('agregarClientesController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, ClientesService, PersonasService) {
    $scope.datos = {};
    $scope.existeEnClientes = false;
    $scope.habilitarAgregar = true;

    $scope.cancelar = function(){
        $location.path( '/clientes' );
    }

    $scope.buscarExisteClientes= function(){
        ClientesService.listar($scope.datos).then(function(response){
            if(response.status == 200){
                if(response.data.length>1){
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }else if(response.data.length==1){
                    $scope.existeEnClientes = true;
                    $scope.datos.codigo = response.data[0].codigo;
                    $scope.datos.razonSocial = response.data[0].razonSocial;
                    $scope.datos.razonSocial = response.data[0].razonSocial;
                    $scope.datos.tipoPersona= response.data[0].tipoPersona;
                    $scope.datos.limiteCredito = response.data[0].limiteCredito;
                }
                else{
                    $scope.existeEnClientes = false;
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
            if($scope.existeEnClientes==true){
                $scope.bloquearCamposSecundarios=true;
            }
            else{
                $scope.bloquearCamposSecundarios=false;
            }
        })
    }

    $scope.habilitarCamposSecundarios= function(){
        if( $scope.datos.codigo ){
            $scope.buscarExisteClientes();

        }else{
            $scope.bloquearCamposSecundarios=false;
        }
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

    $scope.listarTiposPersona = function(){
        var json =angular.toJson({"dominio":"TIPOS_PERSONA"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTiposPersona = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    var init = function(){
        $scope.bloquearCamposSecundarios=true;
        $scope.listarTiposPersona();
        var urlParams = $location.search().param;
        if(typeof urlParams.codigo == 'undefined'){
            $scope.cancelar();
        }
        $scope.datos.codigo= urlParams.codigo;
        $scope.buscarExisteClientes();
        $scope.datos.sucursal;
        $scope.datos.usuario;
    }

    init();
});

app.controller('modificarClientesController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, ClientesService, $timeout) {
    $scope.datos = {};

    $scope.cancelar = function(){
        $location.path( '/clientes' );
    }

    $scope.guardar = function() {
        ClientesService.modificar($scope.datos).then(function(response){
            if(response.status == 200){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarTiposPersona = function(){
        var json =angular.toJson({"dominio":"TIPOS_PERSONA"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTiposPersona = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    var init = function(){
        $scope.listarTiposPersona();
        var urlParams = $location.search().param;
        if(typeof urlParams.codigo == 'undefined'){
            $scope.cancelar();
        }

        $timeout( function (){
            $scope.datos.tipoPersona= urlParams.tipoPersona;
            $scope.datos.codigo= urlParams.codigo;
            $scope.datos.razonSocial= urlParams.razonSocial;
            $scope.datos.limiteCredito=parseInt(urlParams.limiteCredito);

            $scope.$apply();
        }, 1000)
    }

    init();
});

app.service('ClientesService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listar = function(datos) {
        var jsonObj = angular.toJson(datos);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/clientes/listar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(datos){
        var obj = {
            "codigo":datos.codigo,
            "razonSocial":datos.razonSocial,
            "limiteCredito":datos.limiteCredito,
            "tipoPersona":datos.tipoPersona
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/personas/clientes/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.modificar = function(datos){
        var obj = {
            "codigo":datos.codigo,
            "razonSocial":datos.razonSocial,
            "limiteCredito":datos.limiteCredito,
            "tipoPersona":datos.tipoPersona
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/personas/clientes/modificar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminar = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/clientes/eliminar/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});


app.controller('reportesController', function($scope, $location, ReportesService, $rootScope, $dialogs) {

    $scope.datos ={};

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.lista = [];
    }

    $scope.agregar = function() {
        $location.path( '/reportes/agregar');

    }

    $scope.buscar = function() {
        ReportesService.listarABM($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.lista = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.modificar = function(index) {
        var element = $scope.lista[index];
        $location.path( '/reportes/modificar');
    }

    $scope.remove = function(index) {
        var element = $scope.lista[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){

            ReportesService.eliminarABM(element.codigo).then(function(response){

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

app.controller('agregarReportesController', function($scope, $location, $rootScope, $cookies, $dialogs, ReportesService, ValoresService ) {

    $scope.datos = {};

    $scope.cancelar = function(){
        $location.path('/reportes/abm');
    }

    $scope.agregar = function() {
        ReportesService.insertarABM($scope.datos).then(function(response){
            if(response.status == 200){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarModulos = function(){
        var json =angular.toJson({"dominio":"MODULOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listarModulos = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.listarEstados = function(){
        var json =angular.toJson({"dominio":"ESTADOS_PARAMETRICOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    var init = function(){
        $scope.listarModulos();
        $scope.listarEstados();
    }

    init();
});

app.controller('modificarReportesController', function($scope, $location, $rootScope, $cookies, $dialogs, ReportesService, ValoresService, $timeout) {

    $scope.datos = {};

    $scope.cancelar = function(){
        $location.path('/reportes/abm');
    }

    $scope.guardar = function() {
        ReportesService.modificarABM($scope.datos).then(function(response){
            if(response.status == 200 && response.data == "true"){

                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarModulos = function(){
        var json =angular.toJson({"dominio":"MODULOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listarModulos = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.listarEstados = function(){
        var json =angular.toJson({"dominio":"ESTADOS_PARAMETRICOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    var init = function(){
        var urlParams = $location.search().param;
        if(typeof urlParams.id == 'undefined'){
            $scope.cancelar();
        }
        $scope.listarModulos();
        $scope.listarEstados();

        $timeout( function (){
            $scope.datos.id = urlParams.id;
            $scope.datos.modulo = urlParams.modulo;
            $scope.datos.path = urlParams.path;
            $scope.datos.estado =  urlParams.estado;
            $scope.datos.nombre =  urlParams.nombre;
            $scope.datos.descripcion = urlParams.descripcion;
            $scope.$apply();
        }, 1000)
    }

    init();
});

app.service('ReportesService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listar = function(modulo) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/reportes/listar/' +modulo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarABM = function(datos) {
        var jsonObj = angular.toJson(datos);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/reportes/listarABM?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }
    this.insertarABM = function(datos){
        var obj = {
            "modulo":datos.modulo,
            "path":datos.path,
            "estado": datos.estado,
            "nombre": datos.nombre ,
            "descripcion": datos.descripcion
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/reportes/insertarABM?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.modificarABM = function (datos){
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
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/reportes/modificarABM?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminarABM = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/reportes/eliminarABM/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});



