function changeSong(index) {
	audio.src = songs[index];
	setActiveSong(index);
	setNowPlayingSong(index);
	setBigTitle(index);
	playAudio();
	//jQuery( "#audioSlider" ).slider( "option", "max", audio.duration );
	if(typeof ids != 'undefined' && ids != null && ids[index] != '')
		jQuery('#audioId').val(ids[index]);
	return false;
};
function setBigTitle(index){
	var song_name = document.getElementById('song_name');
	var img_name = document.getElementById('song_singer_img');
	var song_singer_name = document.getElementById('song_singer_name');
	var listen_no = document.getElementById('song_listen_no');
	var singer_link = document.getElementById('singer_link');
	var singer_slug = document.getElementsByName('singer_slug');
	var bxhSong = document.getElementsByName('bxhSong');
	var bxh_singer_name = document.getElementsByName('bxh_singer_name');
	var bxh_listen =	document.getElementsByName('bxh_listen');

	if (singer_link != null && singer_slug.length > 0)
		singer_link.href = singer_slug[index].value;

	if(song_name != null)
		song_name.innerHTML = titles[index];

	if(img_name != null && bxhSong.length > 0)
		img_name.src = bxhSong[index].src;
	if(song_singer_name != null && bxh_singer_name.length > 0)
	 	song_singer_name.innerHTML = bxh_singer_name[index].innerHTML;
	if(listen_no != null && bxh_listen.length > 0)
		listen_no.innerHTML = bxh_listen[index].innerHTML;
}
function setNowPlayingSong(index) {
	if (index != 'undefined' && titles[index] != null) {
		 document.getElementById("song-playing").innerHTML = titles[index];
	}
};

// bodyLoaded();
document.getElementById("audio").addEventListener("ended", function() {
	index = getIndex();
	index = (index + 1 < songs.length) ? index + 1 : 0;
	changeSong(index);
}, false);

document.getElementById("next").addEventListener("click", function() {
	index = getIndex();

	if (index == 'undefined')
		index = 1;
	else if (index >= songs.length - 1)
		index = 0;
	else
		index++;

	changeSong(index);
}, false)

document.getElementById("prev").addEventListener("click", function() {
	index = getIndex();
	if (index == 'undefined')
		index = 0;
	else if (index <= 0)
		index = songs.length - 1;
	else
		index--;
	changeSong(index);
}, false)
