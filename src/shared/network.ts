import { Networking } from "@flamework/networking";
import { Slot } from "./inventory";
import { Item } from "shared/itemClass";

interface ClientToServerEvents {}

interface ServerToClientEvents {
	update: () => undefined;
}

interface ClientToServerFunctions {
	createInventory: () => number;
	deleteInventory: () => number;
	addItem: (slotIndex: number, Instance: Instance) => undefined;
	removeItem: (slotIndex: number) => undefined;
	getInventoryInfo: () => ReturnType<Slot["getInfo"]>[] | undefined;
	getSlotCount: () => number;
	useItem: (slotIndex: number) => undefined;
}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
