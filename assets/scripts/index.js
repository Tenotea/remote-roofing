const positionTrackers = document.querySelectorAll('.position-trackers .tracker')
const carousel = document.querySelectorAll('.secondary-image')
const carouselBodies = document.querySelectorAll('.carousel-body')
let lastImageIndex = 0

const navigateCarousel = (index) => {
  setPositionTrackerActiveState(positionTrackers, index)
  setCarouselBodyActiveState(carouselBodies, index)
  if ( index === lastImageIndex ) return
  let currentImage = carousel[index]
  let lastImage = carousel[lastImageIndex]
  currentImage.classList.add('primary-image')
  lastImage.classList.remove('primary-image')
  console.log('Translate some shit')
  lastImageIndex = index
}

const setPositionTrackerActiveState = (trackers, activeTrackerIndex) => {
  trackers.forEach(tracker => {
    tracker.classList.remove('in-focus')
  })
  trackers[activeTrackerIndex].classList.add('in-focus')
}

const setCarouselBodyActiveState = (bodies, activeIndex) => {
  bodies.forEach(body => {
    body.classList.remove('in-focus')
  })
  bodies[activeIndex].classList.add('in-focus')
}

positionTrackers.forEach((tracker, index) => {
  tracker.addEventListener('click', () => navigateCarousel(index))
})

carousel.forEach((el, index) => {
  el.addEventListener('click', () => navigateCarousel(index))
})


