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
        .when('/saldo-cliente', {
            templateUrl : 'pages/pagos/saldo-cliente.html',
            controller  : 'saldoClienteController'
        })
        .when('/anular-pago', {
            templateUrl : 'pages/pagos/anular-pago.html',
            controller  : 'anularPagoController'
        })
        .when('/ventas/nota-credito', {
            templateUrl : 'pages/ventas/ventas/nota-credito.html',
            controller  : 'notaCreditoController'
        })
        .when('/ventas/nota-credito/item', {
            templateUrl : 'pages/ventas/ventas/nota-credito-item.html',
            controller  : 'notaCreditoItemController'
        })
        .when('/compras/ver-compra', {
            templateUrl : 'pages/compras/ver-compra.html',
            controller  : 'verCompraController'
        })
        .when('/articulos', {
            templateUrl : 'pages/articulos/articulos.html',
            controller  : 'articulosController'
        })
        .when('/articulos/agregar', {
            templateUrl : 'pages/articulos/agregar-articulos.html',
            controller  : 'agregarArticulosController'
        })
        .when('/articulos/modificar', {
            templateUrl : 'pages/articulos/modificar-articulos.html',
            controller  : 'modificarArticulosController'
        })
        .when('/articulos-factura', {
            templateUrl : 'pages/articulos-factura/articulos-factura.html',
            controller  : 'articulosFacturaController'
        })
        .when('/salir', {
            templateUrl : 'pages/404.html',
            controller  : 'salirController'
        })
        .when('/ayuda', {
            templateUrl : 'pages/home.html',
            controller  : 'ayudaController'
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
        .when('/clientes/modificar', {
            templateUrl : 'pages/personas/clientes/modificar-clientes.html',
            controller  :  'modificarClientesController'
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
        .when('/personas/cambiar-password', {
            templateUrl : 'pages/personas/usuarios/cambiar-password.html',
            controller  : 'cambiarPasswordController'
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
        .when('/cobros', {
            templateUrl : 'pages/ventas/cobros/cobros.html',
            controller  : 'cobrosController'
        })
        .when('/cobros/cobrar', {
            templateUrl : 'pages/ventas/cobros/cobrar.html',
            controller  : 'cobrarController'
        })
        .when('/cobros/anular', {
            templateUrl : 'pages/ventas/cobros/anular-cobro.html',
            controller  : 'anularCobrosController'
        })
        .when('/pagar', {
            templateUrl : 'pages/pagos/pagar.html',
            controller  : 'pagarController'
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
        .when('/nota-debito', {
            templateUrl : 'pages/compras/nota-debito.html',
            controller  : 'notaDebitoController'
        })
        .when('/ajuste-inventario-positivo', {
            templateUrl : 'pages/inventario/ajuste-inventario.html',
            controller  : 'ajusteInventarioPositivoController'
        })
        .when('/ajuste-inventario-negativo', {
            templateUrl : 'pages/inventario/ajuste-inventario.html',
            controller  : 'ajusteInventarioNegativoController'
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
        .when('/cajas/modificar', {
            templateUrl : 'pages/ventas/cajas/modificar-cajas.html',
            controller  : 'modificarCajasController'
        })
        .when('/cajas-movimientos', {
            templateUrl : 'pages/ventas/cajas-movimientos/cajas-movimientos.html',
            controller  : 'cajasMovimientosController'
        })
        .when('/cajas-movimientos/agregar', {
            templateUrl : 'pages/ventas/cajas-movimientos/agregar-cajas-movimientos.html',
            controller  : 'agregarCajasMovimientosController'
        })

        .when('/cheques', {
            templateUrl : 'pages/ventas/cheques/cheques.html',
            controller  : 'chequesController'
        })
        .when('/cheques/agregar', {
            templateUrl : 'pages/ventas/cheques/agregar-cheques.html',
            controller  :  'agregarChequesController'
        })
        .when('/cheques/modificar', {
            templateUrl : 'pages/ventas/cheques/modificar-cheques.html',
            controller  :  'modificarChequesController'
        })
        .when('/cheques/depositar', {
            templateUrl : 'pages/ventas/cheques/depositar-cheques.html',
            controller  :  'depositarChequesController'
        })

        .when('/prueba', {
            templateUrl : 'pages/prueba.html',
            controller  : 'dialogServiceTest'
        })
        .when('/imprimir-reportes', {
            templateUrl : 'pages/reportes/reporte.html',
            controller  : 'reporte'
        })

        //Agregados por Aurora Inicio

        .when('/reportes/abm', {
            templateUrl : 'pages/reportes/reportes.html',
            controller  : 'reportesController'
        })
        .when('/reportes/agregar', {
            templateUrl : 'pages/reportes/agregar-reportes.html',
            controller  :  'agregarReportesController'
        })
        .when('/reportes/modificar', {
            templateUrl : 'pages/reportes/modificar-reportes.html',
            controller  :  'modificarReportesController'
        })
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
        .when('/usuario-sucursal/modificar', {
            templateUrl : 'pages/personas/usuario-sucursal/modificar-usuario-sucursal.html',
            controller  : 'modificarUsuarioSucursalController'
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

        .when('/numeros-cheque', {
            templateUrl : 'pages/numeros-cheque/numeros-cheque.html',
            controller  : 'numerosChequeController'
        })
        .when('/numeros-cheque/agregar', {
            templateUrl : 'pages/numeros-cheque/agregar-numeros-cheque.html',
            controller  : 'agregarNumerosChequeController'
        })
        .when('/numeros-cheque/eliminarRangos', {
            templateUrl : 'pages/numeros-cheque/eliminar-rangos-numeros-cheque.html',
            controller  : 'eliminarRangosNumerosChequeController'
        })
        // agregados por Aurora Fin

        .when('/pago-proveedores', {
            templateUrl : 'pages/pagos/pago-proveedores.html',
            controller  : 'pagoProveedoresController'
        })
        .when('/pagos/generar-cheque', {
            templateUrl : 'pages/pagos/generar-cheque.html',
            controller  : 'generarChequeController'
        })

        .otherwise({
            redirectTo: '/' ,
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
           $rootScope.rolReportes = (modulos.indexOf("REPORTES")!=-1)?true:false;
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
        $rootScope.rolReportes = (modulos.indexOf("REPORTES")!=-1)?true:false;
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
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuarios/accesos/'+usuario+'/'+pass)
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

app.controller('ayudaController', function($scope, $location, $rootScope, $cookies,$window) {

    //$window.open('Panda.html', null);  //semi funciona
    $window.open('help/Panda.html', null);
    //$location.path( '/' );
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
        '<div class="modal" >' +
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
        $scope.datos.precio=$scope.datos.precio.replace(/[^0-9]+/g,'');
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
        $scope.datos.precio=separadorDeMil($scope.datos.precio);
        $scope.datos.total=separadorDeMil($scope.datos.total);
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
                        $scope.datos.precio = separadorDeMil($scope.articulo.precioUnitario);
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


    $scope.changePrecio = function(){
        if($scope.datos.precio){
            $scope.datos.precio = separadorDeMil($scope.datos.precio);
        }
    }

    function separadorDeMil(numero) {
        if(numero){
            return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
        }
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
        var impuesto =0;
        $scope.datos.total=$scope.datos.total.replace(/[^0-9]+/g,'')
        if($scope.datos.grabado==10){
            impuesto = $scope.datos.total/11;
        }else{
            impuesto = $scope.datos.total/21;
        }
        impuesto = impuesto>1?  Math.trunc(impuesto): 0;
        impuesto =separadorDeMil(impuesto);
        $scope.datos.precio =separadorDeMil( $scope.datos.precio);
        $scope.datos.total =separadorDeMil($scope.datos.total);
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
        $scope.articuloValido =false;
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
            lista[i].precio =lista[i].precio.replace(/[^0-9]+/g,'');
            lista[i].impuesto =lista[i].impuesto.replace(/[^0-9]+/g,'');
            lista[i].total =lista[i].total.replace(/[^0-9]+/g,'');
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

    $scope.modificar = function(index) {
        var element = $scope.listaArticulos[index];
        $location.path( '/articulos/modificar').search({param: element, other:'ok'});
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

app.controller('modificarArticulosController', function($scope, $location, $rootScope, $cookies, $dialogs, ArticulosService,ValoresService,  $timeout) {

    $scope.datos = {};
    $scope.listaModelos=[];
    $scope.listaTipos = [];
    $scope.listaMarcas = [];
    $scope.listaGrabados=[];
    $scope.listaMonedas=[];

    $scope.cancelar = function(){
        $location.path( '/articulos' );
    }

    $scope.guardar = function() {
        $scope.datos.precioUnitario = $scope.datos.precioUnitario.replace(/[^0-9]+/g,'');
        ArticulosService.modificar($scope.datos).then(function(response){
            if(response.status == 200 && response.data == "true"){

                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al modificar'},{key: false,back: 'static'});
            }
        })
    }

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

    $scope.changePrecio=function(){
        $scope.datos.precioUnitario = separadorDeMil($scope.datos.precioUnitario);
    }


    function separadorDeMil(numero) {
        return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
    }

    var init = function(){
        var urlParams = $location.search().param;
        if(typeof urlParams.codigo == 'undefined'){
            $scope.cancelar();
        }
        $scope.listarModelos();
        $scope.listarTipos();
        $scope.listarMarcas();
        $scope.listarGrabados();
        $scope.listarMonedas();

        $timeout( function (){
            $scope.datos.codigo = urlParams.codigo;
            $scope.datos.precioUnitario = separadorDeMil(urlParams.precioUnitario);
            $scope.datos.codigoBarra =  urlParams.codigoBarra;
            $scope.datos.descripcion =  urlParams.descripcion;
            $scope.datos.modelo = urlParams.modelo;
            $scope.datos.tipo = urlParams.tipo;
            $scope.datos.marca = urlParams.marca;
            $scope.datos.grabado = urlParams.grabado;
            $scope.datos.moneda = urlParams.moneda;

            $scope.$apply();
        }, 1000)
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
    this.modificar = function (datos){
        var obj = {
            "codigo":datos.codigo,
            "codigoBarra":datos.codigoBarra,
            "marca":datos.marca,
            "modelo":datos.modelo,
            "tipo":datos.tipo,
            "descripcion": datos.descripcion,
            "precioUnitario": datos.precioUnitario,
            "grabado": datos.grabado,
            "moneda": datos.moneda
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/catalogo/articulos/modificar?paramJson='+encoJson)
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

        ClientesService.listar({}).then(function(response){
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
        $scope.datos.precioUnitario= $scope.datos.precioUnitario.replace(/[^0-9]+/g,'')
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

    $scope.changePrecio = function(){
        if($scope.datos.precioUnitario){
            $scope.datos.precioUnitario = separadorDeMil($scope.datos.precioUnitario);
        }
    }
    function separadorDeMil(numero) {
        return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
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

    this.transpasoFacturacion = function(obj) {
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/servicios/transpaso-facturacion?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    //aprobar
    this.entregar = function(obj) {
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/servicios/entregar?paramJson='+encoJson)
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
                for(i=0;i<$scope.listaServicios.length;i++){
                    $scope.listaServicios[i].precioUnitario= separadorDeMil($scope.listaServicios[i].precioUnitario);
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
        $scope.limpiar();
    }

    function separadorDeMil(numero) {
        return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
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
        $scope.datos.precioUnitario=$scope.datos.precioUnitario.replace(/[^0-9]+/g,'');
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


    function separadorDeMil(numero) {
        return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
    }


    $scope.changePrecio=function(){
        $scope.datos.precioUnitario=separadorDeMil($scope.datos.precioUnitario);
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
        $scope.datos.precioUnitario=$scope.datos.precioUnitario.replace(/[^0-9]+/g,'');
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


    function separadorDeMil(numero) {
        return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
    };

    $scope.changePrecio = function(){
        if($scope.datos.precioUnitario){
            $scope.datos.precioUnitario = separadorDeMil($scope.datos.precioUnitario);
        }
    };

    var init = function () {
        var urlParams = $location.search().param;
        if(typeof urlParams.codigo == 'undefined'){
            $scope.cancelar();
        }
        $scope.listarEstados();
        $scope.listarGrabados();
        $timeout( function (){
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

    $scope.transpasoFacturacion = function(index){
        var datos = {
            secuencia: $scope.lista[index].secuencia,
            lugar: $scope.lista[index].lugar,
            responsable: $cookies.usuario
        }
        ServiciosService.transpasoFacturacion(datos).then(function(response){
            if(response.status == 200 &&  response.data == "true"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Paso a Facturacion existoso'},{key: false,back: 'static'});
                $scope.buscar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al pasar a Facturacion'},{key: false,back: 'static'});
            }
        })
    }

    $scope.entregar = function(index){
        var datos = {
            secuencia: $scope.lista[index].secuencia,
            lugar: $scope.lista[index].lugar,
            responsable: $cookies.usuario
        }
        ServiciosService.entregar(datos).then(function(response){
            if(response.status == 200 &&  response.data == "true"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Entrega existoso'},{key: false,back: 'static'});
                $scope.buscar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Entregar'},{key: false,back: 'static'});
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
        ProveedoresService.listarSinParametro().then(function(response){
            if(response.status ==200){
                $scope.listaProveedores = response.data;
            }else{
                alert("Error al cargar los Impuestos");
            }
        })
    }

    $scope.changeProveedor = function(){
        for(i=0;i<$scope.listaProveedores.length;i++){
            if($scope.listaProveedores[i].representanteNombre==$scope.datos2.proveedor){
                 $scope.proveedorCodigo =  $scope.listaProveedores[i].codigo;
            }
        }
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
        delete $scope.datos2.cantidad;
    }

    $scope.agregar = function(){

        var obj = {
            "id": $scope.datosFijos.id,
            "codigoArticulo": $scope.datos.codigo,
            "codigoBarra": $scope.datos.codigoBarra,
            "descripcion": $scope.datos.descripcion,
            "cantidad": $scope.datos2.cantidad,
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
                        $scope.datos2.iva = $scope.articulo.grabado;
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
            "usuario":  $cookies.usuario,
            "proveedorCodigo": $scope.proveedorCodigo
        }
        var lista = angular.copy($scope.listraRegistroarticulos);
        for(i=0;i<lista.length;i++){
            lista[i].codigo =lista[i].id;
            delete  lista[i].id;
            delete  lista[i].codigoBarra;
            delete  lista[i].descripcion;
            delete  lista[i].sucursal;
        }
        var param = {
            "cabecera": cabecera,
            "detalle": lista
        }
        ComprasService.insertar(param).then(function(response){
            if(response.status == 200 && response.data == 'true'){
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

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.listaUsuarios = [];
    }


    $scope.buscar= function(){
        $scope.datos.nombre;
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


    $scope.agregar = function() {
        $location.path( '/personas/agregar').search({param:'usuarios'});

    }

    $scope.cambiar = function() {
        $location.path('/personas/cambiar-password').search({param:'usuarios'});

    }

    $scope.modificar = function(index) {
        $rootScope.usuario = $scope.listaUsuarios[index];
        $location.path( '/usuarios/modificar' );

    }

    $scope.remove = function(index) {
        var element = $scope.listaUsuarios[index];
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea eliminar?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            //alert(resultado);

            UsuariosService.eliminarById(element.codigo).then(function(response){

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

app.service('UsuariosService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarJson = function(json) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuarios/complex/'+json)
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

    this.eliminarById = function(codigo){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuarios/eliminar/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.insertar = function(datos){
        var obj = {
            "codigo":datos.codigo,
            "usuario": datos.usuario,
            "contrasenha": datos.usuario,
            "rol": datos.rol,
            "resetear": 'RESETEAR'
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/personas/usuarios/insertar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarComplex = function(json) {
        /*lista los usuario_sucursal
         var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuarios/complex/'+json)*/
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuario-sucursal/'+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarUsuarioSucursal = function() {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuario-sucursal/')
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarPorCodigo = function(datos) {
        var obj = {  "codigo": datos.codigo                     }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/usuarios/listarCodigo/'+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.modificar = function(datos){
        var obj = {
            "codigo":datos.codigo,
            "usuario": datos.usuario,
            "rol": datos.rol
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/personas/usuarios/modificar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.cambiarPassword = function(datos){
        var obj = {
            "usuario": datos.usuario,
            "anteriorPassword": datos.anteriorPassword,
            "nuevoPassword": datos.nuevoPassword
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/personas/usuarios/cambiar-password?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


});


app.controller('agregarUsuariosController', function($scope, $location, $rootScope, $cookies, $dialogs, UsuariosService, RolesService, $timeout) {
    $scope.datos = {};
    $scope.datosAux = {};
    $scope.listaRoles = [];
    $scope.existeEnUsuarios = false;
    $scope.habilitarAgregar = true;

    $scope.buscarExisteUsuarios= function(){
        UsuariosService.listarPorCodigo($scope.datosAux).then(function(response){
            if(response.status == 200){
                if(response.data.length>1){
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }else if(response.data.length==1){
                    $scope.existeEnUsuarios = true;
                    $scope.datos.codigo = response.data[0].codigo;
                    $scope.datos.usuario = response.data[0].usuario;
                    $scope.datos.contrasenha = response.data[0].contrasenha;
                    $scope.datos.rol = response.data[0].rol;
                    $scope.datos.resetear = response.data[0].resetear;
                }
                else{
                    $scope.existeEnUsuarios = false;
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
            if($scope.existeEnUsuarios==true){
                $scope.bloquearCamposSecundarios=true;
            }
            else{
                $scope.bloquearCamposSecundarios=false;
            }
        })
    }

    $scope.habilitarCamposSecundarios= function(){
        if( $scope.datos.codigo ){
            $scope.buscarExisteUsuarios();

        }else{
            $scope.bloquearCamposSecundarios=false;
        }
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
        $scope.bloquearCamposSecundarios=true;
        $scope.listarRoles();

        var urlParams = $location.search().param;
        if(typeof urlParams.codigo == 'undefined'){
            $scope.cancelar();
        }
        $timeout( function (){
            $scope.datos.codigo= urlParams.codigo;
            $scope.datosAux.codigo= urlParams.codigo;
            $scope.buscarExisteUsuarios();
            $scope.$apply();
        }, 1000)
    }

    init();
});

app.controller('modificarUsuariosController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, UsuariosService, RolesService, $timeout) {
    $scope.datos = {};
    $scope.listaRoles = [];

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

    this.listarDetalleRegistro = function(codigo) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/compras/listar-detalle-registro/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.anular = function(datos){
        var obj={
            "codigo":datos.codigo,
            "estado":datos.estado,
            "sucursal": datos.sucursal
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/compras/anular?paramJson='+encoJson)
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

    this.registrarNotaDebito = function(obj) {
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/compras/registrarn-nota-debito?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarNC = function(codigo) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/compras/listar-nota-credito/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.anularNC = function(datos){
        var obj={
            "numeroFactura":datos.codigo,
            "sucursal": datos.sucursal
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/compras/anular-nc?paramJson='+encoJson)
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

    $scope.foo = function (index) {
        $scope.filaSeleccionada =  $scope.listaCompras[index];
    }

    $scope.limpiar= function(){
        $scope.datos = {};
        $scope.listaCompras=[];
        delete $scope.filaSeleccionada;
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

    function separadorDeMil(numero) {
        if(numero){
            return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
        }
    }

    $scope.buscar= function(){
        ComprasService.listarJson($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.listaCompras = response.data;
                for(i=0;i<$scope.listaCompras.length;i++){
                    $scope.listaCompras[i].monto=separadorDeMil($scope.listaCompras[i].monto);
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.anular = function() {
        var element =  $scope.filaSeleccionada;
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea anular?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            //alert(resultado);

            ComprasService.anular(element).then(function(response){
                if(response.status == 200){
                    var resultado = response.data;
                    if(resultado == "true"){
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Anulacion Exitosa'},{key: false,back: 'static'});
                        $scope.limpiar();
                        $scope.buscar();
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al anular'},{key: false,back: 'static'});
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



    $scope.recepcion = function(){
        $rootScope.compras =   $scope.filaSeleccionada;
        $location.path( '/recepcion-compra');
    }



    $scope.ver = function(){
        var element = $scope.filaSeleccionada;  //$scope.listaCompras[index];
        if(element.estado =='ACTIVO'){
            element.titulo= "Ver Pedido";
            $location.path( '/compras/ver-compra').search({param: element, other:'ok'});
        }else if(element.estado =='RECEPCIONADO'){
            element.titulo= "Ver Recepcion";
            $location.path( '/compras/ver-compra').search({param: element, other:'ok'});
        }else if(element.estado =='CON ND'){
            element.titulo= "Ver ";
            $location.path( '/compras/ver-compra').search({param: element, other:'ok'});
        }else{
            alert("FUCK NINGEN");
        }
    }

    $scope.verNC = function(){
        var element = $scope.filaSeleccionada;
        element.esNC = "SI";
        element.titulo= "Ver Nota Credito";
        $location.path( '/compras/ver-compra').search({param: element, other:'ok'});
    }

    $scope.notaDebito = function(index){
        var element =   $scope.filaSeleccionada;
        $location.path( '/nota-debito').search({param: element, other:'ok'});
    }

    $scope.agregar = function(index){
        $location.path( '/pedido-compra');
    }

    $scope.pagar = function(index){
        var element =   $scope.filaSeleccionada;// $scope.listaCompras[index];
        $location.path( '/pago-proveedores').search({param: element, other:'ok'});
    }

    $scope.anularNC = function() {
        var element =  $scope.filaSeleccionada;
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea anular la Nota de Credito?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            ComprasService.anularNC(element).then(function(response){
                if(response.status == 200&& response.data.respuesta =="OK"){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Anulacion Exitosa'},{key: false,back: 'static'});
                    $scope.limpiar();
                    $scope.buscar();
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            });
        },function(){
        });
    }

    var init = function () {
        $scope.listarTaller();
        $scope.listarEstados();
        //$scope.datos.estado = 'ACTIVO';
        $scope.buscar();
    }

    init();
});

app.controller('recepcionCompraController', function($scope, $location, $rootScope, $cookies, $dialogs, ComprasService, ValoresService, PersonasService) {
    $scope.datos = {};
    $scope.lista= [];
    $scope.habilitarCargar =false;

    $scope.listarDetalle = function(){
        ComprasService.listarDetalle($scope.datos2.codigo).then(function(response){
            if(response.status ==200){
                $scope.lista = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.obtenerRucProveedor = function() {
        var obj={
            "codigo":$scope.datos2.proveedorCodigo
        }
        PersonasService.listar(obj).then(function(response){
            if(response.status == 200){
                $scope.datos2.ruc = response.data[0].ruc;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.guardar = function(){
        var cabecera = {
            "codigo": $scope.datos2.codigo,
            "sucursal": $scope.datos2.sucursal,
            "proveedor": $scope.datos2.proveedor,
            "condicionCompra": $scope.datos2.condicionCompra,
            "plazo": $scope.datos2.plazo,
            "fechaEntrega": $scope.datos2.fechaEntregaReal,
            "usuarioRecepcion":  $cookies.usuario,
            "proveedorCodigo": $scope.datos2.proveedorCodigo,
            "numeroFactura":$scope.datos2.numeroFactura,
            "timbrado":$scope.datos2.timbrado,
            "ruc":$scope.datos2.ruc

        }
        var listaValida= true;
        var lista = angular.copy($scope.lista);
        for(i=0;i<$scope.lista.length;i++){
            if($scope.lista[i].precioUnitario==null || typeof $scope.lista[i].precioUnitario =='undefined'){
                listaValida=false;
                break;
            }
            lista[i].precio = lista[i].precioUnitario.replace(/[^0-9]+/g,'');
            lista[i].total = lista[i].precioTotal.replace(/[^0-9]+/g,'');
            lista[i].impuesto =lista[i].impuesto.replace(/[^0-9]+/g,'');
            delete lista[i].precioUnitario;
            delete lista[i].precioTotal;
            delete lista[i].descripcion;

        }
        if(listaValida){
            var param = {
                "cabecera": cabecera,
                "detalle": lista
            }
            ComprasService.insertarRegistroCompra(param).then(function(response){
                if(response.status == 200 && response.data == "true"){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                    $scope.cancelar();
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
                }
            })
        }else{
            dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Debe cargar todos los datos de los detalles de la factura.'},{key: false,back: 'static'});
        }


    }

    $scope.cancelar = function() {
        $location.path( '/compras' );

    }

    $scope.copiar=function(index) {
        var element = $scope.lista[index];
        $scope.datos = element
        $scope.habilitarCargar =true;
        $scope.copiarPosicion = index;
    }

    $scope.modificarCopia= function(){
        $scope.lista[$scope.copiarPosicion].precioUnitario=$scope.datos.precioUnitario;
        $scope.lista[$scope.copiarPosicion].precioTotal=$scope.datos.precioTotal;
        $scope.lista[$scope.copiarPosicion].cantidad=$scope.datos.cantidad;
        $scope.lista[$scope.copiarPosicion].iva=$scope.datos.iva;
        $scope.lista[$scope.copiarPosicion].impuesto=$scope.datos.impuesto;
        $scope.cancelarCopiar();
    }


    function separadorDeMil(numero) {
        return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
    }

    $scope.changeCopia = function(){
        $scope.datos.precioUnitario=$scope.datos.precioUnitario.replace(/[^0-9]+/g,'');
        $scope.datos.precioTotal = $scope.datos.precioUnitario * $scope.datos.cantidad;

        var iva=0;
        if($scope.datos.iva=='5'){
            iva = $scope.datos.precioTotal/21;
        }else{
            iva = $scope.datos.precioTotal/11;
        }
        $scope.datos.impuesto = iva>1? Math.trunc(iva): 0;
        $scope.datos.precioUnitario = separadorDeMil($scope.datos.precioUnitario);
        $scope.datos.precioTotal = separadorDeMil($scope.datos.precioTotal);
        $scope.datos.impuesto = separadorDeMil ($scope.datos.impuesto);
    }

    $scope.cancelarCopiar=function(){
        $scope.habilitarCargar =false;
    }

    function formatMesDia (param){
        if(param<10){
            return '0'+param;
        }else{
            return param;
        }
    }

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

    var init = function(){

        if(!$rootScope.compras){
            $scope.cancelar();
        }
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
        $scope.datos.fechaFactura =fechaformateada;
        $scope.datos2.fechaEntregaReal = +fecha.getFullYear()+'-'+formatMesDia(fecha.getMonth())+'-'+formatMesDia(fecha.getDate());
        $scope.listarDetalle();
        $scope.listarCondicionesCompra();
        $scope.listarPlazos();
        $scope.obtenerRucProveedor();
    }

    init();
});

app.directive('editableTd', [function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.css("cursor", "pointer");
            element.attr('contenteditable', 'true'); // Referencia: Inciso 1
//            element.bind('blur keyup change', function() { // Referencia: Inciso 2
//                var numeroSinCambiar = element.text();
//                var elementoCambiado = Number(numeroSinCambiar.toString().replace(/[^0-9]+/g,'')).toLocaleString();
//                element.textContent =  elementoCambiado;
//                scope.lista[attrs.row][attrs.field] = elementoCambiado;//element.text();
//            });
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


app.controller('ajusteInventarioPositivoController', function($scope, $location, $rootScope, $cookies, $dialogs, ArticulosService, ValoresService, InventarioService, UsuariosService) {
    $scope.datos = {};
    $scope.lista = [];
    $scope.listaUsuarios=[];
    $scope.tipoAjuste = "Positivo"

    $scope.listarUsuarios= function(){
        var json = angular.toJson({});
        UsuariosService.listarJson(json).then(function(response){
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

    this.modificar = function (datos){
        var obj = {
            "codigo":datos.codigo,
            "estado":datos.estado,
            "numero":datos.numero,
            "sucursal":datos.sucursal,
            "expedicion":datos.expedicion
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/ventas/cajas/modificar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


});



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

    $scope.modificar = function(index) {
        var element = $scope.lista[index];
        $location.path( '/cajas/modificar').search({param: element, other:'ok'});
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

app.controller('modificarCajasController', function($scope,    $location, $rootScope, $cookies, $dialogs, CajasService, ValoresService, $timeout) {
    $scope.datos = {};

    $scope.guardar = function() {
        CajasService.modificar($scope.datos).then(function(response){
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
        var urlParams = $location.search().param;
        if(typeof urlParams.codigo == 'undefined'){
            $scope.cancelar();
        }
        $scope.listarTaller();
        $scope.listarEstados();

        $timeout( function (){
            $scope.datos.codigo = urlParams.codigo;
            $scope.datos.estado = urlParams.estado;
            $scope.datos.numero =  urlParams.numero;
            $scope.datos.sucursal =  urlParams.sucursal;
            $scope.datos.expedicion = urlParams.expedicion;

            $scope.$apply();
        }, 1000)
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
        UsuariosService.listarUsuarioSucursal(json).then(function(response){
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
            if(response.status == 200 && response.data=="S"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                if(response.data) {
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:response.data},{key: false,back: 'static'});
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
                }

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


    this.facturar = function(obj){
        console.log(obj);
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/facturar?paramJson='+encoJson)
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

    this.registrarNotaCredito = function(param){
        var json = angular.toJson(param);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/registrar-nota-credito?paramJson='+encoJson)
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

    this.listarFondoDebito = function(param) {
        var json = angular.toJson(param);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/listar-fondo-debito?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.anularNotaCredito = function(id){
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/ventas/anular-nota-credito/'+id)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});




app.controller('ventasController', function($scope, $location, $rootScope, $cookies, $dialogs, UtilService, VentasService, ValoresService) {
    $scope.datos = {};

    function separadorDeMil(numero) {
        if(numero){
            return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
        }
    }

    $scope.foo = function (index) {
        $scope.filaSeleccionada =  $scope.lista[index];
    }

    $scope.agregar = function() {
        $location.path( '/ventas/registrar-venta' );
    }

    $scope.editar = function() {
        var element = $scope.filaSeleccionada;
        $location.path( '/ventas/editar-venta').search({param: element, other:'ok'});
    }

    $scope.notaCredito = function(index) {
        var element = $scope.filaSeleccionada;
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
                for(i=0;i<$scope.lista.length;i++){
                    $scope.lista[i].monto = separadorDeMil($scope.lista[i].monto);
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.remove = function() {
        var element =  $scope.filaSeleccionada;
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

    $scope.anularFactura = function() {
        var element =  $scope.filaSeleccionada;
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
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:resultado},{key: false,back: 'static'});
                    }
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            });
        },function(){
        });
    }

    $scope.anularNotaCredito = function() {
        var element =  $scope.filaSeleccionada;
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea anular?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            VentasService.anularNotaCredito(element.numeroFactura).then(function(response){
                if(response.status == 200){
                    var resultado = response.data.respuesta;
                    if(resultado == "ok"){
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Anulacion Exitosa'},{key: false,back: 'static'});
                        $scope.limpiar();
                        $scope.buscar();
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:resultado},{key: false,back: 'static'});
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

    $scope.facturar = function(){
        $rootScope.venta =  $scope.filaSeleccionada;
        $location.path( '/ventas/facturar' );
    }

    var init= function(){
       $scope.listarEstados();
       $scope.listarSucursales();
       $scope.buscar();
    }

    init();

});

app.controller('FacturarController', function($scope, $location, $rootScope, $cookies, $dialogs,UtilService,CajasService,ClientesService,VentasService ) {
    $scope.datos = {};
    $scope.producto = {}
    $scope.lista = [] ;

    function separadorDeMil(numero) {
        return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
    }

    $scope.listarDetalleFactura = function(id){
        VentasService.listarDetalleFactura(id).then(function(response){
            if(response.status == 200){
                $scope.lista =response.data;
                for(i=0;i<$scope.lista.length;i++){
                    $scope.lista[i].precio = separadorDeMil($scope.lista[i].precio);
                    $scope.lista[i].total = separadorDeMil($scope.lista[i].total);
                    $scope.lista[i].impuesto = separadorDeMil($scope.lista[i].impuesto);
                }
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
            $rootScope.montoTotal =parseInt($rootScope.montoTotal)+ parseInt($scope.lista[i].total.replace(/[^0-9]+/g,''));
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
        $scope.listarDetalleFactura($scope.datos.numeroFactura);
    }

    init();
});

app.controller('saldoClienteController', function($scope, $location, $rootScope, $cookies, $dialogs, ClientesService, PagosService, ValoresService) {
    $scope.datos = {};
    $rootScope.dir ='/saldo-cliente';
    $scope.direccionActual ='/saldo-cliente';

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
            nombre: $scope.datos.nombre
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        PagosService.listarPorClientes(encoJson).then(function(response){
            if(response.status == 200){
                 $scope.lista = response.data;
                if($scope.datos.codigo){
                    $scope.datos.total = 0;
                    for(i=0;i<$scope.lista.length;i++){
                        if($scope.lista[i].estado == 'PENDIENTE'){
                            $scope.datos.total = $scope.datos.total + $scope.lista[i].monto;
                        }


                    }
                    $scope.datos.total =   separadorDeMil($scope.datos.total);
                }else{
                    $scope.datos.total=null;
                    for(i=0;i<$scope.lista.length;i++){
                        $scope.lista[i].monto =separadorDeMil($scope.lista[i].monto);
                    }
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    function separadorDeMil(numero) {
        return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
    }

    $scope.foo = function (index) {
        var element =  $scope.lista[index];
        for(i=0;i<$scope.lista.length;i++){
            if(element.codigo == $scope.lista[i].codigo){
                if($scope.lista[i].checkActivo=='S'){
                    $scope.lista[i].checkActivo = 'N';
                }else{
                    $scope.lista[i].checkActivo = 'S';
                }
            }
        }
        var activos = false;
        for(j=0;j<$scope.lista.length;j++){
            if($scope.lista[j].checkActivo=='S'){
                activos= true;
                break;
            }

        }
        if(activos==true){
            $scope.inhabilitarCambio= false;
        }
        else{
            $scope.inhabilitarCambio= true;
        }
    }


    $scope.generarCheque = function(index) {
        var listaCopy  = angular.copy($scope.lista);
        $scope.listaACobrar=[];
        for(i=0;i<listaCopy.length;i++){
            if(listaCopy[i].checkActivo=='S'){
                $scope.listaACobrar.push(listaCopy[i]);
            }
        }
        for(j=0;j<$scope.listaACobrar.length;j++){
            delete $scope.listaACobrar[j].checkActivo;
            delete $scope.listaACobrar[j].fecha;
        }
        $location.path( '/pagos/generar-cheque').search({param: $scope.listaACobrar, other:'ok'});
    }

    $scope.efectivizar =function(){
        var listaCopy  = angular.copy($scope.lista);
        $scope.listaACobrar=[];
        for(i=0;i<listaCopy.length;i++){
            if(listaCopy[i].checkActivo=='S'){
                $scope.listaACobrar.push(listaCopy[i]);
            }
        }
        for(j=0;j<$scope.listaACobrar.length;j++){
            delete $scope.listaACobrar[j].checkActivo;
            delete $scope.listaACobrar[j].fecha;
        }
        var fondoDebito = {
            "documento": $scope.listaACobrar[0].documento,
            "documentoNumero": $scope.listaACobrar[0].documentoNumero
        }
        PagosService.efectivizar(fondoDebito, $cookies.usuario).then(function(response){
            if(response.status == 200 && response.data.respuesta =="OK"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.buscar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al guardar. '+response.data.respuesta},{key: false,back: 'static'});
            }
        })
    }

    $scope.pagar=function(){ $scope.accionar('pagar'); }

    $scope.anular=function(){ $scope.accionar('anular-pago'); }

    $scope.accionar = function(goTo) {
        var listaCopy  = angular.copy($scope.lista);   var lista=[];   var habilitar="OK";
        for(i=0;i<listaCopy.length;i++){
            if(listaCopy[i].checkActivo=='S'){ lista.push(listaCopy[i]); }
        }
        var cliente = null;
        for(j=0;j<lista.length;j++){
            delete lista[j].checkActivo;   delete lista[j].fecha;
            if(goTo=='pagar' && lista[j].estado!='PENDIENTE'){
                habilitar="Para pagar todos los registros deben estar Pendientes."
                break;
            }else if(goTo=='anular' && lista[j].estado== 'PAGADO'){
                habilitar="Para anular todos los registros deben estar Pagados."
                break;
            }
            if(cliente ==null){
                cliente= lista[j].codigoPersona;
            }else if(cliente!= lista[j].codigoPersona){
                habilitar="No se pueden procesar clientes diferentes en una misma transaccion.";
                break;
            }
        } //goTo = pagar, anular-pago
        if(habilitar=="OK"){
            $location.path(goTo).search({param: lista, path:$scope.direccionActual ,other:'ok'});
        }else{
            dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:habilitar},{key: false,back: 'static'});
        }
    }



    $scope.separadorDeMilesTotal = function(numero) {
        $scope.datos.total=  Number($scope.datos.total.toString().replace(/[^0-9]+/g,'')).toLocaleString();
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
        $scope.buscar();
    }

    init();
});

app.service('PagosService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarPorClientes = function(json) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/pagos/listar/clientes?paramJson='+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }


    this.listarPorProveedores = function(json) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/pagos/listar/proveedores?paramJson='+json)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.generarCheque = function(obj, usuario) {
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/pagos/generar-cheque/'+usuario+'?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.efectivizar = function(obj, usuario) {
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/pagos/efectivizar/'+usuario+'?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});


app.controller('usuarioSucursalController', function($scope, $location, $rootScope, $cookies, $dialogs, UsuarioSucursalService, ValoresService) {
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

    $scope.modificar = function(index) {
        var element = $scope.lista[index];
        $location.path( '/usuario-sucursal/modificar').search({param: element, other:'ok'});
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

app.controller('modificarUsuarioSucursalController', function($scope, $location,UsuarioSucursalService , ValoresService, UsuariosService, $rootScope, $dialogs, $timeout) {
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

    $scope.guardar = function() {
        UsuarioSucursalService.modificar($scope.datos).then(function(response){
            if(response.status == 200 && response.data == "true"){

                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.cancelar = function(){
        $location.path( '/usuario-sucursal' );
    }

    var init = function(){
        var urlParams = $location.search().param;
        if(typeof urlParams.usuario == 'undefined'){
            $scope.cancelar();
        }

    $scope.listarTaller();
    $scope.listarUsuarios();

    $timeout( function (){
        $scope.datos.usuario = urlParams.usuario.trim();
        $scope.datos.sucursal = urlParams.sucursal.trim();

        $scope.$apply();
    }, 1000)
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
        var json = angular.toJson(datos);
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

    this.modificar = function (datos){
        var obj = {
            "usuario":datos.usuario,
            "sucursal":datos.sucursal
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/personas/usuario-sucursal/modificar?paramJson='+encoJson)
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
    $scope.listaCredito = [];
    $scope.agregarNotaCredito = false;

    $scope.listarCredito = function(){
        var obj = {
            cliente : $scope.datos.codigoPersona,
            estado: 'PENDIENTE'
        }
        VentasService.listarFondoDebito(obj).then(function(response){
            if(response.status ==200){
                $scope.listaFondoDebito = response.data;
                if($scope.listaFondoDebito.length>0){
                    $scope.agregarNotaCredito=true;

                }
            }else{
                alert("Error al cargar el Fondo Debito");
            }
        })

    }

    $scope.listarCondicionesCompra = function(){
        var json =angular.toJson({"dominio":"CONDICION_PAGO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaCondicionesCompra = response.data;
                $scope.listarCredito();
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
                /*if($scope.agregarNotaCredito==true){
                    $scope.listaMediosPago.push(
                        {"valor":"NOTA CREDITO"}
                    )
                }*/
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
            importe:separadorDeMil($scope.datos.importe)
        }
        $scope.lista.push(obj);
        $scope.datos.medioPago='';
        $scope.datos.marcaTarjeta='';

        if($scope.pagadoTotal){
            $scope.pagadoTotal=$scope.pagadoTotal.replace(/[^0-9]+/g,'');
        }

        $scope.datos.importe=$scope.datos.importe.replace(/[^0-9]+/g,'');
        $scope.datos.montoTotal=$scope.datos.montoTotal.replace(/[^0-9]+/g,'');

        $scope.pagadoTotal = parseInt($scope.pagadoTotal)+parseInt($scope.datos.importe);
        $scope.datos.importe='';
        $scope.datos.cambio =  parseInt($scope.pagadoTotal) -parseInt($scope.datos.montoTotal);

        $scope.pagadoTotal= separadorDeMil($scope.pagadoTotal);
        $scope.datos.montoTotal=separadorDeMil($scope.datos.montoTotal);
        if($scope.datos.cambio<0){
            $scope.datos.cambio = '-'+separadorDeMil($scope.datos.cambio);
        }else{
            $scope.datos.cambio = separadorDeMil($scope.datos.cambio);
        }


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

        for(i=0;i<obj.listaFormaPago.length;i++){
            obj.listaFormaPago[i].importe=obj.listaFormaPago[i].importe.replace(/[^0-9]+/g,'');
        }

        VentasService.facturar(obj).then(function(response){
            if(response.status == 200){
                var resultado = response.data.respuesta;
                if(resultado == "ok"){
                    dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Regostro Exitoso'},{key: false,back: 'static'});
                    $scope.cancelar();
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Registrar'},{key: false,back: 'static'});
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })

    }

    $scope.changeImporte=function(){
        $scope.datos.importe = separadorDeMil($scope.datos.importe);
    }


    function separadorDeMil(numero) {
        if(numero){
            return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
        }
    }

    var init = function(){
        $scope.datos.timbrado=$rootScope.pago.timbrado;
        $scope.datos.caja=$rootScope.pago.caja;
        $scope.datos.cajero=$rootScope.pago.cajero;
        $scope.datos.sucursal=$rootScope.pago.sucursal;
        $scope.datos.codigoPersona=$rootScope.pago.codigoPersona;


        $scope.datos.montoTotal = $rootScope.montoTotal;
        $scope.pagadoTotal = 0;
        $scope.datos.cambio  = '-'+separadorDeMil($scope.datos.montoTotal);
        $scope.datos.montoTotal = separadorDeMil($scope.datos.montoTotal)

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
        for(var j = lista.length; j--;){
            if(lista[j].estado=="REPARADO"){
                lista.splice(j,1);
            }
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
    $scope.listaNotaCredito=[];
    $scope.mostrarItem = false;
    $scope.listaId=null;
    $scope.inhabilitarItem = true;

    $scope.copiar =function(index){
        $scope.mostrarItem = true;
        //$scope.lista[index].estado='COPIADO';
        $scope.itemCredito=  angular.copy($scope.lista[index]);
    }

    $scope.changeNuevoPrecio=function(){
        if($scope.itemCredito.precioNuevo){
            $scope.itemCredito.precioNuevo = Number($scope.itemCredito.precioNuevo.replace(/[^0-9]+/g,''));
        }
        if($scope.itemCredito.precio  && typeof $scope.itemCredito.precio== 'string' ){
            $scope.itemCredito.precio = Number($scope.itemCredito.precio.replace(/[^0-9]+/g,''));
        }
        if(typeof $scope.itemCredito.precioNuevo=="undefined"||$scope.itemCredito.precioNuevo <0 || $scope.itemCredito.precioNuevo> $scope.itemCredito.precio ){
            if(typeof $scope.itemCredito.cantidadNueva=="undefined"||$scope.itemCredito.cantidadNueva <0 || $scope.itemCredito.cantidadNueva> $scope.itemCredito.cantidad ){
                $scope.inhabilitarItem = true;
            }else{
                $scope.inhabilitarItem=false;
            }
        }else{
            $scope.inhabilitarItem=false;
        }
        $scope.nuevoResumen();
    }

    $scope.changeNuevaCantidad=function(){
         if(!typeof $scope.itemCredito.cantidadNueva=='undefined'){
             $cope.itemCredito.cantidadNueva= Number($scope.itemCredito.cantidadNueva);
         }
        if(typeof $scope.itemCredito.cantidadNueva=="undefined"||$scope.itemCredito.cantidadNueva <0 || $scope.itemCredito.cantidadNueva> $scope.itemCredito.cantidad ){
            if(typeof $scope.itemCredito.precioNuevo=="undefined"||$scope.itemCredito.precioNuevo <0 || $scope.itemCredito.precioNuevo> $scope.itemCredito.precio ){
                $scope.inhabilitarItem = true;
            }else{
                $scope.inhabilitarItem=false;
            }

        }else{
            $scope.inhabilitarItem=false;
        }
        $scope.nuevoResumen();
    }

    $scope.nuevoResumen= function(){

        $scope.itemCredito.total = $scope.itemCredito.total.replace(/[^0-9]+/g,'');

        if($scope.itemCredito.precioNuevo && typeof $scope.itemCredito.precioNuevo == 'string'){
            $scope.itemCredito.precioNuevo = $scope.itemCredito.precioNuevo.replace(/[^0-9]+/g,'');
        }
        if($scope.itemCredito.precio && typeof $scope.itemCredito.precio == 'string'){
            $scope.itemCredito.precio = $scope.itemCredito.precio.replace(/[^0-9]+/g,'');
        }

        $scope.itemCredito.total =  nvl($scope.itemCredito.precioNuevo,$scope.itemCredito.precio)
            * nvl($scope.itemCredito.cantidadNueva,$scope.itemCredito.cantidad )
        var nuevoIva = $scope.itemCredito.total/$scope.itemCredito.iva;
        $scope.itemCredito.impuesto = nuevoIva>1? Math.trunc(nuevoIva): 0;

        $scope.itemCredito.total=separadorDeMil($scope.itemCredito.total);
        $scope.itemCredito.precioNuevo=separadorDeMil($scope.itemCredito.precioNuevo);
        $scope.itemCredito.precio=separadorDeMil($scope.itemCredito.precio);
     }

    function nvl(valor1, valor2){
        if(valor1!=null && typeof valor1 != 'undefined' && valor1!='' && valor1!= 'null')
            return valor1;
        return valor2
    }

    $scope.agregarItem = function(){
        var encontrado = false;
        var continuar = true;
        for(i=0;i<$scope.listaNotaCredito.length;i++){
            if($scope.itemCredito.codigoArticulo == $scope.listaNotaCredito[i].codigoArticulo){
                encontrado = true;
            }
        }
        if(encontrado){
            dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Este item ya tiene una referencia, desea reemplazarla?'},{key: false,back: 'static'});
            dlg.result.then(function(resultado){
                continuar = true;
                $scope.agregarElementoListaNotaCredito(encontrado);
            },function(){
                continuar = false;
            });
        }else{
            $scope.agregarElementoListaNotaCredito(encontrado);
        }
    }

    $scope.agregarElementoListaNotaCredito=function(encontrado){
        if($scope.itemCredito.precioNuevo){
            $scope.itemCredito.precio = $scope.itemCredito.precioNuevo;
            delete $scope.itemCredito.precioNuevo;
        }
        if($scope.itemCredito.cantidadNueva){
            $scope.itemCredito.cantidad = $scope.itemCredito.cantidadNueva;
            delete $scope.itemCredito.cantidadNueva;
        }
        if(encontrado){
             for(i=0;i<$scope.listaNotaCredito.length;i++){
                if($scope.listaNotaCredito[i].codigoArticulo == $scope.itemCredito.codigoArticulo){
                    $scope.listaNotaCredito.splice(i, 1);
                    $scope.listaNotaCredito.push($scope.itemCredito);
                }
             }
        }else{
            $scope.listaNotaCredito.push($scope.itemCredito);
        }
        $scope.mostrarItem = false;
    }

    $scope.cambiarMostrarItem =function(){
        $scope.mostrarItem = false;
    }

    $scope.limpiar = function(){
        $scope.inhabilitarAgregar =true;
        $scope.inhabilitarCBarra = false;
        $scope.producto.sucursal = $scope.datos.sucursal;
    }

    $scope.changeCantidad = function(){
        $scope.datos.total = $scope.datos.total.replace(/[^0-9]+/g,'');
        $scope.datos.precio = $scope.datos.precio.replace(/[^0-9]+/g,'');

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
                for(i=0;i<$scope.lista.length;i++){
                    $scope.lista[i].total=separadorDeMil($scope.lista[i].total);
                    $scope.lista[i].precio=separadorDeMil($scope.lista[i].precio);
                    $scope.lista[i].impuesto=separadorDeMil($scope.lista[i].impuesto);
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    $scope.eliminar = function(index) {
        $scope.listaNotaCredito.splice(index, 1);
    }

    $scope.procesar = function(){
        var lista = angular.copy($scope.listaNotaCredito);

        for(i=0;i<lista.length;i++){
            delete lista[i].descripcion
            lista[i].total = lista[i].total.replace(/[^0-9]+/g,'');
            //lista[i].precioNuevo = lista[i].precioNuevo.replace(/[^0-9]+/g,'');
            lista[i].precio = lista[i].precio.replace(/[^0-9]+/g,'');
        }

        var notaCreditoCabecera={
            numeroFactura:$scope.datos.numeroFactura,
            sucursal:$scope.datos.sucursal,
            usuario: $cookies.usuario,
            estado:'ACTIVO'
        }
        var param={
            notaCreditoCabecera: notaCreditoCabecera,
            notaCreditoDetalles: lista
        }
        VentasService.registrarNotaCredito(param).then(function(response){
            if(response.status == 200 && response.data.respuesta ==true){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al guardar'},{key: false,back: 'static'});
            }
        })
    }

    function separadorDeMil(numero) {
        if(numero){
            return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
        }
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

        $scope.datos.fecha =  urlParams.fecha;
        $scope.datos.usuarioTransaccion =  $cookies.usuario;

        $scope.listarDetalleFactura($scope.datos.numeroFactura);
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
        if($scope.datos.precio){
            $scope.datos.precio=$scope.datos.precio.replace(/[^0-9]+/g,'');
        }
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
        if($scope.datos.precio){
            $scope.datos.precio = separadorDeMil($scope.datos.precio);
        }
        if($scope.datos.total){
            $scope.datos.total=separadorDeMil($scope.datos.total);
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
                if($scope.datos.precio){
                    $scope.datos.precio = separadorDeMil($scope.datos.precio);
                }
                if($scope.datos.total){
                    $scope.datos.total=separadorDeMil($scope.datos.total);
                }
            }else{
                $scope.articuloValido  = false;
                $scope.inhabilitarAgregar =true;
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.agregar = function(){
        $scope.datos.total=$scope.datos.total.replace(/[^0-9]+/g,'') ;
        $scope.datos.precio =  $scope.datos.precio.replace(/[^0-9]+/g,'');
        var impuesto =  $scope.datos.total* $scope.datos.grabado/100 ;
        var obj= {
            codigoArticulo: $scope.producto.codigo,
            descripcion: $scope.producto.descripcion,
            cantidad: $scope.datos.cantidad,
            precio: separadorDeMil($scope.datos.precio),
            iva: $scope.datos.grabado,
            impuesto: separadorDeMil(impuesto),
            total: separadorDeMil($scope.datos.total),
            tipo:$scope.articulo.tipo
        }
        $scope.lista.push(obj);
        $scope.limpiarSimple();
    }

    function separadorDeMil(numero) {
        return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
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

    $scope.guardar = function(){
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
            lista[i].total = lista[i].total.replace(/[^0-9]+/g,'');
            lista[i].impuesto = lista[i].impuesto.replace(/[^0-9]+/g,'');
            lista[i].precio = lista[i].precio.replace(/[^0-9]+/g,'');
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
                    $scope.lista[i].total=separadorDeMil($scope.lista[i].total);
                    $scope.lista[i].precio=separadorDeMil($scope.lista[i].precio);
                    $scope.lista[i].impuesto=separadorDeMil($scope.lista[i].impuesto);
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
            /**PARA CARGAR LA SECUENCIA DE LA FACTURA**/
            $scope.secuencia();
        }else{
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

    $scope.listarTipo = function(){
        var json =angular.toJson({"dominio":"TIPO_CUENTA_BANCARIA"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTipo = response.data;
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
        $scope.listarTipo();
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

    $scope.listarTipo = function(){
        var json =angular.toJson({"dominio":"TIPO_CUENTA_BANCARIA"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTipo = response.data;
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
        $scope.listarTipo();
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

    $scope.listarTipo = function(){
        var json =angular.toJson({"dominio":"TIPO_CUENTA_BANCARIA"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaTipo = response.data;
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
        $scope.datos.codigo  = $scope.datos.codigo;
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
        $scope.listarTipo();
        $scope.listarBancos();

        $timeout( function (){
            $scope.datos.codigo = urlParams.codigo;
            $scope.datos.banco = urlParams.banco;
            $scope.datos.tipo = urlParams.tipo;
            $scope.datos.fondo = urlParams.fondo;
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
            "usuario": datos.usuario ,
            "fondo": datos.fondo,
            "tipo": datos.tipo
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
            "estado": datos.estado,
            "fondo": datos.fondo,
            "tipo": datos.tipo
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
        PersonasService.listarComplex($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.lista = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
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

app.controller('agregarPersonasController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService, ClientesService, RolesService, PersonasService,  $timeout, UtilService) {
    $scope.datos = {};
    $scope.datosAux = {};
    $scope.listaPaises= [];
    $scope.listaCiudades= [];
    $scope.listaBarrios= [];
    $scope.listaSexos= [];
    $scope.listaNacionalidades =[];
    $scope.listaRoles = [];
    $scope.listaPersonas ={};
    $scope.existeEnPersonas = false;

    function nvl(valor1, valor2){
        if(valor1!=null && typeof valor1 != 'undefined' && valor1!='' && valor1!= 'null')
            return valor1;
        return valor2
    }

    $scope.limpiar = function() {
        $scope.datos = {};
        $scope.lista = [];
    }

    $scope.buscarExistePersonas= function(){
        var obj = {cedula: $scope.datos.cedula}
        $scope.datosAux.cedula = $scope.datos.cedula;
        PersonasService.listar(obj).then(function(response){
            if(response.status == 200){
                if(response.data.length>1){
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }else if(response.data.length==1){
                    $scope.existeEnPersonas = true;
                    $scope.datos.codigo = response.data[0].codigo;
                    $scope.datosAux.codigo =  $scope.datos.codigo;
                    $scope.datos.nombre = response.data[0].nombre;
                    $scope.datos.apellido = response.data[0].apellido;
                    $scope.datos.ruc = response.data[0].ruc;
                    $scope.datos.cedula = response.data[0].cedula;
                    $scope.datos.telefono = response.data[0].telefono;
                    $scope.datos.celularPrincipal = response.data[0].celularPrincipal;
                    $scope.datos.celularSecundario = response.data[0].celularSecundario;
                    var fecha  = new Date(response.data[0].fechaNacimiento);
                    $scope.datos.fechaNacimiento = fecha.getFullYear()+'-'+formatMesDia(fecha.getMonth())+'-'+formatMesDia(fecha.getDate());
                    $scope.datos.nacionalidad = response.data[0].nacionalidad;
                    $scope.datos.pais = response.data[0].pais;
                    $scope.datos.ciudad = response.data[0].ciudad;
                    $scope.datos.barrio = response.data[0].barrio;
                    $scope.datos.direccion = response.data[0].direccion;
                    $scope.datos.correoElectronico = response.data[0].correoElectronico;
                    $scope.datos.sexo = response.data[0].sexo.trim();
                }
                else{
                    $scope.existeEnPersonas = false;
                    $scope.limpiar();
                    $scope.datos.cedula = $scope.datosAux.cedula;
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
            if($scope.existeEnPersonas==true){
                $scope.bloquearCamposSecundarios=true;
            }
            else{
                $scope.bloquearCamposSecundarios=false;
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
        if($scope.mostrarProveedor==true){
            $location.path( '/proveedores' );
        }
        if($scope.mostrarClientes==true){
            $location.path( '/clientes' );
        }
        if($scope.mostrarUsuarios==true){
            $location.path( '/usuarios' );
        }else{
            $location.path( '/personas' );
        }
    }

    $scope.asignarProveedor = function(){
            $location.path( '/proveedores/agregar').search({param: $scope.datosAux, other:'ok'});
    }

    $scope.asignarClientes = function(){
        $location.path( '/clientes/agregar').search({param: $scope.datosAux, other:'ok'});
    }

    $scope.asignarUsuarios = function(){
        $location.path( '/usuarios/agregar').search({param: $scope.datosAux, other:'ok'});
    }

    $scope.agregar = function() {
        PersonasService.insertar($scope.datos).then(function(response){
            if(response.status == 200 && response.data=="true"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
            }
        })
    }

    $scope.habilitarCamposSecundarios= function(){
        if( $scope.datos.cedula ){
            $scope.buscarExistePersonas();

        }else{
            $scope.bloquearCamposSecundarios=false;
        }
    }

    var init = function(){
            $scope.bloquearCamposSecundarios=true;
            $scope.listarPaises();
            $scope.listarCiudades();
            $scope.listarBarrios();
            $scope.listarSexos();
            $scope.listarNacionalidades();

        var urlParams = $location.search().param;
        if(  urlParams == 'proveedor'){
            $scope.mostrarProveedor=true
            $scope.titulo = "Proveedor";
        }
        if(  urlParams == 'clientes'){
            $scope.mostrarClientes=true
            $scope.titulo = "Clientes";
        }
        else if(  urlParams == 'usuarios'){
            $scope.mostrarUsuarios=true

        }
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

    $scope.guardar = function() {
        PersonasService.modificar($scope.datos).then(function(response){
            if(response.status == 200 && response.data == "true"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al crear'},{key: false,back: 'static'});
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
            $scope.datos.sexo = urlParams.sexo.trim();
            /*var parametroFecha= urlParams.fechaNacimiento;
            var day = parseInt(parametroFecha.substr(4,6));
            var month = parseInt(parametroFecha.substr(0,3));
            var year = parseInt(parametroFecha.substr(7,10));*/
            var fecha =   new Date(urlParams.fechaNacimiento);
            //var fecha =   new Date('year,month,day');
            var fechaformateada = fecha.getFullYear()+'-'+formatMesDia(fecha.getMonth())+'-'+formatMesDia(fecha.getDate());
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
            $scope.datos.estado = urlParams.estado.trim();
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
    this.listar = function(datos) {
        var jsonObj = angular.toJson(datos);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/personas/personas/listar/' +encoJson)
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
        var myResponseData = $http.post('http://localhost:8080/panda-sys/webapi/personas/personas/modificar?paramJson='+encoJson)
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


app.directive('kaka', function() {
    return {
        restrict: "A",
        require: "?ngModel",
        link: function(scope, el, attrs, ctrl) {

            scope.$watch(attrs.kaka, function(value) {

                ctrl.$setViewValue(123);
                ctrl.$render();

            });
        }
    };
});



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
    $scope.mostrarParametros = false;
    $scope.params = [];
    $scope.paramsConcatenados = "";
    $scope.listaParametroSelect= [];


    $scope.listarModulos = function(){
        var json =angular.toJson({"dominio":"MODULOS"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaModulos = response.data;
            }else{
                alert("Error al cargar los Modulos");
            }
        })
    }

    $scope.listarReportes = function(){
        $scope.datos.nombre=null;
        $scope.limpiar();
        if($scope.datos.modulo){
            ReportesService.listar($scope.datos.modulo).then(function(response){
                if(response.status ==200){
                    $scope.listaReportes = response.data;
                }else{
                    alert("Error al cargar los Reportes");
                }
           })
        }
    }

    $scope.changeReporte= function(){
        $scope.params=[];
        $scope.paramsConcatenados = "";
        for(j=0;j<$scope.listaReportes.length;j++){
            if($scope.listaReportes[j].nombre==$scope.datos.nombre){
                $scope.datos.descripcion =  $scope.listaReportes[j].descripcion;
                $scope.datos.path =  $scope.listaReportes[j].path;
                $scope.datos.reporteId = $scope.listaReportes[j].id;
                $scope.listarParametros();
            }
        }
    }

    $scope.limpiar= function(){
        $scope.datos.descripcion = null;
        $scope.datos.path = null;
    }

    $scope.limpiarTodo= function(){
        $scope.datos = {};
        $scope.mostrarParametros = true;
        $scope.params = [];
        $scope.paramsConcatenados = "";
        $scope.listaParametroSelect= [];
    }

    $scope.reportePrueba = function(){
         $window.open('http://localhost:8081/jasperserver/rest_v2/reports/reports/prueba2.pdf', '_blank');
    }

    $scope.openTab= function(){
        var path ='http://localhost:8081/jasperserver/rest_v2/reports/'+$scope.datos.path+'.pdf?'
        if($scope.params.length>0){
            var keyNames = Object.keys( $scope.params);
            console.log(keyNames);
            for(i=0;i<$scope.params.length;i++){
                var cont = 1;
                var paramsElements = $scope.params[i];
                for (var key in paramsElements) {
                    if (paramsElements.hasOwnProperty(key)) {
                        path+=key+'='+paramsElements[key];
                    }
                    if(cont< $scope.params.length){
                        path+='&';
                    }
                    cont++;
                }
            }
            path+="&j_username=jasperadmin&j_password=jasperadmin"
        }else{
            path+="j_username=jasperadmin&j_password=jasperadmin"
        }
        $window.open(path);
        //$scope.limpiarTodo();
    }

    $scope.separadorDeMilesTelefono = function() {
        var cadena = $scope.datos.telefono.replace(/[^0-9]+/g,'');
        $scope.datos.telefono=  Number(cadena).toLocaleString();
    }

    $scope.listarParametros = function(){
        $scope.listaParametros= [];
        var obj={
            id:$scope.datos.reporteId
        }
        ReportesService.listarReporteParametros(obj).then(function(response){
            if(response.status ==200){
                if(response.data.length>0){
                    $scope.mostrarParametros = true;
                    $scope.listaParametros = response.data;
                }else{
                    $scope.mostrarParametros = false
                }

            }else{
                alert("Error al cargar los Reportes");
            }
        })

    }

    $scope.changeParametro = function(){

    }

    $scope.agregarParametro= function(){
        var obj={};
        obj[$scope.datos.paramLabel]= $scope.datos.paramValor;
        $scope.params.push(obj);
        $scope.paramsConcatenados = $scope.paramsConcatenados +' {"'+$scope.datos.paramLabel+'":"'+$scope.datos.paramValor+'"} ';
        delete $scope.datos.paramLabel;
        delete $scope.datos.paramValor;
    }

    $scope.limpiarParametro = function(){
        $scope.paramsConcatenados = "";
        $scope.params=[];
    }

    var init= function(){
        $scope.listarModulos();
//        $scope.listaParametros = [
//            {
//                "parametro": 'facturaId',
//                "tipoDato": 'LONG'
//            }
//        ]
    }

    init();

});

/*app.service('ReportesService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listar = function(modulo) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/reportes/listar/' +modulo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});*/

app.directive('separar-miles', ['$filter',
    function($filter) {
        return {
            require: '?ngModel',
            link: function(scope, elem, attrs, ctrl) {
                if (!ctrl) return;

                ctrl.$formatters.push(function(a) {

                    return $filter('number')(ctrl.$modelValue)
                });


                ctrl.$parsers.unshift(function(viewValue) {


                    var val = viewValue.replace(/[A-Za-z$-]/g, "");
                    var plainNumber = val.replace(/\./g, '');
                    var plainNumber = plainNumber.replace(/\,/g, '.');


                    var input = plainNumber.toString().replace("([^0-9]|[^a-zA-Z]|-)", "");

                    input = input.toString().replace(/\./g, ',');

                    input = input.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                    elem.val(input);

                    return plainNumber;
                });
            }
        };
    }
])


app.directive('updateModel', function($parse) {
    return {
        require: 'ngModel',
        restrict: 'A',
        link: function(scope, el, attrs, ctrl) {

            ctrl.$parsers.push(function(input) {
                //ctrl.$setViewValue(123);
                //ctrl.$render();
                return input ? input+'456' : "";
            });

            scope.$watch(attrs.updateModel, function(value) {

                ctrl.$setViewValue(123);
                ctrl.$render();

            });
        }
    };
});


app.controller('ajusteInventarioNegativoController', function($scope, $location, $rootScope, $cookies, $dialogs, ArticulosService, ValoresService, InventarioService, UsuariosService) {
    $scope.datos = {};
    $scope.lista = [];
    $scope.listaUsuarios=[];
    $scope.tipoAjuste = "Negativo"

    $scope.listarUsuarios= function(){
        var json = angular.toJson({});
        UsuariosService.listarJson(json).then(function(response){
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
            lista[i].cantidad = lista[i].cantidad *-1;
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




app.controller('notaDebitoController', function($scope, $location, $rootScope, $cookies, $dialogs, AccesosService, UtilService, ArticulosService, ClientesService, VentasService, CajasService, UsuarioSucursalService, ComprasService) {

    $scope.datos = {};
    $scope.producto = {}
    $scope.inhabilitarAgregar =true;
    $scope.inhabilitarCBarra = false;
    $scope.listaArticulos=[];
    $scope.listaNotaCredito=[];
    $scope.mostrarItem = false;
    $scope.listaId=null;
    $scope.inhabilitarItem = true;

    $scope.copiar =function(index){
        $scope.mostrarItem = true;
        $scope.itemCredito=  angular.copy($scope.lista[index]);
    }

    $scope.changeNuevoPrecio=function(){
        if($scope.itemCredito.precioNuevo){
            $scope.itemCredito.precioNuevo = Number($scope.itemCredito.precioNuevo.replace(/[^0-9]+/g,''));
        }
        if($scope.itemCredito.precio  && typeof $scope.itemCredito.precio== 'string' ){
            $scope.itemCredito.precio = Number($scope.itemCredito.precio.replace(/[^0-9]+/g,''));
        }
        if(typeof $scope.itemCredito.precioNuevo=="undefined"||$scope.itemCredito.precioNuevo <0 || $scope.itemCredito.precioNuevo> $scope.itemCredito.precio ){
            if(typeof $scope.itemCredito.cantidadNueva=="undefined"||$scope.itemCredito.cantidadNueva <0 || $scope.itemCredito.cantidadNueva> $scope.itemCredito.cantidad ){
                $scope.inhabilitarItem = true;
            }else{
                $scope.inhabilitarItem=false;
            }
        }else{
            $scope.inhabilitarItem=false;
        }
        $scope.nuevoResumen();
        //$scope.itemCredito.precioNuevo=  Number($scope.itemCredito.precioNuevo).toLocaleString();
    }

    $scope.changeNuevaCantidad=function(){
        if(!typeof $scope.itemCredito.cantidadNueva=='undefined'){
            $cope.itemCredito.cantidadNueva= Number($scope.itemCredito.cantidadNueva);
        }
        if(typeof $scope.itemCredito.cantidadNueva=="undefined"||$scope.itemCredito.cantidadNueva <0 || $scope.itemCredito.cantidadNueva> $scope.itemCredito.cantidad ){
            if(typeof $scope.itemCredito.precioNuevo=="undefined"||$scope.itemCredito.precioNuevo <0 || $scope.itemCredito.precioNuevo> $scope.itemCredito.precio ){
                $scope.inhabilitarItem = true;
            }else{
                $scope.inhabilitarItem=false;
            }

        }else{
            $scope.inhabilitarItem=false;
        }
        $scope.nuevoResumen();
    }

    $scope.nuevoResumen= function(){
        if($scope.itemCredito.precioNuevo && typeof $scope.itemCredito.precioNuevo == 'string'){
            $scope.itemCredito.precioNuevo = $scope.itemCredito.precioNuevo.replace(/[^0-9]+/g,'');
        }

        if($scope.itemCredito.precio && typeof $scope.itemCredito.precio == 'string'){
                $scope.itemCredito.precio = $scope.itemCredito.precio.replace(/[^0-9]+/g,'');
        }

        $scope.itemCredito.total =  nvl($scope.itemCredito.precioNuevo,$scope.itemCredito.precio)
            * nvl($scope.itemCredito.cantidadNueva,$scope.itemCredito.cantidad )
        var nuevoIva = 0;
        if($scope.itemCredito.iva==5){
            nuevoIva = $scope.itemCredito.total/21;
        }else{
            nuevoIva = $scope.itemCredito.total/11;
        }

        $scope.itemCredito.impuesto = nuevoIva>1? Math.trunc(nuevoIva): 0;
        $scope.itemCredito.impuesto = separadorDeMil($scope.itemCredito.impuesto);
        $scope.itemCredito.total = separadorDeMil($scope.itemCredito.total);
        $scope.itemCredito.precioNuevo = separadorDeMil($scope.itemCredito.precioNuevo);
        $scope.itemCredito.precio = separadorDeMil($scope.itemCredito.precio);
    }

    function nvl(valor1, valor2){
        if(valor1!=null && typeof valor1 != 'undefined' && valor1!='' && valor1!= 'null')
            return valor1;
        return valor2
    }

    $scope.agregarItem = function(){
        var encontrado = false;
        var continuar = true;
        for(i=0;i<$scope.listaNotaCredito.length;i++){
            if($scope.itemCredito.codigoArticulo == $scope.listaNotaCredito[i].codigoArticulo){
                encontrado = true;
            }
        }
        if(encontrado){
            dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Este item ya tiene una referencia, desea reemplazarla?'},{key: false,back: 'static'});
            dlg.result.then(function(resultado){
                continuar = true;
                $scope.agregarElementoListaNotaCredito(encontrado);
            },function(){
                continuar = false;
            });
        }else{
            $scope.agregarElementoListaNotaCredito(encontrado);
        }
    }

    $scope.agregarElementoListaNotaCredito=function(encontrado){
        if($scope.itemCredito.precioNuevo){
            $scope.itemCredito.precio = $scope.itemCredito.precioNuevo;
            delete $scope.itemCredito.precioNuevo;
        }
        if($scope.itemCredito.cantidadNueva){
            $scope.itemCredito.cantidad = $scope.itemCredito.cantidadNueva;
            delete $scope.itemCredito.cantidadNueva;
        }
        if(encontrado){
            for(i=0;i<$scope.listaNotaCredito.length;i++){
                if($scope.listaNotaCredito[i].codigoArticulo == $scope.itemCredito.codigoArticulo){
                    $scope.listaNotaCredito.splice(i, 1);
                    $scope.listaNotaCredito.push($scope.itemCredito);
                }
            }
        }else{
            $scope.listaNotaCredito.push($scope.itemCredito);
        }
        $scope.mostrarItem = false;
    }

    $scope.cambiarMostrarItem =function(){
        $scope.mostrarItem = false;
    }

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

    $scope.cancelar = function() {
        $location.path( '/compras' );
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

    function separadorDeMil(numero) {
        if(numero){
            return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
        }
    }

    $scope.listarDetalle = function(id){
        ComprasService.listarDetalleRegistro(id).then(function(response){
            if(response.status == 200){
                $scope.lista =response.data;
                for(i=0;i<$scope.lista.length;i++){
                    $scope.lista[i].precio = separadorDeMil($scope.lista[i].precio);
                    $scope.lista[i].total = separadorDeMil($scope.lista[i].total);
                    $scope.lista[i].impuesto = separadorDeMil($scope.lista[i].impuesto);
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    $scope.eliminar = function(index) {
        $scope.listaNotaCredito.splice(index, 1);
    }

    $scope.procesar = function(){
        var listaDetalle = angular.copy($scope.listaNotaCredito)
        for(i=0;i<listaDetalle.length;i++){
            delete listaDetalle[i].descripcion;
            listaDetalle[i].precio = listaDetalle[i].precio.replace(/[^0-9]+/g,'');
            listaDetalle[i].total = listaDetalle[i].total.replace(/[^0-9]+/g,'');
            listaDetalle[i].impuesto = listaDetalle[i].impuesto.replace(/[^0-9]+/g,'');
        }
        var notaCreditoCabecera={
            numeroRegistroCompra:$scope.datos.codigo,
            sucursal:$scope.datos.sucursal,
            usuario: $cookies.usuario,
            estado:'ACTIVO'
        }
        var param={
            cabecera: notaCreditoCabecera,
            detalle:  listaDetalle
        }
        ComprasService.registrarNotaDebito(param).then(function(response){
            if(response.status == 200 && response.data =="true"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al guardar'},{key: false,back: 'static'});
            }
        })
    }

    var init = function(){
        var urlParams = $location.search().param;
        $scope.datos.sucursal = urlParams.sucursal;
        $scope.datos.codigo = urlParams.codigo;
        $scope.datos.proveedor = urlParams.proveedor;
        $scope.datos.usuario = urlParams.usuario;
        $scope.datos.fecha =  urlParams.fecha;
        $scope.datos.usuarioTransaccion =  $cookies.usuario;
        $scope.listarDetalle($scope.datos.codigo);
    }

    init();
});



app.controller('pagoProveedoresController', function($scope, $location, $rootScope, $cookies, $dialogs, ProveedoresService, PagosService,ValoresService) {

    $scope.datos = {};
    $scope.inhabilitarCambio = true;
    $rootScope.dir ='/pago-proveedores';

    $scope.limpiar = function(){
        $scope.datos = {}
        $scope.lista = [];
    }

    $scope.listarProveedores= function(){
        ProveedoresService.listarSinParametro().then(function(response){
            if(response.status ==200){
                $scope.listaProveedores = response.data;
            }else{
                alert("Error al cargar los Impuestos");
            }
        })
    }

    $scope.buscar= function(){
        var obj = {
            documentoNumero: $scope.datos.documentoNumero,
            documento: $scope.datos.documento,
            estado: $scope.datos.estado,
            nombre: $scope.datos.nombre
        }
        var json = angular.toJson(obj);
        var encoJson = encodeURIComponent(json);
        PagosService.listarPorProveedores(encoJson).then(function(response){
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
                for(i=0;i<$scope.lista.length;i++){
                    $scope.lista[i].monto=separadorDeMil($scope.lista[i].monto);
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

    $scope.foo = function (index) {
        var element =  $scope.lista[index];
        for(i=0;i<$scope.lista.length;i++){
            if(element.codigo == $scope.lista[i].codigo){
                if($scope.lista[i].checkActivo=='S'){
                    $scope.lista[i].checkActivo = 'N';
                }else{
                    $scope.lista[i].checkActivo = 'S';
                }
            }
        }
        var activos = false;
        for(j=0;j<$scope.lista.length;j++){
            if($scope.lista[j].checkActivo=='S'){
                activos= true;
                break;
            }

        }
        if(activos==true){
            $scope.inhabilitarCambio= false;
        }
        else{
            $scope.inhabilitarCambio= true;
        }
    }


    $scope.generarCheque = function(index) {
        var listaCopy  = angular.copy($scope.lista);
        $scope.listaACobrar=[];
        for(i=0;i<listaCopy.length;i++){
            if(listaCopy[i].checkActivo=='S'){
                $scope.listaACobrar.push(listaCopy[i]);
            }
        }
        for(j=0;j<$scope.listaACobrar.length;j++){
            delete $scope.listaACobrar[j].checkActivo;
            delete $scope.listaACobrar[j].fecha;
        }
        $location.path( '/pagos/generar-cheque').search({param: $scope.listaACobrar, other:'ok'});
    }

    $scope.efectivizar =function(){
        var listaCopy  = angular.copy($scope.lista);
        $scope.listaACobrar=[];
        for(i=0;i<listaCopy.length;i++){
            if(listaCopy[i].checkActivo=='S'){
                $scope.listaACobrar.push(listaCopy[i]);
            }
        }
        for(j=0;j<$scope.listaACobrar.length;j++){
            delete $scope.listaACobrar[j].checkActivo;
            delete $scope.listaACobrar[j].fecha;
        }
        var fondoDebito = {
            "documento": $scope.listaACobrar[0].documento,
            "documentoNumero": $scope.listaACobrar[0].documentoNumero
        }
        PagosService.efectivizar(fondoDebito, $cookies.usuario).then(function(response){
            if(response.status == 200 && response.data.respuesta =="OK"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.buscar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al guardar. '+response.data.respuesta},{key: false,back: 'static'});
            }
        })
    }


    function separadorDeMil(numero) {
        return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
    }

    var init = function(){
        var urlParams = $location.search().param;
        if(urlParams){
           $scope.datos.documento ='COMPRA';
           $scope.datos.documentoNumero =urlParams.codigo;
        }
        $scope.listarProveedores();
        $scope.listarEstados();
        $scope.buscar();
    }

    init();
});

app.controller('generarChequeController', function($scope, $location, $rootScope, $cookies, $dialogs, ValoresService,CuentasBancariasService, PagosService,NumerosChequeService) {
    $scope.datos = {};
    $scope.direccionRetorno = "";

    $scope.cancelar = function(){
        $location.path($scope.direccionRetorno);
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

    $scope.changeBancos = function(){
        delete $scope.datos.cuentaBancaria;
        delete $scope.datos.numerosCheque;
        $scope.listaCuentasBancarias = [];
        if($scope.datos.banco){
            $scope.listarCuentasBancarias();
        }else{

        }
    }

    $scope.listarCuentasBancarias = function(){
        var obj = {};
        if($scope.datos.banco!= null && typeof $scope.datos.banco != undefined && $scope.datos.banco!= '' ){
            obj = {
                "banco":$scope.datos.banco
            }
        }
        CuentasBancariasService.listar(obj).then(function(response){
            if(response.status ==200){
                $scope.listaCuentasBancarias = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    $scope.changeCuentaBancaria = function(){
        if($scope.datos.cuentaBancaria){
            $scope.listarNumeroCheque();
        }
    }

    $scope.listarNumeroCheque=function(){
        var obj={
            "banco":$scope.datos.banco,
            "cuentaBancaria":$scope.datos.cuentaBancaria,
            "estado":'DISPONIBLE'
        }
        NumerosChequeService.listar(obj).then(function(response){
            if(response.status == 200){
                $scope.listaNumerosCheque = response.data;
                //for(i=0;i<$scope.lista.length;i++){
                //    $scope.lista[i].monto=separadorDeMil($scope.lista[i].monto);
                //}
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    function separadorDeMil(numero) {
        return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
    }

    $scope.generarCheque =function(){
        var cheque = {
            "monto": $scope.datos.total.replace(/[^0-9]+/g,''),
            "numeroCheque": $scope.datos.numeroCheque,
            "banco": $scope.datos.banco,
            "codigoPersona": $scope.lista[0].codigoPersona,
            "nombreApellido": $scope.lista[0].nombre,
            "cuentaBancaria": $scope.datos.cuentaBancaria,
            "documento": $scope.lista[0].documento,
            "documentoNumero": $scope.lista[0].documentoNumero
        }
        PagosService.generarCheque(cheque, $cookies.usuario).then(function(response){
            if(response.status == 200 && response.data.respuesta =="OK"){
                dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Guardado existoso'},{key: false,back: 'static'});
                $scope.cancelar();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al guardar. '+response.data.respuesta},{key: false,back: 'static'});
            }
        })
    }

    var init = function(){
        var urlParams = $location.search().param;
        if(!urlParams.length){
            $scope.cancelar();
        }
        $scope.lista = urlParams;
        $scope.datos.total = 0;
        for(i=0;i<$scope.lista.length;i++){
            $scope.datos.total =parseInt($scope.datos.total)+ parseInt($scope.lista[i].monto.replace(/[^0-9]+/g,''));
        }
        $scope.datos.total = separadorDeMil($scope.datos.total);
        $scope.listarBancos();

        //$scope.listaNumerosCheque.push({"numero":1234})
        $scope.direccionRetorno =$rootScope.dir

    }

    init();
});



app.controller('verCompraController', function($scope, $location, $rootScope, $cookies, $dialogs, ComprasService) {

    $scope.datos = {};

    $scope.cancelar =function(){
        $location.path("/compras");
    }

    function separadorDeMil(numero) {
        if(numero){
            return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
        }
    }

    $scope.listarDetalle = function(id){
        ComprasService.listarDetalleRegistro(id).then(function(response){
            if(response.status == 200){
                $scope.lista =response.data;
                for(i=0;i<$scope.lista.length;i++){
                    $scope.lista[i].precio = separadorDeMil($scope.lista[i].precio);
                    $scope.lista[i].total = separadorDeMil($scope.lista[i].total);
                    $scope.lista[i].impuesto = separadorDeMil($scope.lista[i].impuesto);
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };


    $scope.listarNC = function(id){

        ComprasService.listarNC(id).then(function(response){
            if(response.status == 200){
                $scope.lista =response.data;
                for(i=0;i<$scope.lista.length;i++){
                    $scope.lista[i].precio = separadorDeMil($scope.lista[i].precio);
                    $scope.lista[i].total = separadorDeMil($scope.lista[i].total);
                    $scope.lista[i].impuesto = separadorDeMil($scope.lista[i].impuesto);
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    var init =function(){
        var urlParams = $location.search().param;
        if(typeof urlParams.titulo == 'undefined'){
            $scope.cancelar();
        }else if(urlParams.esNC == "SI"){
            /**Es nota credito**/
            $scope.listarNC(urlParams.codigo);
        }else{
            $scope.datos=urlParams;
            if($scope.datos.estado=='ACTIVO'){
                $scope.listarDetalle($scope.datos.codigo);
                delete $scope.datos.plazo;
            }else if("RECEPCIONADO"){
                $scope.listarDetalle($scope.datos.codigo);
            }else if("CON ND"){
                $scope.listarDetalle($scope.datos.codigo);
            }else{
                alert("FUCK NINGEN");
            }
        }
    }

    init();
});

app.controller('cobrosController', function($scope, $location, $rootScope, $cookies, $dialogs, CobrosService, ValoresService) {
    $scope.datos = {};
    $scope.inhabilitarCambio= true;
    $scope.inhabilitarAnular= true;

    function separadorDeMil(numero) {
        if(numero){
            return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
        }
    }

    $scope.buscar = function(){
        $scope.listarFondoCredito();
    }

    $scope.listarFondoCredito = function(){
        CobrosService.listarFondoCredito($scope.datos).then(function(response){
            if(response.status == 200){
                $scope.lista =response.data;
                for(var j = $scope.lista.length; j--;){
                    if($scope.lista[j].estado=="ANULADO"){
                        $scope.lista.splice(j,1);
                    }
                }

                for(i=0;i<$scope.lista.length;i++){
                    $scope.lista[i].monto = separadorDeMil($scope.lista[i].monto);
                }
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    $scope.listarEstados= function(){
        var json =angular.toJson({"dominio":"ESTADOS_FONDO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaEstados = response.data;
            }else{
                alert("Error al cargar los Estados");
            }
        })
    }

    $scope.foo = function (index) {
        var element =  $scope.lista[index];
        for(i=0;i<$scope.lista.length;i++){
            if(element.codigo == $scope.lista[i].codigo){
                if($scope.lista[i].checkActivo=='S'){
                    $scope.lista[i].checkActivo = 'N';
                }else{
                    $scope.lista[i].checkActivo = 'S';
                }
            }
        }
        var activos = false;
        var cantidadActivos = 0;
        var estadoActivo = "";
        var habCambioPorEstado = true;
        for(j=0;j<$scope.lista.length;j++){
            if($scope.lista[j].checkActivo=='S'){
                activos= true;
                cantidadActivos++;
                estadoActivo = $scope.lista[j].estado;
                if($scope.lista[j].estado!='PENDIENTE'){
                    habCambioPorEstado = false;
                }
            }
        }
        if(activos==true){
            if(habCambioPorEstado){
                $scope.inhabilitarCambio= false;
            }else{
                $scope.inhabilitarCambio= true;
            }


            if(cantidadActivos==1 && estadoActivo=='COBRADO'){
                $scope.inhabilitarAnular= false;
            }else{
                $scope.inhabilitarAnular= true;
            }
        }
        else{
            $scope.inhabilitarCambio= true;
            $scope.inhabilitarAnular= true;
        }
    }

    $scope.cobrar = function(index) {
        var listaCopy  = angular.copy($scope.lista);
        $scope.listaACobrar=[];
        for(i=0;i<listaCopy.length;i++){
            if(listaCopy[i].checkActivo=='S'){
                $scope.listaACobrar.push(listaCopy[i]);
            }
        }
        for(j=0;j<$scope.listaACobrar.length;j++){
            delete $scope.listaACobrar[j].checkActivo;
            delete $scope.listaACobrar[j].fecha;
        }
        $location.path( '/cobros/cobrar').search({param: $scope.listaACobrar, other:'ok'});
    }

    $scope.anular = function(index) {
        var listaCopy  = angular.copy($scope.lista);
        $scope.listaACobrar=[];
        for(i=0;i<listaCopy.length;i++){
            if(listaCopy[i].checkActivo=='S'){
                $scope.listaACobrar.push(listaCopy[i]);
            }
        }
        for(j=0;j<$scope.listaACobrar.length;j++){
            delete $scope.listaACobrar[j].checkActivo;
            delete $scope.listaACobrar[j].fecha;
        }
        $location.path( '/cobros/anular').search({param: $scope.listaACobrar, other:'ok'});
    }


    $scope.limpiar = function(){
        $scope.lista = [];
        $scope.datos = {};
        $scope.inhabilitarCambio= true;
        $scope.inhabilitarAnular= true;
    }

    var init = function(){
        $scope.listarFondoCredito();
        $scope.listarEstados();
    }

    init();
});


app.service('CobrosService', function($http) {
    delete $http.defaults.headers.common['X-Requested-With'];

    this.listarFondoCredito = function(datos) {
        var jsonObj = angular.toJson(datos);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/cobros/listar-fondo-credito?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.cobrar = function(datos) {
        var jsonObj = angular.toJson(datos);
        var encoJson = encodeURIComponent(jsonObj);
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/cobros/cobrar?paramJson='+encoJson)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.listarReciboCabecera = function(codigo) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/cobros/listar-recibo-cabecera/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

    this.anularCobro = function(codigo) {
        var myResponseData = $http.get('http://localhost:8080/panda-sys/webapi/cobros/anular-cobro/'+codigo)
            .then(function (response) {
                return response;
            });
        return myResponseData;
    }

});

app.controller('anularCobrosController', function($scope, $location, $rootScope, $cookies, $dialogs, CobrosService) {
    $scope.datos = {};


    $scope.cancelar = function(){
        $location.path( '/cobros' );
    }

    $scope.listarFondoCredito = function(){
        $scope.total=0;
        CobrosService.listarFondoCredito($scope.datos).then(function(response){
            if(response.status ==200){
                $scope.lista = response.data;
                for(i=0;i<$scope.lista.length;i++){
                    $scope.total += parseInt($scope.lista[i].monto);
                    $scope.lista[i].monto=separadorDeMil($scope.lista[i].monto);
                }
                $scope.total = separadorDeMil($scope.total);
            }else{
                alert("Error al cargar los Fondos Creditos");
            }
        })
    }

    $scope.listarReciboCabecera = function(){
        CobrosService.listarReciboCabecera($scope.datos.cobroDetalle).then(function(response){
            if(response.status ==200){
                var respuesta = response.data;
                $scope.datos.nombre = respuesta[0].nombrePersona;
                $scope.datos.codigoPersona = respuesta[0].codigoPersona;
            }else{
                alert("Error al cargar los Fondos Creditos");
            }
        })
    }

    function separadorDeMil(numero) {
        if(numero){
            return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
        }
    }

    $scope.anular= function(){
        dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:'Esta seguro que desea Anular?'},{key: false,back: 'static'});
        dlg.result.then(function(resultado){
            CobrosService.anularCobro($scope.datos.cobroDetalle).then(function(response){
                if(response.status == 200){
                    var resultado = response.data.respuesta;
                    if(resultado == "OK"){
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Anulacion Exitosa'},{key: false,back: 'static'});
                        $scope.cancelar();
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Anular'},{key: false,back: 'static'});
                    }
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            });

        },function(){
            //$scope.name = 'You decided not to enter in your name, that makes me sad.';
        });
    }


    var init = function(){
        var lista = $location.search().param;
        if(!Array.isArray(lista) || typeof lista[0].monto == 'undefined'){
            $scope.cancelar();
        }
        $scope.datos.cobroDetalle = lista[0].cobroDetalle;
        $scope.listarFondoCredito();
        $scope.listarReciboCabecera();
    }

    init();
});

app.controller('cobrarController', function($scope, $location, $rootScope, $cookies, $dialogs, PersonasService,ValoresService, VentasService, CobrosService, CajasService){
    $scope.datos = {};
    $scope.lista = [];
    $scope.personaEncontrada = false;
    $scope.inhabilitarTC = true;
    $scope.agregarNotaCredito = false;
    $scope.listaPago = [];
    $scope.datos.importeTotal = '0';
    $scope.showPrincipal = true;
    $scope.inhabilitarAgregarNC= true;

    $scope.cancelar = function(){
        $location.path( '/cobros' );
    }

    $scope.cancelarNC = function(){
        $scope.showPrincipal = true;
    }

    $scope.listarCredito = function(codigoPersona){
        var obj = {
            cliente : codigoPersona,
            estado: 'PENDIENTE'
        }
        VentasService.listarFondoDebito(obj).then(function(response){
            if(response.status ==200){
                $scope.listaFondoDebito = response.data;
                if($scope.listaFondoDebito.length>0){
                    $scope.agregarNotaCredito=true;
                }
                for(i=0;i<$scope.listaFondoDebito.length;i++){
                    $scope.listaFondoDebito[i].monto=separadorDeMil($scope.listaFondoDebito[i].monto);
                }

                $scope.listarMediosPago();
            }else{
                alert("Error al cargar el Fondo Debito");
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

    $scope.listarMediosPago = function(){
        var json =angular.toJson({"dominio":"MEDIOS_PAGO_CONTADO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaMediosPago = response.data;
                if($scope.agregarNotaCredito==true){
                    $scope.listaMediosPago.push({"valor":"NOTA CREDITO"})
                }
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

        if($scope.datos.medioPago == 'NOTA CREDITO'){
            $scope.showPrincipal =false;
        }
    }

    $scope.limpiar = function(){
        $scope.datos.medioPago=''
        $scope.datos.marcaTarjeta=''
        $scope.datos.cambio = 0;
        $scope.datos.importe = "";
        $scope.datos.importeTotal = '0';
        $scope.inhabilitarTC = true;
        $scope.inhabilitarCredito = true;
        $scope.inhabilitarTC = true;
        $scope.agregarNotaCredito=true;
        $scope.listaPago = [];
        $scope.inhabilitarAgregarNC= true;
    }


    $scope.listarPersonas= function(){
        PersonasService.listar({}).then(function(response){
            if(response.status == 200){
                $scope.listaPersonas = response.data;
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    }

    $scope.changePersonas=function(){
        var encontrado = false;
        for(i=0;i<$scope.listaPersonas.length;i++){
            var apellido = "";
            if(typeof $scope.listaPersonas[i].apellido!= 'undefined'){
                apellido =  $scope.listaPersonas[i].apellido;
            }
            if(($scope.listaPersonas[i].nombre+' '+apellido).trim() ==$scope.datos.nombre.trim()){
                $scope.datos.codigoPersona= $scope.listaPersonas[i].codigo;
                $scope.personaEncontrada =true;
                encontrado = true;
                $scope.listarCredito($scope.datos.codigoPersona);
                break;
            }
        }
        if(!encontrado){
            $scope.personaEncontrada =true;
            $scope.datos.codigoPersona= "";
            delete $scope.datos.codigoPersona;
        }
    }

    $scope.guardar = function(){
        var total= separadorDeMil($scope.datos.total);
        var importeTotal = separadorDeMil($scope.datos.importeTotal);
        var cambio =separadorDeMil($scope.datos.cambio);
        if(importeTotal< total){
            dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'El importe total no puede ser menor al monto total.'},{key: false,back: 'static'});
        }else{
            var totalNoEfectivo= 0;
            var totalEfectivo=0;
            var listaPago =angular.copy($scope.listaPago);
            for(i=0;i<listaPago.length;i++){
                if(typeof listaPago[i].marcaTarjeta!= 'undefined'){
                    totalNoEfectivo += listaPago[i].importe;
                }else{
                    totalEfectivo +=listaPago[i].importe;
                }
            }
            var continuar = true ;
            if(totalNoEfectivo > $scope.datos.total){
                var mensaje ="Los montos de NC y TC no se pueden fraccionar, esta seguro que desea continuar";
                dlg = $dialogs.create('/dialogs/confirmar.html', 'confirmarController' ,{msg:mensaje},{key: false,back: 'static'});
                dlg.result.then(function(resultado){
                    continuar = false;

                },function(){
                });
            }

            for(k=0;k<listaPago.length;k++){
                listaPago[k].importe= listaPago[k].importe.replace(/[^0-9]+/g,'');
            }
            if($scope.datos.cambio>0){
                for(k=0;k<listaPago.length;k++){
                    if(listaPago[k].medioPago=="EFECTIVO"){
                        listaPago[k].importe = listaPago[k].importe - cambio;

                    }
                }
            }
            var listaFondoCredito = angular.copy($scope.lista);
            for(i=0;i<listaFondoCredito.length;i++){
                listaFondoCredito[i].monto = listaFondoCredito[i].monto.replace(/[^0-9]+/g,'');
                delete listaFondoCredito[i].fechaPago;
            }

            var reciboCabecera={
                'codigoPersona': $scope.datos.codigoPersona,
                'nombrePersona': $scope.datos.nombre,
                'sucursal':$scope.datos.sucursal,
                'caja': $scope.datos.caja,
                'cajero': $cookies.usuario
            }
            var obj={
                'reciboCabecera': reciboCabecera,
                'listaDetalleCobro': listaPago,
                'listaFondoCredito':listaFondoCredito
            }
            CobrosService.cobrar(obj).then(function(response){
                if(response.status == 200){
                    var resultado = response.data.respuesta;
                    if(resultado == "OK"){
                        dlg = $dialogs.create('/dialogs/exito.html', 'exitoController' ,{msg:'Regostro Exitoso'},{key: false,back: 'static'});
                        $scope.cancelar();
                    }else{
                        dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error al Registrar'},{key: false,back: 'static'});
                    }
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
                }
            })
        }
    }

    $scope.changeImporte=function(){
        $scope.datos.importe = separadorDeMil($scope.datos.importe);
    }

    function separadorDeMil(numero) {
        if(numero){
            return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
        }
    }

    $scope.agregarSimple=function(){
        $scope.agregar($scope.datos.medioPago,$scope.datos.marcaTarjeta, $scope.datos.importe);
    }

    $scope.agregarNC=function(){
        var listaCopy  = angular.copy($scope.listaFondoDebito);
        for(i=0;i<listaCopy.length;i++){
            if(listaCopy[i].checkActivo=='S'){
                var existe = false;
                var obj = listaCopy[i];
                for(j=0;j<$scope.listaFondoDebito.length;j++){
                    if(obj.documento== $scope.listaFondoDebito[j].documento &&
                        obj.documentoNumero== $scope.listaFondoDebito[j].documentoNumero){
                        $scope.listaFondoDebito.splice(j, 1);
                        break;
                    }
                }
                if(!existe){
                    $scope.agregar('CRED-'+obj.documento,obj.documentoNumero, obj.monto);
                }

            }
        }
        $scope.cancelarNC();
    }

    $scope.agregar = function(medioPago, marcaTarjeta, importe){
        var obj = {
            medioPago:medioPago,
            marcaTarjeta: marcaTarjeta,
            importe:separadorDeMil(importe)
        }
        $scope.listaPago.push(obj);

        $scope.datos.medioPago='';
        $scope.datos.marcaTarjeta='';

        $scope.datos.importeTotal=$scope.datos.importeTotal.replace(/[^0-9]+/g,'');
        importe=importe.replace(/[^0-9]+/g,'');
        $scope.datos.total=$scope.datos.total.replace(/[^0-9]+/g,'');

        $scope.datos.importeTotal = parseInt($scope.datos.importeTotal)+parseInt(importe);
        $scope.datos.importe='';
        $scope.datos.cambio =  parseInt($scope.datos.importeTotal) -parseInt($scope.datos.total);

        $scope.datos.importeTotal= separadorDeMil($scope.datos.importeTotal);
        $scope.datos.total=separadorDeMil($scope.datos.total);
        if($scope.datos.cambio<0){
            $scope.datos.cambio = '-'+separadorDeMil($scope.datos.cambio);
        }else{
            $scope.datos.cambio = separadorDeMil($scope.datos.cambio);
        }
    }

    $scope.foo = function (index) {
        var element =  $scope.listaFondoDebito[index];
        for(i=0;i<$scope.listaFondoDebito.length;i++){
            if(element.codigo == $scope.listaFondoDebito[i].codigo){
                if($scope.listaFondoDebito[i].checkActivo=='S'){
                    $scope.listaFondoDebito[i].checkActivo = 'N';
                }else{
                    $scope.listaFondoDebito[i].checkActivo = 'S';
                }
            }
        }
        var activos = false;
        for(j=0;j<$scope.listaFondoDebito.length;j++){
            if($scope.listaFondoDebito[j].checkActivo=='S'){
                activos= true;
                break;
            }
        }
        if(activos==true){
            $scope.inhabilitarAgregarNC= false;
        }
        else{
            $scope.inhabilitarAgregarNC= true;
        }
    }


    $scope.obtenerSucursalTimbrado = function(usuario){
        CajasService.obtenerSucursalTimbrado(usuario).then(function(response){
            if(response.status == 200){
                if(typeof response.data.caja != 'undefined'){
                    var aux  = response.data;
                    $scope.datos.timbrado = response.data.timbrado;
                    $scope.datos.sucursal = response.data.sucursal;
                    $scope.datos.caja = response.data.caja;
                }else{
                    dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'El usuario '+usuario+' no esta asignado a una caja'},{key: false,back: 'static'});
                    $scope.cancelar();
                }

            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    var init = function(){
        var lista = $location.search().param;
        if(!Array.isArray(lista) || typeof lista[0].monto == 'undefined'){
            $scope.cancelar();
        }else{
            $scope.datos.total=0;
            $scope.lista =lista;
            for(i=0;i<$scope.lista.length;i++){
                var monto = $scope.lista[i].monto instanceof String? $scope.lista[i].monto: $scope.lista[i].monto.replace(/[^0-9]+/g,'');
                $scope.datos.total += parseInt(monto);
                delete $scope.lista[i].fechaVencimiento;
            }
            $scope.datos.total =separadorDeMil($scope.datos.total);
        }
        $scope.listarPersonas();
        $scope.listarMarcaTarjeta();
        $scope.obtenerSucursalTimbrado($cookies.usuario);

    }

    init();
});







