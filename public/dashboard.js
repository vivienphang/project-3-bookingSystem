// display class cards
const displayClassCard = async () => {
  console.log('displaying dashboard.js')
  // get db.reservations via axios
  const result = await axios.get('/classes/display')
  const classCard = result.data
  const row = document.getElementById('row');

  // loop over each element and append onto body
  classCard.forEach((element, index) => {

    const mainDiv = document.createElement('div');
    mainDiv.classList.add('col', 'card', 'h-100', 'shadow-sm');

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.id = 'card-body';

    const instructorNameDiv = document.createElement('div');
    instructorNameDiv.classList.add('my-2', 'text-center');
    const instructorName = document.createElement('h1');
    instructorName.innerText = element.instructorName;
    instructorNameDiv.appendChild(instructorName);

    const classTypeDiv = document.createElement('div');
    classTypeDiv.classList.add("mb-3");
    const classType = document.createElement('h2');
    classType.classList.add('text-uppercase', 'text-center', 'class-type')
    classType.innerText = element.className;
    classTypeDiv.appendChild(classType);

    const classDescDiv = document.createElement('div');
    const classDesc = document.createElement('h2');
    classDesc.classList.add('text-uppercase', 'text-center', 'class-desc');
    classDesc.innerText = `Description:\n${element.classDescription}`;
    classDescDiv.appendChild(classDesc);
    
    const bookBtn = document.createElement('button')
    bookBtn.innerText = 'Book Now'
    bookBtn.dataset.id = element.id

    bookBtn.addEventListener('click', (event) => {
      window.location = `/getReservation/${event.target.dataset.id}`
    })

    cardBody.append(instructorNameDiv, classTypeDiv, classDescDiv, bookBtn);
    mainDiv.appendChild(cardBody);
    row.appendChild(mainDiv);
  });
}
displayClassCard()

