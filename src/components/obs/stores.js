import { readable } from 'svelte/store';
import { getCampaignData, createFakeDonation } from '../../lib/tiltify';

export const campaignData = readable(
  { donations: [], fundraiserGoalAmount: 20000, totalAmountRaised: 0 },
  (set) => {
    let fakedDonations = [];

    function fetchDonations() {
      fakedDonations.push(createFakeDonation());

      getCampaignData().then((data) => {
        set(data);
      });
    }

    fetchDonations();

    const interval = setInterval(fetchDonations, 5000);

    return function stop() {
      clearInterval(interval);
    };
  }
);
