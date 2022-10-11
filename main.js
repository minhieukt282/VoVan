function main() {
    let screen = ''
    let inputFirst = document.getElementById("input").value
    let inputSecond = document.getElementById("needed").value
    let inputVolume = document.getElementById("volume").value
    let firstVolume = Math.round((inputSecond / inputFirst) * inputVolume * 100) / 100
    let waterVolume = Math.round((inputVolume - firstVolume) * 100) / 100
    let mass = Math.round(0.826 * firstVolume * 100) / 100
    let waterMass = Math.round(waterVolume * 100) / 100
    screen = `Thể tích nồng độ ban đầu: ${firstVolume} <br>
    Thể tích nước: ${waterVolume}<br><br><br>
    Khối lượng nồng độ cồn ban đầu: ${mass}<br>
    Khối lượng nước: ${waterMass}`
    document.getElementById("result").innerHTML = screen
}