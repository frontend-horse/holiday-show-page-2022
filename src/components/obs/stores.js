import { readable } from 'svelte/store';
import { getCampaignData } from '../../lib/tiltify';
import { fetchNotionData } from '../../lib/notion';
import { getAllGuests } from '../../lib/prismicio';

export const campaignData = readable(
  { donations: [], fundraiserGoalAmount: 20000, totalAmountRaised: 0 },
  (set) => {
    function fetchDonations() {
      getCampaignData().then((data) => {
        set(data);
      });
    }

    fetchDonations();

    const interval = setInterval(fetchDonations, 10000);

    return function stop() {
      clearInterval(interval);
    };
  }
);

export const currentGuest = readable(
  { name: 'Loading...', avatar: '' },
  (set) => {
    let allGuests;
    getAllGuests()
      .then((data) => {
        return data.map((guest) => {
          return {
            name: guest.data.name,
            avatar: guest.data.avatar.url,
          };
        });
      })
      .then((data) => {
        allGuests = data;
      });

    function getCurrentGuest() {
      if (!allGuests) {
        return setTimeout(getCurrentGuest, 1000);
      }

      fetchNotionData().then((data) => {
        const currentGuestName = data?.find(
          (guest) => guest.complete === false
        )?.name;

        // find the guest in the list of all guests that matches the current guest name
        const currentGuest = allGuests.find(
          (guest) => guest.name === currentGuestName
        );

        set(currentGuest);
      });
    }

    getCurrentGuest();

    const interval = setInterval(getCurrentGuest, 15000);

    return function stop() {
      clearInterval(interval);
    };
  }
);
