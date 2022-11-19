import { faker } from "@faker-js/faker";

function createFakeDonation() {
  return {
    id: faker.datatype.number(),
    amount: faker.datatype.number(),
    name: faker.name.fullName(),
    comment: faker.lorem.sentence(),
    createdAt: faker.date.past(),
    updatedAt: faker.date.past(),
    sustained: false,
  };
}

function createFakeCampaignData() {
  let donations = [];
  for (let index = 0; index < 100; index++) {
    donations.push(createFakeDonation());
  }

  const data = {
    donations,
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
  // return fetchData() // uncomment this line to fetch real data
  return createFakeCampaignData();
}

export async function fetchData() {
  const url = "/.netlify/functions/fetch-tiltify-donations";

  return await fetch(url, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
}
