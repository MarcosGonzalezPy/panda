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
