import vars from '../_vars';

export const disableScroll = () => {
	const fixBlocks = document?.querySelectorAll('.menu--active');
	const pagePosition = window.scrollY;
	const paddingOffset = `${(window.innerWidth - vars.document.body.offsetWidth)}px`;

	vars.document.documentElement.style.scrollBehavior = 'none';
	fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
	vars.bodyEl.style.paddingRight = paddingOffset;
	vars.bodyEl.classList.add('dis-scroll');
	vars.bodyEl.dataset.position = pagePosition;
	vars.bodyEl.style.top = `-${pagePosition}px`;
}
