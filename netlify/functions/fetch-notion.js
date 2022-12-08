const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

exports.handler = async (event, context) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    // sorts: [
    //   {
    //     property: 'order',
    //     direction: 'descending',
    //   },
    // ],
  });

  const body = JSON.stringify(response);
  console.log('🚀 ~ file: fetch-notion.js:16 ~ exports.handler= ~ body', body);

  return {
    statusCode: 200,
    body,
  };
};
