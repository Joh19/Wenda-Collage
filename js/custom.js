// A $( document ).ready() block.
$( document ).ready(function() {
		$('#Advance').hide();
		$('#taarifaChaSita').hide();
		hideComb();
});
function renderMarks(value){
	if(value == 'a'){
		$('#Advance').slideDown(800);
	}else{
		$('#Advance').slideUp(800);
	}
}
function levelYaelimu(value){
	if(value == 'KIDATO CHA NNE'){
		$('#taarifaChaSita').hide();
	}
	else{
		$('#taarifaChaSita').show();
	}
}
function combination(comb){
	switch(comb){
		case 'pcm':
		hideComb();
		$('#pcmDiv').slideDown(500);
		break;
		case 'pcb':
		hideComb();
		$('#pcbDiv').slideDown(500);
		break;
		case 'egm':
		hideComb();
		$('#egm').slideDown(500);
		break;
		case 'cbg':
		hideComb();
		$('#cbg').slideDown(500);
		break;
		case 'hkl':
		hideComb();
		$('#hkl').slideDown(500);
		break;
		case 'hgl':
		hideComb();
		$('#hgl').slideDown(500);
		break;
		case 'hgk':
		hideComb();
		$('#hgk').slideDown(500);
		break;
		case 'eca':
		hideComb();
		$('#eca').slideDown(500);
		break;
		case 'hge':
		hideComb();
		$('#hge').slideDown(500);
		break;
		case 'cbn':
		hideComb();
		$('#cbn').slideDown(500);
		break;
		case 'klf':
		hideComb();
		$('#klf').slideDown(500);
		break;
		case 'pgm':
		hideComb();
		$('#pgm').slideDown(500);
		break;
		
		default:
		hideComb();
	}

}
function hideComb(){
		$('#pcmDiv').hide();
		$('#pcbDiv').hide();
		$('#pgm').hide();
		$('#egm').hide();
		$('#hkl').hide();
		$('#klf').hide();
		$('#hgk').hide();
		$('#hgl').hide();
		$('#cbn').hide();
		$('#pgm').hide();
		$('#cbg').hide();
		$('#eca').hide();
		$('#hge').hide();
}
