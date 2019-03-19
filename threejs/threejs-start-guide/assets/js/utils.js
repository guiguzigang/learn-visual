
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