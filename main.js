const optionShape = document.getElementById('optshape')
const optionRumus = document.getElementById('optrus')
const sisi = document.getElementById('sisi')
const total = document.getElementById('hasil')
const button = document.getElementById('button')
const panjang = document.getElementById('panjang')
const lebar = document.getElementById('lebar')
const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const sisi2 = sisi.cloneNode(true)
const sisi3 = sisi.cloneNode(true)
const iptg = document.getElementById('inputgroup')
const closing = document.getElementById('close')
const popup = document.getElementById('popup')
const help = document.getElementById('help')

console.log(sisi2 , sisi3)

if (optionShape) {
    optionShape.onchange = () => {
        optionRumus.onchange = () => {
            if (optionShape.value === 'persegi' && optionRumus.value === 'luas') {
                hideAll()
                sisi.classList.remove('opacity-0')
                sisi.classList.remove('absolute')
                sisi.classList.remove('pointer-events-none')
                sisi.placeholder = 'Masukkan Sisi'
                button.onclick = () => {
                    let hasil = parseInt(sisi.value) * parseInt(sisi.value)
                    total.innerHTML =  'Hasil = '+hasil
                }
            }else if (optionShape.value === 'persegi' && optionRumus.value === 'keliling') {
                hideAll()
                sisi.classList.remove('opacity-0')
                sisi.classList.remove('absolute')
                sisi.classList.remove('pointer-events-none')
                button.onclick = () => {
                    let hasil = parseInt(sisi.value) * 4
                    total.innerHTML = `Hasil = `+hasil
                }
            }else if (optionShape.value === 'panjang' && optionRumus.value === 'luas') {
                hideAll()
                panjang.classList.remove('opacity-0')
                panjang.classList.remove('absolute')
                panjang.classList.remove('pointer-events-none')
                lebar.classList.remove('opacity-0')
                lebar.classList.remove('absolute')
                lebar.classList.remove('pointer-events-none')
                button.onclick = () => {
                    let hasil = parseInt(panjang.value) * parseInt(lebar.value)
                    total.innerHTML =  `Hasil = `+hasil
                }
            }else if (optionShape.value === 'panjang' && optionRumus.value === 'keliling') {
                hideAll()
                panjang.classList.remove('opacity-0')
                panjang.classList.remove('absolute')
                panjang.classList.remove('pointer-events-none')
                lebar.classList.remove('opacity-0')
                lebar.classList.remove('absolute')
                lebar.classList.remove('pointer-events-none')
                button.onclick = () => {
                    let hasil = 2 * (parseInt(panjang.value) + parseInt(lebar.value))
                    total.innerHTML =  `Hasil = `+hasil
                }
            }else if (optionShape.value === 'segitiga' && optionRumus.value === 'luas') {
                hideAll()
                alas.classList.remove('opacity-0')
                alas.classList.remove('absolute')
                alas.classList.remove('pointer-events-none')
                tinggi.classList.remove('opacity-0')
                tinggi.classList.remove('absolute')
                tinggi.classList.remove('pointer-events-none')
                button.onclick = () => {
                    let hasil = 1/2 * parseInt(alas.value) * parseInt(tinggi.value)
                    total.innerHTML =  `Hasil = `+hasil
                }
            }else if (optionShape.value === 'segitiga' && optionRumus.value === 'keliling') {
                hideAll()
                iptg.appendChild(sisi2)
                iptg.appendChild(sisi3)
                sisi.classList.remove('opacity-0')
                sisi.classList.remove('absolute')
                sisi.classList.remove('pointer-events-none')
                sisi.placeholder = 'Masukkan Sisi 1'
                sisi2.classList.remove('opacity-0')
                sisi2.classList.remove('absolute')
                sisi2.classList.remove('pointer-events-none')
                sisi2.placeholder = 'Masukkan Sisi 2'
                sisi3.classList.remove('opacity-0')
                sisi3.classList.remove('absolute')
                sisi3.classList.remove('pointer-events-none')
                sisi3.placeholder = 'Masukkan Sisi 3'
                button.onclick = () => {
                    let hasil = parseInt(sisi.value) + parseInt(sisi2.value) + parseInt(sisi3.value)
                    total.innerHTML =  `Hasil = `+hasil
                }
            }
        }
    }
}

help.addEventListener('click', function(){
    popup.classList.toggle('opacity-0')
    popup.classList.toggle('pointer-events-none')
})

closing.addEventListener('click', function(){
    popup.classList.toggle('opacity-0')
    popup.classList.toggle('pointer-events-none')
})

function hideAll() {
    sisi.classList.add('opacity-0')
    sisi.classList.add('absolute')
    sisi.classList.add('pointer-events-none')
    sisi2.classList.add('opacity-0')
    sisi2.classList.add('absolute')
    sisi2.classList.add('pointer-events-none')
    sisi3.classList.add('opacity-0')
    sisi3.classList.add('absolute')
    sisi3.classList.add('pointer-events-none')
    panjang.classList.add('opacity-0')
    panjang.classList.add('absolute')
    panjang.classList.add('pointer-events-none')
    lebar.classList.add('opacity-0')
    lebar.classList.add('absolute')
    lebar.classList.add('pointer-events-none')
    alas.classList.add('opacity-0')
    alas.classList.add('absolute')
    alas.classList.add('pointer-events-none')
    tinggi.classList.add('opacity-0')
    tinggi.classList.add('absolute')
    tinggi.classList.add('pointer-events-none')
}