var card1
(function() {
  'use strict';

  var elements = stripe.elements({
    fonts: [
      {
        cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
      },
    ],
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: window.__exampleLocale
  });

  card1 = elements.create('card', {
    iconStyle: 'solid',
    style: {
      base: {
        lineHeight: 4,
        iconColor: '#c4f0ff',
        color: '#fff',
        fontWeight: 500,
        fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
        fontSmoothing: 'antialiased',

        ':-webkit-autofill': {
          color: '#fce883',
        },
        '::placeholder': {
          color: '#87BBFD',
        },
      },
      invalid: {
        iconColor: '#FFC7EE',
        color: '#FFC7EE',
      },
    },
  });
  card1.mount('#example1-card');

  card1._frame._iframe.addEventListener('load', () => {
    console.log('load')
    console.log(card1._implementation._frame._iframe.style.height)
  })
  let i = true
  card1.on('ready', () => {
    console.log('ready')
    console.log(card1._implementation._frame._iframe.src)
    console.log(card1._implementation._frame._iframe.style.height)
    if (i) {
      setTimeout(() => {
        i = false
        var param = {
          style: {
            base: {
              lineHeight: '20px',
              fontSize: '14px',
            }
          }
        }
        // card1._implementation._updateFrameHeight(param)
        card1.update(param)
        console.log(card1._implementation._frame._iframe.src)
        console.log(card1._implementation._frame._iframe.style.height)
      }, 3000)
    }
  })

  registerElements([card1], 'example1');
})();

