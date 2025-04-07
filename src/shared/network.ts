import { Networking } from "@flamework/networking";

interface ClientToServerEvents {}

interface ServerToClientEvents {}

interface ClientToServerFunctions {
	createInventory: () => number;
	deleteInventory: () => number;
	requestSlotData: () => [];
	requestInventoryData: () => [];
}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
