const btnAdd = document.querySelector('#btnAdd'); // Menangkap elemen HTML dengan ID 'btnAdd' dan menyimpannya ke dalam variabel 'btnAdd'

function addContact() { // Mendefinisikan fungsi bernama 'addContact' yang akan dijalankan saat tombol diklik
    if (menu.classList.contains('hidden')) { // Mengecek apakah elemen 'menu' saat ini memiliki class 'hidden'
        menu.classList.remove('hidden'); // Jika punya (sedang tersembunyi), hapus class 'hidden' agar menu muncul
    } else { // Jika tidak punya class 'hidden' (berarti sedang muncul)
        menu.classList.add('hidden'); // Tambahkan kembali class 'hidden' agar menu tersembunyi
    }
}

btnAdd.addEventListener('click', addContact); // Memberikan perintah kepada 'btnAdd' agar menjalankan fungsi 'addContact' saat diklik
