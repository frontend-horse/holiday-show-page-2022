const fetch = require('node-fetch');

const tiltifyAccessToken = process.env.TILTIFY_ACCESS_TOKEN;

exports.handler = async (event, context) => {
  // const userID = 467903; // TrostCodes UserId
  const campaignID = 467856; // Holiday snowtacular 2022 Campaign ID

  const campaign = await fetchTiltify(`/api/v3/campaigns/${campaignID}`);

  // TODO: Get donations through pagination
  const donations = await fetchTiltify(
    `/api/v3/campaigns/${campaignID}/donations?count=100`
  );

  const body = JSON.stringify({
    fundraiserGoalAmount: campaign.data.fundraiserGoalAmount,
    totalAmountRaised: campaign.data.totalAmountRaised,
    donations: donations.data,
  });

  return {
    statusCode: 200,
    body,
  };
};

async function fetchTiltify(param) {
  const url = (param) => `https://tiltify.com${param}`;

  return await fetch(url(param), {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tiltifyAccessToken}`,
    },
  }).then((response) => response.json());
}
