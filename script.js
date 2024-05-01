const xhr = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/users'; // Ganti dengan URL JSON yang sesuai

xhr.open('GET', url, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        displayData(data);
    }
};
xhr.send();

// Fungsi untuk menampilkan data dalam elemen HTML
function displayData(data) {
    const dataList = document.getElementById('data-list');
    data.forEach(function (item) {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.id} ${item.name} ${item.username} ${item.email} ${item.address.street} ${item.address.suite} ${item.address.city} ${item.company.name}`;
        dataList.appendChild(listItem);
    });
}