// this code will be executed after page load
(function () {
	setTimeout(function () {
		const shareButton = document.querySelector('#top-level-buttons-computed button[aria-label="Share"]');
		shareButton.addEventListener("click", function () {
			setTimeout(function () {
				const shareInput = document.getElementById('share-url')
				const shareUrl = shareInput.value
				shareInput.value = shareUrl.replace(/(\?|&)si=[^&]*(&|$)/, '$1')
			}, 500)
		});
	}, 500);
})();
