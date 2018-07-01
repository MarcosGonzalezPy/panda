app.controller('pagarController', function($scope, $location, $rootScope, $cookies, $dialogs, CobrosService, ValoresService) {
    $scope.datos = {};
    $scope.path="";
    $scope.showPrincipal = true;
    $scope.titulo = "";
    $scope.inhabilitarAgregarNC= true;
    $scope.listaPago = [];
    $scope.inhabilitarTC = true;


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
        }else{
            $scope.inhabilitarTC = true;
            $scope.datos.marcaTarjeta ='';

        }

        if($scope.datos.medioPago == 'NOTA CREDITO'){
            $scope.showPrincipal =false;
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

    var init=function(){
        var lista = $location.search().param;
        $scope.path =$location.search().path;
        //$scope.titulo =$location.search().titulo;
        if(!Array.isArray(lista) || typeof lista[0].monto == 'undefined'){
            $scope.cancelar();
        }else{
            $scope.lista =lista;
            $scope.datos.nombre=lista[0].nombre;
            $scope.datos.codigoPersona=lista[0].codigoPersona;
            for(i=0;i<$scope.lista.length;i++){
                $scope.datos.total+= parseInt($scope.lista[i].monto.replace(/[^0-9]+/g,''));
            }
            $scope.datos.total=separadorDeMil($scope.datos.total);
            $scope.listarFondoCredito();
            $scope.datos.total=0;
            $scope.datos.importeTotal="0";
            $scope.listarMarcaTarjeta();
        }
    }
    init();
});