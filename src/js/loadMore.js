/**
 * Load more -- View archive
 */
import listArchive from './item';

const archiveBtn = document.querySelector('.archive-btn');
const archiveList = document.querySelector('.archive-list');

// Додати обробник подій для кнопки
archiveBtn.addEventListener('click', function () {
    // Якщо список вже відкритий, закрити його
    if (archiveList.style.display === 'block') {
        archiveList.style.display = 'none';
        archiveList.innerHTML = ''; // Видалити попередні елементи списку
        archiveBtn.innerHTML = "View archive" + `<svg width="30" height="30" style="fill: #575445; margin-left: 10px;">
        <use href="./images/icons.svg#icon-arrow-btn"></use>
    </svg>`;
    } else {
        // Якщо список закритий, відкрити його та додати новий елемент
        archiveList.style.display = 'block';
        const newListItem = document.createElement('li');
        newListItem.innerHTML = listArchive;
        archiveList.appendChild(newListItem);
        archiveBtn.textContent = "Close archive";
    }
});