var maestro_clientes = [];
var maestro_deposito = [];

// =====================================
// Clientes

maestro_clientes.push({
    "id_cliente": "00001"
}, {
    "Nombre": "Carlos"
}, {
    "balance": "200"
}, {
    "numero_cuenta": "00001"
}, {
    "numero_tarjeta": "kgscdghfvkyuswhfvghhcjhg"
});

// ===========================================
//  Depositos
maestro_deposito[0].id_deposito = "000001";
maestro_deposito[0].cantidad = "150";
maestro_deposito[0].destinatatio_numero = "00001";
// =============================================
maestro_deposito[1].id_deposito = "000002";
maestro_deposito[1].cantidad = "400";
maestro_deposito[1].destinatatio_numero = "00002";
// =============================================
maestro_deposito[2].id_deposito = "000003";
maestro_deposito[2].cantidad = "1000";
maestro_deposito[2].destinatatio_numero = "00003";
// =============================================
maestro_deposito[3].id_deposito = "000004";
maestro_deposito[3].cantidad = "250";
maestro_deposito[3].destinatatio_numero = "00004";
// =============================================
maestro_deposito[4].id_deposito = "000005";
maestro_deposito[4].cantidad = "50";
maestro_deposito[4].destinatatio_numero = "00005";
// =============================================

function deposito(maestro_deposito, maestro_clientes) {

    for (var i = 0; i < maestro_deposito.length; i++) {

        for (var j = 0; j < maestro_clientes.length; j++) {

            if (
                maestro_deposito[i].destinatatio_numero ==
                maestro_clientes[j].numero_cuenta) {

                maestro_clientes[j].balance =
                    maestro_clientes[j].balance + maestro_deposito[i].cantidad;

            }

        }
    }

    for (var i = 0; i < maestro_clientes.length; i++) {

        console.log(maestro_clientes[i].Nombre);
        console.log(maestro_clientes[i].balance);
        console.log(maestro_clientes[i].numero_cuenta);
    }
}

deposito(maestro_deposito, maestro_clientes);

// Mineras existan depósitos  recorre todos los registros existente de depósitos y si el numero de destinatario en curso del deposito es igual al menudero de cuente del cuente entonces aplica suma del balance actual; del cliente mas el monto del deposito en  de turno