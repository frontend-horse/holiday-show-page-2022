import { faker } from '@faker-js/faker';

let fakeDonations = [];

export function createFakeDonation() {
  return {
    id: faker.datatype.number(),
    amount: faker.datatype.number(10, 50),
    name: faker.name.fullName(),
    comment: faker.lorem.sentence(),
    createdAt: faker.helpers.arrayElement([
      faker.date.past(),
      // Date.now() - faker.random.numeric(5),
    ]),
    updatedAt: faker.helpers.arrayElement([
      faker.date.past(),
      // Date.now() - faker.random.numeric(5),
    ]),
    sustained: false,
  };
}

function createFakeCampaignData() {
  for (let index = 0; index < 10; index++) {
    fakeDonations.push(createFakeDonation());
  }
  console.log(
    '🚀 ~ file: tiltify.js:26 ~ createFakeCampaignData ~ fakeDonations',
    fakeDonations
  );

  const data = {
    donations: fakeDonations,
    fundraiserGoalAmount: 15000,
    totalAmountRaised: faker.datatype.number(15000),
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
}

export async function getCampaignData() {
  // return fetchData();
  return createFakeCampaignData();
}

async function fetchData() {
  const url = '/.netlify/functions/fetch-tiltify-donations';

  return await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}
