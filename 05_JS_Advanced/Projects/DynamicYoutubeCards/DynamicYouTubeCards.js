function addCard(
  thumbnail,
  duration,
  channelLogo,
  videoHeading,
  channelName,
  views,
  uploadTime
) {
  if (views >= 1000 && views < 999999) {
    views = (views / 1000).toFixed(1) + "k";
  } else if (views >= 999999) {
    views = Math.round(views / 1000000) + "M";
  }

  const main = document.querySelector("main");
  const newCard = document.createElement("div");
  newCard.setAttribute('class', 'card');

  newCard.innerHTML = 
   `
        <div class="card_image">

            <span class="duration_capsule">${duration}</span>

            <img src="${thumbnail}" alt="card_image">

        </div>
            
        <div class="card_lower">

            <div class="channel_logo">

                <img src="${channelLogo}" alt="card_logo">

            </div>

            <div class="card_content">

                <h5>${videoHeading}</h5>

                <p style="color: #AAAAAA;">${channelName}</p>

                <div class="card_sub_content">

                    <p>${views} views</p>
                    <p>${uploadTime}</p>

                </div>

            </div>

            <div class="card_menu">
                <img src="card_menu.svg" alt="card_menu">
            </div>
        </div>
    `;

    main.insertAdjacentElement('beforeend', newCard);
}

addCard('card_image_2.avif', '23:55', 'card_logo_2.jpg', 'TypeScript Rewritten in Go?! Microsofts shocking move!..', 'Tanay Pratap', 92, '5 minutes ago');

addCard('card_image_3.avif', '1:27:46', 'card_logo_3.jpg', 'Day 2 | Object-Oriented Programming in Java', 'LetsUpgrade', 821, 'Streamed 2 hours ago');

addCard('card_image_4.avif', '1:27:46', 'card_logo_4.jpg', 'Complete HTML & CSS Frontend Project | Full Stack Web Development Series', 'College Wallah', 1300, '3 hours ago');

addCard('card_image_4.avif', '1:27:46', 'card_logo_4.jpg', 'Complete HTML & CSS Frontend Project | Full Stack Web Development Series', 'College Wallah', 1300, '3 hours ago');

addCard('card_image_3.avif', '1:27:46', 'card_logo_3.jpg', 'Day 2 | Object-Oriented Programming in Java', 'LetsUpgrade', 821, 'Streamed 2 hours ago');

addCard('card_image_2.avif', '23:55', 'card_logo_2.jpg', 'TypeScript Rewritten in Go?! Microsofts shocking move!..', 'Tanay Pratap', 92, '5 minutes ago');

addCard('card_image_1.avif', '23:55', 'card_logo_1.jpg', 'TypeScript Rewritten in Go?! Microsofts shocking move!..', 'Tanay Pratap', 92, '5 minutes ago');

addCard('card_image_4.avif', '1:27:46', 'card_logo_4.jpg', 'Complete HTML & CSS Frontend Project | Full Stack Web Development Series', 'College Wallah', 1300, '3 hours ago');

addCard('card_image_1.avif', '23:55', 'card_logo_1.jpg', 'TypeScript Rewritten in Go?! Microsofts shocking move!..', 'Tanay Pratap', 92, '5 minutes ago');

addCard('card_image_3.avif', '1:27:46', 'card_logo_3.jpg', 'Day 2 | Object-Oriented Programming in Java', 'LetsUpgrade', 821, 'Streamed 2 hours ago');

addCard('card_image_2.avif', '23:55', 'card_logo_2.jpg', 'TypeScript Rewritten in Go?! Microsofts shocking move!..', 'Tanay Pratap', 92, '5 minutes ago');
