
const requestAnimationFrame = window.requestAnimationFrame 
                              || window.mozRequestAnimationFrame
                              || window.webkitRequestAnimationFrame
                              || window.msRequestAnimationFrame
window.requestAnimationFrame = requestAnimationFrame

function drawLine(scene, start, end, color) {
  const lineGeo = new THREE.Geometry()
  lineGeo.vertices.push(new THREE.Vector3(...start))
  lineGeo.vertices.push(new THREE.Vector3(...end))
  const lineMat = new THREE.LineBasicMaterial({
    color: color
  })
  const line = new THREE.Line(lineGeo, lineMat)
  scene.add(line)
}

function drawAxis(scene, size = 3) {
  // x轴
  drawLine(scene, [0, 0, 0], [size, 0, 0], 0xff0000)
  // y轴
  drawLine(scene, [0, 0, 0], [0, size, 0], 0x00ff00)
  // z轴
  drawLine(scene, [0, 0, 0], [0, 0, size], 0x00ccff)
}

// 初始化监测动画的帧频
function initStats(left = 0, top = 0, mode = 0) {
  const stats = new Stats()
  const statsDom = stats.domElement
  // 0: fps  1: ms
  stats.setMode(mode)

  statsDom.style.position = 'absolute'
  statsDom.style.left = `${left}px`
  statsDom.style.top = `${top}px`
  statsDom.style.zIndex = 10000
  document.body.appendChild(statsDom)

  return stats
}

function resize(renderer, camera) {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}