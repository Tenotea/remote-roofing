const heroSection = document.querySelector('.hero-section')
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

let dragStartPosition = 0
let dragEndPosition = 0

const handleMousePress = (e) => {
  if (e.changedTouches && e.changedTouches[0]) {
    dragStartPosition = e.changedTouches[0].clientX
  } else {
    dragStartPosition = e.clientX
  }
}

const mouseDragGesture = (e) => {
  if (e.changedTouches && e.changedTouches[0]) {
    dragEndPosition = e.changedTouches[0].clientX
  } else {
    dragEndPosition = e.clientX
  }
    // dragEndPosition = e.clientX
    if(dragEndPosition - dragStartPosition > 30){
      if (lastImageIndex > 0) {
        navigateCarousel(lastImageIndex - 1)
      }
    }
    if(dragEndPosition - dragStartPosition < -30){
      if (lastImageIndex < positionTrackers.length - 1) {
        navigateCarousel(lastImageIndex + 1)
      }
    }
}

const handleTouchPress = (e) => {

}

const touchSwipeGesture = (e) => {

}

positionTrackers.forEach((tracker, index) => {
  tracker.addEventListener('click', () => navigateCarousel(index))
})

carousel.forEach((el, index) => {
  el.addEventListener('click', () => navigateCarousel(index))
})

heroSection.addEventListener('mousedown', handleMousePress)
heroSection.addEventListener('touchstart', handleMousePress)

heroSection.addEventListener('mouseup', mouseDragGesture)
heroSection.addEventListener('touchend', mouseDragGesture)

