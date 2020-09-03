/* $(document).ready(function() {
	$("h1").addClass("fadeInLeft");
});

$(document).ready(function() {
	$("#carousel").addClass("animated fadeInLeft");
}); */

// Descriptions animations
const descriptions = document.querySelector('#descriptions');
const musseum = document.querySelector('.p3');
const awards = document.querySelector('.p1');
const gema = document.querySelector('.p2');

[musseum, awards, gema].forEach(item => {
  item.addEventListener('mouseover', e => {
		const musseumDesc = document.querySelector('.description-musseum');
		const awardsDesc = document.querySelector('.description-awards');
		const gemaDesc = document.querySelector('.description-gema');
		if(e.currentTarget == musseum) {
			descriptions.style.display = 'block';
			musseumDesc.style.display = 'block';
			awardsDesc.style.display = 'none';
			gemaDesc.style.display = 'none';
		} else if (e.currentTarget == awards) {
			descriptions.style.display = 'block';
			awardsDesc.style.display = 'block';
			musseumDesc.style.display = 'none';
			gemaDesc.style.display = 'none';
		} else { //gema
			descriptions.style.display = 'block';
			gemaDesc.style.display = 'block';
			awardsDesc.style.display = 'none';
			musseumDesc.style.display = 'none';
		}
  })
});

[musseum, awards, gema].forEach(item => {
  item.addEventListener('mouseleave', e => {
		descriptions.style.display = 'none';
  })
});

