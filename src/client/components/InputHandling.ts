import { UserInputService } from "@rbxts/services";
import Signal from "@rbxts/signal";

export class InputHandle {
	public KeyEPressed = new Signal<() => void>();
	public LeftMouseButtonPressed = new Signal<() => void>();

	constructor() {
		this.ListenForInput();
	}

	private ListenForInput() {
		UserInputService.InputBegan.Connect((input: InputObject, gameProcessed: boolean) => {
			if (!gameProcessed) {
				if (input.UserInputType === Enum.UserInputType.Keyboard) {
					if (input.KeyCode === Enum.KeyCode.E) {
						this.KeyEPressed.Fire();
					}
				} else if (input.UserInputType === Enum.UserInputType.MouseButton1) {
					this.LeftMouseButtonPressed.Fire();
				}
			}
		});
	}
}
