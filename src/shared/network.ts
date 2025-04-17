import { Networking } from "@flamework/networking";
import { Item } from "./types/items/Item";
import { ItemData } from "./types/items/Item";

interface ClientToServerEvents {}

interface ServerToClientEvents {}

interface ClientToServerFunctions {
	pickUp: (slot: number, itemID: number, instance: Instance) => boolean; // tries to pickup item, if suceess => True
	dropItem: (slot: number) => boolean; // tries to drop item, if success => True
	useItem: (slot: number) => boolean; // tries to useItem, if success => True
	getItemsInfo: () => ItemData[]; // gets information about players inventory
}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
