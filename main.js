function main() {
    let screen = ''
    let inputFirst = document.getElementById("input").value
    let inputSecond = document.getElementById("needed").value
    let inputVolume = document.getElementById("volume").value
    let firstVolume = (inputSecond / inputFirst) * inputVolume
    let waterVolume = inputVolume - firstVolume
    let mass = 0.826 * firstVolume
    let waterMass = waterVolume
    screen = `Thể tích nồng độ ban đầu: ${firstVolume} <br>
    Thể tích nước: ${waterVolume}<br>
    Khối lượng nồng độ cồn ban đầu: ${mass}<br>
    Khối lượng nước: ${waterMass}`
    document.getElementById("result").innerHTML = screen
}