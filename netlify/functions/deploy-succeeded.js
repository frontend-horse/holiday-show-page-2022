const fetch = require('node-fetch');

const sitemapUrl = new URL(
  '/sitemap-index.html',
  process.env.URL || 'https://fundraiser.horse'
).toString();

exports.handler = async (event) => {
  try {
    const {payload} = JSON.parse(event.body);
    const {state, context} = payload;

    if (state === 'ready' && context === 'production') {
      console.log(`Sending sitemap ping to Google for ${sitemapUrl}`);
      const pingUrl = `https://www.google.com/ping?sitemap=${sitemapUrl}`;
      await fetch(pingUrl);
      return {statusCode: 200, body: 'Submitted successfully'};
    } else {
      console.log('Conditions not met. Not submitting.');
      return {statusCode: 200, body: 'Conditions not met. Not submitting.'};
	}
  } catch (err) {
    console.err(err);
    throw err;
  }
};