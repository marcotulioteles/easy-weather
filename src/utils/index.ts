export const convertKelvinToCelsius = (temperature: number) => {
  const CELSIUS = temperature - 273.15;

  return CELSIUS.toFixed(0);
}

export const convertKelvinToFahrenheit = (temperature: number) => {
  const CELSIUS = temperature - 273.15;

  const FAHRENHEIT = CELSIUS * 1.8 + 32;

  return FAHRENHEIT.toFixed(1);
}

export const hourFormatted = (date: number) => {
  const regex = /\d+:\d{2}\s[a-zA-z]{2}/;

  const dateFormatted = new Intl.DateTimeFormat('en-US', {
    dateStyle: "full",
    timeStyle: "short"
  }).format(date * 1000);

  const hourExtracted = dateFormatted.match(regex) as Array<string>;
  const hourSliced = hourExtracted[0].split(/\s/);
  const hourInNumber = Number(hourSliced[0].match(/^\d+/));
  let hourToShow = 0;

  if (hourSliced[1] === 'PM' && hourInNumber < 12) {
    hourToShow = hourInNumber + 12;
  } else {
    hourToShow = hourInNumber;
  }

  if ((hourSliced[1] === 'AM' && hourInNumber === 12)) {
    hourToShow = 0;
  }

  return hourToShow < 10 ? `0${hourToShow}:00` : `${hourToShow}:00`;
};

export const generateDateNow = () => {
  const regex = /\d+:\d+\s[a-zA-z]+/;
  const date = Date.now();

  const dateFormatted = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'short'
  }).format(date);

  const response = dateFormatted.match(regex) as Array<string>;

  return response[0].toLowerCase();
};