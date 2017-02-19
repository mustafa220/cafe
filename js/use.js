var socket = io.connect();

function session(){
	this.siparisler = new Array();
}
var session = new session();
socket.emit("masafirstLogin",true);
socket.on("listenMasaFirstLogin",function(data){
	if(data.login == true){
		$(document).ready(function(){
			$("title").html("Sipariş verebilirsiniz");
			$(".giris").hide();
			$(".siparis").show();
		});
	}
	else{
		$(document).ready(function(){
			$("title").html("Sipariş verebilmek için giriş yapın");
			$(".giris").show();
			$(".siparis").hide();
		});
	}
});
socket.on("masaLoginCevap",function (data) {
    console.log(data);
    if(data.cevap == 1){

        $(document).ready(function () {
            $(".giris").hide();
            $(".siparis").show();
            $(".siparis").html(data.menu);
        });
    }
    else{

    }
});
function masaLogin(){
    var masaNo = $("input[name='masaNo']").val();
    socket.emit("masaLogin",{"masaNo":masaNo});
}