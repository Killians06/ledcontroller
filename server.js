var five = require( 'johnny-five' ),
    board,
    narf = require( 'narf' );

const express = require('express'),
      app     = express(),
      server  = require('http').createServer(app).listen(8081),
      io      = require('socket.io')(server),
      path    = require('path');
 
// Dossier static
app.use('/styles', express.static('styles'));
app.use('/js', express.static('js'));
 
// Routes
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/index.html'));
});
 

io.sockets.on('connection', function (socket) {
	console.log("Client connecté au Socket")
    socket.emit('ConfirmAlert');
});

board = new five.Board();
 
/*
  Executes a command and fires event when done that
  will return the command output
*/
// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function() {

 
// Définition des Pins 13, 12 et 11 en Sortie
this.pinMode( 13, 1 );
this.pinMode( 12, 1 );
this.pinMode( 11, 1 );
this.pinMode( 10, 1 );
 
  // Mode Table
  // INPUT:   0
  // OUTPUT:  1
  // ANALOG:  2
  // PWM:     3
  // SERVO:   4

//Défénition des Sorties 13,12 et 11 à 0 par defaut
this.digitalWrite( 13, 0 );
this.digitalWrite( 12, 0 );
this.digitalWrite( 11, 0 );
this.digitalWrite( 10, 0 );

	/* Api functions */ //Fonctions de controle des Sorties
 
	var self = this;
 
	var APIFunctions = {
 
		GET : {
			ledSwitch13 : function ( data, callback ){
 
				data.url.value = parseInt( data.url.value, 0 );
				if( data.url.value === 1 || data.url.value === 0){ //Fourchette de Condition de la valeur de GET puis exécution de la fonction
				
					self.digitalWrite( 13, data.url.value ); //La sortie prend l'etat de la Valeur GET dans l'URL
					console.log('Switch de la Led 13 en ' + data.url.value ) //Affichage dans la Console l'état de la sortie aprèes l'exécution de la Fonction
				}
 
				callback( data.url.value );
			},
			ledSwitch12 : function ( data, callback ){
 
				data.url.value = parseInt( data.url.value, 0 );
				if( data.url.value === 1 || data.url.value === 0){
				
					self.digitalWrite( 12, data.url.value );
					console.log('Switch de la Led 12 en ' + data.url.value )
				}
 
				callback( data.url.value );
			},
			ledSwitch11 : function ( data, callback ){
 
				data.url.value = parseInt( data.url.value, 0 );
				if( data.url.value === 1 || data.url.value === 0){
				
					self.digitalWrite( 11, data.url.value );
					console.log('Switch de la Led 11 en ' + data.url.value )
				}
 
				callback( data.url.value );
			},
			ledSwitch10 : function ( data, callback ){
 
				data.url.value = parseInt( data.url.value, 0 );
				if( data.url.value === 1 || data.url.value === 0){
				
					self.digitalWrite( 10, data.url.value );
					console.log('Switch de la Led 10 en ' + data.url.value )
				}
 
				callback( data.url.value );
			}
		},
		POST : {}
	};

//	var SocketFunctions = {
//
//    loopBack : function( data ){
//
//        if( data.messageData.message ){
//
//            narfHttp.connected_clients.forEach( function( connection ){
//
//                connection.send( JSON.stringify( { message : data.messageData.message } ) );
//            });
//
//        }else{
//            connection.send( JSON.stringify( { message : '' } ) );
//        }
//    }
//	};
//	function socketConnectionHandler ( req ){
//
//    	return true;
//	}

 
//Serveur HTTP pour la récéptiondes fonctions GET
	var hs = new narf.HttpServer( { port : 8080 } ).start();
 
	hs.on( 'port', function( port ){
	
		hs.addAPI( { functions : APIFunctions } );
		console.log( 'Serveur initalisé sur http://localhost:' + port );
		console.log( 'Accueil de la WebApp sur http://localhost:8081');
//		hs.addWebSocket( {
//        	functions : SocketFunctions,
//        	request : socketConnectionHandler,
//        	asc : false,
//        	protocol : 'echo-protocol'
//    	} );
	});


	

 
});

//Debug dans la Console
narf.setDebug( true );

////Définition du port d'affichage de la WebApp
//narf.pageServer( {
//
//    port : 8079,
//    path :  __dirname + '/'
//});//