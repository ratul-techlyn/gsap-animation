document.addEventListener("DOMContentLoaded", (event) => {
	// heading one
	const titleOne = document.querySelector(".title_one");

	var titleOneSplit = new SplitText(titleOne, {
		type: "words,chars",
		textAlign: "center",
	});

	gsap.from(titleOneSplit.words, {
		scrollTrigger: {
			trigger: titleOne,
			toggleActions: "restart none none none",
		},
		duration: 1,
		opacity: 0,
		x: 20,
		stagger: 0.02,
	});

	gsap.from(titleOneSplit.chars, {
		scrollTrigger: {
			trigger: titleOne,
			toggleActions: "restart none none none",
		},
		duration: 1,
		opacity: 0,
		x: 40,
		stagger: 0.02,
	});

	// heading tow

	const titleTow = document.querySelector(".title_tow");

	var titleTowSplit = new SplitText(titleTow, {
		type: "words",
		textAlign: "center",
	});

	gsap.from(titleTowSplit.words, {
		scrollTrigger: {
			trigger: titleTow,
			toggleActions: "restart none none none",
		},
		duration: 1.5,
		opacity: 0,
		x: 40,
		stagger: 0.02,
	});

	// heading three

	const titleThree = document.querySelector(".title_three");

	var titleThreeSplit = new SplitText(titleThree, {
		type: "lines",
		linesClass: "split-line",
		textAlign: "center",
	});

	gsap.from(titleThreeSplit.lines, {
		scrollTrigger: {
			trigger: titleThree,
			toggleActions: "restart none none none",
		},
		duration: 1,
		perspective: "2000px",
		rotateX: "-120deg",
		translateY: "90px",
		stagger: 0.1,
		opacity: 0,
	});

	// heading four

	const titleFour = document.querySelector(".title_four");

	var titleFourSplit = new SplitText(titleFour, {
		type: "lines,words",
		linesClass: "split-line",
		textAlign: "center",
	});

	gsap.from(titleFourSplit.words, {
		scrollTrigger: {
			trigger: titleFour,
			toggleActions: "restart none none none",
		},
		duration: 1,
		y: "110%",
		rotationZ: "10",
		stagger: 0.1,
	});

	// heading five

	const titleFive = document.querySelector(".title_five");

	gsap.from(titleFive, {
		backgroundPosition: "-100% 0%",
		ease: "expo.out",
		scrollTrigger: {
			trigger: titleFive,
			scrub: 2,
			start: "top 80%",
		},
	});

	// scrub text
	const scrubText = document.querySelector(".scrub_text");
	var scrubTextSplit = new SplitText(scrubText, {
		types: "chars",
		tagName: "span-char",
	});

	gsap.from(scrubTextSplit.chars, {
		opacity: 0.3,
		ease: "power1.out",
		duration: 0.5,
		stagger: 0.1,

		scrollTrigger: {
			trigger: scrubText,
			pin: true,
			scrub: 3,
			start: "top center",
			end: "+=100%",
		},
	});

	// tag scroll
	const lineTop = document.querySelector(".tag_line_top");
	const lineMiddle = document.querySelector(".tag_line_middle");
	const lineBottom = document.querySelector(".tag_line_bottom");

	gsap.fromTo(
		lineTop,
		{
			x: 0,
			duration: 3,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineTop,
				scrub: 5,
				start: "top 80%",
			},
		},
		{
			x: "-50%",
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineTop,
				scrub: 5,
				start: "top 80%",
			},
		}
	);

	gsap.fromTo(
		lineMiddle,
		{
			x: "-50%",
			duration: 5,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineMiddle,
				scrub: 5,
				start: "top 80%",
			},
		},
		{
			x: 0,
			duration: 5,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineMiddle,
				scrub: 5,
				start: "top 80%",
			},
		}
	);

	gsap.fromTo(
		lineBottom,
		{
			x: 0,
			duration: 5,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineBottom,
				scrub: 5,
				start: "top 80%",
			},
		},
		{
			x: "-50%",
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: lineBottom,
				scrub: 5,
				start: "top 80%",
			},
		}
	);

	// moving card
	const cardUp = document.querySelectorAll(".card_up");
	const cardDown = document.querySelectorAll(".card_down");

	cardUp.forEach((card) => {
		gsap.fromTo(
			card,
			{
				y: "-20%",
				duration: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: card,
					scrub: 2,
					start: "top 80%",
				},
			},
			{
				y: "20%",
				duration: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: card,
					scrub: 2,
					start: "top 80%",
				},
			}
		);
	});

	cardDown.forEach((card) => {
		gsap.fromTo(
			card,
			{
				y: "20%",
				duration: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: card,
					scrub: 2,
					start: "top 80%",
				},
			},
			{
				y: "-20%",
				duration: 1,
				ease: "power1.out",
				scrollTrigger: {
					trigger: card,
					scrub: 2,
					start: "top 80%",
				},
			}
		);
	});

	// typing text
	const typingText = document.querySelector(".typing_text");
	const typingTextWrapper = document.querySelector(".typing_text_section");
	const card_top_left = document.querySelector(".card_top_left");
	const card_top_right = document.querySelector(".card_top_right");
	const card_bottom_left = document.querySelector(".card_bottom_left");
	const card_bottom_right = document.querySelector(".card_bottom_right");

	var typingTextSplit = new SplitText(typingText, {
		types: "chars",
		tagName: "span-char",
	});

	gsap.from(typingTextSplit.chars, {
		display: "none",
		ease: "power1.out",
		duration: 1,
		stagger: 0.5,

		scrollTrigger: {
			trigger: typingTextWrapper,
			scrub: 1,
			start: "top center",
		},
	});

	gsap.from(typingTextWrapper, {
		ease: "power1.out",
		duration: 1,
		stagger: 0.5,

		scrollTrigger: {
			trigger: typingTextWrapper,
			scrub: 1,
			start: "top top",
			pin: true,
		},
	});

	const cardsTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: typingTextWrapper,
			scrub: 1,
			start: "top center",
		},
	});

	cardsTimeline.from(card_top_left, {
		y: "-100%",
		x: "-100%",
		ease: "power1.out",
		duration: 1,
	})
		.from(
			card_top_right,
			{
				y: "-100%",
				x: "100%",
				ease: "power1.out",
				duration: 1,
			},
			"-=1"
		)
		.from(
			card_bottom_left,
			{
				y: "100%",
				x: "-100%",
				ease: "power1.out",
				duration: 1,
			},
			"-=1"
		)
		.from(
			card_bottom_right,
			{
				y: "100%",
				x: "100%",
				ease: "power1.out",
				duration: 1,
			},
			"-=1"
		);

	// stack cards

	const cards = gsap.utils.toArray(".vertical_card");
	const spacer = 50;
	const minScale = 1;

	const distributor = gsap.utils.distribute({ base: minScale, amount: 0.2 });

	cards.forEach((card, index) => {
		const scaleVal = distributor(index, cards[index], cards);

		const tween = gsap.to(card, {
			scrollTrigger: {
				trigger: card,
				start: `top top`,
				scrub: 1,
			},
			ease: "none",
		});
		ScrollTrigger.create({
			trigger: card,
			start: `top-=${200 + index * spacer} top`,
			end: `bottom+=${-400 + cards.length * spacer} bottom`,
			endTrigger: ".vertical_cards",
			pin: true,
			pinSpacing: false,
			id: "pin",
		});
	});

	// scrolling grid
	const col_one = document.querySelector(".grid_column.col_one");
	const col_two = document.querySelector(".grid_column.col_two");
	const col_three = document.querySelector(".grid_column.col_three");

	gsap.fromTo(
		col_one,
		{
			y: 0,
			duration: 3,
			ease: "power1.out",
			scrollTrigger: {
				trigger: col_one,
				scrub: 2,
				start: "top 80%",
			},
		},
		{
			y: "-40%",
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: col_one,
				scrub: 2,
				start: "top 80%",
			},
		}
	);

	gsap.fromTo(
		col_two,
		{
			y: "-20%",
			duration: 5,
			ease: "power1.out",
			scrollTrigger: {
				trigger: col_two,
				scrub: 1,
				start: "top 80%",
			},
		},
		{
			y: 0,
			duration: 5,
			ease: "power1.out",
			scrollTrigger: {
				trigger: col_two,
				scrub: 1,
				start: "top 80%",
			},
		}
	);

	gsap.fromTo(
		col_three,
		{
			y: 0,
			duration: 5,
			ease: "power1.out",
			scrollTrigger: {
				trigger: col_three,
				scrub: 5,
				start: "top 80%",
			},
		},
		{
			y: "-70%",
			duration: 1,
			ease: "power1.out",
			scrollTrigger: {
				trigger: col_three,
				scrub: 5,
				start: "top 80%",
			},
		}
	);

	// scrolling banner
	const banner = document.querySelector(".scrolling_banner_section");
	const bannerGrid = document.querySelector(".scrolling_banner_section .grid_content");
	const bannerGridWrapper = document.querySelector(".scrolling_banner_section .grid_content .grid_wrapper");
	const banner_col_one = document.querySelector(".scrolling_banner_section .grid_content .grid_wrapper .banner_col_one");
	const banner_col_two = document.querySelector(".scrolling_banner_section .grid_content .grid_wrapper .banner_col_two");
	const banner_col_three = document.querySelector(".scrolling_banner_section .grid_content .grid_wrapper .banner_col_three");
	const banner_col_four = document.querySelector(".scrolling_banner_section .grid_content .grid_wrapper .banner_col_four");

	const bannerTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: banner,
			scrub: 3,
			start: "top top",
			pin: true,
		},
	});

	bannerTimeline.fromTo(
		bannerGrid,
		{
			height: "90vh",
			width: "40%",
			marginRight: "40px",
			borderRadius: "40px",
			duration: 1,
			ease: "power1.out",
		},
		{
			height: "auto",
			width: "100%",
			marginRight: "0px",
			borderRadius: "0px",
			duration: 1,
			ease: "power1.out",
		},
		0
	);

	bannerTimeline.fromTo(
		bannerGridWrapper,
		{
			transform: "translateX(-15%) skew(-35deg, 10deg)",
			duration: 1,
			ease: "power1.out",
		},
		{
			transform: "translateX(0%) skew(0deg, 0deg)",
			duration: 1,
			ease: "power1.out",
		},
		0
	);

	bannerTimeline.fromTo(
		banner_col_one,
		{
			y: 0,
			duration: 3,
			ease: "power1.out",
		},
		{
			y: "-10%",
			duration: 1,
			ease: "power1.out",
		},
		0
	);
	bannerTimeline.fromTo(
		banner_col_two,
		{
			y: 0,
			duration: 3,
			ease: "power1.out",
		},
		{
			y: "-20%",
			duration: 1,
			ease: "power1.out",
		},
		0
	);
	bannerTimeline.fromTo(
		banner_col_three,
		{
			y: 0,
			duration: 3,
			ease: "power1.out",
		},
		{
			y: "-5%",
			duration: 1,
			ease: "power1.out",
		},
		0
	);
	bannerTimeline.fromTo(
		banner_col_four,
		{
			y: 0,
			duration: 3,
			ease: "power1.out",
		},
		{
			y: "-30%",
			duration: 1,
			ease: "power1.out",
		},
		0
	);
});
