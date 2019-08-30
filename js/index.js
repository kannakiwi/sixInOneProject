(function() {
  let tl = new TimelineMax();
  tl.to('.main_pie', 2, {
    top: '0px',
    transformPerspective: 600,
    opacity: 1,
  })
    .from('.main_ghost_one', 1, {
      x: 300,
      y: 300,
      width: 0,
      opacity: 0,
      rotation: -10,
    })
    .to('.main_ghost_two', 1, {
      x: 500,
      opacity: 1,
    })
    .to('.main_ghost_three', 1, {
      x: -500,
      opacity: 1,
    });
})();
