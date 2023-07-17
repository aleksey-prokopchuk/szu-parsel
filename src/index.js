// $(function () {
//     $('.nav__item').on('click', function (e) {
//         e.preventDefault();

//         $('.nav__item').removeClass('nav__item--active');
//         $(this).addClass('nav__item nav__item--active');
//     })

//     // nav__item nav__item--active
// });

// const a = document.querySelectorAll('.subtitle');
// console.log(a.length);

// Список кодексів
const codes = [
    {
        title: 'Кримінальний кодекс України',
        date: "Текст зі змінами та доповненнями станом на 28 грудня 2022 року",
        pages_q: 360,
        information: "",
        price: 300.00,
        url: 'http://libcenter.com/images/anons.jpg'
    },
    {
        title: "Кримінальний процесуальний кодекс України",
        date: "Текст зі змінами та доповненнями станом на 1 лютого 2023 року",
        pages_q: 503,
        information: "",
        price: "300.00",
        url: "./images/codes/book/"

    },
    {
        title: "Кодекс України про адміністративні правопорушення",
        date: "Текст зі змінами та доповненнями станом на 1 січня 2023 року",
        pages_q: 497,
        information: "",
        price: "300.00",
        url: "./images/codes/book/"

    },
    {
        title: "Кодекс законів про працю України",
        date: "Текст зі змінами та доповненнями станом на 1 січня 2023 року",
        pages_q: 170,
        information: "",
        price: "300.00",
        url: "./images/codes/book/"

    },
    {
        title: "Земельний кодекс України",
        date: "Текст зі змінами та доповненнями станом на 1 січня 2023 року",
        pages_q: 234,
        information: "",
        price: "300.00",
        url: "./images/codes/book/"

    },
    {
        title: "Митний кодекс України",
        date: "Текст зі змінами та доповненнями станом на 1 квітня 2023 року",
        pages_q: 561,
        information: "",
        price: "300.00",
        url: "./images/codes/book/"

    },
    {
        // title: "Водний кодекс України. Лiсовий кодекс України. Кодекс України про надра",
        title: "Кодекс водний, лiсовий, про надра",
        date: "Текст зі змінами та доповненнями станом на 5 липня 2023 року",
        pages_q: 263,
        information: "",
        price: "300.00",
        url: "./images/codes/book/"

    }
];

const imageGallery = document.querySelector('.codes-list');
console.log(imageGallery);
const imgEll = codes
  .map(codes => {
    return `<li class="codes-list__item">
        <a class="codes-list__link link-no-decor" href="">
          <img
            class="codes-list__img-thumbs img-thumbs"
            src='${codes.url}'
            alt='${codes.title}';
          />
          <h3 class="codes-list__name">${codes.title}</h3>
          <p class="codes-list__part"></p>
        </a>
        <div class="codes-list__order">
          <p class="codes-list__prise">${codes.price} грн.</p>
          <button class="codes-list__button btn" type="button">Замовити</button>
        </div>
      </li>`;
  })
  .join(' ');
imageGallery.insertAdjacentHTML('beforeend', `${imgEll}`);

console.log(codes[0].url)