// Creación del módulo
//angularRoutingApp
var app = angular.module('app', ['ngRoute','ngCookies','ui.bootstrap','dialogs']);

// Configuración de las rutas
app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/acerca', {
            templateUrl : 'pages/acerca.html',
            controller  : 'aboutController'
        })
        .when('/contacto', {
            templateUrl : 'pages/contacto.html',
            controller  : 'contactController'
        })
        .when('/paises', {
            templateUrl : 'pages/paises.html',
            controller  : 'paisesController'
        })
        .when('/dominios', {
            templateUrl : 'pages/dominios/dominios.html',
            controller  : 'dominiosController'
        })
        .when('/dominios/agregar', {
            templateUrl : 'pages/dominios/agregar-dominios.html',
            controller  : 'agregarDominiosController'
        })
        .when('/valores', {
            templateUrl : 'pages/valores/valores.html',
            controller  : 'valoresController'
        })
        .when('/valores/agregar', {
            templateUrl : 'pages/valores/agregar-valores.html',
            controller  : 'agregarValoresController'
        })
        .when('/ventas', {
            templateUrl : 'pages/ventas/ventas/ventas.html',
            controller  : 'ventasController'
        })
        .when('/ventas/registrar-venta', {
            templateUrl : 'pages/ventas/ventas/registrar-venta.html',
            controller  : 'registrarVentaController'
        })
        .when('/ventas/editar-venta', {
            templateUrl : 'pages/ventas/ventas/editar-venta.html',
            controller  : 'editarVentaController'
        })
        .when('/ventas/facturar', {
            templateUrl : 'pages/ventas/ventas/facturar.html',
            controller  : 'FacturarController'
        })
        .when('/ventas/pagar-factura', {
            templateUrl : 'pages/ventas/ventas/pagar-factura.html',
            controller  : 'pagarFacturaController'
        })
        .when('/ventas/saldo-cliente', {
            templateUrl : 'pages/ventas/saldo-cliente.html',
            controller  : 'saldoClienteController'
        })
        .when('/ventas/nota-credito', {
            templateUrl : 'pages/ventas/ventas/nota-credito.html',
            controller  : 'notaCreditoController'
        })
        .when('/articulos', {
            templateUrl : 'pages/articulos/articulos.html',
            controller  : 'articulosController'
        })
        .when('/articulos/agregar', {
            templateUrl : 'pages/articulos/agregar-articulos.html',
            controller  : 'agregarArticulosController'
        })
        .when('/articulos-factura', {
            templateUrl : 'pages/articulos-factura/articulos-factura.html',
            controller  : 'articulosFacturaController'
        })
        .when('/salir', {
            templateUrl : 'pages/404.html',
            controller  : 'salirController'
        })
        .when('/ingresar-equipo', {
            templateUrl : 'pages/servicios/ingresar-equipo.html',
            controller  : 'ingresarEquipoController'
        })
        .when('/ingresar-equipo/modificar', {
            templateUrl : 'pages/servicios/modificar-ingresar-equipo.html',
            controller  : 'modificarIngresarEquipoController'
        })
        .when('/clientes', {
            templateUrl : 'pages/personas/clientes/clientes.html',
            controller  : 'clientesController'
        })
        .when('/clientes/agregar', {
            templateUrl : 'pages/personas/clientes/agregar-clientes.html',
            controller  : 'agregarClientesController'
        })
        .when('/usuarios', {
            templateUrl : 'pages/personas/usuarios/usuarios.html',
            controller  : 'usuariosController'
        })
        .when('/usuarios/agregar', {
            templateUrl : 'pages/personas/usuarios/agregar-usuarios.html',
            controller  : 'agregarUsuariosController'
        })
        .when('/usuarios/modificar', {
            templateUrl : 'pages/personas/usuarios/modificar-usuarios.html',
            controller  :  'modificarUsuariosController'
        })
        .when('/proveedores', {
            templateUrl : 'pages/personas/proveedores/proveedores.html',
            controller  : 'proveedoresController'
        })
        .when('/proveedores/agregar', {
            templateUrl : 'pages/personas/proveedores/agregar-proveedores.html',
            controller  : 'agregarProveedoresController'
        })
        .when('/proveedores/modificar', {
            templateUrl : 'pages/personas/proveedores/modificar-proveedores.html',
            controller  : 'modificarProveedoresController'
        })
        .when('/personas', {
            templateUrl : 'pages/personas/personas/personas.html',
            controller  : 'personasController'
        })
        .when('/personas/agregar', {
            templateUrl : 'pages/personas/personas/agregar-personas.html',
            controller  : 'agregarPersonasController'
        })
        .when('/personas/modificar', {
            templateUrl : 'pages/personas/personas/modificar-personas.html',
            controller  : 'modificarPersonasController'
        })
        .when('/servicios', {
            templateUrl : 'pages/servicios/servicios.html',
            controller  : 'serviciosController'
        })
        .when('/servicios/agregar', {
            templateUrl : 'pages/servicios/agregar-servicios.html',
            controller  : 'agregarServiciosController'
        })
        .when('/servicios/modificar', {
            templateUrl : 'pages/servicios/modificar-servicios.html',
            controller  : 'modificarServiciosController'
        })
        .when('/circuito', {
            templateUrl : 'pages/servicios/circuito.html',
            controller  : 'circuitoController'
        })

        .when('/historial', {
            templateUrl : 'pages/servicios/historial.html',
            controller  : 'historialController'
        })

        .when('/reparar', {
            templateUrl : 'pages/servicios/reparar.html',
            controller  : 'repararController'
        })
//        .when('/cotizacion', {
//            templateUrl : 'pages/servicios/cotizacion.html',
//            controller  : 'cotizacionController'
//        })
        .when('/agregar-cotizacion', {
            templateUrl : 'pages/servicios/agregar-cotizacion.html',
            controller  : 'agregarCotizacionController'
        })
        .when('/roles', {
            templateUrl : 'pages/personas/roles/roles.html',
            controller  : 'rolesController'
        })
        .when('/inventario', {
            templateUrl : 'pages/inventario/inventario.html',
            controller  : 'inventarioController'
        })
        .when('/roles/agregar', {
            templateUrl : 'pages/personas/roles/agregar-roles.html',
            controller  : 'agregarRolesController'
        })
        .when('/compras', {
            templateUrl : 'pages/compras/compras.html',
            controller  : 'comprasController'
        })
        .when('/pedido-compra', {
            templateUrl : 'pages/compras/pedido-compra.html',
            controller  : 'pedidoCompraController'
        })
        .when('/recepcion-compra', {
            templateUrl : 'pages/compras/recepcion-compra.html',
            controller  : 'recepcionCompraController'
        })
        .when('/admin-recepcion-compra', {
            templateUrl : 'pages/compras/admin-recepcion-compra.html',
            controller  : 'AdminRecepcionCompraController'
        })
        .when('/ajuste-inventario', {
            templateUrl : 'pages/inventario/ajuste-inventario.html',
            controller  : 'ajusteInventarioController'
        })

        .when('/roles/modificar', {
            templateUrl : 'pages/personas/roles/modificar-roles.html',
            controller  : 'modificarRolesController'
        })

        .when('/cajas', {
            templateUrl : 'pages/ventas/cajas/cajas.html',
            controller  : 'cajasController'
        })
        .when('/cajas/agregar', {
            templateUrl : 'pages/ventas/cajas/agregar-cajas.html',
            controller  : 'agregarCajasController'
        })
        .when('/cajas-movimientos', {
            templateUrl : 'pages/ventas/cajas-movimientos/cajas-movimientos.html',
            controller  : 'cajasMovimientosController'
        })
        .when('/cajas-movimientos/agregar', {
            templateUrl : 'pages/ventas/cajas-movimientos/agregar-cajas-movimientos.html',
            controller  : 'agregarCajasMovimientosController'
        })

        .when('/prueba', {
            templateUrl : 'pages/prueba.html',
            controller  : 'dialogServiceTest'
        })
        .when('/reportes', {
            templateUrl : 'pages/reportes/reporte.html',
            controller  : 'reporte'
        })

        //Agregados por Aurora Inicio

        .when('/timbrados', {
            templateUrl : 'pages/timbrados/timbrados.html',
            controller  : 'timbradosController'
        })
        .when('/timbrados/agregar', {
            templateUrl : 'pages/timbrados/agregar-timbrados.html',
            controller  :  'agregarTimbradosController'
        })
        .when('/timbrados/modificar', {
            templateUrl : 'pages/timbrados/modificar-timbrados.html',
            controller  :  'modificarTimbradosController'
        })

        .when('/usuario-sucursal', {
            templateUrl : 'pages/personas/usuario-sucursal/usuario-sucursal.html',
            controller  : 'usuarioSucursalController'
        })
        .when('/usuario-sucursal/agregar', {
            templateUrl : 'pages/personas/usuario-sucursal/agregar-usuario-sucursal.html',
            controller  : 'agregarUsuarioSucursalController'
        })

        .when('/cuentas-bancarias', {
            templateUrl : 'pages/cuentas-bancarias/cuentas-bancarias.html',
            controller  : 'cuentasBancariasController'
        })
        .when('/cuentas-bancarias/agregar', {
            templateUrl : 'pages/cuentas-bancarias/agregar-cuentas-bancarias.html',
            controller  : 'agregarCuentasBancariasController'
        })
        .when('/cuentas-bancarias/modificar', {
            templateUrl : 'pages/cuentas-bancarias/modificar-cuentas-bancarias.html',
            controller  : 'modificarCuentasBancariasController'
        })
        // agregados por Aurora Fin

        .otherwise({
            //redirectTo: '/'
            templateUrl : 'pages/404.html',
            controller  : 'ejemploController'
        });
});

app.run(function( $rootScope, $cookies) {
    $rootScope.$on('$routeChangeSuccess', function () {
        //validateCookie($rootScope);

        //alert('I RUN ') ;

       if(typeof $cookies.modulos!= 'undefined'){
           var modulos = $cookies.modulos;
           $rootScope.rolCompras = (modulos.indexOf("COMPRAS")!=-1)?true:false;
           $rootScope.rolVentas = (modulos.indexOf("VENTAS")!=-1)?true:false;
           $rootScope.rolInventario = (modulos.indexOf("INVENTARIO")!=-1)?true:false;
           $rootScope.rolServicios = (modulos.indexOf("SERVICIOS")!=-1)?true:false;
           $rootScope.rolCatalogo = (modulos.indexOf("CATALOGO")!=-1)?true:false;
           $rootScope.rolDesarrollo = (modulos.indexOf("PRUEBA")!=-1)?true:false;
           $rootScope.rolPersonas = (modulos.indexOf("PERSONAS")!=-1)?true:false;
       }


    })
})
//app.factory('validateCookie', function( $cookies,$rootScope, $http){
//        return function(scope) {
//            alert('I RUN')
//
//        }
//    })

app.controller('ejemploController', function($scope, $location, $rootScope, $cookies, $dialogs) {
    $scope.datos = {};
});

app.controller('mainController', function($scope, $rootScope, AccesosService, $cookies) {

//    $scope.myData = [{"fieldName1" : "row1-col1", "fieldName2" : "row1-col2", "fieldName3" : "row1-col3"},
//        {"fieldName1" : "row2-col1", "fieldName2" : "row2-col2", "fieldName3" : "row2-col3"}];
//    $scope.myGridOptions = {
//        colNames : ['columnName1', 'columnName2', 'columnName3'],
//        colModel : [{ name : 'fieldName1'}, { name : 'fieldName2', align : 'center'}, { name : 'fieldName3', align : 'center'}]
//    };

    $scope.datos = {};
    $scope.datos.usuario = 'gmarcos';
    $scope.datos.password = '123';
    var user = $cookies.usuario ;
    if(  user != "null" && typeof  user != 'undefined'){
        $rootScope.mostrarMain = true;
    }else{
        $rootScope.mostrarMain = false;
    }

    $scope.login = function(){
        AccesosService.login($scope.datos.usuario, $scope.datos.password).then(function(response){

            if(response.status== 200 && response.data!= "null"){
                $scope.listaDominios = response.data;
                $rootScope.mostrarMain = true;
                $cookies.usuario = $scope.datos.usuario ;
                $cookies.modulos = response.data.modulos ;
                $scope.mostrar();
                //$location.path( '/' );
            }else{
                $rootScope.mostrarMain = false;
                alert("FRACASO") ;
                $scope.datos.usuario = 'marcos';
                $scope.datos.password = '123';
            }

        })

    }

    $scope.mostrar = function(){
        var modulos = $cookies.modulos;
        $rootScope.rolCompras = (modulos.indexOf("COMPRAS")!=-1)?true:false;
        $rootScope.rolVentas = (modulos.indexOf("VENTAS")!=-1)?true:false;
        $rootScope.rolInventario = (modulos.indexOf("INVENTARIO")!=-1)?true:false;
        $rootScope.rolServicios = (modulos.indexOf("SERVICIOS")!=-1)?true:false;
        $rootScope.rolCatalogo = (modulos.indexOf("CATALOGO")!=-1)?true:false;
        $rootScope.rolDesarrollo = (modulos.indexOf("PRUEBA")!=-1)?true:false;
        $rootScope.rolPersonas = (modulos.indexOf("PERSONAS")!=-1)?true:false;
    }
});

app.controller('aboutController', function($scope, $rootScope) {
    $scope.message = 'Esta es la página "Acerca de"';
});

app.controller('contactController', function($scope, $rootScope) {
    $scope.message = 'Esta es la página de "Contacto", aquí podemos poner un formulario';
});

app.controller('paisesController', function($scope, $rootScope) {
    $scope.datos = {};

    $scope.cartData = [
        {'codigo': 'PAR',  'descripcion': 'PARAGUAY'},
        {'codigo': 'BRA',  'descripcion': 'BRASIL'},
        {'codigo': 'COL',  'descripcion': 'COLOMBIA'}
    ];

    $scope.remove = function(index) {
        $scope.cartData.splice(index, 1);
    }

    $scope.limpiar = function() {
        $scope.datos = {};
    }

    $scope.add = function() {
        var newItem = {
            'codigo': $scope.datos.codigo,
            'descripcion': $scope.datos.descripcion
        };

        $scope.cartData.push(newItem);
        $scope.datos.codigo = '';
        $scope.datos.descripcion = '';
        $scope.beep();
    }

    $scope.beep = function() {
        var snd = new  Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
        snd.play();
    }
});

app.service('DominiosService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarJson = function(json) {
        //var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/dominios/{"codigo":"PAISES"}')
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/dominios/'+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listar = function() {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/dominios')
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminar = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/dominios/delete/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(codigo, descripcion){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/dominios/insert/'+codigo+'/'+descripcion)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }
});

app.service('AccesosService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.login = function(usuario, pass) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/accesos/'+usuario+'/'+pass)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarComplex = function(json) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/personas/complex/'+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }
});

app.service('ValoresService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarJson = function(json) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/valores/'+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listar = function() {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/valores')
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminar = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/valores/delete/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(dominio, valor){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/valores/insert/'+dominio+'/'+valor)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }
});


app.controller('dominiosController', function($scope, $location, DominiosService, $rootScope, $dialogs, $dialogs) {

        $scope.datos ={};

        $scope.listaDominios = [];

        $scope.remove = function(index) {
            var element = $scope.listaDominios[index];
            dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
            dlg.result.then(function(resultado){
                //alert(resultado);

                DominiosService.eliminar(element.id).then(function(response){

                    if(response.status == 200){
                        var resultado = response.data;
                        if(resultado == "true"){
                            dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Eliminacion Exitosa'},{key: false,back: 'static'});

                            $scope.limpiar();
                            $scope.buscar();
                        }else{
                            //alert("ELIMINACION FALLIDA");
                            // dlg = $dialogs.error('ELIMINACION FALLIDA');
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


            //$scope.listaDominios.splice(index, 1);
        }

        $scope.limpiar = function() {
            $scope.datos = {};
            $scope.listaDominios = [];
        }

        $scope.agregar = function() {
            $location.path( '/dominios/agregar' );

        }

        $scope.buscar = function() {
            var json = angular.toJson($scope.datos);
            console.log(json);
    //        if(json != {}){
                DominiosService.listarJson(json).then(function(response){
                    if(response.status == 200){
                        $scope.listaDominios = response.data;
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                    }
                })
    //        }else{
    //            DominiosService.listar().then(function(response){
    //                if(response.status == 200){
    //                    $scope.listaDominios = response.data;
    //                }else{
    //                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
    //                }
    //            })
    //        }

        }

        var init = function () {

        }

         init();
    });

app.controller('agregarDominiosController', function($scope, $location,DominiosService , $rootScope, $dialogs) {
    $scope.datos = {};

    $scope.agregar = function() {
        DominiosService.insertar($scope.datos.codigo, $scope.datos.descripcion).then(function(response){

            if(response.status == 200){
                $location.path( '/dominios' );
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});

                //alert("Guardado exitoso.");
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});

                //alert("FRACASO") ;
            }

        })
    }

    $scope.cancelar = function(){
        $location.path( '/dominios' );
    }
});

app.controller('salirController', function($scope, $location, $rootScope, $cookies) {
    $cookies.usuario = null;
    $location.path( '/' );
});

app.controller('dialogServiceTest',function($scope,$rootScope,$timeout,$dialogs){
    $scope.confirmed = 'You have yet to be confirmed!';
    $scope.name = '"Your name here."';

    $scope.launch = function(which){
        var dlg = null;
        switch(which){

            // Error Dialog
            case 'error':
               // dlg = $dialogs.error('This is my error message');
                //break;.
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Paso de error por parametro'},{key: false,back: 'static'});
//                dlg.result.then(function(name){
//                    $scope.name = name;
//                },function(){
//                    $scope.name = 'You decided not to enter in your name, that makes me sad.';
//                });
                break;

            // Wait / Progress Dialog
            case 'exito':
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Paso de exito por parametro'},{key: false,back: 'static'});
                break


            case 'notificacion':
                dlg = $dialogs.create('/dialogs/notificacion.html', 'notificacionController' ,{msg:'Paso de exito por parametro'},{key: false,back: 'static'});
                break

            case 'wait':
                dlg = $dialogs.wait(msgs[i++],progress);
                fakeProgress();
                break;

            // Notify Dialog
            case 'notify':
                dlg = $dialogs.notify('Something Hapened!','Something hapened that I need to tell you.');
                break;

            // Confirm Dialog
            case 'confirm':
                /*dlg = $dialogs.confirm('Please Confirm','Is this awesome or what?');
                dlg.result.then(function(btn){
                    $scope.confirmed = 'You thought this quite awesome!';
                },function(btn){
                    $scope.confirmed = 'Shame on you for not thinking this is awesome!';
                }); */

                dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro?'},{key: false,back: 'static'});
                dlg.result.then(function(resultado){
                    alert(resultado);
                },function(){
                    //$scope.name = 'You decided not to enter in your name, that makes me sad.';
                });
                break;

            // Create Your Own Dialog
            case 'create':
                /*
                dlg = $dialogs.create('/dialogs/whatsyourname.html','whatsYourNameCtrl',{},{key: false,back: 'static'});
                dlg.result.then(function(name){
                    $scope.name = name;
                },function(){
                    $scope.name = 'You decided not to enter in your name, that makes me sad.';
                }); */
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Paso de error por parametro'},{key: false,back: 'static'});
                dlg.result.then(function(name){
                    $scope.name = name;
                },function(){
                    $scope.name = 'You decided not to enter in your name, that makes me sad.';
                });
                break;

            case 'detalleFactura':
                /*
                 dlg = $dialogs.create('/dialogs/whatsyourname.html','whatsYourNameCtrl',{},{key: false,back: 'static'});
                 dlg.result.then(function(name){
                 $scope.name = name;
                 },function(){
                 $scope.name = 'You decided not to enter in your name, that makes me sad.';
                 }); */
                dlg = $dialogs.create('/dialogs/detalleFactura.html', 'detalleFacturaController' ,{msg:'Paso de error por parametro'},{key: false,back: 'static'});
                dlg.result.then(function(name){
                    $scope.name = name;
                },function(){
                    $scope.name = 'You decided not to enter in your name, that makes me sad.';
                });
                break;
        }; // end switch
    }; // end launch

    // for faking the progress bar in the wait dialog
    var progress = 25;
    var msgs = [
        'Hey! I\'m waiting here...',
        'About half way done...',
        'Almost there?',
        'Woo Hoo! I made it!'
    ];
    var i = 0;

    var fakeProgress = function(){
        $timeout(function(){
            if(progress < 100){
                progress += 25;
                $rootScope.$broadcast('dialogs.wait.progress',{msg: msgs[i++],'progress': progress});
                fakeProgress();
            }else{
                $rootScope.$broadcast('dialogs.wait.complete');
            }
        },1000);
    }; // end fakeProgress

}) // end dialogsServiceTest
app.controller('whatsYourNameCtrl',function($scope,$modalInstance,data){
        $scope.user = {name : ''};

        $scope.cancel = function(){
            $modalInstance.dismiss('canceled');
        }; // end cancel

        $scope.save = function(){
            $modalInstance.close($scope.user.name);
        }; // end save

        $scope.hitEnter = function(evt){
            if(angular.equals(evt.keyCode,13) && !(angular.equals($scope.name,null) || angular.equals($scope.name,'')))
                $scope.save();
        }; // end hitEnter
    }) // end whatsYourNameCtrl
app.run(['$templateCache',function($templateCache, $rootScope){
        $templateCache.put('/dialogs/whatsyourname.html','<div class="modal"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title"><span class="glyphicon glyphicon-star"></span> User\'s Name</h4></div><div class="modal-body"><ng-form name="nameDialog" novalidate role="form"><div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]"><label class="control-label" for="username">Name:</label><input type="text" class="form-control" name="username" id="username" ng-model="user.name" ng-keyup="hitEnter($event)" required><span class="help-block">Enter your full name, first &amp; last.</span></div></ng-form></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button><button type="button" class="btn btn-primary" ng-click="save()" ng-disabled="(nameDialog.$dirty && nameDialog.$invalid) || nameDialog.$pristine">Save</button></div></div></div></div>');

        $templateCache.put('/dialogs/error.html',
            '<div class="modal">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header dialog-header-error">' +
            '<h4 class="modal-title">' +
            '<span class="glyphicon glyphicon-remove"></span> Error</h4>' +
            '</div><div class="modal-body"><ng-form name="nameDialog" novalidate role="form">' +
            '<div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]">' +
            '<span class="help-block">{{causa}}</span>'+
            '</div></ng-form></div><div class="modal-footer">' +
            '<button type="button" class="btn btn-primary" ng-click="cancel()" >Ok</button>' +
            '</div></div></div></div>');

    $templateCache.put('/dialogs/exito.html',
        '<div class="modal">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header dialog-header-success">' +
            '<h4 class="modal-title letra-blanca">' +
            '<span class="glyphicon glyphicon-ok"></span> Exito</h4>' +
            '</div><div class="modal-body"><ng-form name="nameDialog" novalidate role="form">' +
            '<div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]">' +
            '<span class="help-block">{{causa}}</span>'+
            '</div></ng-form></div><div class="modal-footer">' +
            '<button type="button" class="btn btn-primary" ng-click="cancel()" >Ok</button>' +
            '</div></div></div></div>');

    $templateCache.put('/dialogs/notificacion.html',
        '<div class="modal">' +
            '<div class="modal-dialog">' +
            '<div class="modal-content">' +
            '<div class="modal-header dialog-header-warning">' +
            '<h4 class="modal-title letra-blanca">' +
            '<span class="glyphicon glyphicon-ok"></span> Atencion</h4>' +
            '</div><div class="modal-body"><ng-form name="nameDialog" novalidate role="form">' +
            '<div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]">' +
            '<span class="help-block">{{causa}}</span>'+
            '</div></ng-form></div><div class="modal-footer">' +
            '<button type="button" class="btn btn-primary" ng-click="cancel()" >Ok</button>' +
            '</div></div></div></div>');

    $templateCache.put('/dialogs/confirmar.html',
        '<div class="modal"><div class="modal-dialog"><div class="modal-content">' +
            '<div class="modal-header dialog-header-custom"><h4 class="modal-title letra-blanca"><span class="glyphicon glyphicon-ok-circle">' +
            '</span> Confirmar</h4></div><div class="modal-body"><ng-form name="nameDialog" novalidate role="form">' +
            '<div class="form-group input-group-lg" ng-class="{true: \'has-error\'}[nameDialog.username.$dirty && nameDialog.username.$invalid]">' +
            '<span class="help-block">{{causa}}</span>'+
            '<div class="modal-footer">' +

            '<button type="button" class="btn btn-primary" ng-click="save()" >Si</button>' +
            '<button type="button" class="btn btn-default" ng-click="cancel()">No</button>' +
            '</div></div></div></div>');

    $templateCache.put('/dialogs/detalleFactura.html',
        '<div class="modal"><div class="modal-dialog">' +
            '<div class="modal-content"><div class="modal-header">' +
            '<h4 class="modal-title"><span class="glyphicon glyphicon-th-list">' +
            '</span> Agregar Producto</h4></div><div class="modal-body">' +
            '<ng-form name="nameDialog" novalidate role="form">' +

            '<div class="panel-body" >'+
                '<div class="form-group input-group-sm col-sm-12">' +
                '<label class="col-sm-2 control-label">Codigo:</label>'    +
                '<div class="col-sm-4">'+
                '<input required type="text" class="form-control input-xs" ng-model="datos.codigo" maxlength="50"/>'+
                '</div>' +
                '<button type="button" class="btn btn-primary btn-sm" ng-disabled="!datos.codigo" ng-click="myFunction();"><span class="glyphicon glyphicon-search"></span></button>' +
                '</div>'+
                '</br>'+

                '<div class="form-group input-group-sm col-sm-12">' +
                '<label class="col-sm-2 control-label nopadding">Descripcion:</label>'    +
                '<div class="col-sm-9">'        +
                '<input required type="text" class="form-control input-sm" ng-model="datos.descripcion" maxlength="50"/>'+
                '</div>' +
                '</div>'+
                '</br>'+

                '<div class="form-group input-group-sm col-sm-12">' +
                '<label class="col-sm-2 control-label">Cantidad:</label>'    +
                '<div class="col-sm-2">'        +
                '<input required type="text" class="form-control input-sm" ng-model="datos.cantidadRequerida" maxlength="50"/>'+
                '</div>' +
                '<label class="col-sm-2 control-label nopadding">Precio U.:</label>'+
//                '<label class="col-sm-2 control-label">{{precio}}</label>'+
                '<div class="col-sm-4">'+
                '<input required type="text" class="form-control input-sm" ng-model="datos.precio" maxlength="50" disabled/>'+
                '</div>'+

                 '</div>'+
                 '</br>'+

                    '<table class="table" >'+
                        '<thead>'+
                            '<tr>'+
                                '<th>Codigo</th>'+
                                '<th>Descripcion</th>'+
                                '<th></th>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>'+
                            '<tr ng-repeat="item in listaProductos">'+
                                '<td>{{item.codigo}}</td>'+
                                '<td>{{item.descripcion}}</td>'+

                            '<td>'+
                                    '<button ng-click="remove($index)" class="btn btn-primary btn-xs">Seleccionar</button>'+
                            '</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>'+


            '</div  >'+

            '</ng-form></div><div class="modal-footer">' +
            '<button type="button" class="btn btn-default" ng-click="cancel()">Cancel</button>' +
            '<button type="button" class="btn btn-primary" ng-click="save()" ng-disabled="(nameDialog.$dirty && nameDialog.$invalid) || nameDialog.$pristine">Save</button></div></div></div></div>');



    /*
    $rootScope.globalFoo = function() {
        alert("I'm global foo!");
    };
    */
    }]); // end run / module


app.controller('valoresController', function($scope, $location, ValoresService, $rootScope, DominiosService,$dialogs) {

    $scope.datos ={};
    $scope.otros ={};

    $scope.listaValores = [];
    $scope.listaDominios = [];

    $scope.remove = function(index) {
        var element = $scope.listaValores[index];

        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){

                ValoresService.eliminar(element.id).then(function(response){
                    if(response.status == 200){
                        var resultado = response.data;
                        if(resultado == "true"){
                            dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Eliminacion Exitosa'},{key: false,back: 'static'});

                            $scope.limpiar();
                            $scope.buscar();
                        }else{
                            dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al eliminar'},{key: false,back: 'static'});

                            $scope.limpiar();
                            $scope.buscar();
                        }
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                    }
                });
                //$scope.listaDominios.splice(index, 1);
        },function(){
            //$scope.name = 'You decided not to enter in your name, that makes me sad.';
        });
    }

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.otros ={};
        $scope.listaValores = [];
    }

    $scope.agregar = function() {
        $location.path( '/valores/agregar' );

    }

    $scope.buscar = function() {
        var json = angular.toJson($scope.datos);
        console.log(json);
//        if(json != {}){
            ValoresService.listarJson(json).then(function(response){
                if(response.status == 200){
                    $scope.listaValores = response.data;
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }

            })
//        }else{
//            ValoresService.listar().then(function(response){
//                if(response.status == 200){
//                    $scope.listaValores = response.data;
//                }else{
//                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
//                }
//
//            })
//        }
    }

    $scope.listarDominios = function() {
        var json = angular.toJson({});
        DominiosService.listarJson(json).then(function(response){
            if(response.status == 200){
                $scope.listaDominios = response.data;
            }else{
                alert("FRACASO") ;
            }

        })
    }

     $scope.cambioDominios = function(descripcion){
         for(i=0;i<$scope.listaDominios.length;i++){
            if(descripcion == $scope.listaDominios[i].codigo){
                $scope.datos.dominio =     $scope.listaDominios[i].codigo;
                break;
            }

        }

    }

    var init = function () {

        $scope.listarDominios();
    }

    init();
});


app.controller('agregarValoresController', function($scope, $location,ValoresService , $rootScope, DominiosService, $dialogs) {
    $scope.datos = {};
    $scope.otros ={};

    $scope.agregar = function() {
        ValoresService.insertar($scope.datos.dominio, $scope.datos.valor).then(function(response){

            if(response.status == 200){
                $location.path( '/valores' );
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }

        })
    }

    $scope.cambioDominios = function(descripcion){
         for(i=0;i<$scope.listaDominios.length;i++){
            if(descripcion == $scope.listaDominios[i].codigo){
                $scope.datos.dominio =     $scope.listaDominios[i].codigo;
                break;
            }

        }

    }

    $scope.listarDominios = function() {
        var json = angular.toJson({});
        DominiosService.listarJson(json).then(function(response){
            if(response.status == 200){
                $scope.listaDominios = response.data;
            }else{
                alert("FRACASO") ;
            }

        })
    }

    $scope.cancelar = function(){
        $location.path( '/valores' );
    }


    var init = function () {
        $scope.listarDominios();
    }

    init();
});

app.controller('errorDialogController',function($scope,$modalInstance,data){
    $scope.causa= data.msg;

    $scope.cancel = function(){
        $modalInstance.dismiss('canceled');
    }; // end cancel

}) // end errorDialogController

app.controller('exitoController',function($scope,$modalInstance,data){
    $scope.causa= data.msg;

    $scope.cancel = function(){
        $modalInstance.dismiss('canceled');
    }; // end cancel

}) // end dialogoExitosoController


app.controller('notificacionController',function($scope,$modalInstance,data){
    $scope.causa= data.msg;

    $scope.cancel = function(){
        $modalInstance.dismiss('canceled');
    }; // end cancel

}) // end dialogoExitosoController

app.controller('confirmarController',function($scope,$modalInstance,data){

    $scope.causa= data.msg;

    $scope.cancel = function(){
        $modalInstance.dismiss('canceled');
    }; // end cancel

    $scope.save = function(){
        $scope.data= 'S';
        $modalInstance.close($scope.data);
    }; // end save


})


app.controller('registrarVentaController', function($scope, $location, $rootScope, $cookies, $dialogs, AccesosService, UtilService, ArticulosService, ClientesService, VentasService, CajasService, UsuarioSucursalService) {

    $scope.datos = {};
    $scope.producto = {}
    $scope.lista = [] ;
    $scope.inhabilitarAgregar =true;
    $scope.inhabilitarCBarra = false;
    $scope.listaArticulos=[];

    $scope.mostrarCutas= false;

    $scope.remove = function(index) {
        $scope.lista.splice(index, 1);
    }

    $scope.limpiar = function(){
        $scope.inhabilitarAgregar =true;
        $scope.inhabilitarCBarra = false;
        $scope.producto.sucursal = 'MATRIZ';
    }

    $scope.changeCantidad = function(){
        if($scope.datos.cantidad != null && $scope.datos.cantidad != '' && typeof $scope.datos.cantidad != 'undefined'){
            if($scope.datos.cantidad>0){
                $scope.datos.total= $scope.datos.cantidad * $scope.datos.precio;
                $scope.inhabilitarAgregar =false;
            }else{
                $scope.datos.cantidad=1;
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Cantidad invalida'},{key: false,back: 'static'});
            }

        }else{
            $scope.inhabilitarAgregar =true;
        }

    }

    $scope.buscarArticuloExistente = function(){
        console.log('buscare');
        //if($scope.producto.descripcion || $scope.producto.codigo || $scope.producto.codigoBarra){
            //var json = angular.toJson($scope.producto);
            $scope.producto.sucursal = 'MATRIZ'
            VentasService.listarStockPorSucursal($scope.producto).then(function(response){
                if(response.status == 200){
                    if(response.data.length == 1){
                        $scope.articulo =   response.data[0];
                        $scope.producto.codigo = $scope.articulo.codigo;
                        if($scope.producto.codigoBarra ==null || typeof $scope.producto.codigoBarra == 'undefined'){
                            $scope.inhabilitarCBarra = true;
                        }else{
                            $scope.inhabilitarCBarra = false;
                        }
                        $scope.producto.codigoBarra = $scope.articulo.codigoBarra;
                        $scope.producto.descripcion = $scope.articulo.descripcion;
                        $scope.datos.precio = $scope.articulo.precioUnitario;
                        $scope.datos.grabado = $scope.articulo.grabado;
                        if($scope.datos.cantidad != null && $scope.datos.cantidad != '' && typeof $scope.datos.cantidad != 'undefined'){
                            $scope.datos.total= $scope.datos.cantidad * $scope.datos.precio;
                            $scope.inhabilitarAgregar =false;
                        }
                        $scope.articuloValido  = true;

                    }else{
                        $scope.articuloValido  = false;
                        $scope.inhabilitarAgregar =true;
                        $scope.listaArticulos =   response.data;
                    }

                }else{
                    $scope.articuloValido  = false;
                    $scope.inhabilitarAgregar =true;
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            })
            console.log('lo encontre');

        //}else  {
        //    $scope.articuloValido  = false;
        //    $scope.inhabilitarAgregar =true;
        //    console.log('me da pereza');
        //}
    }

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    $scope.habilitarCuotas = function(condicion){
        if(condicion=='contado'){
            $scope.mostrarCutas= false;
        }else{
            $scope.mostrarCutas= true;
        }
    }

    function formatMesDia (param){
         if(param<10){
             return '0'+param;
         }else{
             return param;
         }
    }

    function nvl(valor1, valor2){
        if(valor1!=null && typeof valor1 != 'undefined' && valor1!='' && valor1!= 'null')
            return valor1;
        return valor2
    }

    $scope.buscarClientes= function(){
        var obj = {
            ruc: $scope.datos.ruc,
            nombre: (typeof $scope.datos.nombre== 'undefined')? null: $scope.datos.nombre.replace(" ", "%")
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        ClientesService.listarComplex(encoJson).then(function(response){
            if(response.status == 200){
                if(response.data.length>1){
                    $scope.listaClientes = response.data;
                }else if(response.data.length==1){
                    $scope.datos.nombre = response.data[0].nombre +" "+ response.data[0].apellido;
                    $scope.datos.ruc =  nvl(response.data[0].ruc, response.data[0].cedula);
                    $scope.datos.telefono = nvl( response.data[0].telefono, response.data[0].celular1);
                    $scope.datos.codigoPersona = response.data[0].codigo;
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.cancelar = function() {
        $location.path( '/ventas' );
    }


    $scope.secuencia = function(){
        UtilService.secuencia("factura_seq").then(function(response){
            if(response.status == 200){
                var aux  = response.data;
                $scope.datos.numeroFactura =  aux; //pad(aux, 8);
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    $scope.obtenerUsuarioSucursal = function(usuario){
        UsuarioSucursalService.obtener(usuario).then(function(response){
            if(response.status == 200){
                if(response.data.length == 1){
                    $scope.datos.sucursal =  response.data[0].sucursal;
                } else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'El usuario '+usuario+' no esta asignado a ninguna sucursal.'},{key: false,back: 'static'});
                    $scope.cancelar();
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});

            }
        })
    };

    $scope.agregar = function(){
        var impuesto =  $scope.datos.total* $scope.datos.grabado/100 ;
        var obj= {
            codigoArticulo: $scope.producto.codigo,
            descripcion: $scope.producto.descripcion,
            cantidad: $scope.datos.cantidad,
            precio: $scope.datos.precio,
            iva: $scope.datos.grabado,
            impuesto: impuesto,
            total: $scope.datos.total,
            tipo:$scope.articulo.tipo
        }
        $scope.lista.push(obj);
        $scope.limpiarSimple();
    }

    $scope.limpiarSimple = function(){
        $scope.producto = {};
        $scope.datos.cantidad = null;
        $scope.datos.precio = null;
        $scope.datos.total = null;
        $scope.inhabilitarAgregar =true;
        $scope.inhabilitarCBarra = false;
    }

    $scope.guardar = function(){
        var lista = angular.copy($scope.lista);
        var cabecera = {
            numeroFactura: $scope.datos.numeroFactura,
            timbrado:$scope.datos.timbrado,
            codigoPersona: $scope.datos.codigoPersona,
            cliente: $scope.datos.nombre,
            ruc: $scope.datos.ruc,
            telefono: $scope.datos.telefono,
            sucursal: $scope.datos.sucursal,
            caja:$scope.datos.nroCaja,
            usuario:$cookies.usuario,
            estado:'BORRADOR'
        }
        for(i=0;i<lista.length;i++){
           delete lista[i].descripcion
        }

        var param = {
            cabecera: cabecera,
            detalle: lista
        }
        VentasService.registrarVenta(param).then(function(response){
            if(response.status == 200 && response.data =="true"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    var init = function(){
        var fecha =   new Date();
        var fechaformateada =  formatMesDia(fecha.getDate())+'/'+formatMesDia(fecha.getMonth())+'/'+fecha.getFullYear();
        $scope.datos.fecha =  fechaformateada;
        $scope.datos.usuario =  $cookies.usuario;
        //$scope.obtenerSucursalTimbrado($scope.datos.usuario);
        $scope.secuencia();
        $scope.buscarClientes();
        $scope.buscarArticuloExistente();
        $scope.obtenerUsuarioSucursal($scope.datos.usuario);
    }

    init();
});

app.controller('detalleFacturaController',function($scope,$modalInstance,data){
    $scope.datos = {};
    //$scope.precio =1500000

    $scope.listaProductos = [
        {"codigo":"1","descripcion":"Notebook HP PRO 4530", "precio":"270000", "cantidad": "10"},
        {"codigo":"2","descripcion":"Notebook ACER 2510", "precio":"280000", "cantidad": "8"} ]

    $scope.cancel = function(){
        $modalInstance.dismiss('canceled');
    }; // end cancel

    $scope.save = function(){
        $modalInstance.close($scope.user.name);
    }; // end save

    $scope.hitEnter = function(evt){
        if(angular.equals(evt.keyCode,13) && !(angular.equals($scope.name,null) || angular.equals($scope.name,'')))
            $scope.save();
    };

    function buscar  (codigo){
        alert("Hola Mundo");

    }

    $scope.myFunction =function(){
        alert("Hola Mundo");
        if($scope.datos.codigo == 1){
            $scope.datos.descripcion="Notebook HP PRO 4530";
            $scope.datos.precio="270000"
            $scope.datos.cantidad= "10";
        }else if ($scope.datos.codigo== 2){
            $scope.datos.descripcion="Notebook ACER 2510";
            $scope.datos.precio="280000"
            $scope.datos.cantidad= "8";
        }
    }

     // end hitEnter
}) // end whatsYourNameCtrl



app.controller('articulosController', function($scope, $location, ArticulosService, $rootScope, $dialogs, $dialogs) {

    $scope.datos ={};
    $scope.habilitarAgregar = true;
    $scope.listaArticulos = [];

    $scope.remove = function(index) {
        var element = $scope.listaArticulos[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            //alert(resultado);

            ArticulosService.eliminar(element.codigo).then(function(response){

                if(response.status == 200){
                    var resultado = response.data;
                    if(resultado == "true"){
                        // dlg = $dialogs.notify('Notificacion',
                        //   'ELIMINACION EXITOSA.',null);
                        //alert("ELIMINACION EXITOSA") ;
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Eliminacion Exitosa'},{key: false,back: 'static'});

                        $scope.limpiar();
                        $scope.buscar();
                    }else{
                        //alert("ELIMINACION FALLIDA");
                        // dlg = $dialogs.error('ELIMINACION FALLIDA');
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


        //$scope.listaDominios.splice(index, 1);
    }

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.listaArticulos = [];
    }

    $scope.agregar = function() {
        $location.path( '/articulos/agregar' );

    }

    $scope.buscar = function() {
        var json = angular.toJson($scope.datos);
        console.log(json);
//        if(json != {}){
        ArticulosService.listarJson(json).then(function(response){
            if(response.status == 200){
                $scope.listaArticulos = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
//        }else{
//            DominiosService.listar().then(function(response){
//                if(response.status == 200){
//                    $scope.listaDominios = response.data;
//                }else{
//                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
//                }
//            })                   z
//        }

    }

    var init = function () {
        if($rootScope.procesandoFactura == true){
            $scope.habilitarAgregar = false;
        }
    }

    init();
});


app.controller('articulosFacturaController', function($scope, $location, ArticulosService, $rootScope, $dialogs, $dialogs) {

    $scope.datos ={};
    $scope.listaArticulos = [];

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.listaArticulos = [];
    }

    $scope.agregar = function(index) {
            var element = $scope.listaArticulos[index];
        $rootScope.itemAgregar = element;
        $location.path( '/ventas/registrar-venta' );

    }

    $scope.buscar = function() {
        var json = angular.toJson($scope.datos);
        console.log(json);
        ArticulosService.listarJson(json).then(function(response){
            if(response.status == 200){
                $scope.listaArticulos = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
//        }else{
//            DominiosService.listar().then(function(response){
//                if(response.status == 200){
//                    $scope.listaDominios = response.data;
//                }else{
//                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
//                }
//            })
//        }

    }

    var init = function () {
        if($rootScope.procesandoFactura == true){
            $scope.habilitarAgregar = false;
        }else{
            $scope.buscar();
        }

    }

    init();
});


app.service('ArticulosService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarJson = function(json) {
        //var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/dominios/{"codigo":"PAISES"}')
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/articulos/'+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listar = function() {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/articulos')
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminar = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/articulos/delete/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(datos){
        var obj = {
            "codigoBarra":datos.codigoBarra,
            "marca":datos.marca,
            "modelo":datos.modelo,
            "tipo":datos.tipo,
            "descripcion": datos.descripcion,
            "precioUnitario": datos.precioUnitario,
            "grabado": datos.grabado,
            "moneda": datos.moneda//,
            //"cantidadMaxima": datos.cantidadMaxima,
            //"cantidadMinima": datos.cantidadMinima
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/articulos/insert?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }
});


app.controller('ingresarEquipoController', function($scope, $location, ValoresService, $rootScope, $dialogs, ClientesService, $cookies, ServiciosService) {

    $scope.datos ={};
    $scope.listaClientes ={};
    $scope.listaTaller = [];
    $scope.listaModelos=[];
    $scope.listaTipos = [];
    $scope.listaMarcas = [];

    $scope.listarModelos = function(){
        var json =angular.toJson({"dominio":"MODELOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaModelos = response.data;
            }else{
                alert("Error al cargar los modelos");
            }
        })
    }

    $scope.listarTipos = function(){
        var json =angular.toJson({"dominio":"TIPOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTipos = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.listarMarcas= function(){
        var json =angular.toJson({"dominio":"MARCAS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaMarcas = response.data;
            }else{
                alert("Error al cargar las Marcas");
            }
        })
    }


    $scope.buscarCliente= function(){
        var obj = '{}';
        var encoJson = encodeURIComponent(obj);
        ClientesService.listarComplex(encoJson).then(function(response){
            if(response.status == 200){
                $scope.listaClientes = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.changeCliente=function(){
        var encontrado = false;
        for(i=0;i<$scope.listaClientes.length;i++){
            var apellido = "";
            if(typeof $scope.listaClientes[i].apellido!= 'undefined'){
                apellido =  $scope.listaClientes[i].apellido;
            }
            if(($scope.listaClientes[i].nombre+' '+apellido).trim() ==$scope.datos.cliente.trim()){
                $scope.datos.codigoPersona= $scope.listaClientes[i].codigo;
                $scope.datos.correo= $scope.listaClientes[i].correoElectronico;
                $scope.datos.telefono= $scope.listaClientes[i].telefono;
                encontrado=true;
                break;
            }
        }
        if(!encontrado){
            $scope.datos.correo= "";
            $scope.datos.telefono= "";
            delete $scope.datos.codigoPersona;
        }
    }

//    $scope.changeEncargado=function(){
//        var encontrado = false;
//        for(i=0;i<$scope.listaClientes.length;i++){
//            if($scope.listaClientes[i].nombre+' '+$scope.listaClientes[i].apellido ==$scope.datos.encargadoNombreApellido){
//                $scope.datos.encargado=  $scope.listaClientes[i].codigo;
//                break;
//            }
//        }
//    }


    var formatearDiaMes = function(num){
        if(num<10){
            return '0'+num;
        }else{
            return num;
        }
    }

    $scope.secuencia = function(){
        ServiciosService.secuencia().then(function(response){
            if(response.status == 200){
                $scope.datos.secuencia = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })

    };


    $scope.cancelar = function(){
        $location.path( '/circuito' );
    }

    $scope.agregar = function() {
        ServiciosService.ingresarEquipo($scope.datos).then(function(response){
            if(response.status == 200){
                var resultado = response.data;
                if(resultado == "true"){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                    $scope.cancelar();
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Ingresar Equipo'},{key: false,back: 'static'});
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarTaller = function(){
        var json =angular.toJson({"dominio":"TALLER_INTERNO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTaller = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    var init = function () {
        $scope.buscarCliente();
        $scope.datos.responsable = $cookies.usuario;
        var fecha= new Date();
        var a = formatearDiaMes(fecha.getDate());
        var b = formatearDiaMes(fecha.getMonth()+1);
        var c = fecha.getFullYear();
        $scope.datos.fecha = c+ '/'+ b +'/'+ a  +' 00:00:00';
        //$scope.datos.fecha = new Date();
        $scope.secuencia();
        $scope.listarTaller();
        $scope.listarModelos();
        $scope.listarTipos();
        $scope.listarMarcas();
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

app.controller('agregarArticulosController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, ArticulosService) {
    $scope.datos = {};
    $scope.listaModelos=[];
    $scope.listaTipos = [];
    $scope.listaMarcas = [];
    $scope.listaGrabados=[];
    $scope.listaMonedas=[];

    $scope.listarModelos = function(){
        var json =angular.toJson({"dominio":"MODELOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaModelos = response.data;
            }else{
                alert("Error al cargar los modelos");
            }
        })
    }

    $scope.listarTipos = function(){
        var json =angular.toJson({"dominio":"TIPOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTipos = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.listarMarcas= function(){
        var json =angular.toJson({"dominio":"MARCAS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaMarcas = response.data;
            }else{
                alert("Error al cargar las Marcas");
            }
        })
    }

    $scope.listarGrabados= function(){
        var json =angular.toJson({"dominio":"IMPUESTOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaGrabados = response.data;
            }else{
                alert("Error al cargar los Impuestos");
            }
        })
    }

    $scope.listarMonedas= function(){
        var json =angular.toJson({"dominio":"MONEDAS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaMonedas = response.data;
            }else{
                alert("Error al cargar los Monedas");
            }
        })
    }

    $scope.agregar = function() {
        ArticulosService.insertar($scope.datos).then(function(response){

            if(response.status == 200){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }


    $scope.cancelar = function(){
        $location.path( '/articulos' );
    }

    var init = function(){
        $scope.listarModelos();
        $scope.listarTipos();
        $scope.listarMarcas();
        $scope.listarGrabados();
        $scope.listarMonedas();
    }

    init();
});

app.controller('clientesController', function($scope, $location, $rootScope, $cookies, $dialogs, PersonasService) {
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
        PersonasService.listarComplex(json).then(function(response){
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

app.service('ClientesService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarComplex = function(json) {
        //var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/dominios/{"codigo":"PAISES"}')
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/clientes/complex?paramJson='+json)
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

app.service('ServiciosService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.secuencia = function() {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/servicios/secuencia')
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarJson = function(json) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/servicios/'+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminar = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/servicios/delete/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminarServicioById = function(codigo){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/servicios/eliminar-id/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


    this.insertar = function(codigo, descripcion){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/servicios/insert/'+codigo+'/'+descripcion)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.ingresarEquipo = function(datos){
        var obj = {
            "secuencia":datos.secuencia,
            "estado":'RECEPCIONADO',
            "paso":1,
            "lugar":datos.taller,
            "responsable": datos.responsable,
            "pais": datos.pais,
            "observacion": datos.observacion,
            "cliente": datos.cliente,
            "correo": datos.correo,
            "encargado": datos.encargado,
            "telefono": datos.telefono,
            "detalleEquipo": datos.detalleEquipo,
            "detalleTrabajo": datos.detalleTrabajo,
            "observacion": datos.observacion,
            "codigoPersona": datos.codigoPersona,
            "tipo": datos.tipo,
            "marca": datos.marca,
            "modelo": datos.modelo
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/servicios/ingresar-equipo?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.modificarIngresarEquipo = function(datos){
        var obj = {
            "secuencia":datos.secuencia,
            "estado":'RECEPCIONADO',
            "paso":1,
            "lugar":datos.taller,
            "responsable": datos.responsable,
            "pais": datos.pais,
            "observacion": datos.observacion,
            "cliente": datos.cliente,
            "correo": datos.correo,
            "encargado": datos.encargado,
            "telefono": datos.telefono,
            "detalleEquipo": datos.detalleEquipo,
            "detalleTrabajo": datos.detalleTrabajo,
            "observacion": datos.observacion
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.put('http://localhost:8080/panda-sys/webapi/servicios/ingresar-equipo?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }



    this.listarCircuito = function(json) {
        var jsonObj = angular.toJson(json);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/servicios/circuito?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarCotizacion = function(json) {
        var jsonObj = angular.toJson(json);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/servicios/cotizacion?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarServicio = function(datos) {
        var jsonObj = angular.toJson(datos);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/servicios/listar-servicio?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertarServicios = function(datos){
        var obj = {
            "codigo":datos.codigo,
            "descripcion":datos.descripcion,
            "precioUnitario":datos.precioUnitario,
            "grabado":datos.grabado,
            "estado": datos.estado
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/servicios/insertar-servicios?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.modificarServicios = function (datos){
        var obj = {
            "codigo":datos.codigo,
            "descripcion":datos.descripcion,
            "precioUnitario":datos.precioUnitario,
            "grabado":datos.grabado,
            "estado": datos.estado
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/servicios/modificar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


    this.obtenerCircuitoServicioIngreso = function(secuencia) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/servicios/ingreso/'+secuencia)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.crearCotizacion = function(obj){
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/servicios/crear-cotizacion?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.aprobar = function(obj) {
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/servicios/aprobar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.reparar = function(obj) {
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/servicios/reparar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.rechazar = function(obj) {
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/servicios/rechazar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.anular = function(json) {
        var jsonObj = angular.toJson(json);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/servicios/anular-circuito?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarCircuitoHistorico = function(secuencia) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/servicios/circuito-historico/'+secuencia)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});

//app.controller('serviciosController', function($scope, $location, ServiciosService, $rootScope, $dialogs) {
//
//    $scope.datos ={};
//
//    $scope.listaServicios = [];
//
//    $scope.remove = function(index) {
//        var element = $scope.listaServicios[index];
//        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
//        dlg.result.then(function(resultado){
//            //alert(resultado);
//
//            ServiciosService.eliminar(element.id).then(function(response){
//
//                if(response.status == 200){
//                    var resultado = response.data;
//                    if(resultado == "true"){
//                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Eliminacion Exitosa'},{key: false,back: 'static'});
//
//                        $scope.limpiar();
//                        $scope.buscar();
//                    }else{
//                        //alert("ELIMINACION FALLIDA");
//                        // dlg = $dialogs.error('ELIMINACION FALLIDA');
//                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al eliminar el dominio'},{key: false,back: 'static'});
//
//                        $scope.limpiar();
//                        $scope.buscar();
//                    }
//                }else{
//                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
//                }
//            });
//
//        },function(){
//            //$scope.name = 'You decided not to enter in your name, that makes me sad.';
//        });
//    }
//
//    $scope.limpiar = function() {
//        $scope.datos = {};
//        $scope.listaServicios = [];
//    }
//
//    $scope.agregar = function() {
//        $location.path( '/servicios/agregar' );
//    }
//
//    $scope.buscar = function() {
//        //var json = angular.toJson($scope.datos);
//        ServiciosService.listarServicio($scope.datos).then(function(response){
//            if(response.status == 200){
//                $scope.listaServicios = response.data;
//            }else{
//                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
//            }
//        })
//    }
//
//    var init = function () {
//
//    }
//
//    init();
//});


app.controller('serviciosController', function($scope, $location, ServiciosService, $rootScope, $dialogs) {

    $scope.datos ={};

    $scope.listaServicios = [];

    $scope.remove = function(index) {
        var element = $scope.listaServicios[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            //alert(resultado);

            ServiciosService.eliminarServicioById(element.codigo).then(function(response){

                if(response.status == 200){
                    var resultado = response.data;
                    if(resultado == "true"){
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Eliminacion Exitosa'},{key: false,back: 'static'});

                        $scope.limpiar();
                        $scope.buscar();
                    }else{
                        //alert("ELIMINACION FALLIDA");
                        // dlg = $dialogs.error('ELIMINACION FALLIDA');
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

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.listaServicios = [];
    }

    $scope.agregar = function() {
        $location.path( '/servicios/agregar' );
    }

    $scope.buscar = function() {
        //var json = angular.toJson($scope.datos);
        ServiciosService.listarServicio($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.listaServicios = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
        $scope.limpiar();
    }

    $scope.modificar = function(index) {
        var element = $scope.listaServicios[index];
        $location.path( '/servicios/modificar').search({param: element, other:'ok'});
    }

    var init = function () {

    }

    init();
});

app.controller('agregarServiciosController', function($scope, $location, $rootScope, $dialogs, ServiciosService , ValoresService) {
    $scope.datos = {};

    $scope.listarGrabados= function(){
        var json =angular.toJson({"dominio":"IMPUESTOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaGrabados = response.data;
            }else{
                alert("Error al cargar los Impuestos");
            }
        })
    }

    $scope.listarEstados= function(){
        var json =angular.toJson({"dominio":"ESTADOS_PARAMETRICOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los Estados");
            }
        })
    }
    $scope.agregar = function() {
        ServiciosService.insertarServicios($scope.datos).then(function(response){

            if(response.status == 200){
                var resultado = response.data;
                if(resultado == "true"){
                    $location.path( '/servicios' );
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }

        })
    }

    $scope.cancelar = function(){
        $location.path( '/servicios' );
    }

    var init = function () {
        $scope.listarEstados();
        $scope.listarGrabados();
    }

    init();
});

app.controller('modificarServiciosController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, ServiciosService, $timeout) {

    $scope.datos = {};
    $scope.listarGrabados=[];
    $scope.listarEstados=[] ;

    $scope.listarGrabados= function(){
        var json =angular.toJson({"dominio":"IMPUESTOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaGrabados = response.data;
            }else{
                alert("Error al cargar los Impuestos");
            }
        })
    }

    $scope.listarEstados= function(){
        var json =angular.toJson({"dominio":"ESTADOS_PARAMETRICOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los Estados");
            }
        })
    }

    $scope.cancelar = function(){
        $location.path( '/servicios' );
    }

    $scope.modificar = function() {
        ServiciosService.modificarServicios($scope.datos).then(function(response){
            if(response.status == 200){
                var resultado = response.data;
                if(resultado == "true" ){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                    $scope.cancelar();
                } else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al modificar'},{key: false,back: 'static'});
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al modificar'},{key: false,back: 'static'});
            }
        })
    }

    var init = function () {
        var urlParams = $location.search().param;
        if(typeof urlParams.codigo == 'undefined'){
            $scope.cancelar();
        }
        $scope.listarEstados();
        $scope.listarGrabados();
        $timeout( function (){
            //$scope.datos =$rootScope.usuario;

            $scope.datos.codigo = urlParams.codigo;
            $scope.datos.descripcion = urlParams.descripcion;
            $scope.datos.precioUnitario = urlParams.precioUnitario;
            $scope.datos.grabado = urlParams.grabado;
            $scope.datos.estado = urlParams.estado;
            $scope.$apply();
        }, 1000)

    }

    init();

});



app.controller('circuitoController', function($scope, $location, $rootScope, $cookies, $dialogs,ServiciosService, ValoresService) {
    $scope.datos = {};
    $scope.lista = [];
    $scope.listaEstados = [];

    $scope.buscar = function() {
        ServiciosService.listarCircuito($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.lista = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }
    $scope.listarEstados = function(){
        var json =angular.toJson({"dominio":"ESTADOS_REPARACION"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.lista = [];
    }

    $scope.cotizar = function(index){
        var element = $scope.lista[index];
        $location.path( '/agregar-cotizacion').search({param: element, other:'ok'});
    }

    $scope.historial = function(index){
        var element = $scope.lista[index];
        $location.path( '/historial').search({param: element, other:'ok'});
    }

    $scope.reparar = function(index){
        var element = $scope.lista[index];
        $location.path( '/reparar').search({param: element, other:'ok'});
    }


    $scope.ingresarEquipo = function(){
        $location.path( '/ingresar-equipo');
    }

    $scope.modificarIngresarEquipos = function(index) {
        var element = $scope.lista[index];
        $location.path( '/ingresar-equipo/modificar').search({param: element, other:'ok'});
    }

    $scope.aprobar = function(index) {
        var datos = {
            secuencia: $scope.lista[index].secuencia,
            lugar: $scope.lista[index].lugar,
            responsable: $cookies.usuario
        }
        ServiciosService.aprobar(datos).then(function(response){
            if(response.status == 200){
                var resultado = response.data;
                if(resultado == "true" ){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Aprobacion existosa'},{key: false,back: 'static'});
                    $scope.buscar();
                } else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Aprobar'},{key: false,back: 'static'});
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Aprobar'},{key: false,back: 'static'});
            }
        })
    }

    $scope.rechazar = function(index) {
        var datos = {
            secuencia: $scope.lista[index].secuencia,
            lugar: $scope.lista[index].lugar,
            responsable: $cookies.usuario
        }
        ServiciosService.rechazar(datos).then(function(response){
            if(response.status == 200){
                var resultado = response.data;
                if(resultado == "true" ){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Rechazo existoso'},{key: false,back: 'static'});
                    $scope.buscar();
                } else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Rechazar'},{key: false,back: 'static'});
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Rechazar'},{key: false,back: 'static'});
            }
        })
    }

    $scope.anular = function(index){
        var datos = {
            secuencia: $scope.lista[index].secuencia,
            lugar: $scope.lista[index].lugar,
            responsable: $cookies.usuario
        }
        ServiciosService.anular(datos).then(function(response){
            if(response.status == 200 &&  response.data == "true"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Anulacion existosa'},{key: false,back: 'static'});
                $scope.buscar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Anular'},{key: false,back: 'static'});
            }
        })
    }

    var init = function () {
        $scope.listarEstados();
        $scope.buscar();
    }

    init();
});

app.controller('cotizacionController', function($scope, $location, $rootScope, $cookies, $dialogs, ServiciosService, ValoresService) {
    $scope.datos = {};
    $scope.listaCircuito = [];
    $scope.listaEstados = [];

    $scope.buscar = function() {
        ServiciosService.listarCotizacion($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.listaCircuito = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }
    $scope.listarEstados = function(){
        var json =angular.toJson({"dominio":"ESTADOS_REPARACION"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.listaCircuito = [];
    }

/*    $scope.cotizar = function(index){
        var element = $scope.lista[index];
        $location.path( '/agregar-cotizacion').search({param: element, other:'ok'});
    }*/

    var init = function () {
        $scope.listarEstados();
    }

    init();
});

app.service('RolesService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarJson = function(datos) {
        var obj = {
            "rol": datos.rol,
            "modulo": datos.modulo
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/roles?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarDistinct = function() {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/roles/distinct')
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminar = function(datos){
        var obj = {
            "rol": datos.rol,
            "modulo": datos.modulo
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/roles/delete?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(datos){
        var obj = {
            "rol": datos.rol,
            "modulo": datos.modulo
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/roles/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.modificar = function(datos){
        var obj = {
            "rol": datos.rol,
            "modulo": datos.modulo
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/roles/modificar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminarById = function(datos){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/roles/eliminar-id/'+datos)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


});

app.controller('rolesController', function($scope, $location, $rootScope, $cookies, $dialogs, RolesService, ValoresService) {
    $scope.datos = {};
    $scope.listaRoles= [];

    $scope.buscar = function() {
        RolesService.listarJson($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.listaRoles = response.data;
            }else{
                alert("FRACASO") ;
            }

        })
    }


    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.listaRoles= [];
        //$scope.listaRolesDominios= [];
        //$scope.listaRolesModulos=[];
    }

    $scope.remove = function(index) {
        var element = $scope.listaRoles[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            RolesService.eliminar(element).then(function(response){
                if(response.status == 200){
                    var resultado = response.data;
                    if(resultado == "true"){
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Eliminacion Exitosa'},{key: false,back: 'static'});
                        $scope.limpiar();
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al eliminar el dominio'},{key: false,back: 'static'});
                    }
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            });

        },function(){
            //$scope.name = 'You decided not to enter in your name, that makes me sad.';
        });


        //$scope.listaDominios.splice(index, 1);
    }

    $scope.listarRoles = function(){
        var json =angular.toJson({"dominio":"MODULOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaRolesModulos = response.data;
            }else{
                alert("Error al cargar los barrios");
            }
        })
    }

    $scope.listarRolesDominios = function(){
        RolesService.listarDistinct().then(function(response){
            if(response.status ==200){
                $scope.listaRolesDominios = response.data;
            }else{
                alert("Error al cargar los barrios");
            }
        })
    }


    $scope.agregar = function() {
        $location.path( '/roles/agregar' );
    }


    $scope.modificar = function() {
        $rootScope.rol = $scope.datos.rol;
        $location.path( '/roles/modificar' );
    }

    $scope.eliminarById = function(dato) {
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar, se eliminaran todos los permisos de este Rol?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            RolesService.eliminarById(dato).then(function(response){
                if(response.status == 200){
                    var resultado = response.data;
                    if(resultado == "true"){
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Eliminacion Exitosa'},{key: false,back: 'static'});
                        $scope.limpiar();
                        $scope.listarRolesDominios();
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al eliminar el dominio'},{key: false,back: 'static'});
                    }
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            });

        },function(){
        });
    }

    var init = function () {
        $scope.listarRoles();
        $scope.listarRolesDominios();
    }

    init();

});

app.controller('agregarRolesController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, RolesService) {
    $scope.datos = {};
    $scope.listaModulos=[];


    $scope.listarModulos = function(){
        var json =angular.toJson({"dominio":"MODULOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaModulos = response.data;
            }else{
                alert("Error al cargar los barrios");
            }
        })
    }

    $scope.cancelar = function(){
        $location.path( '/roles' );
    }

    $scope.agregar = function() {
        $scope.datos.modulo = [];
        var e = document.querySelectorAll('input[name=checkboxModulo]:checked');
        if(e.length<1){
            dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Debe ingresar al menos un modulo'},{key: false,back: 'static'});
        }else{
            for(i=0;i< e.length;i++){
                $scope.datos.modulo[$scope.datos.modulo.length] = e[i].defaultValue;
            }
            console.log( $scope.datos.modulo);
            RolesService.insertar($scope.datos).then(function(response){
                if(response.status == 200){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                    $scope.cancelar();
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
                }
            })
        }

    }

    var init = function () {

        $scope.listarModulos();
    }

    init();

});



app.controller('modificarRolesController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, RolesService) {
    $scope.datos = {};
    $scope.listaModulos=[];
    $scope.listaModulosRecibidos=[] ;
    $scope.listaTaller=[];


    $scope.listarModulos = function(){
        var json =angular.toJson({"dominio":"MODULOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaModulos = response.data;
            }else{
                alert("Error al cargar los barrios");
            }
        })
    }

    $scope.cancelar = function(){
        $location.path( '/roles' );
    }

    $scope.modificar = function() {
        $scope.datos.modulo = [];
        var e = document.querySelectorAll('input[name=checkboxModulo]:checked');
        if(e.length<1){
            dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Debe ingresar al menos un modulo'},{key: false,back: 'static'});
        }else{
            for(i=0;i< e.length;i++){
                $scope.datos.modulo[$scope.datos.modulo.length] = e[i].defaultValue;
            }
            console.log( $scope.datos.modulo);
            RolesService.modificar($scope.datos).then(function(response){
                if(response.status == 200){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                    $scope.cancelar();
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
                }
            })
        }

    }


    $scope.buscar = function(dato) {
        $scope.filtro = [];
        $scope.filtro.rol = dato
        RolesService.listarJson($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.listaModulosRecibidos = response.data;
                for(i=0;i<$scope.listaModulosRecibidos.length;i++){
                    $scope[$scope.listaModulosRecibidos[i].modulo]= true;
                }
            }else{
                alert("FRACASO") ;
            }
        })
    }

    var init = function () {
        $scope.datos.rol = $rootScope.rol;
        $scope.listarModulos();
        //$scope.PRUEBA = true;
        $scope.buscar($scope.datos.rol);
    }

    init();

});

//app.controller('usuariosController', function($scope, $location, $rootScope, $cookies, $dialogs, PersonasService) {
//    $scope.datos = {};
//    $scope.listaUsuarios=[];
//
//    $scope.agregar = function() {
//        $location.path( '/usuarios/agregar' );
//
//    }
//
//    $scope.limpiar = function() {
//        $scope.datos = {};
//        $scope.listaUsuarios = [];
//    }
//
//
//    $scope.buscar= function(){
//        var obj  = {
//            "ruc": $scope.datos.ruc,
//            "nombre": $scope.datos.nombre
//        };
//        var json = angular.toJson(obj);
//        PersonasService.listarComplex(json).then(function(response){
//            if(response.status == 200){
//                $scope.listaUsuarios = response.data;
//            }else{
//                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
//            }
//        })
//    }
//
//    var init = function () {
//
//    }
//
//    init();
//});

app.controller('pedidoCompraController', function($scope, $location, $rootScope, $cookies, $dialogs, ArticulosService, ValoresService, InventarioService, UtilService, ProveedoresService,ComprasService) {
    $scope.datos = {};
    $scope.datos2 = {};
    $scope.datosFijos= {};
    $scope.listaArticulos = [];
    $scope.inhabilitarAgregar =true;
    $scope.listraRegistroarticulos=[];
    $scope.articulo = {}
    $scope.listaProveedores = [];
    $scope.listaCondicionCompra = [];
    $scope.listaPlazos= [];

    $scope.cancelar = function() {
        $location.path( '/compras' );
    }

    $scope.listarPlazos= function(){
        var json =angular.toJson({"dominio":"PLAZOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaPlazos = response.data;
            }else{
                alert("Error al cargar los Impuestos");
            }
        })
    }

    $scope.listarGrabados= function(){
        var json =angular.toJson({"dominio":"IMPUESTOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaGrabados = response.data;
            }else{
                alert("Error al cargar los Impuestos");
            }
        })
    }

    $scope.listarCondicionCompra= function(){
        var json =angular.toJson({"dominio":"CONDICION_COMPRA"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaCondicionCompra = response.data;
            }else{
                alert("Error al cargar los Impuestos");
            }
        })
    }

    $scope.listarProveedores= function(){
        var json ="";
        ProveedoresService.listarComplex(json).then(function(response){
            if(response.status ==200){
                $scope.listaProveedores = response.data;
            }else{
                alert("Error al cargar los Impuestos");
            }
        })
    }

    $scope.secuencia = function(){
        UtilService.secuencia("orden_compra_seq").then(function(response){
            if(response.status == 200){
                $scope.datosFijos.id = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })

    };

    $scope.listarArticulos = function() {
        var json= "{}";
        ArticulosService.listarJson(json).then(function(response){
            if(response.status == 200){
                $scope.listaArticulos = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.limpiar = function(){
        $scope.datos = {};
        $scope.datos2 = {};
        $scope.articuloValido  = false;
    }

    $scope.limpiarSimple = function(){
        $scope.datos = {};
        $scope.articuloValido  = false;
    }

    $scope.agregar = function(){

        var obj = {
            "id": $scope.datosFijos.id,
            "codigoArticulo": $scope.datos.codigo,
            "codigoBarra": $scope.datos.codigoBarra,
            "descripcion": $scope.datos.descripcion,
            "cantidad": $scope.datos2.cantidad,
            "precio": $scope.datos2.precio,
            "iva": $scope.datos2.iva
        }
        $scope.listraRegistroarticulos.push(obj);
        $scope.limpiarSimple();
    }

    $scope.buscarArticulo = function(){
        console.log('buscare');
        if($scope.datos.descripcion || $scope.datos.codigo || $scope.datos.codigoBarra){
            var json = angular.toJson($scope.datos);
            console.log(json);
            ArticulosService.listarJson(json).then(function(response){
                if(response.status == 200){
                    if(response.data.length == 1){
                        $scope.articulo =   response.data[0];
                        $scope.datos.codigo = $scope.articulo.codigo;
                        $scope.datos.codigoBarra = $scope.articulo.codigoBarra;
                        $scope.datos.descripcion = $scope.articulo.descripcion;
                        $scope.articuloValido  = true;
                        $scope.inhabilitarAgregar =false;
                    }else{
                        $scope.articuloValido  = false;
                        $scope.inhabilitarAgregar =true;
                    }

                }else{
                    $scope.articuloValido  = false;
                    $scope.inhabilitarAgregar =true;
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            })
            console.log('lo encontre');

        }else  {
            $scope.articuloValido  = false;
            $scope.inhabilitarAgregar =true;
            console.log('me da pereza');

        }

    }

    $scope.listarTaller = function(){
        var json =angular.toJson({"dominio":"TALLER_INTERNO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTaller = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.remove= function(index){
        $scope.listraRegistroarticulos.splice(index, 1);
    }

    $scope.guardar = function(){
        var cabecera = {
            "codigo": $scope.datosFijos.id,
            "sucursal": $scope.datos2.sucursal,
            "proveedor": $scope.datos2.proveedor,
            "condicionCompra": $scope.datos2.condicionCompra,
            "plazos": $scope.datos2.plazos,
            "fechaEntrega": $scope.datos2.fechaEntrega,
            "usuario":  $cookies.usuario
        }
        for(i=0;i<$scope.listraRegistroarticulos.length;i++){
            $scope.listraRegistroarticulos[i].codigo = $scope.listraRegistroarticulos[i].id;
            delete  $scope.listraRegistroarticulos[i].id;
            delete  $scope.listraRegistroarticulos[i].codigoBarra;
            delete  $scope.listraRegistroarticulos[i].descripcion;
            delete  $scope.listraRegistroarticulos[i].sucursal;
        }
        var param = {
            "cabecera": cabecera,
            "detalle": $scope.listraRegistroarticulos
        }
        ComprasService.insertar(param).then(function(response){
            if(response.status == 200){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.listraRegistroarticulos=[];
                $scope.limpiar();
                $location.path( '/compras' );
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    var init = function () {
       $scope.listarArticulos();
       $scope.listarTaller();
       $scope.secuencia();
       $scope.listarGrabados();
       $scope.listarProveedores();
       $scope.listarCondicionCompra();
       $scope.listarPlazos();
    }

    init();
});


app.controller('usuariosController', function($scope, $location, $rootScope, $cookies, $dialogs, UsuariosService) {
    $scope.datos = {};
    $scope.listaUsuarios=[];

    $scope.agregar = function() {
        $location.path( '/usuarios/agregar' );

    }

    $scope.modificar = function(index) {
        $rootScope.usuario = $scope.listaUsuarios[index];
        $location.path( '/usuarios/modificar' );

    }

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.listaUsuarios = [];
    }


    $scope.buscar= function(){
        var obj  = {
            "ruc": $scope.datos.ruc,
            "nombre": $scope.datos.nombre
        };
        var json = angular.toJson(obj);
        UsuariosService.listarComplex(json).then(function(response){
            if(response.status == 200){
                $scope.listaUsuarios = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    var init = function () {

    }

    init();
});

app.service('UsuariosService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarJson = function(json) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuarios/'+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminar = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuarios/delete/'+id)
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
            "celular1": datos.celular,
            //Propio de usuario
            "usuario": datos.usuario,
            "rol": datos.rol
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuarios/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarComplex = function(json) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuarios/complex/'+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


});


app.controller('agregarUsuariosController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, UsuariosService, RolesService) {
    $scope.datos = {};
    $scope.listaPaises= [];
    $scope.listaCiudades= [];
    $scope.listaBarrios= [];
    $scope.listaSexos= [];
    $scope.listaNacionalidades =[];
    $scope.listaRoles = [];

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
        $location.path( '/usuarios' );
    }

    $scope.agregar = function() {
        UsuariosService.insertar($scope.datos).then(function(response){
            if(response.status == 200){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarRoles = function(){
        RolesService.listarDistinct().then(function(response){
            if(response.status ==200){
                $scope.listaRoles = response.data;
            }else{
                alert("Error al cargar los barrios");
            }
        })
    }

    var init = function(){
        $scope.listarPaises();
        $scope.listarCiudades();
        $scope.listarBarrios();
        $scope.listarSexos();
        $scope.listarNacionalidades();
        $scope.listarRoles();
    }

    init();
});

app.controller('modificarUsuariosController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, UsuariosService, RolesService, $timeout) {
    $scope.datos = {};

    $scope.listaCiudades= [];
    $scope.listaBarrios= [];
    $scope.listaSexos= [];
    $scope.listaNacionalidades =[];
    $scope.listaRoles = [];
    $scope.usuario= {};

    $scope.listarPaises = function(){
        var json = angular.toJson({"dominio":"PAISES"});
        ValoresService.listarJson(json).then(function(response){

            if(response.status == 200){
                //$scope.listaPaises= [];
                $scope.listaPaises = response.data;
                //$rootScope.usuario

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
                //$scope.datos.ciudad =$rootScope.usuario.ciudad;
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
                //$scope.datos.barrio =$rootScope.usuario.barrio
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
               // $scope.datos.sexo =$rootScope.usuario.sexo;
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
               // $scope.datos.nacionalidad =$rootScope.usuario.nacionalidad;
            }else{
                alert("Error al cargar las Nacionalidades");
            }
        })
    }

    $scope.cancelar = function(){
        $location.path( '/usuarios' );
    }

    $scope.modificar = function() {
        UsuariosService.modificar($scope.datos).then(function(response){
            if(response.status == 200){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarRoles = function(){
        RolesService.listarDistinct().then(function(response){
            if(response.status ==200){
                $scope.listaRoles = response.data;
                //$scope.datos.rol =   $rootScope.usuario.rol;
            }else{
                alert("Error al cargar los barrios");
            }
        })
    }

    $scope.cargarPersona = function(){
        var obj  = {
            "ruc": $scope.usuario.cedula,
            "nombre": $scope.usuario.nombre
        };
        var json = angular.toJson(obj);
        UsuariosService.listarComplex(json).then(function(response){
            if(response.status == 200){
                $scope.datos = response.data[0];
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    var init = function(){


        $scope.listarPaises();
        $scope.listarCiudades();
        $scope.listarBarrios();
        $scope.listarSexos();
        $scope.listarNacionalidades();
        $scope.listarRoles();

        $timeout( function (){
         $scope.datos =$rootScope.usuario;
            $scope.$apply();
        }, 1000)


    }

    init();
});


app.service('InventarioService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.insertar = function(listaParam){
        for(i =0; i<listaParam.length; i++){
            delete listaParam[i].codigoBarra;
        }
        var obj={
            "lista": listaParam
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/inventario/registro-inventario/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.modificar = function(datos){
        var obj = {
            "rol": datos.rol,
            "modulo": datos.modulo
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/roles/modificar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarInventario = function(json) {
        var jsonObj = angular.toJson(json);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/inventario/listar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


    this.registrarAjuste = function(obj){
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/inventario/registrar-ajuste?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});

app.controller('inventarioController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, InventarioService, ArticulosService) {
    $scope.datos = {};
    $scope.listaTaller=[];
    $scope.listaInventario=[];
    $scope.listaArticulos = [];

    $scope.limpiar= function(){
        $scope.datos = {};
        $scope.listaInventario=[];
    }

    $scope.listarTaller = function(){
        var json =angular.toJson({"dominio":"TALLER_INTERNO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTaller = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.buscar= function(){
        InventarioService.listarInventario($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.listaInventario = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarArticulos = function() {
        var json= "{}";
        ArticulosService.listarJson(json).then(function(response){
            if(response.status == 200){
                $scope.listaArticulos = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    var init = function () {
        $scope.listarTaller();
        $scope.listarArticulos();
    }

    init();
});

app.service('UtilService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.secuencia = function(secuencia) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/util/secuencia/'+secuencia)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

//    this.secuencia = function() {
//        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/inventario/secuencia-registro-inventario')
//            .then(function (response) {
//                return response;
//            });
//        return myResponseData;
//    }
});

app.service('ComprasService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.insertar = function(obj) {
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/compras/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


    this.listarJson = function(datos) {
        var json = angular.toJson(datos);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/compras/listar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarDetalle = function(codigo) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/compras/listar-detalle/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


    this.eliminar = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/compras/delete/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertarRegistroCompra = function(listaParam){
        var json = angular.toJson(listaParam);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/compras/registro-compra/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


});


app.controller('comprasController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, InventarioService, ArticulosService,ComprasService) {
    $scope.datos = {};
    $scope.listaTaller=[];
    $scope.listaEstados=[];
    $scope.listaCompras = [];

    $scope.limpiar= function(){
        $scope.datos = {};
        $scope.listaCompras=[];
    }

    $scope.listarTaller = function(){
        var json =angular.toJson({"dominio":"TALLER_INTERNO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTaller = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.listarEstados = function(){
        var json =angular.toJson({"dominio":"ESTADOS_COMPRA"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;

            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.buscar= function(){
        ComprasService.listarJson($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.listaCompras = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.remove = function(index) {
        var element = $scope.listaCompras[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea anular?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            //alert(resultado);

            ComprasService.eliminar(element.codigo).then(function(response){
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
        });
    }



    $scope.recepcion = function(index){
        $rootScope.compras =   $scope.listaCompras[index];
        $location.path( '/recepcion-compra');
    }

    $scope.agregar = function(index){
        $location.path( '/pedido-compra');
    }

    var init = function () {
        $scope.listarTaller();
        $scope.listarEstados();
        $scope.datos.estado = 'ACTIVO';
        $scope.buscar();
    }

    init();
});

app.controller('recepcionCompraController', function($scope, $location, $rootScope, $cookies, $dialogs, ComprasService) {
    $scope.datos = {};
    $scope.lista= [];

    $scope.listarDetalle = function(){
        ComprasService.listarDetalle($scope.datos2.codigo).then(function(response){
            if(response.status ==200){
                $scope.lista = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.guardar = function(){
        var cabecera = {
            "id": $scope.datos2.codigo,
            "sucursal": $scope.datos2.sucursal,
            "proveedor": $scope.datos2.proveedor,
            "condicionCompra": $scope.datos2.condicionCompra,
            "plazo": $scope.datos2.plazo,
            "fechaEntrega": $scope.datos2.fechaEntregaReal,
            "usuario":  $cookies.usuario
        }
        for(i=0;i<$scope.lista.length;i++){
            $scope.lista[i].id = $scope.lista[i].codigo;
            delete $scope.lista[i].codigo;
            delete  $scope.lista[i].descripcion;
        }
        var param = {
            "cabecera": cabecera,
            "detalle": $scope.lista
        }
        ComprasService.insertarRegistroCompra(param).then(function(response){
            if(response.status == 200){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })

    }

    $scope.cancelar = function() {
        $location.path( '/compras' );

    }

    function formatMesDia (param){
        if(param<10){
            return '0'+param;
        }else{
            return param;
        }
    }

    var init = function(){
        $scope.datos2 = $rootScope.compras;
        if($scope.datos2.plazos == null || $scope.datos2.plazos == 'null'){
            $scope.datos2.plazo = '';
        }else{
            $scope.datos2.plazo = $scope.datos2.plazos;
        }
                              //TODO
        var fecha =  new Date();
        var fechaformateada =  formatMesDia(fecha.getDate())+'/'+formatMesDia(fecha.getMonth())+'/'+fecha.getFullYear();
        $scope.datos2.fechaEntrega =  fechaformateada;
        $scope.datos2.fechaEntregaReal = +fecha.getFullYear()+'-'+formatMesDia(fecha.getMonth())+'-'+formatMesDia(fecha.getDate());
        $scope.listarDetalle();
    }

    init();
});

app.directive('editableTd', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.css("cursor", "pointer");
            element.attr('contenteditable', 'true'); // Referencia: Inciso 1
            element.bind('blur keyup change', function() { // Referencia: Inciso 2
                scope.lista[attrs.row][attrs.field] = element.text();
            });
            element.bind('click', function() { // Referencia: Inciso 3
                document.execCommand('selectAll', false, null)
            });
        }
    };
}]);

app.controller('AdminRecepcionCompraController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, InventarioService, ArticulosService,ComprasService) {
    $scope.datos = {};
    $scope.listaTaller=[];
    //$scope.listaInventario=[];
    $scope.listaCompras = [];

    $scope.limpiar= function(){
        $scope.datos = {};
        $scope.listaCompras=[];
    }

    $scope.listarTaller = function(){
        var json =angular.toJson({"dominio":"TALLER_INTERNO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTaller = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.buscar= function(){
        $scope.datos.estado = "ACTIVO";
        ComprasService.listarJson($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.listaCompras = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.remove = function(index) {
        var element = $scope.listaCompras[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea anular?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            //alert(resultado);

            ComprasService.eliminar(element.codigo).then(function(response){
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
        });
    }

    $scope.recepcion = function(index){
        $rootScope.compras =   $scope.listaCompras[index];
        $location.path( '/recepcion-compra');
    }

    var init = function () {
        delete $rootScope.compras;
        $scope.buscar();
    }

    init();
});


app.controller('ajusteInventarioController', function($scope, $location, $rootScope, $cookies, $dialogs, ArticulosService, ValoresService, InventarioService, UsuariosService) {
    $scope.datos = {};
    $scope.lista = [];
    $scope.listaUsuarios=[];

    $scope.listarUsuarios= function(){
        var json = angular.toJson({});
        UsuariosService.listarComplex(json).then(function(response){
            if(response.status == 200){
                $scope.listaUsuarios = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.buscarArticulo = function(){
        console.log('buscare');
        if($scope.datos.descripcion || $scope.datos.codigo || $scope.datos.codigoBarra){
            var json = angular.toJson($scope.datos);
            console.log(json);
            ArticulosService.listarJson(json).then(function(response){
                if(response.status == 200){
                    if(response.data.length == 1){
                        $scope.articulo =   response.data[0];
                        $scope.datos.codigo = $scope.articulo.codigo;
                        $scope.datos.codigoBarra = $scope.articulo.codigoBarra;
                        $scope.datos.descripcion = $scope.articulo.descripcion;
                        $scope.articuloValido  = true;
                        $scope.inhabilitarAgregar =false;
                    }else{
                        $scope.articuloValido  = false;
                        $scope.inhabilitarAgregar =true;
                    }

                }else{
                    $scope.articuloValido  = false;
                    $scope.inhabilitarAgregar =true;
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            })
            console.log('lo encontre');

        }else  {
            $scope.articuloValido  = false;
            $scope.inhabilitarAgregar =true;
            console.log('me da pereza');

        }

    }

    $scope.limpiar = function(){
        $scope.datos = {};
        $scope.datos2 = {};
        $scope.articuloValido  = false;
    }

    $scope.limpiarSimple = function(){
        $scope.datos = {};
        $scope.articuloValido  = false;
    }

    $scope.listarTaller = function(){
        var json =angular.toJson({"dominio":"TALLER_INTERNO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTaller = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.agregar = function(){

        var obj = {
            "codigo": $scope.datos.codigo,
            "descripcion": $scope.datos.descripcion,
            "cantidad": $scope.datos.cantidad,
            "sucursal": $scope.datos.sucursal,
            "autorizante": $scope.datos2.autorizante,
            "documento": $scope.datos2.documento
        }
        $scope.lista.push(obj);
        $scope.limpiarSimple();
    }

    $scope.remove= function(index){
        $scope.lista.splice(index, 1);
    }

    $scope.guardar = function(){
        var lista = angular.copy($scope.lista);

        var param = {
            "lista": lista
        }
        for(i=0;i<$scope.lista.length;i++){
            delete  lista[i].descripcion;
            lista[i].usuario = $cookies.usuario;
        }
        InventarioService.registrarAjuste(param).then(function(response){
            if(response.status == 200){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }


    $scope.listarArticulos = function() {
        var json= "{}";
        ArticulosService.listarJson(json).then(function(response){
            if(response.status == 200){
                $scope.listaArticulos = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.cancelar= function(){
        $location.path( '/inventario' );
    }

    var init = function () {
        $scope.listarTaller();
        $scope.listarArticulos();
        $scope.listarUsuarios();
    }

    init();
});

app.service('CajasService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.eliminar = function(codigo){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/cajas/delete/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listar = function(datos){
        var obj = {
            "codigo":datos.codigo,
            "estado":datos.estado,
            "numero":datos.numero,
            "sucursal":datos.sucursal
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/cajas/listar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(datos){
        var json = angular.toJson(datos);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/cajas/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.obtenerSucursalTimbrado = function(usuario){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/cajas/sucursal-timbrado?paramJson='+usuario)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


});                                            1



app.controller('cajasController', function($scope, $location, $rootScope, $cookies, $dialogs,ValoresService, CajasService) {
    $scope.datos = {};
    $scope.lista= []

    $scope.limpiar = function(){
        $scope.datos = {};
        $scope.lista  = [];
    }

    $scope.listarTaller = function(){
        var json =angular.toJson({"dominio":"TALLER_INTERNO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTaller = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.listarEstados = function(){
        var json =angular.toJson({"dominio":"ESTADOS_CAJA"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.buscar= function(){
        CajasService.listar($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.lista = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.remove = function(index) {
        var element = $scope.lista[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            CajasService.eliminar(element.codigo).then(function(response){
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

        });
    }


    $scope.agregar = function() {
        $location.path( '/cajas/agregar' );

    }

    var init = function () {
        $scope.listarTaller();
        $scope.listarEstados();
    }

    init();
});

app.controller('agregarCajasController', function($scope,    $location, $rootScope, $cookies, $dialogs, CajasService, ValoresService) {
    $scope.datos = {};



    $scope.agregar = function() {
        CajasService.insertar($scope.datos).then(function(response){
            if(response.status == 200 && response.data=="true"){
                $scope.cancelar();
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.cancelar = function(){
        $location.path( '/cajas' );
    }

    $scope.listarTaller = function(){
        var json =angular.toJson({"dominio":"TALLER_INTERNO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTaller = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.listarEstados = function(){
        var json =angular.toJson({"dominio":"ESTADOS_CAJA"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    var init = function () {
        $scope.listarTaller();
        $scope.listarEstados();
    }

    init();
});


app.controller('agregarCajasMovimientosController', function($scope, $location, $rootScope, $cookies, $dialogs, UsuariosService, CajasMovimientosService, CajasService) {
    $scope.datos = {};
    $scope.datos.estado = 'ABIERTO';
    $scope.datos.montoApertura = 0;

    $scope.limpiar = function(){
        $scope.datos = {};
        $scope.datos.estado = 'ABIERTO';
    }


    $scope.cancelar = function(){
        $location.path( '/cajas-movimientos' );
    }

    $scope.listarUsuarios= function(){
        var json = angular.toJson({});
        UsuariosService.listarComplex(json).then(function(response){
            if(response.status == 200){
                $scope.listaUsuarios = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }


    $scope.listarCajas= function(){
        var json = {
            "estado": "HABILITADO"
        }
        CajasService.listar(json).then(function(response){
            if(response.status == 200){
                $scope.listaCajas = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.agregar= function(){
        $scope.datos.usuarioCreacion =$cookies.usuario;
        CajasMovimientosService.insertar($scope.datos).then(function(response){
            if(response.status == 200 && response.data=="true"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    var init = function () {
        $scope.listarUsuarios();
        $scope.listarCajas();
    }

    init();
});


app.service('VentasService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarStockPorSucursal = function(obj) {
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/ventas-stock-por-sucursal?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.registrarVenta = function(obj){
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/registrar-venta?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarJson = function(json) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/listar-venta?paramJson='+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminarVenta = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/delete/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


    this.listarDetalleFactura = function(id) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/listar-detalle-factura/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


    this.registrarPago = function(obj){
        console.log(obj);
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/registrar-pago?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.anularFactura = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/anular-factura/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.editarFactura = function(obj){
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/ventas/editar-factura?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarDetalleAprovadoReparacion = function(secuencia) {

        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/listar-detalle-aprovado-reparacion/'+secuencia)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


});




app.controller('ventasController', function($scope, $location, $rootScope, $cookies, $dialogs, UtilService, VentasService, ValoresService) {
    $scope.datos = {};

    $scope.agregar = function() {
        $location.path( '/ventas/registrar-venta' );
    }

    $scope.editar = function(index) {
        var element = $scope.lista[index];
        $location.path( '/ventas/editar-venta').search({param: element, other:'ok'});
    }

    $scope.notaCredito = function(index) {
        var element = $scope.lista[index];
        $location.path( '/ventas/nota-credito').search({param: element, other:'ok'});
    }

    $scope.limpiar = function(){
        $scope.datos= {};
        $scope.lista = [];
    }

    $scope.buscar=function(){
        var json = angular.toJson($scope.datos);
        var encoJson = encodeURIComponent(json);
        VentasService.listarJson(encoJson).then(function(response){
            if(response.status == 200){
                $scope.lista = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.remove = function(index) {
        var element = $scope.lista[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            VentasService.eliminarVenta(element.numeroFactura).then(function(response){
                if(response.status == 200){
                    var resultado = response.data.respuesta;
                    if(resultado == "ok"){
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Eliminacion Exitosa'},{key: false,back: 'static'});
                        $scope.limpiar();
                        $scope.buscar();
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al eliminar'},{key: false,back: 'static'});
                    }
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            });
        },function(){
        });
    }

    $scope.anularFactura = function(index) {
        var element = $scope.lista[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea anular?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            VentasService.anularFactura(element.numeroFactura).then(function(response){
                if(response.status == 200){
                    var resultado = response.data.respuesta;
                    if(resultado == "ok"){
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Anulacion Exitosa'},{key: false,back: 'static'});
                        $scope.limpiar();
                        $scope.buscar();
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Anular'},{key: false,back: 'static'});
                    }
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            });
        },function(){
        });
    }

    $scope.listarEstados = function(){
        var json =angular.toJson({"dominio":"ESTADOS_FACTURA"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.listarSucursales = function(){
        var json =angular.toJson({"dominio":"TALLER_INTERNO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTaller = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.facturar = function(index){
        $rootScope.venta = $scope.lista[index];
        $location.path( '/ventas/facturar' );
    }

    var init= function(){
       $scope.listarEstados();
       $scope.listarSucursales();
    }

    init();

});

app.controller('FacturarController', function($scope, $location, $rootScope, $cookies, $dialogs,UtilService,CajasService,ClientesService,VentasService ) {
    $scope.datos = {};
    $scope.producto = {}
    $scope.lista = [] ;

//    $scope.secuencia = function(){
//        UtilService.secuencia("factura_seq").then(function(response){
//            if(response.status == 200){
//                var aux  = response.data;
//                $scope.datos.numeroFactura = pad(aux, 8);
//            }else{
//                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
//            }
//        })
//    };

    $scope.listarDetalleFactura = function(id){
        VentasService.listarDetalleFactura(id).then(function(response){
            if(response.status == 200){
                $scope.lista =response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    $scope.obtenerSucursalTimbrado = function(usuario){
        CajasService.obtenerSucursalTimbrado(usuario).then(function(response){
            if(response.status == 200){
                if(typeof response.data.caja != 'undefined'){
                    var aux  = response.data;
                    $scope.datos.timbrado = response.data.timbrado;
                    $scope.datos.sucursal = response.data.sucursal;
                    $scope.datos.nroCaja = response.data.caja;
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'El usuario '+usuario+' no esta asignado a una caja'},{key: false,back: 'static'});
                    $scope.cancelar();
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    $scope.cancelar = function() {
        $location.path( '/ventas' );
    }

    $scope.buscarClientes= function(){
        var obj = {
            ruc: $scope.datos.ruc,
            nombre: (typeof $scope.datos.nombre== 'undefined')? null: $scope.datos.nombre.replace(" ", "%")
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        ClientesService.listarComplex(encoJson).then(function(response){
            if(response.status == 200){
                if(response.data.length>1){
                    $scope.listaClientes = response.data;
                }else if(response.data.length==1){
                    $scope.datos.nombre = response.data[0].nombre +" "+ response.data[0].apellido;
                    $scope.datos.ruc =  nvl(response.data[0].ruc, response.data[0].cedula);
                    $scope.datos.telefono = nvl( response.data[0].telefono, response.data[0].celular1);
                    $scope.datos.codigoPersona = response.data[0].codigo;
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    function formatMesDia (param){
        if(param<10){
            return '0'+param;
        }else{
            return param;
        }
    }

    function nvl(valor1, valor2){
        if(valor1!=null && typeof valor1 != 'undefined' && valor1!='' && valor1!= 'null')
            return valor1;
        return valor2
    }

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    $scope.habilitarCuotas = function(condicion){
        if(condicion=='contado'){
            $scope.mostrarCutas= false;
        }else{
            $scope.mostrarCutas= true;
        }
    }

    $scope.procesar= function(){
        $rootScope.montoTotal =0;
        for(i=0;i<$scope.lista.length;i++){
            $rootScope.montoTotal=$rootScope.montoTotal+$scope.lista[i].total;
        }
        $rootScope.pago={};
        $rootScope.pago.timbrado=$scope.datos.timbrado;
        $rootScope.pago.caja=$scope.datos.nroCaja;
        $rootScope.pago.cajero=$scope.datos.usuario;
        $rootScope.pago.sucursal=$scope.datos.sucursal;
        $rootScope.pago.codigoPersona= $scope.datos.codigoPersona;
        $location.path( '/ventas/pagar-factura' );
    }

    var init = function(){
        $scope.datos.nombre= $rootScope.venta.cliente;
        $scope.datos.ruc= $rootScope.venta.ruc;
        $scope.datos.telefono= $rootScope.venta.telefono;
        $scope.datos.numeroFactura=$rootScope.venta.numeroFactura;
        $scope.datos.codigoPersona=$rootScope.venta.codigoPersona;

        var fecha =   new Date();
        var fechaformateada =  formatMesDia(fecha.getDate())+'/'+formatMesDia(fecha.getMonth())+'/'+fecha.getFullYear();
        $scope.datos.fecha =  fechaformateada;
        $scope.datos.usuario =  $cookies.usuario;
        $scope.obtenerSucursalTimbrado($scope.datos.usuario);
        //$scope.secuencia();
        //$scope.buscarClientes();
        //$scope.buscarArticuloExistente();
        //$scope.buscarCabeceraDetalle();
        $scope.listarDetalleFactura($scope.datos.numeroFactura);
    }

    init();
});

app.controller('saldoClienteController', function($scope, $location, $rootScope, $cookies, $dialogs, ClientesService, SaldoClienteService, ValoresService) {
    $scope.datos = {};

    $scope.limpiar = function(){
        $scope.datos = {}
        $scope.lista = [];
    }

    $scope.buscarClientes= function(){
        var json = angular.toJson({});
        var encoJson = encodeURIComponent(json);
        ClientesService.listarComplex(encoJson).then(function(response){
            if(response.status == 200){
                $scope.listaClientes = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.changeCliente = function(){
        if($scope.datos.nombre!=null && $scope.datos.nombre!="" && typeof $scope.datos.nombre!= 'undefined'){
           for(i=0;i<$scope.listaClientes.length;i++){
               if($scope.datos.nombre ==  $scope.listaClientes[i].nombre+" "+$scope.listaClientes[i].apellido){
                   $scope.datos.codigo =$scope.listaClientes[i].codigo;
               }
           }
        }else{
            $scope.datos.codigo = null;
        }
    }

    $scope.buscar= function(){
        var obj = {
            estado: $scope.datos.estado,
            cliente: $scope.datos.nombre
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        SaldoClienteService.listar(encoJson).then(function(response){
            if(response.status == 200){
                 $scope.lista = response.data;
                if($scope.datos.codigo){
                    $scope.datos.total = 0;
                    for(i=0;i<$scope.lista.length;i++){
                        if($scope.lista[i].estado == 'PENDIENTE'){
                            $scope.datos.total = $scope.datos.total + $scope.lista[i].monto;
                        }
                    }
                }else{
                    $scope.datos.total=null;
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarEstados = function(){
        var json =angular.toJson({"dominio":"ESTADOS_FONDO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    var init = function(){
        $scope.buscarClientes();
        $scope.listarEstados();
    }

    init();
});

app.service('SaldoClienteService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listar = function(json) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/saldo-cliente/listar?paramJson='+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});


app.controller('usuarioSucursalController', function($scope, $location, $rootScope, $cookies, $dialogs, UsuarioSucursalService) {
    $scope.datos = {};

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.lista = [];
    }

    $scope.agregar = function() {
        $location.path( '/usuario-sucursal/agregar' );

    }

    $scope.buscar = function() {
        UsuarioSucursalService.listar($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.lista = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }
    $scope.lista = [];

    $scope.remove = function(index) {
        var element = $scope.lista[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,
            {msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            UsuarioSucursalService.eliminarById(element.usuario).then(function(response){

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


        //$scope.listaDominios.splice(index, 1);
    }

    var init = function () {

    }

    init();
});

app.controller('agregarUsuarioSucursalController', function($scope, $location,UsuarioSucursalService , ValoresService, UsuariosService, $rootScope, $dialogs) {
    $scope.datos = {};
    $scope.listaTaller=[];
    $scope.listaUsuarios=[];

    $scope.listarTaller = function(){
        var json =angular.toJson({"dominio":"TALLER_INTERNO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTaller = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }
    $scope.listarUsuarios= function(){
        var json = angular.toJson({});
        UsuariosService.listarComplex(json).then(function(response){
            if(response.status == 200){
                $scope.listaUsuarios = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }


    $scope.agregar = function() {
        UsuarioSucursalService.insertar($scope.datos.usuario, $scope.datos.sucursal).then(function(response){

            if(response.status == 200){
                $location.path( '/usuario-sucursal' );
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }

        })
    }

    $scope.cancelar = function(){
        $location.path( '/usuario-sucursal' );
    }

    var init = function () {
        $scope.listarTaller();
        $scope.listarUsuarios();
    }

    init();
});

app.service('UsuarioSucursalService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.obtener = function(usuario) {
        var obj={
            "usuario":usuario
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuarios/usuario-sucursal?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listar = function(datos) {
        var obj={
            "usuario":datos.usuario,
            "sucursal":datos.sucursal
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuario-sucursal?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminarById = function(usuario){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuario-sucursal/eliminar-id/'+usuario)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(usuario, sucursal){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuario-sucursal/insertar/'+usuario+'/'+sucursal)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


});


app.controller('pagarFacturaController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, VentasService) {
    $scope.datos = {};
    $scope.lista = [];
    $scope.inhabilitarCredito = true;
    $scope.inhabilitarTC = true;

    $scope.listarCondicionesCompra = function(){
        var json =angular.toJson({"dominio":"CONDICION_PAGO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaCondicionesCompra = response.data;
            }else{
                alert("Error al cargar la Condicion de Pago");
            }
        })
    }

    $scope.changeCondicionesCompra= function(){
        $scope.limpiar();
        $scope.listaMediosPago = [];
        if($scope.datos.condicionCompra == 'CONTADO'){
            $scope.inhabilitarCredito = true;
            $scope.listarMediosPagoContado();
        }else if($scope.datos.condicionCompra == 'CREDITO'){
            $scope.inhabilitarCredito = false;
            $scope.listarMediosPagoCredito();
        }else{
            $scope.inhabilitarCredito = true;
            $scope.datos.plazo = '';
            $scope.datos.cantidadCuotas = '';
            $scope.datos.medioPago= '';
        }
    }

    $scope.listarMediosPagoContado = function(){
        var json =angular.toJson({"dominio":"MEDIOS_PAGO_CONTADO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaMediosPago = response.data;
            }else{
                alert("Error al cargar los Medios de Pago");
            }
        })
    }

    $scope.listarMediosPagoCredito = function(){
        var json =angular.toJson({"dominio":"MEDIOS_PAGO_CREDITO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaMediosPago = response.data;
            }else{
                alert("Error al cargar los Medios de Pago");
            }
        })
    }

    $scope.listarMarcaTarjeta = function(){
        var json =angular.toJson({"dominio":"MARCA_TARJETA"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaMarcaTarjeta = response.data;
            }else{
                alert("Error al cargar los Medios de Pago");
            }
        })
    }

    $scope.changeMedioPago= function(){
        if($scope.datos.medioPago == 'TARJETA DE CREDITO'){
            $scope.inhabilitarTC = false;
        }else{
            $scope.inhabilitarTC = true;
            $scope.datos.marcaTarjeta ='';
        }
    }

    $scope.atras= function(){
        $location.path( '/ventas/facturar' );
    }

    $scope.cancelar = function(){
        $location.path( '/ventas' );
    }

    $scope.limpiar = function(){
        $scope.datos.medioPago=''
        $scope.datos.marcaTarjeta=''
        $scope.datos.importe=''
        $scope.datos.plazo = '';
        $scope.datos.cantidadCuotas = '';
        $scope.inhabilitarTC = true;
        $scope.lista = [];
        $scope.inhabilitarCredito = true;
        $scope.inhabilitarTC = true;
    }


    $scope.agregar = function(){
        var obj = {
            medioPago:$scope.datos.medioPago,
            marcaTarjeta: $scope.datos.marcaTarjeta,
            importe:$scope.datos.importe
        }
        $scope.lista.push(obj);
        $scope.datos.medioPago='';
        $scope.datos.marcaTarjeta='';
        $scope.pagadoTotal = parseInt($scope.pagadoTotal)+parseInt($scope.datos.importe);
        $scope.datos.importe='';
        $scope.datos.cambio =  parseInt($scope.pagadoTotal) -parseInt($scope.datos.montoTotal);
    }

    $scope.guardar = function(){
        var listaFormaPago
        var obj = {
            numeroFactura: $scope.datos.numeroFactura,
            condicionCompra: $scope.datos.condicionCompra,
            cuotas :$scope.datos.cantidadCuotas,
            plazo: $scope.datos.plazo,
            timbrado:  $scope.datos.timbrado,
            caja:  $scope.datos.caja,
            cajero: $scope.datos.cajero,
            sucursal:  $scope.datos.sucursal,
            monto: $rootScope.montoTotal,
            cliente: $rootScope.pago.codigoPersona
        }
        obj.listaFormaPago =  angular.copy($scope.lista);

        console.log(obj);


        VentasService.registrarPago(obj).then(function(response){
            if(response.status == 200){
                var resultado = response.data.respuesta;
                if(resultado == "ok"){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Eliminacion Exitosa'},{key: false,back: 'static'});
                    $scope.cancelar();
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al eliminar'},{key: false,back: 'static'});
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })

    }

    var init = function(){
        $scope.datos.timbrado=$rootScope.pago.timbrado;
        $scope.datos.caja=$rootScope.pago.caja;
        $scope.datos.cajero=$rootScope.pago.cajero;
        $scope.datos.sucursal=$rootScope.pago.sucursal;
        //console.log($args);

        $scope.datos.montoTotal = $rootScope.montoTotal;
        $scope.pagadoTotal = 0;
        $scope.datos.cambio  = 0;
        $scope.datos.numeroFactura = $rootScope.venta.numeroFactura;
        $scope.listarCondicionesCompra();
        $scope.listarMarcaTarjeta();
    }

    init();
});


app.controller('editarVentaController', function($scope, $location, $rootScope, $cookies, $dialogs, AccesosService, UtilService, ArticulosService, ClientesService, VentasService, CajasService, UsuarioSucursalService) {

    $scope.datos = {};
    $scope.producto = {}
    $scope.inhabilitarAgregar =true;
    $scope.inhabilitarCBarra = false;
    $scope.listaArticulos=[];
    $scope.listaEliminar=[];

    $scope.limpiar = function(){
        $scope.inhabilitarAgregar =true;
        $scope.inhabilitarCBarra = false;
        $scope.producto.sucursal = 'MATRIZ';
    }

    $scope.changeCantidad = function(){
        if($scope.datos.cantidad != null && $scope.datos.cantidad != '' && typeof $scope.datos.cantidad != 'undefined'){
            if($scope.datos.cantidad>0){
                $scope.datos.total= $scope.datos.cantidad * $scope.datos.precio;
                $scope.inhabilitarAgregar =false;
            }else{
                $scope.datos.cantidad=1;
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Cantidad invalida'},{key: false,back: 'static'});
            }
        }else{
            $scope.inhabilitarAgregar =true;
        }
    }

    $scope.buscarArticuloExistente = function(){
        console.log('buscare');
        $scope.producto.sucursal = 'MATRIZ'
        VentasService.listarStockPorSucursal($scope.producto).then(function(response){
            if(response.status == 200){
                if(response.data.length == 1){
                    $scope.articulo =   response.data[0];
                    $scope.producto.codigo = $scope.articulo.codigo;
                    if($scope.producto.codigoBarra ==null || typeof $scope.producto.codigoBarra == 'undefined'){
                        $scope.inhabilitarCBarra = true;
                    }else{
                        $scope.inhabilitarCBarra = false;
                    }
                    $scope.producto.codigoBarra = $scope.articulo.codigoBarra;
                    $scope.producto.descripcion = $scope.articulo.descripcion;
                    $scope.datos.precio = $scope.articulo.precioUnitario;
                    $scope.datos.grabado = $scope.articulo.grabado;
                    if($scope.datos.cantidad != null && $scope.datos.cantidad != '' && typeof $scope.datos.cantidad != 'undefined'){
                        $scope.datos.total= $scope.datos.cantidad * $scope.datos.precio;
                        $scope.inhabilitarAgregar =false;
                    }
                    $scope.articuloValido  = true;

                }else{
                    $scope.articuloValido  = false;
                    $scope.inhabilitarAgregar =true;
                    $scope.listaArticulos =   response.data;
                }

            }else{
                $scope.articuloValido  = false;
                $scope.inhabilitarAgregar =true;
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
        console.log('lo encontre');
    }

    function pad(n, width, z) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    $scope.habilitarCuotas = function(condicion){
        if(condicion=='contado'){
            $scope.mostrarCutas= false;
        }else{
            $scope.mostrarCutas= true;
        }
    }

    function formatMesDia (param){
        if(param<10){
            return '0'+param;
        }else{
            return param;
        }
    }

    function nvl(valor1, valor2){
        if(valor1!=null && typeof valor1 != 'undefined' && valor1!='' && valor1!= 'null')
            return valor1;
        return valor2
    }

    $scope.buscarClientes= function(){
        var obj = {
            ruc: $scope.datos.ruc,
            nombre: (typeof $scope.datos.nombre== 'undefined')? null: $scope.datos.nombre.replace(" ", "%")
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        ClientesService.listarComplex(encoJson).then(function(response){
            if(response.status == 200){
                if(response.data.length>1){
                    $scope.listaClientes = response.data;
                }else if(response.data.length==1){
                    $scope.datos.nombre = response.data[0].nombre +" "+ response.data[0].apellido;
                    $scope.datos.ruc =  nvl(response.data[0].ruc, response.data[0].cedula);
                    $scope.datos.telefono = nvl( response.data[0].telefono, response.data[0].celular1);
                    $scope.datos.codigoPersona = response.data[0].codigo;
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.cancelar = function() {
        $location.path( '/ventas' );
    }

    $scope.obtenerUsuarioSucursal = function(usuario){
        UsuarioSucursalService.obtener(usuario).then(function(response){
            if(response.status == 200){
                if(response.data.length == 1){
                    $scope.datos.sucursal =  response.data[0].sucursal;
                } else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'El usuario '+usuario+' no esta asignado a ninguna sucursal.'},{key: false,back: 'static'});
                    $scope.cancelar();
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});

            }
        })
    };

    $scope.agregar = function(){
        var impuesto =  $scope.datos.total* $scope.datos.grabado/100 ;
        var obj= {
            codigoArticulo: $scope.producto.codigo,
            descripcion: $scope.producto.descripcion,
            cantidad: $scope.datos.cantidad,
            precio: $scope.datos.precio,
            iva: $scope.datos.grabado,
            impuesto: impuesto,
            total: $scope.datos.total,
            tipo:$scope.articulo.tipo
        }
        $scope.lista.push(obj);
        $scope.limpiarSimple();
    }

    $scope.limpiarSimple = function(){
        $scope.producto = {};
        $scope.datos.cantidad = null;
        $scope.datos.precio = null;
        $scope.datos.total = null;
        $scope.inhabilitarAgregar =true;
        $scope.inhabilitarCBarra = false;
    }

    $scope.guardar = function(){
        var lista = angular.copy($scope.lista);
        var cabecera = {
            numeroFactura: $scope.datos.numeroFactura,
            timbrado:$scope.datos.timbrado,
            codigoPersona: $scope.datos.codigoPersona,
            cliente: $scope.datos.nombre,
            ruc: $scope.datos.ruc,
            telefono: $scope.datos.telefono,
            sucursal: $scope.datos.sucursal,
            caja:$scope.datos.nroCaja,
            usuario:$cookies.usuario
        }
        for(i=0;i<lista.length;i++){
            delete lista[i].descripcion
        }

        var param = {
            cabecera: cabecera,
            detalle: lista,
            detalleEliminar: $scope.listaEliminar
        }
        VentasService.editarFactura(param).then(function(response){
            if(response.status == 200 && response.data =="true"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarDetalleFactura = function(id){
        VentasService.listarDetalleFactura(id).then(function(response){
            if(response.status == 200){
                $scope.lista =response.data;
                for(i=0;i<$scope.lista.length;i++){
                    $scope.lista[i].tipo = 'R';
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    $scope.remove = function(index) {
        var element = $scope.lista[index];
        if(element.tipo == 'R'){
            $scope.listaEliminar[$scope.listaEliminar.length]=element;
        }
        $scope.lista.splice(index, 1);
    }


    var init = function(){
        var urlParams = $location.search().param;
        $scope.datos.nombre = urlParams.cliente;
        $scope.datos.ruc = urlParams.ruc;
        $scope.datos.telefono = urlParams.telefono;
        $scope.datos.sucursal = urlParams.sucursal;
        $scope.datos.caja = urlParams.caja;
        $scope.datos.numeroFactura = urlParams.numeroFactura;

        $scope.listarDetalleFactura($scope.datos.numeroFactura);
        $scope.datos.usuario =  $cookies.usuario;
        //$scope.buscarClientes();
        $scope.buscarArticuloExistente();
        //$scope.obtenerUsuarioSucursal($scope.datos.usuario);
    }

    init();
});



app.controller('notaCreditoController', function($scope, $location, $rootScope, $cookies, $dialogs, AccesosService, UtilService, ArticulosService, ClientesService, VentasService, CajasService, UsuarioSucursalService) {

    $scope.datos = {};
    $scope.producto = {}
    $scope.inhabilitarAgregar =true;
    $scope.inhabilitarCBarra = false;
    $scope.listaArticulos=[];

    $scope.limpiar = function(){
        $scope.inhabilitarAgregar =true;
        $scope.inhabilitarCBarra = false;
        $scope.producto.sucursal = $scope.datos.sucursal;
    }

    $scope.changeCantidad = function(){
        if($scope.datos.cantidad != null && $scope.datos.cantidad != '' && typeof $scope.datos.cantidad != 'undefined'){
            if($scope.datos.cantidad>0){
                $scope.datos.total= $scope.datos.cantidad * $scope.datos.precio;
                $scope.inhabilitarAgregar =false;
            }else{
                $scope.datos.cantidad=1;
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Cantidad invalida'},{key: false,back: 'static'});
            }
        }else{
            $scope.inhabilitarAgregar =true;
        }
    }

//    $scope.buscarArticuloExistente = function(){
//        console.log('buscare');
//        $scope.producto.sucursal = 'MATRIZ'
//        VentasService.listarStockPorSucursal($scope.producto).then(function(response){
//            if(response.status == 200){
//                if(response.data.length == 1){
//                    $scope.articulo =   response.data[0];
//                    $scope.producto.codigo = $scope.articulo.codigo;
//                    if($scope.producto.codigoBarra ==null || typeof $scope.producto.codigoBarra == 'undefined'){
//                        $scope.inhabilitarCBarra = true;
//                    }else{
//                        $scope.inhabilitarCBarra = false;
//                    }
//                    $scope.producto.codigoBarra = $scope.articulo.codigoBarra;
//                    $scope.producto.descripcion = $scope.articulo.descripcion;
//                    $scope.datos.precio = $scope.articulo.precioUnitario;
//                    $scope.datos.grabado = $scope.articulo.grabado;
//                    if($scope.datos.cantidad != null && $scope.datos.cantidad != '' && typeof $scope.datos.cantidad != 'undefined'){
//                        $scope.datos.total= $scope.datos.cantidad * $scope.datos.precio;
//                        $scope.inhabilitarAgregar =false;
//                    }
//                    $scope.articuloValido  = true;
//
//                }else{
//                    $scope.articuloValido  = false;
//                    $scope.inhabilitarAgregar =true;
//                    $scope.listaArticulos =   response.data;
//                }
//
//            }else{
//                $scope.articuloValido  = false;
//                $scope.inhabilitarAgregar =true;
//                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
//            }
//        })
//        console.log('lo encontre');
//    }

//    function pad(n, width, z) {
//        z = z || '0';
//        n = n + '';
//        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
//    }

//    $scope.habilitarCuotas = function(condicion){
//        if(condicion=='contado'){
//            $scope.mostrarCutas= false;
//        }else{
//            $scope.mostrarCutas= true;
//        }
//    }

    function formatMesDia (param){
        if(param<10){
            return '0'+param;
        }else{
            return param;
        }
    }

    function nvl(valor1, valor2){
        if(valor1!=null && typeof valor1 != 'undefined' && valor1!='' && valor1!= 'null')
            return valor1;
        return valor2
    }

//    $scope.buscarClientes= function(){
//        var obj = {
//            ruc: $scope.datos.ruc,
//            nombre: (typeof $scope.datos.nombre== 'undefined')? null: $scope.datos.nombre.replace(" ", "%")
//        }
//        var json = angular.toJson(obj);
//        var encoJson = encodeURIComponent(json);
//        ClientesService.listarComplex(encoJson).then(function(response){
//            if(response.status == 200){
//                if(response.data.length>1){
//                    $scope.listaClientes = response.data;
//                }else if(response.data.length==1){
//                    $scope.datos.nombre = response.data[0].nombre +" "+ response.data[0].apellido;
//                    $scope.datos.ruc =  nvl(response.data[0].ruc, response.data[0].cedula);
//                    $scope.datos.telefono = nvl( response.data[0].telefono, response.data[0].celular1);
//                    $scope.datos.codigoPersona = response.data[0].codigo;
//                }
//
//            }else{
//                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
//            }
//        })
//    }

    $scope.cancelar = function() {
        $location.path( '/ventas' );
    }

    $scope.obtenerUsuarioSucursal = function(usuario){
        UsuarioSucursalService.obtener(usuario).then(function(response){
            if(response.status == 200){
                if(response.data.length == 1){
                    $scope.datos.sucursal =  response.data[0].sucursal;
                } else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'El usuario '+usuario+' no esta asignado a ninguna sucursal.'},{key: false,back: 'static'});
                    $scope.cancelar();
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});

            }
        })
    };

    $scope.agregar = function(){
        var impuesto =  $scope.datos.total* $scope.datos.grabado/100 ;
        var obj= {
            codigoArticulo: $scope.producto.codigo,
            descripcion: $scope.producto.descripcion,
            cantidad: $scope.datos.cantidad,
            precio: $scope.datos.precio,
            iva: $scope.datos.grabado,
            impuesto: impuesto,
            total: $scope.datos.total,
            tipo:$scope.articulo.tipo
        }
        $scope.lista.push(obj);
        $scope.limpiarSimple();
    }

    $scope.limpiarSimple = function(){
        $scope.producto = {};
        $scope.datos.cantidad = null;
        $scope.datos.precio = null;
        $scope.datos.total = null;
        $scope.inhabilitarAgregar =true;
        $scope.inhabilitarCBarra = false;
    }

    $scope.guardar = function(){
        var lista = angular.copy($scope.lista);
        var cabecera = {
            numeroFactura: $scope.datos.numeroFactura,
            timbrado:$scope.datos.timbrado,
            codigoPersona: $scope.datos.codigoPersona,
            cliente: $scope.datos.nombre,
            ruc: $scope.datos.ruc,
            telefono: $scope.datos.telefono,
            sucursal: $scope.datos.sucursal,
            caja:$scope.datos.nroCaja,
            usuario:$cookies.usuario
        }
        for(i=0;i<lista.length;i++){
            delete lista[i].descripcion
        }

        var param = {
            cabecera: cabecera,
            detalle: lista
        }
        VentasService.registrarVenta(param).then(function(response){
            if(response.status == 200 && response.data =="true"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarDetalleFactura = function(id){
        VentasService.listarDetalleFactura(id).then(function(response){
            if(response.status == 200){
                $scope.lista =response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    $scope.remove = function(index) {
        $scope.lista.splice(index, 1);
    }


    var init = function(){
        var urlParams = $location.search().param;
        $scope.datos.nombre = urlParams.cliente;
        $scope.datos.ruc = urlParams.ruc;
        $scope.datos.telefono = urlParams.telefono;
        $scope.datos.sucursal = urlParams.sucursal;
        $scope.datos.caja = urlParams.caja;
        $scope.datos.numeroFactura = urlParams.numeroFactura;
        $scope.datos.timbrado = urlParams.timbrado;
        $scope.datos.usuario = urlParams.usuario;

        //var fecha =   new Date();
        //var fecha= urlParams.fecha.toDate();
        //var fechaformateada =  formatMesDia(fecha.getDate())+'/'+formatMesDia(fecha.getMonth())+'/'+fecha.getFullYear();
        $scope.datos.fecha =  urlParams.fecha;
        $scope.datos.usuarioTransaccion =  $cookies.usuario;

        $scope.listarDetalleFactura($scope.datos.numeroFactura);

        //$scope.buscarClientes();
        //$scope.buscarArticuloExistente();
        //$scope.obtenerUsuarioSucursal($scope.datos.usuario);
    }

    init();
});

app.controller('cajasMovimientosController', function($scope, $location, $rootScope, $cookies, $dialogs, CajasMovimientosService) {
    $scope.datos = {};
    $scope.lista = [];

    $scope.agregar = function() {
        $location.path( '/cajas-movimientos/agregar' );
    }

    $scope.remove = function(index) {
        var element = $scope.lista[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            CajasMovimientosService.eliminar(element.id).then(function(response){
                if(response.status == 200){
                    var resultado = response.data;
                    if(resultado == "true"){
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Eliminacion Exitosa'},{key: false,back: 'static'});
                        $scope.limpiar();
                        $scope.buscar();
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al eliminar'},{key: false,back: 'static'});
                        $scope.limpiar();
                        $scope.buscar();
                    }
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            });

        },function(){
        });
    }

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.lista = [];
    }
    $scope.buscar = function() {
        CajasMovimientosService.listar($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.lista = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    var init = function () {

    }

    init();

});



app.service('CajasMovimientosService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.eliminar = function(codigo){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/cajas-movimientos/delete/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listar = function(datos){
        var json = angular.toJson(datos);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/cajas-movimientos?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(datos){
        var json = angular.toJson(datos);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/ventas/cajas-movimientos?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});


app.controller('agregarCotizacionController', function($scope, $location, $rootScope, $cookies, $dialogs, VentasService, UtilService, ServiciosService) {

    $scope.cancelar = function() {
        $location.path( '/circuito' );
    }


    $scope.producto = {};
    $scope.datos = {};
    $scope.lista = [] ;
    $scope.inhabilitarAgregar =true;
    $scope.inhabilitarCBarra = false;
    $scope.listaArticulos=[];

    $scope.remove = function(index) {
        $scope.lista.splice(index, 1);
    }

    $scope.limpiar = function(){
        $scope.inhabilitarAgregar =true;
        $scope.inhabilitarCBarra = false;
    }

    $scope.changeCantidad = function(){
        if($scope.datos.cantidad != null && $scope.datos.cantidad != '' && typeof $scope.datos.cantidad != 'undefined'){
            if($scope.datos.cantidad>0){
                $scope.datos.total= $scope.datos.cantidad * $scope.datos.precio;
                $scope.inhabilitarAgregar =false;
            }else{
                $scope.datos.cantidad=1;
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Cantidad invalida'},{key: false,back: 'static'});
            }

        }else{
            $scope.inhabilitarAgregar =true;
        }

    }

    $scope.buscarArticuloExistente = function(){
        $scope.producto.sucursal = 'MATRIZ'
        VentasService.listarStockPorSucursal($scope.producto).then(function(response){
            if(response.status == 200){
                if(response.data.length == 1){
                    $scope.articulo =   response.data[0];
                    $scope.producto.codigo = $scope.articulo.codigo;
                    if($scope.producto.codigoBarra ==null || typeof $scope.producto.codigoBarra == 'undefined'){
                        $scope.inhabilitarCBarra = true;
                    }else{
                        $scope.inhabilitarCBarra = false;
                    }
                    $scope.producto.codigoBarra = $scope.articulo.codigoBarra;
                    $scope.producto.descripcion = $scope.articulo.descripcion;
                    $scope.datos.precio = $scope.articulo.precioUnitario;
                    $scope.datos.grabado = $scope.articulo.grabado;
                    if($scope.datos.cantidad != null && $scope.datos.cantidad != '' && typeof $scope.datos.cantidad != 'undefined'){
                        $scope.datos.total= $scope.datos.cantidad * $scope.datos.precio;
                        $scope.inhabilitarAgregar =false;
                    }
                    $scope.articuloValido  = true;

                }else{
                    $scope.articuloValido  = false;
                    $scope.inhabilitarAgregar =true;
                    $scope.listaArticulos =   response.data;
                }

            }else{
                $scope.articuloValido  = false;
                $scope.inhabilitarAgregar =true;
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.agregar = function(){
        var impuesto =  $scope.datos.total* $scope.datos.grabado/100 ;
        var obj= {
            codigoArticulo: $scope.producto.codigo,
            descripcion: $scope.producto.descripcion,
            cantidad: $scope.datos.cantidad,
            precio: $scope.datos.precio,
            iva: $scope.datos.grabado,
            impuesto: impuesto,
            total: $scope.datos.total,
            tipo:$scope.articulo.tipo
        }
        $scope.lista.push(obj);
        $scope.limpiarSimple();
    }

    $scope.limpiarSimple = function(){
        $scope.producto = {};
        $scope.datos.cantidad = null;
        $scope.datos.precio = null;
        $scope.datos.total = null;
        $scope.inhabilitarAgregar =true;
        $scope.inhabilitarCBarra = false;
    }

    $scope.secuencia = function(){
        UtilService.secuencia("factura_seq").then(function(response){
            if(response.status == 200){
                var aux  = response.data;
                $scope.datos.numeroFactura =  aux; //pad(aux, 8);
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    $scope.guardar = function(){//LOL
        var lista = angular.copy($scope.lista);
        for(var j = lista.length; j--;){
            if(lista[j].recuperado == 'S'){
                lista.splice(j,1);
            }
        }
        var circuitoServicio = {
            secuencia: $scope.datos.secuencia,
            estado: 'SERV_PEND_APRO',
            lugar: $scope.datos.sucursal,
            observacion:$scope.datos.observacion,
            responsable:$cookies.usuario

        }
        for(i=0;i<lista.length;i++){
            delete lista[i].descripcion
        }

        var param = {
            circuitoServicio: circuitoServicio,
            listaDetalle: lista
        }
        ServiciosService.crearCotizacion(param).then(function(response){
            if(response.status == 200 && response.data =="true"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarDetalleAprovadoReparacion = function(){
        VentasService.listarDetalleAprovadoReparacion($scope.datos.secuencia).then(function(response){
            if(response.status ==200){
                $scope.lista = response.data;
                for(i=0;i<$scope.lista.length;i++){
                    $scope.lista[i].recuperado = 'S';
                }
            }else{
                alert("Error al cargar los modelos");
            }
        })
    }

    var init = function(){
        var urlParams = $location.search().param;
        if(typeof urlParams.secuencia == 'undefined'){
            $scope.cancelar();
        }
        $scope.datos.secuencia =  urlParams.secuencia;
        $scope.datos.responsable =  urlParams.responsable;
        $scope.datos.estado =  urlParams.estado;
        $scope.datos.usuario =  $cookies.usuario;
        $scope.datos.sucursal =  urlParams.lugar;
        $scope.datos.paso =  urlParams.paso;
        $scope.buscarArticuloExistente();
        if($scope.datos.paso ==1){
            $scope.secuencia();//PARA CARGAR LA SECUENCIA DE LA FACTURA
        }else{
            //buscarCotizacion
            alert("Buscar cotizacion");
            $scope.listarDetalleAprovadoReparacion();
        }

    }

    init();
});


app.controller('modificarIngresarEquipoController', function($scope, $location, ValoresService, $rootScope, $dialogs, ClientesService, $cookies, ServiciosService, $timeout) {

    $scope.datos ={};
    $scope.listaClientes ={};
    $scope.listaTaller = [];
    $scope.listaModelos=[];
    $scope.listaTipos = [];
    $scope.listaMarcas = [];


    $scope.listarModelos = function(){
        var json =angular.toJson({"dominio":"MODELOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaModelos = response.data;
            }else{
                alert("Error al cargar los modelos");
            }
        })
    }

    $scope.listarTipos = function(){
        var json =angular.toJson({"dominio":"TIPOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTipos = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.listarMarcas= function(){
        var json =angular.toJson({"dominio":"MARCAS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaMarcas = response.data;
            }else{
                alert("Error al cargar las Marcas");
            }
        })
    }

    $scope.buscarCliente= function(valor, identificador){
        var obj = '';
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        ClientesService.listarComplex(encoJson).then(function(response){
            if(response.status == 200){
                $scope.listaClientes = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    //lol
    $scope.changeCliente=function(){
        var encontrado = false;
        for(i=0;i<$scope.listaClientes.length;i++){
            var apellido = "";
            if(typeof $scope.listaClientes[i].apellido!= 'undefined'){
                apellido =  $scope.listaClientes[i].apellido;
            }
            if(($scope.listaClientes[i].nombre+' '+apellido).trim() ==$scope.datos.cliente.trim()){
                $scope.datos.codigoPersona= $scope.listaClientes[i].codigo;
                $scope.datos.correo= $scope.listaClientes[i].correoElectronico;
                $scope.datos.telefono= $scope.listaClientes[i].telefono;
                encontrado=true;
                break;
            }
        }
        if(!encontrado){
            $scope.datos.correo= "";
            $scope.datos.telefono= "";
            delete $scope.datos.codigoPersona;
        }
    }

    $scope.cancelar = function(){
        $location.path( '/circuito' );
    }

    $scope.modificar = function() {
        ServiciosService.modificarIngresarEquipo($scope.datos).then(function(response){
            if(response.status == 200){
                var resultado = response.data;
                if(resultado == "true"){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                    $scope.cancelar();
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Ingresar Equipo'},{key: false,back: 'static'});
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.listarTaller = function(){
        var json =angular.toJson({"dominio":"TALLER_INTERNO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTaller = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }


    $scope.cargarDatos = function(secuencia){
        ServiciosService.obtenerCircuitoServicioIngreso(secuencia).then(function(response){
            if(response.status ==200){
                $scope.datos.cliente = response.data.cliente;
                $scope.datos.encargado = response.data.encargado;
                $scope.datos.correo = response.data.correo;
                $scope.datos.telefono = response.data.telefono;
                $scope.datos.detalleEquipo = response.data.detalleEquipo;
                $scope.datos.detalleTrabajo = response.data.detalleTrabajo;
                $scope.datos.codigoPersona = response.data.codigoPersona;
                $scope.datos.tipo = response.data.tipo.trim();
                $scope.datos.marca = response.data.marca.trim();
                $scope.datos.modelo = response.data.modelo.trim();
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    var init = function () {
        $scope.listarModelos();
        $scope.listarTipos();
        $scope.listarMarcas();
        var urlParams = $location.search().param;
        if(urlParams.secuencia==null || typeof urlParams.secuencia == 'undefined'){
            $scope.cancelar();
        }
        $scope.datos.secuencia =  urlParams.secuencia;
        $scope.datos.responsable =  urlParams.responsable;
        //$scope.datos.sucursal = urlParams.lugar;
        var fechaFormateada = new Date(urlParams.fecha);
        $scope.datos.fecha =  urlParams.fecha;
        $scope.datos.observacion =  urlParams.observacion;
        //$scope.buscarCliente();
        //$scope.listarTaller();

        //$scope.datos.sucursal = urlParams.lugar;
        $timeout( function (){
            $scope.datos.sucursal = urlParams.lugar.trim();   //lol
            $scope.cargarDatos($scope.datos.secuencia);
            $scope.$apply();
        }, 1000)
    }

    init();
});


app.controller('timbradosController', function($scope, $location, $rootScope, $cookies, $dialogs, TimbradosService, ValoresService) {
    $scope.datos = {};
    $scope.remove = function(index) {
        var element = $scope.listaDominios[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            TimbradosService.eliminar(element.id).then(function(response){

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

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.lista = [];
    }

    $scope.agregar = function() {
        $location.path( '/timbrados/agregar' );

    }

    $scope.modificar = function(index) {
        var element = $scope.lista[index];
        $location.path( '/timbrados/modificar').search({param: element, other:'ok'});
    }

    $scope.buscar = function() {
        TimbradosService.listar($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.lista = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
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

    $scope.lista = [];
    $scope.remove = function(index) {
        var element = $scope.lista[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,
            {msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            TimbradosService.eliminarById(element.codigo).then(function(response){

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
        $scope.listarEstados();
    }

    init();
});


app.controller('agregarTimbradosController', function($scope, $location, TimbradosService , ValoresService, $rootScope, $dialogs) {
    $scope.datos = {};

    $scope.agregar = function() {
        TimbradosService.insertar($scope.datos).then(function(response){
            if(response.status == 200){
                $location.path( '/timbrados' );
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }})
    }

    $scope.cancelar = function(){
        $location.path( '/timbrados' );
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

    var init = function () {
        $scope.listarEstados();
    }

    init();
});

app.controller('modificarTimbradosController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, TimbradosService, $timeout) {

    $scope.datos = {};
    $scope.listarEstados=[] ;

    $scope.listarEstados= function(){
        var json =angular.toJson({"dominio":"ESTADOS_PARAMETRICOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los Timbrados");
            }
        })
    }

    $scope.cancelar = function(){
        $location.path( '/timbrados' );
    }

    $scope.modificar = function() {
        TimbradosService.modificar($scope.datos).then(function(response){
            if(response.status == 200){
                var resultado = response.data;
                if(resultado == "true" ){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                    $scope.cancelar();
                } else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al modificar'},{key: false,back: 'static'});
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al modificar'},{key: false,back: 'static'});
            }
        })
    }


    var init = function () {
        var urlParams = $location.search().param;
        if(typeof urlParams.codigo == 'undefined'){
            $scope.cancelar();
        }
        function datetoISODate(fechaHora) {
            if (fechaHora)
                return new Date(fechaHora).toString("yyyy-MM-dd HH:mm:ss");
        }
        $scope.listarEstados();

        $timeout( function (){
            $scope.datos.codigo = urlParams.codigo;
            $scope.datos.inicioVigencia = datetoISODate(urlParams.inicioVigencia);
            $scope.datos.finVigencia = datetoISODate(urlParams.finVigencia);
            $scope.datos.estado = urlParams.estado;

            $scope.$apply();
        }, 1000)

    }

    init();

});



app.service('TimbradosService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listar = function(datos) {
        var obj={
            "codigo":datos.codigo,
            "estado":datos.estado
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/timbrados/listar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(datos){
        var obj = {
            "codigo":datos.codigo,
            "inicioVigencia":datos.inicioVigencia,
            "finVigencia":datos.finVigencia,
            "estado":datos.estado
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/timbrados/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminarById = function(codigo){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/timbrados/eliminar-id/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.modificar = function (datos){
        var obj = {
            "codigo":datos.codigo,
            "inicioVigencia":datos.inicioVigencia,
            "finVigencia":datos.finVigencia,
            "estado": datos.estado
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/servicios/modificar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


});

app.controller('cuentasBancariasController', function($scope, $location, $rootScope, $cookies, $dialogs, CuentasBancariasService, ValoresService) {
    $scope.datos = {};
    $scope.lista = [];

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

    $scope.listarBancos = function(){
        var json =angular.toJson({"dominio":"BANCOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaBancos = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.lista = [];
    }

    $scope.agregar = function() {
        $location.path( '/cuentas-bancarias/agregar' );
    }

    $scope.modificar = function(index) {
        var element = $scope.lista[index];
        $location.path( '/cuentas-bancarias/modificar').search({param: element, other:'ok'});
    }

    $scope.buscar = function() {
        CuentasBancariasService.listar($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.lista = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })

        $scope.limpiar();
    }

    $scope.remove = function(index) {
        var element = $scope.lista[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,
            {msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            CuentasBancariasService.eliminarById(element.codigo).then(function(response){

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


        //$scope.listaDominios.splice(index, 1);
    }

    var init = function () {
        $scope.listarEstados();
        $scope.listarBancos();
    }

    init();

});
app.controller('agregarCuentasBancariasController', function($scope, $location, CuentasBancariasService, ValoresService,  $cookies, $rootScope, $dialogs) {
    $scope.datos = {};

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

    $scope.listarBancos = function(){
        var json =angular.toJson({"dominio":"BANCOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaBancos = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.agregar = function() {
        $scope.datos.usuario  =$cookies.usuario;
        CuentasBancariasService.insertar($scope.datos).then(function(response){

            if(response.status == 200){
                $location.path( '/cuentas-bancarias' );
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }

        })
    }

    $scope.cancelar = function(){
        $location.path( '/cuentas-bancarias' );
    }

    var init = function () {
        $scope.listarEstados();
        $scope.listarBancos();
    }

    init();
});

app.controller('modificarCuentasBancariasController', function($scope, $location, CuentasBancariasService, ValoresService,  $cookies, $rootScope, $dialogs,  $timeout) {
    $scope.datos = {};
    $scope.listarEstados=[] ;

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

    $scope.listarBancos = function(){
        var json =angular.toJson({"dominio":"BANCOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaBancos = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.modificar = function() {
        $scope.datos.usuario  =$cookies.usuario;
        CuentasBancariasService.modificar($scope.datos).then(function(response){

            if(response.status == 200){
                var resultado = response.data;
                if(resultado == "true" ){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                    $scope.cancelar();
                } else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al modificar'},{key: false,back: 'static'});
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }

        })
    }

    $scope.cancelar = function(){
        $location.path( '/cuentas-bancarias' );
    }

    var init = function () {
        var urlParams = $location.search().param;
        if(typeof urlParams.codigo == 'undefined'){
            $scope.cancelar();
        }
        $scope.listarEstados();
        $scope.listarBancos();

        $timeout( function (){
            $scope.datos.codigo = urlParams.codigo;
            $scope.datos.banco = urlParams.banco;
            $scope.datos.numero = urlParams.numero;
            $scope.datos.estado = urlParams.estado;

            $scope.$apply();
        }, 1000)

    }

    init();
});



app.service('CuentasBancariasService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listar = function(datos) {
        var jsonObj = angular.toJson(datos);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/cuentas-bancarias?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }
    this.insertar = function(datos){
        var obj = {
            "banco":datos.banco,
            "numero":datos.numero,
            "estado": datos.estado,
            "usuario": datos.usuario
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/cuentas-bancarias/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.modificar = function (datos){
        var obj = {
            "codigo":datos.codigo,
            "banco":datos.banco,
            "numero":datos.numero,
            "estado": datos.estado
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/catalogo/cuentas-bancarias/modificar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminarById = function(codigo){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/cuentas-bancarias/eliminar-id/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }
});

    app.controller('proveedoresController', function($scope, $location, ProveedoresService, $rootScope, $dialogs) {

        $scope.datos ={};

        $scope.limpiar = function() {
            $scope.datos = {};
            $scope.lista = [];
        }

        $scope.agregar = function() {
            $location.path( '/proveedores/agregar' );
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

app.controller('agregarProveedoresController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, ClientesService, RolesService, ProveedoresService,  $timeout) {
    $scope.datos = {};
    $scope.listaPaises= [];
    $scope.listaCiudades= [];
    $scope.listaBarrios= [];
    $scope.listaSexos= [];
    $scope.listaNacionalidades =[];
    $scope.listaRoles = [];
    $scope.listaPersonas ={};

    function nvl(valor1, valor2){
        if(valor1!=null && typeof valor1 != 'undefined' && valor1!='' && valor1!= 'null')
            return valor1;
        return valor2
    }

    $scope.buscarPersonas= function(){
        var obj = {
            ruc: $scope.datos.ruc,
            cedula: $scope.datos.cedula
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        ProveedoresService.listarPersonas(encoJson).then(function(response){
            if(response.status == 200){
                if(response.data.length>1){
                    $scope.listaPersonas = response.data;
                }else if(response.data.length==1){
                    $scope.datos.nombre = response.data[0].nombre +" "+ response.data[0].apellido;
                    $scope.datos.ruc =  nvl(response.data[0].ruc, response.data[0].cedula);
                    $scope.datos.telefono = nvl( response.data[0].telefono, response.data[0].celular1);
                    $scope.datos.codigoPersona = response.data[0].codigo;

                    $scope.datos.fechaNacimiento = response.data[0].fechaNacimiento;
                    $scope.datos.nacionalidad = response.data[0].nacionalidad;
                    $scope.datos.pais = response.data[0].pais;
                    $scope.datos.ciudad = response.data[0].ciudad;
                    $scope.datos.barrio = response.data[0].barrio;
                    $scope.datos.direccion = response.data[0].direccion;
                    $scope.datos.correoElectronico = response.data[0].correoElectronico;
                    $scope.datos.sexo = response.data[0].sexo;
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

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

    $scope.listarRoles = function(){
        RolesService.listarDistinct().then(function(response){
            if(response.status ==200){
                $scope.listaRoles = response.data;
            }else{
                alert("Error al cargar los barrios");
            }
        })
    }

    var init = function(){
        $timeout( function (){
            //$scope.datos =$rootScope.usuario;
            $scope.listarPaises();
            $scope.listarCiudades();
            $scope.listarBarrios();
            $scope.listarSexos();
            $scope.listarNacionalidades();
            $scope.listarRoles();
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
                "banco":datos.banco,
                "numero":datos.numero,
                "estado": datos.estado,
                "usuario": datos.usuario
            }
            var json = angular.toJson(obj);
            var encoJson = encodeURIComponent(json);
            var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/cuentas-bancarias/insertar?paramJson='+encoJson)
                .then(function (response) {
                    return response;
                });
            return myResponseData;
        }

        this.modificar = function (datos){
            var obj = {
                "codigo":datos.codigo,
                "banco":datos.banco,
                "numero":datos.numero,
                "estado": datos.estado
            }
            var json = angular.toJson(obj);
            var encoJson = encodeURIComponent(json);
            var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/catalogo/cuentas-bancarias/modificar?paramJson='+encoJson)
                .then(function (response) {
                    return response;
                });
            return myResponseData;
        }

        this.eliminarById = function(codigo){
            var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/catalogo/cuentas-bancarias/eliminar-id/'+codigo)
                .then(function (response) {
                    return response;
                });
            return myResponseData;
        }

    });




app.controller('personasController', function($scope, $location, PersonasService, $rootScope, $dialogs) {

    $scope.datos ={};

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.lista = [];
    }

    $scope.buscar = function() {
        $scope.datos.nombre = $scope.datos.nombre;
        $scope.datos.ruc =  $scope.datos.cedula;
        PersonasService.listarComplex($scope.datos).then(function(response){
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
        $location.path( '/personas/modificar').search({param: element, other:'ok'});
    }

    $scope.agregar = function() {
        $location.path( '/personas/agregar' );
    }



    $scope.remove = function(index) {
        var element = $scope.lista[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            //alert(resultado);

            PersonasService.eliminarById(element.cedula).then(function(response){

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

app.controller('agregarPersonasController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, ClientesService, RolesService, PersonasService,  $timeout) {
    $scope.datos = {};
    $scope.listaPaises= [];
    $scope.listaCiudades= [];
    $scope.listaBarrios= [];
    $scope.listaSexos= [];
    $scope.listaNacionalidades =[];
    $scope.listaRoles = [];
    $scope.listaPersonas ={};

    function nvl(valor1, valor2){
        if(valor1!=null && typeof valor1 != 'undefined' && valor1!='' && valor1!= 'null')
            return valor1;
        return valor2
    }

    $scope.buscarExistePersonas= function(){
        var obj = {
            ruc: $scope.datos.ruc,
            cedula: $scope.datos.cedula
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        PersonasService.listarPersonas(encoJson).then(function(response){
            if(response.status == 200){
                if(response.data.length>1){
                    $scope.listaPersonas = response.data;
                }else if(response.data.length==1){
                    $scope.datos.nombre = response.data[0].nombre;
                    $scope.datos.apellido = response.data[0].apellido;
                    $scope.datos.ruc = response.data[0].ruc;
                    $scope.datos.cedula = response.data[0].cedula;
                    $scope.datos.telefono = response.data[0].telefono;
                    $scope.datos.celularPrimario = response.data[0].celularPrimario;
                    $scope.datos.fechaNacimiento = response.data[0].fechaNacimiento;
                    $scope.datos.nacionalidad = response.data[0].nacionalidad;
                    $scope.datos.pais = response.data[0].pais;
                    $scope.datos.ciudad = response.data[0].ciudad;
                    $scope.datos.barrio = response.data[0].barrio;
                    $scope.datos.direccion = response.data[0].direccion;
                    $scope.datos.correoElectronico = response.data[0].correoElectronico;
                    $scope.datos.sexo = response.data[0].sexo;
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

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
        $location.path( '/personas' );
    }

    $scope.agregar = function() {
        PersonasService.insertar($scope.datos).then(function(response){
            if(response.status == 200){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    var init = function(){
        $timeout( function (){
            //$scope.datos =$rootScope.usuario;
            $scope.listarPaises();
            $scope.listarCiudades();
            $scope.listarBarrios();
            $scope.listarSexos();
            $scope.listarNacionalidades();
            $scope.$apply();
        }, 1000)
    }

    init();
});

app.controller('modificarPersonasController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, ClientesService, RolesService, PersonasService,  $timeout) {
    $scope.datos = {};
    $scope.listaPaises= [];
    $scope.listaCiudades= [];
    $scope.listaBarrios= [];
    $scope.listaSexos= [];
    $scope.listaNacionalidades =[];
    $scope.listaRoles = [];
    $scope.listaPersonas ={};

    function formatMesDia (param){
        if(param<10){
            return '0'+param;
        }else{
            return param;
        }
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
        $location.path( '/personas' );
    }

    $scope.agregar = function() {
        PersonasService.insertar($scope.datos).then(function(response){
            if(response.status == 200){
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
        $scope.listarPaises();
        $scope.listarCiudades();
        $scope.listarBarrios();
        $scope.listarSexos();
        $scope.listarNacionalidades();
        $scope.listarEstados();
        $timeout( function (){
            //$scope.datos =$rootScope.usuario;
            $scope.datos.codigo = urlParams.codigo;
            $scope.datos.nombre = urlParams.nombre;
            $scope.datos.apellido = urlParams.apellido;
            $scope.datos.ruc = urlParams.ruc;
            $scope.datos.cedula = urlParams.cedula;
            $scope.datos.telefono = urlParams.telefono;
            $scope.datos.celularPrincipal = urlParams.celularPrincipal;
            $scope.datos.celularSecundario = urlParams.celularSecundario;
            var fecha =  new Date(urlParams.fechaNacimiento);
            var mes =   formatMesDia(fecha.getMonth());
            var fechaformateada =  fecha.getFullYear() +'-'+mes+'-'+formatMesDia(fecha.getDate());
            //$scope.datos2.fechaEntrega =  fechaformateada;
            $scope.datos.fechaNacimiento = fechaformateada;//'15-01-1980';//fecha;
            $scope.datos.nacionalidad = urlParams.nacionalidad;
            $scope.datos.pais = urlParams.pais;
            $scope.datos.ciudad = urlParams.ciudad;
            $scope.datos.barrio = urlParams.barrio;
            $scope.datos.direccion = urlParams.direccion;
            $scope.datos.correoElectronico = urlParams.correoElectronico;
            $scope.datos.sexo = urlParams.sexo;
            $scope.datos.estado = urlParams.estado;
            $scope.$apply();
        }, 1000)
    }

    init();
});

app.service('PersonasService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarComplex = function(datos) {
        var jsonObj = angular.toJson(datos);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/personas/complex/' +encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(datos){
        var obj = {
            "cedula": datos.cedula,
            "nombre": datos.nombre,
            "apellido": datos.apellido,
            "fechaNacimiento": datos.fechaNacimiento,
            "nacionalidad": datos.nacionalidad,
            "pais": datos.pais,
            "ciudad": datos.ciudad,
            "barrio": datos.barrio,
            "direccion": datos.direccion,
            "correoElectronico": datos.correoElectronico,
            "ruc": datos.ruc,
            "sexo": datos.sexo,
            "telefono": datos.telefono,
            "celularPrincipal": datos.celularPrincipal,
            "celularSecundario": datos.celularSecundario,
            "estado": 'ACTIVO'
        }

        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/personas/personas/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminarById = function(cedula){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/personas/eliminar-id/'+cedula)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.modificar= function (datos){
        var obj = {
            "codigo": datos.codigo,
            "cedula": datos.cedula,
            "nombre": datos.nombre,
            "apellido": datos.apellido,
            "fechaNacimiento": datos.fechaNacimiento,
            "nacionalidad": datos.nacionalidad,
            "pais": datos.pais,
            "ciudad": datos.ciudad,
            "barrio": datos.barrio,
            "direccion": datos.direccion,
            "correoElectronico": datos.correoElectronico,
            "ruc": datos.ruc,
            "sexo": datos.sexo,
            "telefono": datos.telefono,
            "celularPrincipal": datos.celularPrincipal,
            "celularSecundario": datos.celularSecundario,
            "estado": datos.estado
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/servicios/ingresar-equipo?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


});



app.directive('uppercase', function() {
    return {
        restrict: "A",
        require: "?ngModel",
        link: function(scope, element, attrs, ngModel) {

            //This part of the code manipulates the model
            ngModel.$parsers.push(function(input) {
                return input ? input.toUpperCase() : "";
            });

            //This part of the code manipulates the viewvalue of the element
            element.css("text-transform","uppercase");
        }
    };
});

app.directive('format-prueba', ['$filter', function ($filter) {
        return {
            require: '?ngModel',
            link: function (scope, elem, attrs, ctrl) {
                if (!ctrl) return;

                var symbol = "°"; // dummy usage

                ctrl.$formatters.unshift(function (a) {
                    return $filter(attrs.format)(ctrl.$modelValue) +  symbol;
                });

                ctrl.$parsers.unshift(function (viewValue) {
                    var plainNumber = viewValue.replace(/[^\d|\-+|\.+]/g, '');
                    elem.val($filter('number')(plainNumber) + symbol);
                    return plainNumber;
                });
            }
        };
}]);

app.controller('repararController', function($scope, $location, $rootScope, $cookies, $dialogs, ServiciosService) {
    $scope.datos = {};

    $scope.cancelar = function(){
        $location.path( '/circuito' );
    }

    $scope.guardar = function(index) {
        ServiciosService.reparar($scope.datos).then(function(response){
            if(response.status == 200){
                var resultado = response.data;
                if(resultado == "true" ){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Reparacion existosa'},{key: false,back: 'static'});
                    $scope.cancelar();
                } else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Reparar'},{key: false,back: 'static'});
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Reparar'},{key: false,back: 'static'});
            }
        })
    }


    var init = function () {
        var urlParams = $location.search().param;
        if(typeof urlParams.secuencia == 'undefined'){
            $scope.cancelar();
        }
        $scope.datos.secuencia = urlParams.secuencia;
        $scope.datos.responsable = urlParams.responsable;
        $scope.datos.paso = urlParams.paso;
        $scope.datos.lugar = urlParams.lugar;
    }

    init();
});

app.directive('format-number', function() {
    return {
        restrict: "A",
        require: "?ngModel",
        link: function(scope, element, attrs, ngModel) {

            ngModel.$parsers.push(function(input) {
                var cadena= input;
                cadena = cadena.replace(/[^0-9.]+/g,'');
                var x = cadena.length;
                var newCadena= "";
                contador = 1;
                while (x>=0) {
                    x--;
                    newCadena += cadena.charAt(x);
                    if(contador ==3){
                        contador = 0
                        newCadena+='.';
                    }
                    contador++;
                }
                var cadena2='';
                x = newCadena.length;
                while (x>=0) {
                    cadena2 +=newCadena.charAt(x);
                    x--;
                }
                if( cadena2.charAt(0)=='.'){
                    cadena2= cadena2.substring(1, cadena2.length);
                }
                console.log(cadena2);
                input  =cadena2
                return input;
            });

        }
    };
});

app.controller('historialController', function($scope, $location, $rootScope, $cookies, $dialogs,ServiciosService) {
    $scope.datos = {};

    $scope.listarCircuitoHistorico = function(secuencia){
        ServiciosService.listarCircuitoHistorico(secuencia).then(function(response){
            if(response.status ==200){
                $scope.lista = response.data;
            }else{
                alert("Error al cargar los datos");
            }
        })
    }


    $scope.cancelar = function(){
        $location.path( '/circuito' );
    }

    var init = function () {
        var urlParams = $location.search().param;
        if(typeof urlParams.secuencia == 'undefined'){
            $scope.cancelar();
        }
        $scope.datos.secuencia = urlParams.secuencia;
        $scope.listarCircuitoHistorico($scope.datos.secuencia);
    }

    init();
});


app.controller('reporte', function($scope, $location, $rootScope, $cookies, $dialogs, ReportesService, $window, ValoresService) {
    $scope.datos = {};


    $scope.listarModulos = function(){
        var json =angular.toJson({"dominio":"MODULOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaModelos = response.data;
            }else{
                alert("Error al cargar los modelos");
            }
        })
    }

    $scope.listarReportes = function(){
        if($scope.datos.modulo){

        }
    }


    $scope.reportePrueba = function(){
         $window.open('http://localhost:8081/jasperserver/rest_v2/reports/reports/prueba2.pdf', '_blank');
    }

    $scope.openTab= function(url){
        $window.open(url);
    }

    var init= function(){

    }

    init();

});

app.service('ReportesService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarComplex = function(datos) {
        var jsonObj = angular.toJson(datos);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/personas/complex/' +encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.eliminarById = function(cedula){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/personas/eliminar-id/'+cedula)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


});











