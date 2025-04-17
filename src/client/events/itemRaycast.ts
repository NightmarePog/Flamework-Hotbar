// Created by Nightmarepogg
// Component for raycasting for items
import { Players, UserInputService, Workspace, RunService } from "@rbxts/services";
import Signal from "@rbxts/signal";

class DebugLaser {
	private laser: Part | undefined;

	constructor(private debug: boolean) {}

	public update(startPos: Vector3, endPos: Vector3) {
		if (this.debug) {
			if (this.laser) this.laser.Destroy();

			const distance = startPos.sub(endPos).Magnitude;
			this.laser = new Instance("Part");

			this.laser.Anchored = true;
			this.laser.CanCollide = false;
			this.laser.Size = new Vector3(0.05, 0.05, distance);
			this.laser.Color = new Color3(0, 1, 0);
			this.laser.Material = Enum.Material.Neon;
			this.laser.Transparency = 0.7;

			const centerPos = startPos.add(endPos).div(2);
			this.laser.CFrame = new CFrame(centerPos, endPos);
			this.laser.Parent = Workspace;
		}
	}

	public destroy() {
		if (this.laser) {
			this.laser.Destroy();
		}
	}
}

class InstanceHighlighter {
	private currentHighlight: Highlight | undefined;

	constructor(private debug: boolean) {}

	public highlight(instance: Instance | undefined) {
		if (this.debug) {
			if (this.currentHighlight) this.currentHighlight.Destroy();

			if (instance) {
				this.currentHighlight = new Instance("Highlight");
				this.currentHighlight.Adornee = instance;
				this.currentHighlight.FillColor = new Color3(1, 0, 0);
				this.currentHighlight.OutlineColor = new Color3(1, 1, 1);
				this.currentHighlight.Parent = instance;
			}
		}
	}

	public destroy() {
		if (this.currentHighlight) {
			this.currentHighlight.Destroy();
		}
	}
}

export class RaycastHandler {
	public instance: Instance | undefined;
	private player = Players.LocalPlayer;
	private camera = Workspace.CurrentCamera!;
	private debugLaser: DebugLaser;
	private instanceHighlighter: InstanceHighlighter;
	public onItemHit: Signal<(hitInstance: Instance) => void>;

	constructor(debug: boolean) {
		this.debugLaser = new DebugLaser(debug);
		this.instanceHighlighter = new InstanceHighlighter(debug);
		this.onItemHit = new Signal();
		this.initialize();
	}

	private initialize() {
		RunService.Heartbeat.Connect(() => {
			const mousePos = UserInputService.GetMouseLocation();
			const ray = this.camera.ViewportPointToRay(mousePos.X, mousePos.Y);

			const raycastParams = new RaycastParams();
			raycastParams.FilterDescendantsInstances = [this.player.Character!];
			raycastParams.FilterType = Enum.RaycastFilterType.Exclude;

			const raycastResult = Workspace.Raycast(ray.Origin, ray.Direction.mul(1000), raycastParams);

			if (raycastResult) {
				this.debugLaser.update(ray.Origin, raycastResult.Position);
				this.instanceHighlighter.highlight(raycastResult.Instance);
				this.instance = raycastResult.Instance;
				this.onItemHit.Fire(raycastResult.Instance);
			}
		});

		game.Destroying.Connect(() => {
			this.debugLaser.destroy();
			this.instanceHighlighter.destroy();
		});
	}

	public FireSingleRaycast(): RaycastResult | undefined {
		const mousePos = UserInputService.GetMouseLocation();
		const ray = this.camera.ViewportPointToRay(mousePos.X, mousePos.Y);

		const raycastParams = new RaycastParams();
		raycastParams.FilterDescendantsInstances = [this.player.Character!];
		raycastParams.FilterType = Enum.RaycastFilterType.Exclude;

		return Workspace.Raycast(ray.Origin, ray.Direction.mul(1000), raycastParams);
	}
}
