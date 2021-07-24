const cont = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

cont.addEventListener('click', function(e) {

	// cek apakah yang diklik adalah .thumb

	if (e.target.className == 'thumb') {

		// ganti src gambar jumbo dengan scr gambar yang dipilih

		jumbo.src = e.target.src;

		// kasih efek animasi dengan menambahkan CSS class

		jumbo.classList.add('fade');

		// hilangkan .fade pada saat setelah diklik agar animasi tidak hanya berjalan saat klik pertama

		setTimeout(function() {
			jumbo.classList.remove('fade');
		}, 500);

		// membuat gambar yang sedang aktif tetap transparan tidak hanya pada saat diklik

		thumbs.forEach(function(thumb) {
			// if (thumb.classList.contains('active')) {
			// 	thumb.classList.remove('active');
			// }

			thumb.className = 'thumb';
		});

		e.target.classList.add('active');

	}
});