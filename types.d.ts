import { events } from "./public/data/events";

type Event = {
  id: string;
  name: string;
  banners?: string[];
  logo: string;
  date: string;
  description: string;
  sponsors?: unknown[];
  prizes?: string;
  venue?: string;
};
