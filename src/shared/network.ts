import { Networking } from "@flamework/networking";
import { Slot } from "./inventory";

interface ClientToServerEvents {}

interface ServerToClientEvents {
	update: () => undefined;
}

interface ClientToServerFunctions {
	createInventory: () => number;
	deleteInventory: () => number;
	addItem: (id: number) => undefined;
	removeItem: (id: number) => undefined;
	getInventoryInfo: () => ReturnType<Slot["getInfo"]>[];
}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
