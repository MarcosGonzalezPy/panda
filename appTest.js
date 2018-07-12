app.controller('pagarController', function($scope, $location, $rootScope, $cookies, $dialogs, CobrosService, ValoresService,
           CajasService, PagosService, ChequesService) {
    $scope.datos = {};
    $scope.path="";
    $scope.showPrincipal = true;
    $scope.titulo = "";
    $scope.inhabilitarAgregarNC= true;
    $scope.listaPago = [];
    $scope.inhabilitarTC = true;
    $scope.tarjeta=false;


    $scope.cancelar = function(){
        $location.path( $scope.path );
    }

    $scope.cancelarNC = function(){
        $scope.showPrincipal = true;
    }

    function separadorDeMil(numero) {
        if(numero){
            return Number(numero.toString().replace(/[^0-9]+/g,'')).toLocaleString();
        }
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

    $scope.listarFondoCredito = function(){
        var param={};   param.cliente =$scope.datos.codigoPersona;
        CobrosService.listarFondoCredito(param).then(function(response){
            if(response.status == 200){
                $scope.listaFondoCredito =response.data;
                for(var j = $scope.listaFondoCredito.length; j--;){
                    if($scope.listaFondoCredito[j].estado!="PENDIENTE"){
                        $scope.listaFondoCredito[j].monto = separadorDeMil($scope.listaFondoCredito[j].monto);
                        $scope.listaFondoCredito.splice(j,1);
                    }
                }
                $scope.listarMediosPago();
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    $scope.listarMediosPago = function(){
        var json =angular.toJson({"dominio":"MEDIOS_PAGO_CONTADO"});
        ValoresService.listarJson(json).then(function(response){
            if(response.status ==200){
                $scope.listaMediosPago = response.data;
                if($scope.listaFondoCredito.length>=true){
                    $scope.listaMediosPago.push({"valor":"NOTA CREDITO"})
                }
            }else{
                alert("Error al cargar los Medios de Pago");
            }
        })
    }

    $scope.agregarNC=function(){
        var listaCopy  = angular.copy($scope.listaFondoCredito);
        for(i=0;i<listaCopy.length;i++){
            if(listaCopy[i].checkActivo=='S'){
                var existe = false;
                var obj = listaCopy[i];
                for(j=0;j<$scope.listaFondoCredito.length;j++){
                    if(obj.documento== $scope.listaFondoCredito[j].documento &&
                        obj.documentoNumero== $scope.listaFondoCredito[j].documentoNumero){
                        $scope.listaFondoCredito.splice(j, 1);
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

    $scope.changeMedioPago= function(){
        if($scope.datos.medioPago == 'TARJETA DE CREDITO'){
            $scope.inhabilitarTC = false;
            $scope.tarjeta=false;
        }else{
            $scope.inhabilitarTC = true;
            $scope.datos.marcaTarjeta ='';

        }

        if($scope.datos.medioPago == 'NOTA CREDITO'){
            $scope.showPrincipal =false;
        }

        if($scope.datos.medioPago=='CHEQUE'){
            $scope.datos.marcaTarjeta =""
            $scope.tarjeta=true;
        }else{
            $scope.datos.marcaTarjeta =""
            $scope.tarjeta=false;
        }
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
        if (typeof importe == 'string') {
            importe=importe.replace(/[^0-9]+/g,'');
        }
        if (typeof $scope.datos.total == 'string') {
            $scope.datos.total=$scope.datos.total.replace(/[^0-9]+/g,'');
        }
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
        var element =  $scope.listaFondoCredito[index];
        for(i=0;i<$scope.listaFondoCredito.length;i++){
            if(element.codigo == $scope.listaFondoCredito[i].codigo){
                if($scope.listaFondoCredito[i].checkActivo=='S'){
                    $scope.listaFondoCredito[i].checkActivo = 'N';
                }else{
                    $scope.listaFondoCredito[i].checkActivo = 'S';
                }
            }
        }
        var activos = false;
        for(j=0;j<$scope.listaFondoCredito.length;j++){
            if($scope.listaFondoCredito[j].checkActivo=='S'){
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

    $scope.changeImporte=function(){
        $scope.datos.importe = separadorDeMil($scope.datos.importe);
    }

    $scope.changeMarcaTarjeta=function(){
        if($scope.datos.medioPago=='CHEQUE'){
            if($scope.datos.marcaTarjeta){
                for(i=0;i<$scope.listaCheques.length;i++){
                    if($scope.listaCheques[i].numeroCheque==$scope.datos.marcaTarjeta){
                        $scope.datos.importe = separadorDeMil( $scope.listaCheques[i].monto);
                    }

                }
            }
        }

    }

    $scope.agregarSimple=function(){
        $scope.agregar($scope.datos.medioPago,$scope.datos.marcaTarjeta, $scope.datos.importe);
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
                delete listaFondoCredito[i].fechaVencimiento;
                delete listaFondoCredito[i].nombre;
                delete listaFondoCredito[i].codigoPersona;
            }

            var reciboCabecera={
                'codigoPersona': $scope.datos.codigoPersona,
                'nombre': $scope.datos.nombre,
                'sucursal':$scope.datos.sucursal,
                'caja': $scope.datos.nroCaja,
                'cajero': $cookies.usuario
            }
            var obj={
                'pagosCabecera': reciboCabecera,
                'listaDetallePago': listaPago,
                'listaFondoDebito':listaFondoCredito
            }
            PagosService.pagar(obj).then(function(response){
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

    $scope.obtenerSucursalTimbrado = function(usuario){
        CajasService.obtenerSucursalTimbrado(usuario).then(function(response){
            if(response.status == 200){
                if(typeof response.data.caja != 'undefined'){
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

    $scope.listarCheques = function(){
        var param={
            'estado':"PENDIENTE"
        }
        ChequesService.listar(param).then(function(response){
            if(response.status ==200){
                $scope.listaCheques = response.data;
            }else{
                alert("Error al cargar los tipos");
            }
        })
    }

    var init=function(){
        $scope.listarCheques();
        var lista = $location.search().param;
        $scope.path =$location.search().path;
        //$scope.titulo =$location.search().titulo;
        if(!Array.isArray(lista) || typeof lista[0].monto == 'undefined'){
            $scope.cancelar();
        }else{
            $scope.lista =lista;
            $scope.datos.nombre=lista[0].nombre;
            $scope.datos.codigoPersona=lista[0].codigoPersona;
            $scope.listarFondoCredito();
            $scope.datos.total=0;
            for(i=0;i<$scope.lista.length;i++){
                $scope.datos.total+= parseInt($scope.lista[i].monto.replace(/[^0-9]+/g,''));
            }
            $scope.datos.total=separadorDeMil($scope.datos.total);
            $scope.datos.importeTotal="0";
            $scope.listarMarcaTarjeta();
            $scope.obtenerSucursalTimbrado($cookies.usuario);
        }
    }
    init();
});



app.controller('anularPagoController', function($scope, $location, $rootScope, $cookies, $dialogs, CobrosService, VentasService, PagosService) {
    $scope.datos = {};
    $scope.path="";


    $scope.cancelar = function(){
        $location.path( $scope.path );
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
            PagosService.anularPago($scope.datos.pagoDetalle).then(function(response){
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

    $scope.listarFondoDebito = function(){
        $scope.total=0;
        VentasService.listarFondoDebito($scope.datos).then(function(response){
            if(response.status ==200){
                $scope.lista = response.data;
                for(var i = $scope.lista.length; i--;){
                    $scope.total += parseInt($scope.lista[i].monto);
                    $scope.lista[i].monto=separadorDeMil($scope.lista[i].monto);
                }
                $scope.total = separadorDeMil($scope.total);
            }else{
                dlg = $dialogs.create('/dialogs/error.html', 'errorDialogController' ,{msg:'Error de Sistema, consulte con el administrador'},{key: false,back: 'static'});
            }
        })
    };

    var init = function(){
        var lista = $location.search().param;
        if(!Array.isArray(lista) || typeof lista[0].monto == 'undefined'){
            $scope.cancelar();
        }
        $scope.path =$location.search().path;
        $scope.datos.pagoDetalle = lista[0].pagoDetalle;
        $scope.listarFondoDebito();
        $scope.datos.nombre = lista[0].nombre;
        $scope.datos.codigoPersona = lista[0].codigoPersona;
        //$scope.datos.cobroDetalle = lista[0].cobroDetalle;
        //$scope.listarFondoDebito();
        //$scope.listarReciboCabecera();
    }

    init();
});
