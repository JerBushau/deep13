import { readable, type Readable } from 'svelte/store';

interface MstData {
  eps: Episode[];
  wit: Episode;
  gatheredOn: string;
}

interface Episode {
  season: string;
  description: string;
  epNumber: string;
  title: string;
  link: string;
}

function fetchMstData() {
  const { subscribe } = readable({} as MstData, (set) => {
    let unsubscribe = () => {};

    async function init() {
      const url = 'https://raw.githubusercontent.com/JerBushau/gizmo/main/mst-info.json';
      const response = await fetch(url);
      const data = await response.json();
      set(data);
    }
    
    init();

    return unsubscribe;
  });

  return { subscribe };
}

export const mstData = fetchMstData();
