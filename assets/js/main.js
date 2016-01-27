"use strict"

//Ready funkcija za pokretanje svih funk. prilikom ucitavanja st.

$(function() {

	//Pokreni funkciju za ispis trenutnog vremena
	Time();

	//Pokreni funkciju za ispis trenutnog datuma
	CurrentDate();

	//Pokretanje funkcije za skrol tabele prema gore
	ScrollUpTable();

	//Pokretanje funkcije za skrolovanje tabele prema dolje
	ScrollDownTable();

	//Pozivanje funkcije za stvaranje tiketa od vrijednosti iz ćelije tabele
	TableTicket();

	//Funkcija za zatvaranje tiketa
	CloseTicket();
});

//Funkcija za prikazivanje trenutnog vremena
function Time()
{	
	var time = new Date($.now());
	var formtedTime = time.toLocaleTimeString('en-GB', { hour24: false, hour: "numeric", minute: "numeric"});

	$('.time').append(formtedTime);
}

//Funkcija za prikazivanje trenutnog datuma
function CurrentDate()
{
	var date = new Date();
	var formatedDate = date.toLocaleDateString("en-GB", {year: "numeric", month: "short",day: "numeric"}).replace(/\s/g,'. ');

	$('.date').append(formatedDate);
}

//Funkcija za pokretanje skrola tabela na klik footer dugmeta

function ScrollUpTable()
{
	$(".btn-up").on('click', function () {
		$(".table").animate({scrollTop: '-=20px'});
	});

	//Skrol tiketa u sidebaru
	$(".btn-up-1").on('click', function () {
		$(".mainsidbar").animate({scrollTop: '-=40px'});
	});
}

//Funkcija za skrolovanje tabele prema dolje

function ScrollDownTable()
{
	$(".btn-down").on('click', function () {
		$(".table").animate({scrollTop: '+=40px'});
	});

	//Skrol tiketa u sidebaru
	$(".btn-down-1").on('click', function () {
		$(".mainsidbar").animate({scrollTop: '+=20px'});
	});
}

//Funkcija za  uklanjanje tiketa

function CloseTicket() {

	$('.mainsidbar__ticket').on('click', function (e) {

		$(this).hide();
		//$(this).remove();
	});
}

//Funcija za kupljenje vrijednosti iz polja tabele i stvaranje tiketa na osnovu tih vrijednosti
function TableTicket()
{	

	$('#table tr td').on('click', function (e) {

		
		//Dohvatanje vrijednosti polja tabele i smijestanje u varijable 
		//var game = $('#game').text();
		var colone = $('#col').text();
		//var qouta = e.delegateTarget.id; - Daje id od <td>
		//var qouta =  e.target.id; -Daje id od <td>
		
		/*var currentCellText = $(this).text();
		var LeftCellText = $(this).prev().text();
		var RightCellText = $(this).next().text();
		var RowIndex =$(this).parent().parent().children().index($(this).parent());
		var ColIndex = $(this).parent().children().index($(this));
		var RowsAbove = RowIndex;
		var ColName = $("thead").children(':eq(' + ColIndex + ')').text();*/

		//var game = $('#thead tr th:first').text();

		var game = $(this).parent().children().eq(0).text();

		var qoutaValue = $(this).text(); //Dohvatamo vrijednost trnutno kliknute ćelije tabele u kome je broj

		
		//var ticket = $('<div class="mainsidbar__ticket"><div class="mainsidbar__ticket--game"><img src="../assets/icons/close1.svg" alt="close.svg" class="mainsidbar__ticket--img btn-close" id="btn-close">' + game + '</div><div class="mainsidbar__ticket--qouta">' + colone + '<span class="mainsidbar__ticket--qouta--right">' + qoutaValue + '</span></div></div>');

		//Var u kojoj cuvamo tiket sa podacima iz tabele
		var ticket = $('<div class="mainsidbar__ticket"><div class="mainsidbar__ticket--game" id="game-name">' + game + '<img src="../assets/icons/close1.svg" alt="close.svg" onclick="CloseTicket();" class="mainsidbar__ticket--img btn-close"></div><div class="mainsidbar__ticket--qouta" id="game-col">' + colone + '<span class="mainsidbar__ticket--qouta--right" id="game-qouta">' + qoutaValue + '</span></div></div>');

		//Dodajemo tiket u sidebar
		$('#ticket-sidebar').append(ticket);

		console.log(RowIndex);
	});
}

