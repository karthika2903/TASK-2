
document.getElementById('dashboard-li').addEventListener('click', () => {
  document.getElementById('categories-section').style.display = 'none';
  document.getElementById('questions-section').style.display = 'none';
  document.getElementById('dashboard-section').style.display = 'block';
  document.querySelectorAll('.sidebar .menu li').forEach(item => item.classList.remove('selected'));
  document.getElementById('dashboard-li').classList.add('selected');
});

document.getElementById('categories-li').addEventListener('click', () => {
  document.getElementById('dashboard-section').style.display = 'none';
  document.getElementById('questions-section').style.display = 'none';
  document.getElementById('categories-section').style.display = 'block';
  document.querySelectorAll('.sidebar .menu li').forEach(item => item.classList.remove('selected'));
  document.getElementById('categories-li').classList.add('selected');
});

document.getElementById('questions-li').addEventListener('click', () => {
  document.getElementById('dashboard-section').style.display = 'none';
  document.getElementById('categories-section').style.display = 'none';
  document.getElementById('questions-section').style.display = 'block';
  document.querySelectorAll('.sidebar .menu li').forEach(item => item.classList.remove('selected'));
  document.getElementById('questions-li').classList.add('selected');
});

document.querySelector('.add-category-btn').addEventListener('click', function() {
  document.querySelector('.add-category-card').style.display = 'block'; 
});

document.querySelector('.add-category-card .close-card').addEventListener('click', function() {
  document.querySelector('.add-category-card').style.display = 'none'; 
});

document.querySelector('#add-question-btn').addEventListener('click', function() {
  document.querySelector('.add-question-card').style.display = 'flex'; 
});

document.querySelector('.add-question-card .close-card').addEventListener('click', function() {
  document.querySelector('.add-question-card').style.display = 'none'; 
});

const importBtn = document.getElementById('import-questions-btn'); 
const importSection = document.getElementById('import-form-section'); 
const closeCard = document.getElementById('close-card'); 

importBtn.addEventListener('click', function () {
  importSection.style.display = 'block'; 
});

closeCard.addEventListener('click', function () {
  importSection.style.display = 'none'; 
});