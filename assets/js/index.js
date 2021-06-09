AOS.init()

function toggleNav(x) {
  x.classList.toggle('change')

  document.getElementById('mySidenav').style.width = x.classList.contains(
    'change'
  )
    ? '100%'
    : '0'
}

// for map
mapboxgl.accessToken =
  'pk.eyJ1Ijoib2JpZGVsZW9uIiwiYSI6ImNrazhhNW14NTBpbTMybmxucXFpbW52MTYifQ.ifsqiGFY1vjsmC16Cn7gDA'
var monument = [-81.10037, 29.29617]
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/obideleon/ckowmte2r0q2518mv7wodqwm5',
  center: monument,
  zoom: 15,
})

// create the popup
var popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
  '<p class="text-big">875 School Street Ormond Beach, FL 32174</p>'
)

// create DOM element for the marker
var el = document.createElement('div')
el.id = 'marker'

// create the marker
new mapboxgl.Marker(el)
  .setLngLat(monument)
  .setPopup(popup) // sets a popup on this marker
  .addTo(map)
