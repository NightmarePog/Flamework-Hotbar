import { Networking } from "@flamework/networking";
import { Item, Slot } from "./inventory";

interface ClientToServerEvents {}

interface ServerToClientEvents {
	update: () => undefined;
}

interface ClientToServerFunctions {
	createInventory: () => number;
	deleteInventory: () => number;
	addItem: (slotIndex: number, itemName: new () => Item) => undefined;
	removeItem: (slotIndex: number) => undefined;
	getInventoryInfo: () => ReturnType<Slot["getInfo"]>[] | undefined;
	getSlotCount: () => number;
}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
